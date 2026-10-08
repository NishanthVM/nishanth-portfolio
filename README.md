# Nishanth VM — Portfolio

Personal portfolio for Nishanth VM, Full-Stack Web Developer (MERN / Next.js / PERN).
A lightweight client-side React + Vite + TypeScript single-page site. No backend, no Next.js.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # serve the built site locally
```

Requires Node.js 18 or newer. Runtime dependencies are only `react` and `react-dom`.

## Editing content

All text, links and dates live in **`src/data/portfolio.ts`**. Components only render it.

- **Projects**: the `projects` array (summary, highlights, case-study sections, links).
- **Experience**: the `experience` array. A role with `end: null` shows as *Present* and
  its duration updates automatically. When the Ted Wiz LLP role ends, set its `end`, e.g.
  `{ year: 2026, month: 12 }`.
- **Experience totals** in the About section are computed from that array: web development
  counts only roles with `isSoftware: true`; overall counts every role. Both floor to whole years.
- **Résumé**: replace `public/resume/Nishanth-VM-Resume.pdf` with a newer PDF of the same name.

## Where the links come from

Every URL was extracted from the hyperlinks embedded in the résumé PDF:

| Link | URL |
| --- | --- |
| LinkedIn | https://www.linkedin.com/in/nishanthvm/ |
| GitHub | https://github.com/NishanthVM |
| Portfolio | https://nishanthvm.vercel.app/ |
| Myself and My Moves | https://myselfandmymoves.com/ |
| Behance (MMM) | https://www.behance.net/gallery/192229751/MMM-Web-Application |
| GoCart | https://gocart-alpha.vercel.app/ |
| QuickAI | https://quick-ai-gamma-green.vercel.app/ |

## Structure

```
public/
  favicon.svg, apple-touch-icon.png, og-image.png
  resume/Nishanth-VM-Resume.pdf
src/
  data/portfolio.ts        content (single source of truth)
  lib/dates.ts             date formatting + experience maths
  hooks/                   useTheme, useScrollSpy, useReveal, useScrolled
  components/              Navbar, Hero, StackDiagram, About, Skills, Projects,
                           ProjectCard, ProjectModal, Experience, Education, Contact,
                           Footer, ThemeToggle, ScrollToTop, Icons, SectionHeading, ExternalLink
  styles/index.css         design tokens (dark + light) and all styles
  App.tsx, main.tsx
```

## Notes

- **Theme**: dark (black + beige) by default. The choice is saved in `localStorage` under
  `nvm-theme`. An inline script in `index.html` applies it before first paint, so there is no flash.
- **Motion**: CSS-only animations plus one shared `IntersectionObserver` for reveals.
  `prefers-reduced-motion` disables decorative motion and the travelling packets in the hero diagram.
- **SEO**: title, description, canonical, Open Graph and Twitter card tags are in `index.html`.
  They point at `https://nishanthvm.vercel.app/` (the portfolio URL from the résumé). If you deploy
  somewhere else, update the `canonical`, `og:url`, `og:image` and `twitter:image` URLs.
- **Fonts**: Fraunces (display), Geist (text) and Geist Mono (code labels) from Google Fonts,
  with system fallbacks.
- **Last updated** in the footer is the build date, injected by Vite at build time.

## Deploy

Any static host works. On Vercel: import the repo, framework preset **Vite**, build command
`npm run build`, output directory `dist`.
