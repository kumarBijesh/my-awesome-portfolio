# 🔍 Portfolio Technical & Design Audit (Phase 1)

**Project Name:** `my-awesome-portfolio`  
**Repository Path:** `d:\my-awesome-portfolio`  
**Live Site:** `https://kumarbijesh.github.io/my-awesome-portfolio/`  
**Audit Date:** August 2026  

---

## 1. Technical Framework & Versioning

| Category | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Core Framework** | React | `^18.3.1` | UI Library |
| **Build Tool** | Vite | `^7.2.4` | Development Server & Bundler |
| **Language** | TypeScript | `^5.8.3` | Type Safety & Strict Checking |
| **Routing** | React Router DOM | `^6.30.1` | Client-Side SPA Routing |
| **Styling** | Tailwind CSS | `^3.4.17` | Utility-First CSS Framework |
| **UI Components** | Radix UI / shadcn-ui | `1.x` primitives | Accessible UI Controls & Modals |
| **Animations** | Framer Motion | `^12.23.24` | Scroll Reveals, Micro-interactions & Intros |
| **Form Handling** | React Hook Form + Zod | `^7.61.1` / `^3.25.76` | Form State Management & Validation |
| **Notifications** | Sonner | `^1.7.4` | Toast Feedback |
| **Icons** | Lucide React | `^0.462.0` | Vector Iconography |

---

## 2. Directory & Component Architecture

```text
d:\my-awesome-portfolio\
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment pipeline (Node 22 / Pages v5)
├── docs/                       # Project documentation & audit reports
│   ├── AUDIT.md                # Phase 1 technical & design audit
│   └── REDESIGN_PLAN.md        # Detailed editorial redesign plan
├── public/
│   └── images/                 # Local assets (logo.png, developer portrait)
├── src/
│   ├── components/
│   │   ├── Navigation.tsx      # Fixed top navbar with scroll indicator & drawer
│   │   ├── ThemeToggle.tsx     # Light/Dark mode toggle
│   │   ├── ui/                 # Primitive shadcn/ui components
│   │   └── portfolio/          # Portfolio feature modules
│   │       ├── AboutSection.tsx
│   │       ├── AchievementsSection.tsx
│   │       ├── CertificatesSection.tsx
│   │       ├── ContactSection.tsx
│   │       ├── ExperienceSection.tsx
│   │       ├── Footer.tsx
│   │       ├── HeroSection.tsx
│   │       ├── InternshipsSection.tsx
│   │       ├── LandingIntro.tsx
│   │       ├── ProjectsSection.tsx
│   │       └── SkillsSection.tsx
│   ├── pages/
│   │   ├── Index.tsx           # Primary landing view
│   │   └── NotFound.tsx        # 404 page
│   ├── index.css               # Global CSS tokens & Tailwind directives
│   └── main.tsx                # Application root mount
├── index.html                  # Main HTML entry template
└── package.json                # Dependencies and scripts
```

---

## 3. Current Pages & Routes

- **`/` (`src/pages/Index.tsx`):** Main single-page portfolio view compiling:
  - `LandingIntro` (Intro animation)
  - `Navigation` (Sticky header)
  - `HeroSection` (Hero header & CTAs)
  - `AboutSection` (Bio, MCA details & background)
  - `ProjectsSection` (Interactive project cards & walkthrough modal)
  - `ExperienceSection` (Work history & GitHub activity timeline)
  - `SkillsSection` (Categorized skills matrix)
  - `CertificatesSection` (Industry certifications)
  - `AchievementsSection` (Research publication & CTF competition)
  - `ContactSection` (Validated contact form & education details)
  - `Footer` (Footer links & copyright)
- **`*` (`src/pages/NotFound.tsx`):** Custom 404 catch-all view.

---

## 4. Design System & Theme Audit

- **Current Aesthetic:** Dark tech-focused theme (`#0a0a0a` background, dark card surfaces, vibrant violet/neon accents `hsl(263, 90%, 64%)`).
- **Target Editorial Aesthetic (Dribbble Reference Match):**
  - **Warm Off-White Base:** `#F5F4ED`
  - **Deep Green / Teal Primary:** `#0D2322` & `#738F8A`
  - **Orange / Terracotta Accent:** `#D7720C`, `#E6A54D`, & `#AE4818`
  - **Muted Sand / Taupe Borders:** `#C6BEA5` & `#4E504B`
  - **Oversized Typography:** Bold, high-contrast, editorial serif & sans display headings with generous whitespace.
- **Typography:** Standard system sans fonts. Needs upgrade to Google Fonts (e.g. Playfair Display / Outfit / Inter / Instrument Serif) via `@import` or `<link>`.

---

## 5. Security & Input Audit

- **Form Validation:** Client-side Zod schema validation (`contactFormSchema`) enforces name, email, subject, and message lengths.
- **Contact Form Security:** Form submission simulates local async transmission with safe toast feedback. Needs explicit length limits, normalization, and protection against untrusted HTML rendering.
- **Content Security & XSS:** No `dangerouslySetInnerHTML` usage detected in user-facing components.
- **External Links:** All `target="_blank"` links include `rel="noopener noreferrer"`.

---

## 6. Accessibility & Performance Audit

- **Semantic Elements:** Standard `<section>`, `<header>`, `<footer>`, `<main>` tags are present.
- **Keyboard Navigation & Focus:** Modal in `ProjectsSection.tsx` handles scroll lock; needs explicit `aria-dialog` and focus trap polish.
- **Image Alt Tags:** Present on profile photo and project cards; fallbacks added for missing images.
- **Reduced Motion:** Animations use `framer-motion` without explicit `useReducedMotion` hooks. Needs prefers-reduced-motion media query respect.

---

## 7. Preservation Strategy

### What MUST Be Preserved:
1. **Real Personal Data:**
   - Name: **Bijesh Kumar**
   - Degree: **MCA (Master of Computer Applications)** at **Lovely Professional University (LPU)** (7.6 CGPA, 2023-2025)
   - Roles: **Full Stack Developer** & **Cybersecurity Learner**
   - Work Experience: **MusB Research Platform** & **Elevate Labs**
   - Contact Info: `b.k.lpuinsta@gmail.com`, `+91 8789774242`, Patna, Bihar
   - Resume Link & Social Links (GitHub, LinkedIn)
2. **Real Projects & Accomplishments:**
   - **ThreatXray Malware Scanner** (Published IJSREM research paper)
   - **MusB Research Platform Hardening** (Clinical study management app)
   - **Fake News Detection Engine** (AI text classification app)
   - **Forensic File Recovery Tool** (Drive scanner & file carver)
   - **Runner-up in Hackers Prey CTF Competition** (2nd place)
3. **Certificates:**
   - Google Cybersecurity Professional Certificate
   - Meta React Basics Certificate
   - TryHackMe Cybersecurity 101 & Pre Security

### What WILL Be Redesigned in Phase 2:
1. **Global Palette & Design Tokens:** Shift from dark violet to warm off-white, deep teal, and orange editorial design tokens.
2. **Typography & Layout Compositions:** Oversized editorial titles, asymmetric grid structures, and generous whitespace.
3. **Navigation & Hero:** Minimalist editorial header and high-impact hero typography.
4. **Project Presentations:** Magazine-style project cards with refined metadata tags, live demo buttons, and video walkthrough modals.
