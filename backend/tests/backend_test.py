"""QuickBuck backend API tests."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://instant-earnings-hub-1.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture(scope="session")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_root(self, client):
        r = client.get(f"{API}/", timeout=20)
        assert r.status_code == 200
        data = r.json()
        assert "message" in data


# ---------- Waitlist ----------
class TestWaitlist:
    def test_create_waitlist_valid(self, client):
        email = f"test_{uuid.uuid4().hex[:8]}@example.com"
        r = client.post(f"{API}/waitlist", json={"email": email, "role": "teen", "source": "homepage"}, timeout=20)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["email"] == email
        assert data["role"] == "teen"
        assert data["source"] == "homepage"
        assert "id" in data and isinstance(data["id"], str)
        assert "created_at" in data

    def test_create_waitlist_idempotent(self, client):
        email = f"dup_{uuid.uuid4().hex[:8]}@example.com"
        r1 = client.post(f"{API}/waitlist", json={"email": email}, timeout=20)
        assert r1.status_code == 200
        id1 = r1.json()["id"]
        r2 = client.post(f"{API}/waitlist", json={"email": email}, timeout=20)
        assert r2.status_code == 200, r2.text
        assert r2.json()["id"] == id1  # idempotent - same entry

    def test_create_waitlist_invalid_email(self, client):
        r = client.post(f"{API}/waitlist", json={"email": "not-an-email"}, timeout=20)
        assert 400 <= r.status_code < 500

    def test_waitlist_count(self, client):
        r = client.get(f"{API}/waitlist/count", timeout=20)
        assert r.status_code == 200
        data = r.json()
        assert "count" in data
        assert "display" in data
        assert data["display"] >= 2847
        assert isinstance(data["count"], int)


# ---------- Contact ----------
class TestContact:
    def test_contact_valid(self, client):
        payload = {
            "name": "TEST_User",
            "email": f"contact_{uuid.uuid4().hex[:8]}@example.com",
            "subject": "Hello",
            "message": "This is a valid test message"
        }
        r = client.post(f"{API}/contact", json=payload, timeout=20)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["subject"] == payload["subject"]
        assert data["message"] == payload["message"]
        assert "id" in data
        assert "created_at" in data

    def test_contact_short_message(self, client):
        payload = {
            "name": "TEST_User",
            "email": f"short_{uuid.uuid4().hex[:8]}@example.com",
            "subject": "Hi",
            "message": "hi"
        }
        r = client.post(f"{API}/contact", json=payload, timeout=20)
        assert r.status_code == 400

    def test_contact_invalid_email(self, client):
        payload = {
            "name": "TEST_User",
            "email": "bad-email",
            "subject": "Hi",
            "message": "Valid length message"
        }
        r = client.post(f"{API}/contact", json=payload, timeout=20)
        assert 400 <= r.status_code < 500
