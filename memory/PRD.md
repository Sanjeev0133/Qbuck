# QuickBuck — Marketing Website PRD

## Original problem statement
> "i want a a website for our startup called quickbuck our startup basically is a company which creates an app (a platform) where teens can accept menial tasks for instant cash like a platform for small gigs basically i need to be fluidy and stylish modern simplistic to apples webpage and i want the colour scheme to be olive green , black , a dusky sand"

## User decisions
- Scope: Full multi-page site (Home, How It Works, For Teens, For Posters, About, Contact)
- CTA: Waitlist email signup + App Store / Google Play "coming soon" badges
- Visual direction: Premium & cinematic — full-bleed imagery, parallax, Apple-like fluidity
- Logo: Uploaded wordmark (black + olive green color blocking)
- Backend: Waitlist + contact persisted to MongoDB

## Architecture
- Backend: FastAPI (`/app/backend/server.py`) with 3 domain endpoints:
  - `POST /api/waitlist` (idempotent by email)
  - `GET /api/waitlist/count` (seed display = count + 2847)
  - `POST /api/contact`
- Frontend: React + Tailwind + Framer Motion + Lenis smooth scroll
- Fonts: Bricolage Grotesque (display), Manrope (body), JetBrains Mono (mono)
- Palette: Olive #4B5320, Black #0A0A0A, Dusky Sand #F2EFE9/#E5DFD3

## Pages built (2026-05-01)
- `/` Hero + value props + how-it-works + categories bento + trust + testimonials + final CTA
- `/how-it-works` 5-step flow + FAQ
- `/for-teens` stats, earning examples, split feature
- `/for-posters` match flow, value grid, common tasks
- `/about` mission, values, team
- `/contact` contact form + info

## Core components
- `Navbar` (glass nav, mobile menu), `Footer` (massive wordmark), `Wordmark`
- `WaitlistForm` (reusable, light/dark variants, toast feedback)
- `AppStoreBadges`, `FadeIn` / `Stagger` motion primitives
- `SmoothScroll` (Lenis provider), `Layout` (Outlet + Toaster)

## User personas
- Teen earner (13–19)
- Task poster (adult in neighborhood)
- Parent/guardian (trust/safety lens)

## Status
- All 6 pages implemented & routed
- Backend endpoints live, validated via curl + pytest
- Testing agent: 100% pass (backend + frontend)

## Backlog / Next phase
- P1: Real logo SVG in place of wordmark (ingest from uploaded PDF)
- P1: Seed email via Resend/SendGrid on waitlist signup (integration)
- P1: Admin endpoint to view waitlist (CSV export)
- P2: Blog / press section
- P2: Parent-specific landing page
- P2: Spanish locale
- P2: Rate limiting on public POST endpoints

## 2026-05-01 — India localization
- Wordmark updated: "quickbuck" → "QuickBuck" (Navbar + Footer)
- Currency: all $ → ₹ across HomePage, ForTeensPage (categories, earning examples, live stat ₹420, weekend total ₹1,540, Aanya's weekend ₹1,200)
- Distance: miles → km (3 km radius, 0.5–3 km range)
- Payments: "Stripe" → "UPI & Razorpay"
- HQ: Austin → Bengaluru; Mumbai & Delhi NCR teams
- Competitor reference: TaskRabbit → Urban Company
- Task examples: added Set up Jio router, Xerox & courier, Rangoli for Diwali
- Testimonials: Maya → Aanya, Daniel → Rohan
- Furniture/Wi-Fi: couch → sofa, Wi-Fi router → Jio router
- Launch wording: Spring 2026 → early 2026
