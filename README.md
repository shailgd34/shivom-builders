# Shivom Builder — Premium Cinematic Website

A modern, cinematic, high-performance website for **Shivom Builders & Developers** (Indore, Madhya Pradesh), built with **Next.js 14 App Router, TypeScript, Tailwind CSS, and Framer Motion**.

Replacing the legacy WordPress website with an award-winning architectural digital experience.

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
cd "E:\Portfolio\Shivom Builders"
npm run dev
```
The website will start at: **http://localhost:3005/**

### 2. Build for Production
```bash
npm run build
npm run start
```

---

## 🎨 Architectural Design System & Brand Palette

- **Main Canvas:** Warm Off-White (`#F7F6F2` / `bg-brand-bg`)
- **Secondary Surfaces:** Soft Stone (`#EEECE6` / `bg-brand-surface`)
- **Primary Typography:** Charcoal (`#20272E` / `text-brand-charcoal`)
- **Secondary Narrative:** Muted Stone Grey (`#777A78` / `text-brand-muted`)
- **Architectural Accent:** Warm Terracotta / Burnt Orange (`#C85A32` / `brand-accent`)
- **Dark Showcase Canvas:** Deep Charcoal (`#1A2026` / `bg-brand-dark`)
- **Ratio:** 80% warm light aesthetic, 20% strategic dark contrast.

### Typography
- **Headings & Accents:** `Sora` & `Manrope` (via Google Fonts)
- **Body & Editorial:** `Manrope`

---

## 📁 Project Architecture (Frontend-Only)

```
E:\Portfolio\Shivom Builders\
├── public\
│   └── images\
│       ├── logo.png
│       ├── hero\             # High-res architectural photography
│       ├── projects\         # Real on-site completed project photos in Indore
│       └── partners\         # Certified Tier-1 brand partner logos
├── src\
│   ├── app\
│   │   ├── layout.tsx        # Root layout, Google Fonts, JSON-LD Schema
│   │   ├── page.tsx          # 10-section cinematic homepage
│   │   ├── about\            # About Us & 14-year legacy
│   │   ├── services\         # 4 deep-dive engineering disciplines
│   │   ├── projects\         # Filterable architectural portfolio
│   │   │   └── [slug]\       # Dynamic project detail page (driven by JSON)
│   │   ├── process\          # The 4-step milestone engineering journey
│   │   ├── testimonials\     # Verified Indore homeowner reviews
│   │   ├── contact\          # Studio contact, Suman Nagar map & WhatsApp enquiry
│   │   ├── sitemap.ts        # Dynamic XML sitemap
│   │   └── robots.ts         # SEO crawlers configuration
│   ├── components\           # Reusable UI & Motion components
│   ├── data\
│   │   ├── company.json      # Address, phones, stats, values, partners
│   │   ├── navigation.json   # Navigation links and sitemap
│   │   ├── projects.json     # All projects with specs, gallery, highlights
│   │   ├── services.json     # Service descriptions and deliverables
│   │   └── testimonials.json # Real client reviews
│   └── types\                # Strict TypeScript interfaces
```

---

## 🛠 Adding a New Project (Frontend-Only CMS)

Adding a new project requires only **two simple steps**:

1. Place high-resolution project photos under `public/images/projects/your-project-01.jpg`.
2. Add a new object entry to `src/data/projects.json`:
```json
{
  "id": "new-project-slug",
  "slug": "new-project-slug",
  "title": "Project Name",
  "tagline": "Short architectural description",
  "category": "Residential Architecture",
  "categoryLabel": "Luxury Villa",
  "location": "Bypass Corridor, Indore",
  "builtUpArea": "3,500 sq.ft",
  "plotSize": "40 × 60 ft",
  "year": "2025",
  "status": "Delivered",
  "featured": true,
  "heroImage": "/images/projects/your-project-01.jpg",
  "gallery": [
    "/images/projects/your-project-01.jpg",
    "/images/projects/your-project-02.jpg"
  ],
  "excerpt": "Brief summary",
  "overview": "Detailed overview...",
  "architectureStory": "Civil & structural story...",
  "specifications": [
    { "label": "Structure", "value": "Earthquake-resistant RCC" }
  ],
  "highlights": [
    "Key highlight 1",
    "Key highlight 2"
  ],
  "relatedSlugs": ["grand-aranya-luxury-villa"]
}
```
The project will **automatically** appear in the `/projects` portfolio with filtering and will dynamically render its own dedicated page at `/projects/new-project-slug` with static pre-rendering and SEO metadata!

---

## 🌐 Vercel Deployment & Hostinger Domain Connection

The domain `shivombuilder.com` is registered with Hostinger.

### Steps to Deploy to Vercel:
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Shivom Builder Next.js platform"
   git remote add origin https://github.com/your-username/shivom-builder.git
   git push -u origin main
   ```
2. Import the repository in [vercel.com](https://vercel.com).
3. Set the build command: `npm run build` and output directory: `.next`.
4. Under **Project Settings > Domains**, enter `shivombuilder.com`.
5. In **Hostinger DNS Zone Editor**:
   - Point the **A record** (`@`) to Vercel's IP: `76.76.21.21`
   - Point the **CNAME record** (`www`) to `cname.vercel-dns.com`
6. Wait 5–15 minutes for SSL certificates to provision. The new Next.js site will be live!

---

## 🔍 SEO & Migration Safeguards

- **301 Redirects:** Configured in `next.config.mjs` for existing WordPress URLs:
  - `/about/` → `/about`
  - `/services/` → `/services`
  - `/projects/` → `/projects`
  - `/contact-us/` → `/contact`
- **JSON-LD Structured Data:** Full schema markup for `GeneralContractor` and `HomeAndConstructionBusiness` located in `src/app/layout.tsx`.
- **Dynamic Sitemap:** Pre-rendered at `https://shivombuilder.com/sitemap.xml`.
