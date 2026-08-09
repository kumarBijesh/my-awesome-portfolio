# 🎨 Portfolio Editorial Redesign Plan (Phase 2 Roadmap)

**Target Aesthetic:** Editorial Developer & Cybersecurity Portfolio inspired by warm off-white, deep teal, and orange accent design language.

---

## 🎨 Design System & Token Specification

### Color Tokens

```css
:root {
  /* Editorial Palette Tokens */
  --bg-primary: #F5F4ED;       /* Warm Off-White Base */
  --bg-card: #EFECE3;          /* Slightly deeper cream card background */
  --bg-dark: #0D2322;          /* Deep Green / Dark Teal Container */
  
  --text-primary: #0D2322;     /* Deep Teal / Charcoal Primary Text */
  --text-secondary: #4E504B;   /* Slate Taupe Muted Text */
  --text-muted: #738F8A;       /* Soft Sage / Muted Teal Text */
  
  --accent-orange: #D7720C;    /* Primary Orange Accent */
  --accent-amber: #E6A54D;     /* Warm Amber Accent */
  --accent-terracotta: #AE4818;/* Deep Terracotta Accent */
  
  --border-light: #C6BEA5;     /* Warm Taupe Border */
  --border-dark: #1E3A38;      /* Dark Container Border */
}
```

---

## 🛠️ Step-by-Step Execution Plan

### Step 1: Global Theme & Typography Setup (`index.css`)
- Configure Google Fonts (Display Serif + Sans Display: `Playfair Display` or `Outfit` + `Inter`).
- Define CSS variables for `--bg-primary`, `--text-primary`, `--accent-orange`, etc.
- Set up smooth scrolling, selection styles, and high-contrast focus rings.

### Step 2: Editorial Navigation (`Navigation.tsx`)
- Implement a floating header bar with warm off-white blur background, deep teal branding, and orange highlight indicators for active sections.
- Mobile drawer with editorial typography and responsive links.

### Step 3: Hero Section Redesign (`HeroSection.tsx`)
- High-impact, oversized editorial typography headline: **"Full Stack Developer & Cybersecurity Specialist"**.
- Value statement highlighting clean code, web performance, and security.
- Primary buttons: "View Work" (Orange gradient CTA) and "Download Resume" (Teal border).
- Floating tech pills with subtle motion reveals.

### Step 4: Introduction & About Section (`AboutSection.tsx`)
- Asymmetric 2-column layout:
  - Left: Personal story, MCA background at Lovely Professional University, and MusB Research highlights.
  - Right: Key statistics (2+ Years Exp, 15+ Projects, 25+ Technologies, 6+ Certifications).

### Step 5: Selected Work & Project Detail (`ProjectsSection.tsx`)
- Editorial project presentation cards with warm off-white and deep teal backgrounds.
- Detailed metrics, problem/solution blocks, tech pills, GitHub code link, and live website link.
- Integrated video walkthrough modal with play controls and sound toggle.

### Step 6: Experience & Activity Timeline (`ExperienceSection.tsx`)
- Timeline highlighting Software Developer role at **MusB Research** and Cybersecurity Intern role at **Elevate Labs**.
- Interactive GitHub Activity grid card and "Currently Working On" terminal card.

### Step 7: Skills & Capabilities (`SkillsSection.tsx`)
- Categorized skill cards (Cybersecurity, Frontend Engineering, Backend Development, Databases, Cloud & DevOps, Tools).
- Warm cream background with subtle orange/teal hover accents.

### Step 8: Certifications & Achievements (`CertificatesSection.tsx` & `AchievementsSection.tsx`)
- Highlight Google, Meta, and TryHackMe certificates with verification links.
- Showcase research publication in IJSREM and 2nd place in Hackers Prey CTF competition.

### Step 9: Contact Form & Validation (`ContactSection.tsx`)
- Clean, accessible contact form with name, email, subject, and message fields validated via `react-hook-form` + `zod`.
- Toast feedback notifications via `sonner`.
- University address and quick contact pills.

### Step 10: Footer & Quality Verification (`Footer.tsx`)
- Minimalist footer with copyright, back-to-top button, and quick navigation links.
- Full quality checks: `npm run lint`, `npm run build`, responsive testing, and accessibility verification.
