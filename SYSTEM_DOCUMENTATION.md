# StrangeWorks Open Lab & Research Telemetry Hub
## System Architecture, Deployment & Feature Documentation

> **Maintainer & Owner:** Rajesh Karra (`r-karra`)  
> **Last Updated:** October 2026  
> **Live Production URL:** [https://rajeshkarra.vercel.app](https://rajeshkarra.vercel.app)  
> **Flagship Vision Platform:** [https://strangeworks-six.vercel.app](https://strangeworks-six.vercel.app)  
> **Source Repository:** [https://github.com/r-karra/rajeshkarra](https://github.com/r-karra/rajeshkarra)  

---

## 1. Executive Overview

This application serves as the interactive research hub, open telemetry portal, and academic portfolio for **Rajesh Karra**. It unites high-performance computational research (JAX/Flax, Google DeepMind architectures, TPU Pod scaling) with the flagship **StrangeWorks "Save Earth & Humanity Vision"** open science initiative.

The web application is built on Next.js 14, styled with the StrangeWorks editorial design system, backed by **Neon Serverless Postgres 18**, and secured with an **Admin-Only In-Place Content Management System**.

---

## 2. Live Deployments & Endpoints Directory

| Resource | Service / Provider | Direct Link / URL |
| :--- | :--- | :--- |
| **Production Web App** | Vercel (Auto-deployed from `main`) | [https://rajeshkarra.vercel.app](https://rajeshkarra.vercel.app) |
| **GitHub Repository** | GitHub (`r-karra/rajeshkarra`) | [https://github.com/r-karra/rajeshkarra](https://github.com/r-karra/rajeshkarra) |
| **StrangeWorks Platform** | Vercel | [https://strangeworks-six.vercel.app](https://strangeworks-six.vercel.app) |
| **Public Source Document** | Google Docs (Public Editable Source) | [Google Docs Document](https://docs.google.com/document/d/1RSezpbxa5_VNKxc4tARunh34F83lU8si50qgosN0fbk/edit?usp=sharing) |
| **Neon Cloud Console** | Neon Cloud | [Neon Console Project](https://console.neon.tech/app/org-jolly-brook-66714840/projects/crimson-cloud-61024070) |
| **Neon System Health API** | Live Next.js API | [/api/neon/status](https://rajeshkarra.vercel.app/api/neon/status) |
| **Neon DB Health Route** | Live Next.js API | [/api/test-db](https://rajeshkarra.vercel.app/api/test-db) |
| **Portfolio Items API** | Live Next.js API (CRUD) | [/api/items](https://rajeshkarra.vercel.app/api/items) |
| **Neon Serverless Function** | Neon AWS Lambda/Compute | `https://br-still-star-b5z657pf-hello.compute.c-7.us-east-2.aws.neon.tech/` |
| **Neon Auth JWKS** | Neon Identity Provider | `https://ep-little-shadow-b5ivuuus.neonauth.c-7.us-east-2.aws.neon.tech/neondb/auth/.well-known/jwks.json` |

---

## 3. Neon Cloud Database & Services Configuration

The infrastructure is provisioned through Neon's declarative specification in [`neon.ts`](file:///neon.ts) and deployed to branch `production`.

### 3.1 Organization & Project IDs
* **Organization ID:** `org-jolly-brook-66714840`
* **Project ID:** `crimson-cloud-61024070`
* **Default Branch:** `production` (Branch ID: `br-still-star-b5z657pf`)
* **Region:** AWS `us-east-2` (Ohio)

### 3.2 Services Architecture
1. **Serverless Postgres (`PostgreSQL 18.6`)**:
   - Connection pooler: `ep-little-shadow-b5ivuuus-pooler.c-7.us-east-2.aws.neon.tech` (port 5432)
   - Unpooled / direct connection: `ep-little-shadow-b5ivuuus.c-7.us-east-2.aws.neon.tech`
   - Client driver: `@neondatabase/serverless` with connection caching.
   - Primary table: `portfolio_items` (Stores custom items, bio updates, projects, research pillars, and metadata).
2. **Neon Auth**:
   - Base URL: `https://ep-little-shadow-b5ivuuus.neonauth.c-7.us-east-2.aws.neon.tech/neondb/auth`
   - JWKS URL: `https://ep-little-shadow-b5ivuuus.neonauth.c-7.us-east-2.aws.neon.tech/neondb/auth/.well-known/jwks.json`
3. **Neon Functions**:
   - Function: `hello.ts` (`Hello World`)
   - Endpoint: `https://br-still-star-b5z657pf-hello.compute.c-7.us-east-2.aws.neon.tech/`
4. **Neon Object Storage**:
   - S3-compatible storage endpoint: `https://br-still-star-b5z657pf.storage.c-7.us-east-2.aws.neon.tech`
   - Bucket: `assets` (private access)
5. **Neon Realtime Preview**:
   - WebSocket URL: `wss://ep-little-shadow-b5ivuuus.rt.c-7.us-east-2.aws.neon.tech/`

---

## 4. Key Enhancements & Feature Changes

### 4.1 Menu Bar Redesign (3-Horizontal-Lines Dropdown)
* **Problem Solved:** The previous navigation bar rendered 8 horizontal navigation buttons across the top, which caused text wrapping, overflow, and layout collision on standard and smaller screens.
* **Enhancement:** Replaced with an editorial, compact **3-horizontal-lines (`Menu`) Dropdown Button**.
* **Features:**
  - Displays all 8 core domains (`Overview`, `Save Earth Vision`, `Projects & Repos`, `JAX & DeepMind`, `Syllabi & Pathways`, `Video Lectures`, `Docs Hub`, `Phonetics Lab`).
  - Highlights the active section with domain badges (`Flagship Vision`, `Active & Deployed`, `420+ References`, `Inline Player`).
  - Outside-click dismiss and keyboard accessible.

### 4.2 Strangeworks Editorial Typography & Light Mode
* **Aesthetic Overhaul:** Adopted the visual styling of [Strange Works](https://strangeworks-six.vercel.app/):
  * **Headlines & Mastheads:** `Playfair Display` (editorial serif)
  * **Section Titles & Badges:** `Space Grotesk` (clean display)
  * **Body Copy:** `Inter`
  * **Technical Telemetry & Code:** `JetBrains Mono`
* **Palette:** Pure alabaster white, crisp zinc borders (`border-zinc-200`), emerald accents for ecological preservation, and deep charcoal/black text.

### 4.3 Admin-Only Interactive Content Management
* **Strict Role-Based Access Control (RBAC):**
  * **Public Visitors:** See the website in clean, unencumbered **Read-Only Mode** (`Public View (Read-Only)`). Public users have no pencil edit icons or add buttons.
  * **Admin (Rajesh Karra):** Can click the **"Admin Access"** button in the navbar or top editorial bar to open the **Admin Authorization Modal**.
  * **Passkey Protection:** Entering the admin key (`ADMIN_SECRET_KEY`) verifies credentials with `/api/admin/auth` and unlocks **Edit Mode**.
* **Server-Side API Security:**
  * `POST /api/items` inspects the incoming `x-admin-key` header.
  * Unauthorized requests are immediately rejected with `401 Unauthorized`, guaranteeing the database cannot be altered by anonymous visitors.
* **Full In-Place Interactivity:**
  * When Edit Mode is active, pencil icons appear across:
    - **Hero Profile:** Name, bio, title, research goals, contact details.
    - **Save Earth Vision:** 6 planetary telemetry pillars and custom focus areas.
    - **Projects & Repositories:** Project titles, descriptions, tags, repository URLs.
  * Adding new items automatically synchronizes with the `portfolio_items` table in Neon Postgres.

### 4.4 Comprehensive Content Import from Public Editable Source
* **Google Docs Integration:** Imported and organized all technical documents, links, and lecture catalogs from the public editable master document.
* **Documentation Hub (400+ References):** Structured repository covering JAX, Flax, XLA, TPUs, Gemma, AlphaFold 3, Gemini, Quantum Computing, Lean 4 theorem proving, and scientific literature.
* **Video Lecture Matrix (49+ Lectures):** Direct inline YouTube player modal allowing visitors to watch MIT, Stanford, DeepMind, and physics lectures without leaving the site.
* **Phonetics & Fluency Lab:** American connected speech reductions, flap T patterns, and intonation guides.

---

## 5. Security & Verification Suite

### 5.1 Verification Tests Run
1. **TypeScript & Production Build (`npx next build`):**
   ```bash
   ✓ Compiled successfully
   ✓ Linting and checking validity of types ...
   ✓ Generating static pages (7/7)
   ✓ Collecting build traces ...
   ```
2. **Neon Database Latency & Query Test:**
   - Query: `SELECT NOW(), version()`
   - Database Engine: `PostgreSQL 18.6 (fd34222) on aarch64-unknown-linux-gnu`
   - Connection Latency: `~1400ms` (serverless cold start), `<60ms` warm.
3. **End-to-End Server Verification (`next start -p 3005`):**
   - `GET /` -> `200 OK`
   - `GET /api/neon/status` -> `200 OK` (all 5 services healthy)
   - `GET /api/items` -> `200 OK`
   - `POST /api/items` (without key) -> `401 Unauthorized` (Security verified)
   - `POST /api/items` (with admin key) -> `200 OK` (Database upsert verified)

---

## 6. How to Run Locally & Maintain

### 6.1 Prerequisites
* Node.js >= `20.19.0` (Recommended: Node `v22.14.0+`)
* Git

### 6.2 Setup & Execution
```powershell
# Clone the repository
git clone https://github.com/r-karra/rajeshkarra.git
cd rajeshkarra

# Install dependencies
npm install

# Run development server
npm run dev

# Or build and run production server
npm run build
npm start
```

### 6.3 Deploying Updates to Neon
```powershell
# Re-deploy declarative neon configuration
npx neon@latest deploy
```

### 6.4 Deploying Updates to Vercel
Pushing any commit to `main` automatically triggers a zero-downtime deployment via the linked Vercel GitHub integration:
```powershell
git add .
git commit -m "feat: description of changes"
git push origin main
```
