from fastapi import FastAPI, APIRouter, HTTPException, Header
from fastapi.responses import PlainTextResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import csv
import io
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="QuickBuck API")
api_router = APIRouter(prefix="/api")


# ============ Models ============
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class WaitlistCreate(BaseModel):
    email: EmailStr
    role: Optional[str] = "earner"  # "earner" or "poster"
    source: Optional[str] = "homepage"


class WaitlistEntry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    role: str = "earner"
    source: str = "homepage"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    subject: Optional[str] = "General inquiry"
    message: str


class ContactEntry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


# ============ Routes ============
@api_router.get("/")
async def root():
    return {"message": "QuickBuck API online"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get('timestamp'), str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


# Waitlist
@api_router.post("/waitlist", response_model=WaitlistEntry)
async def join_waitlist(payload: WaitlistCreate):
    email = payload.email.lower().strip()
    existing = await db.waitlist.find_one({"email": email}, {"_id": 0})
    if existing:
        return WaitlistEntry(**existing)
    entry = WaitlistEntry(
        email=email,
        role=payload.role or "earner",
        source=payload.source or "homepage",
    )
    await db.waitlist.insert_one(entry.model_dump())
    return entry


@api_router.get("/waitlist/count")
async def waitlist_count():
    count = await db.waitlist.count_documents({})
    return {"count": count}


# Contact
@api_router.post("/contact", response_model=ContactEntry)
async def submit_contact(payload: ContactCreate):
    if not payload.message or len(payload.message.strip()) < 5:
        raise HTTPException(status_code=400, detail="Message too short")
    entry = ContactEntry(
        name=payload.name.strip(),
        email=payload.email.lower().strip(),
        subject=payload.subject or "General inquiry",
        message=payload.message.strip(),
    )
    await db.contacts.insert_one(entry.model_dump())
    return entry


# ============ Admin (password-gated) ============
def _check_admin(password: Optional[str]) -> None:
    expected = os.environ.get("ADMIN_PASSWORD")
    if not expected:
        raise HTTPException(status_code=503, detail="Admin password not configured")
    if not password or password != expected:
        raise HTTPException(status_code=401, detail="Invalid admin password")


@api_router.get("/admin/stats")
async def admin_stats(password: Optional[str] = None, x_admin_password: Optional[str] = Header(default=None)):
    _check_admin(password or x_admin_password)
    waitlist_count = await db.waitlist.count_documents({})
    contacts_count = await db.contacts.count_documents({})
    return {"waitlist": waitlist_count, "contacts": contacts_count}


@api_router.get("/admin/data")
async def admin_data(
    collection: str,
    password: Optional[str] = None,
    x_admin_password: Optional[str] = Header(default=None),
    limit: int = 5000,
):
    _check_admin(password or x_admin_password)
    if collection not in {"waitlist", "contacts"}:
        raise HTTPException(status_code=400, detail="collection must be 'waitlist' or 'contacts'")
    rows = await db[collection].find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    return {"collection": collection, "count": len(rows), "rows": rows}


@api_router.get("/admin/export.csv", response_class=PlainTextResponse)
async def admin_export_csv(
    collection: str,
    password: Optional[str] = None,
    x_admin_password: Optional[str] = Header(default=None),
):
    _check_admin(password or x_admin_password)
    if collection not in {"waitlist", "contacts"}:
        raise HTTPException(status_code=400, detail="collection must be 'waitlist' or 'contacts'")
    rows = await db[collection].find({}, {"_id": 0}).sort("created_at", -1).to_list(50000)

    if collection == "waitlist":
        fieldnames = ["created_at", "email", "role", "source", "id"]
    else:
        fieldnames = ["created_at", "name", "email", "subject", "message", "id"]

    buf = io.StringIO()
    writer = csv.DictWriter(buf, fieldnames=fieldnames, extrasaction="ignore")
    writer.writeheader()
    for r in rows:
        writer.writerow(r)
    return PlainTextResponse(
        content=buf.getvalue(),
        media_type="text/csv",
        headers={"Content-Disposition": f'attachment; filename="quickbuck-{collection}.csv"'},
    )


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
