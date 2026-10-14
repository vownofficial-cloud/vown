# VOwn — Official Website (`vown.site`)

The official production website for **VOwn**, engineered with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, and Framer Motion.

Designed around a minimal, ultra-light studio aesthetic with generous whitespace, high typography craft, and subtle interactive motion.

---

## 1. Brand System

- **Domain:** `vown.site`
- **Primary Background:** `#F8FAFC` (Slate-50)
- **Secondary Color:** `#334155` (Slate-700)
- **Main Text:** `#0F172A` (Slate-900)
- **Muted Text:** `#64748B` (Slate-500)
- **Borders:** `#E2E8F0` (Slate-200)
- **Surface / Cards:** `#FFFFFF`
- **Typography:** Geist Sans & Geist Mono (clean, geometric, ultra-legible)

Official high-resolution brand assets are preserved in `public/brand/`:
- `public/brand/vown-primary-logo.png` (1254 x 1254 RGBA)
- `public/brand/vown-wordmark.png` (1159 x 387 RGBA)

---

## 2. Architecture & Directory Structure

```
src/
├── app/
│   ├── api/contact/route.ts      # Contact form submission & email dispatch API
│   ├── globals.css               # Design tokens, subtle grid patterns, glass effects
│   ├── layout.tsx                # Root layout, Geist fonts, OpenGraph, JSON-LD schema
│   ├── page.tsx                  # Main landing page
│   ├── robots.ts                 # Dynamic robots.txt
│   ├── sitemap.ts                # Dynamic sitemap.xml
│   ├── icon.png                  # Official VOwn favicon
│   └── apple-icon.png            # Apple touch icon
├── components/
│   ├── brand/
│   │   └── Logo.tsx              # Sharp, proportion-locked VOwn logo component
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky blurred navbar with mobile drawer
│   │   └── Footer.tsx            # Minimal brand footer with auto year
│   ├── motion/
│   │   ├── HeroGraphic.tsx       # Connected systems SVG network with node hover
│   │   └── MotionWrap.tsx        # Framer Motion with prefers-reduced-motion support
│   ├── sections/
│   │   ├── HeroSection.tsx       # "Building What's Next." hero
│   │   ├── ServicesSection.tsx   # "What We Do" 3 services cards
│   │   ├── ApproachSection.tsx   # Discover → Design → Build → Improve interactive stepper
│   │   ├── VenturesSection.tsx   # Chennai VOwn (@chennai_vown.site) + incubation
│   │   ├── AboutSection.tsx      # Honest studio ethos and architectural pillars
│   │   └── ContactSection.tsx    # "Have an idea? Let's build it." + direct email
│   └── ui/
│       ├── Button.tsx            # Multi-variant button component
│       ├── Badge.tsx             # Status badge with optional live pulse
│       └── Icons.tsx             # Custom SVG brand icons (Instagram)
└── data/
    ├── siteConfig.ts             # Domain, navigation, contact emails, social handles
    ├── services.ts               # Core services (AI Automation, Integrations, Web Dev)
    ├── approach.ts               # 4-phase methodology & deliverables
    └── ventures.ts               # Venture items (Chennai VOwn + future ventures)
```

---

## 3. Future-Proof Content Management

Adding or editing content requires **no layout changes**:

1. **Add a New Venture:**
   Open `src/data/ventures.ts` and append a new `VentureItem` to `venturesData`. It will automatically render as a responsive card with status tags, links, and styling.
2. **Add or Modify a Service:**
   Open `src/data/services.ts` and modify or add to `servicesData`.
3. **Update Methodology:**
   Open `src/data/approach.ts` to tweak phases, summaries, or deliverables.
4. **Update Contact & Socials:**
   Open `src/data/siteConfig.ts` to update links, email addresses, or handles.

---

## 4. Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## 5. Connecting Contact Email Backend

By default, the contact form validates inputs, logs inquiries to the backend console, and generates an instant `mailto:admin@vown.site` fallback link.

To enable **direct automatic email dispatch** to `admin@vown.site`:

1. Sign up for [Resend](https://resend.com) (or your preferred transactional email service).
2. Create a `.env.local` file in the project root:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_NOTIFICATION_EMAIL=admin@vown.site
   ```
3. In `src/app/api/contact/route.ts`, verify your verified sending domain (e.g. `contact@vown.site`).

---

## 6. Deploying to `vown.site`

### Deploy with Vercel (Recommended)
1. Push this repository to GitHub/GitLab.
2. Import the repository in [Vercel](https://vercel.com).
3. Under **Project Settings > Domains**, add:
   - `vown.site`
   - `www.vown.site`
4. Set DNS records at your domain registrar as provided by Vercel:
   - Type: `A`, Name: `@`, Value: `76.76.21.21`
   - Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`
5. If using email dispatch, add `RESEND_API_KEY` under **Environment Variables**.
6. Click **Deploy**.

### Self-Hosted / Node.js Server
```bash
npm run build
npm run start
```
Run behind an Nginx reverse proxy pointing port 80/443 to `http://127.0.0.1:3000`.
