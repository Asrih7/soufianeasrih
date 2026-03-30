# Soufiane Asrih — Portfolio

**Expert Frontend Architect & Scrum Master** · Tétouan, Morocco  
Built with **Angular 20** · **Three.js** · **Angular Signals** · **EmailJS**

---

## 🚀 Quick Start

```bash
# 1. Install Angular CLI 20
npm install -g @angular/cli@20

# 2. Install dependencies
npm install

# 3. Start dev server
ng serve --open
# → http://localhost:4200
```

## 📦 Build for Production

```bash
ng build --configuration production
# Output → dist/soufiane-portfolio/
```

---

## ✉️ Activate Real Email Contact (EmailJS)

Open `src/app/services/contact.service.ts` and replace the 3 placeholders:

```typescript
const EJ_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // ← from EmailJS Dashboard → Account
const EJ_SERVICE_ID  = 'YOUR_SERVICE_ID';   // ← from EmailJS Dashboard → Email Services
const EJ_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // ← from EmailJS Dashboard → Email Templates
```

**Setup steps:**
1. Sign up free at [emailjs.com](https://www.emailjs.com/) (200 emails/month free)
2. Add Service → Gmail → connect `asrihsoufiane@gmail.com`
3. Create Template with variables: `{{from_name}}` `{{reply_to}}` `{{company}}` `{{enquiry_type}}` `{{message}}`
4. Paste your keys above → save → done ✅

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── loader/          # Animated loading screen
│   │   ├── cursor/          # Custom cursor with ring follower
│   │   ├── navbar/          # Sticky nav + dark mode + mobile menu
│   │   ├── hero/            # Hero + Three.js 3D canvas
│   │   ├── about/           # Bio, facts, languages, education
│   │   ├── skills/          # Filterable skill pills (6 categories)
│   │   ├── experience/      # Expandable timeline (6 companies)
│   │   ├── packages/        # 4 npm packages + Angular Academy
│   │   ├── certifications/  # 4 certification badges
│   │   ├── writing/         # 4 real Medium articles
│   │   ├── contact/         # Form + EmailJS + channels
│   │   └── footer/          # Footer + Toast notifications
│   ├── services/
│   │   ├── theme.service.ts       # Dark/light mode (Signals)
│   │   ├── scroll.service.ts      # Progress + active section (Signals)
│   │   ├── toast.service.ts       # Notification system (Signals)
│   │   ├── contact.service.ts     # EmailJS integration
│   │   └── three-scene.service.ts # Three.js 3D scene + morph
│   ├── directives/
│   │   ├── reveal.directive.ts    # IntersectionObserver scroll reveal
│   │   └── counter.directive.ts   # Animated count-up numbers
│   ├── data/
│   │   └── portfolio.data.ts      # All real content (skills, exp, npm, articles)
│   ├── models/
│   │   └── portfolio.models.ts    # TypeScript interfaces
│   ├── app.component.ts           # Root shell
│   ├── app.config.ts              # Providers + router + View Transitions
│   └── app.routes.ts              # Routes
├── assets/
│   ├── profile/    soufiane.svg
│   ├── companies/  6 company logos
│   ├── certs/      4 certification badges
│   ├── articles/   4 Medium article covers
│   └── npm/        4 npm package previews
├── index.html
├── main.ts
└── styles.scss      # Global design tokens + utilities
```

---

## ✨ Features

| Feature | Implementation |
|---------|---------------|
| 3D morphing sphere | Three.js Fibonacci sphere → Torus on scroll |
| Mouse parallax | Camera tracks cursor movement |
| Dark / Light mode | Angular Signals + `localStorage` |
| Skill filter tabs | Computed signal filtering |
| Expandable experience | Signal-based toggle |
| Count-up animations | IntersectionObserver + rAF |
| Scroll reveal | IntersectionObserver directive |
| Real email contact | EmailJS (replace 3 keys) |
| Toast notifications | Signal-based notification stack |
| View Transitions API | Angular 20 native |
| Mobile menu | Full-screen overlay |
| Keyboard accessible | Tab navigation + ARIA labels |

---

## 🌐 Deploy to Netlify (Free)

```bash
# 1. Build
ng build --configuration production

# 2. Drag & drop dist/soufiane-portfolio/ to netlify.com
# OR connect your GitHub repo for auto-deploy on every git push
```

See `DEPLOY-GUIDE.md` for the full domain + CI/CD setup.

---

## 📄 Content Updates

All content lives in one file — **`src/app/data/portfolio.data.ts`**  
Edit `SKILLS`, `EXPERIENCES`, `PACKAGES`, `CERTIFICATIONS`, or `ARTICLES` arrays,  
then `git push` → Netlify auto-deploys in ~20 seconds.

---

*© 2026 Soufiane Asrih · SA7Tech · Tétouan, Morocco*
