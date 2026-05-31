# Sync Energy

Marketing website for **Sync Energy** — a Nigerian biogas startup converting
organic waste into clean energy, cooking gas, and organic fertilizer through
IoT-enabled biodigesters.

A modern, responsive, single-page scroll site:
**Green Energy · Smart Infrastructure · Circular Economy.**

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (custom brand palette)
- **Framer Motion** (scroll reveals, hover effects, animated counters)
- **Lucide React** (icons)
- Fonts optimized via **next/font** (Inter + Sora)

## Getting started

\`\`\`bash
npm install
npm run dev
\`\`\`

Then open http://localhost:3000.

Other scripts:

\`\`\`bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
\`\`\`

## Project structure

\`\`\`
app/
  layout.tsx       Root layout — fonts, metadata, <html>/<body>
  page.tsx         Single-page composition of all sections
  globals.css      Tailwind layers + brand CSS variables + helpers
components/
  Navbar.tsx       Sticky nav (transparent → solid), animated underlines, mobile drawer
  Hero.tsx         Full-viewport hero with gradient overlay + CTA
  About.tsx        Narrative + stat cards
  Technology.tsx   Proof-of-concept story + "what we track" card grid
  Service.tsx      Four-card commercial ecosystem
  Impact.tsx       Animated counters + glassmorphic impact pillars
  Contact.tsx      CTA banner with mailto buttons
  Footer.tsx       Logo, nav, socials, copyright
  StatCounter.tsx  Reusable count-up-on-scroll number
  Reveal.tsx       Reusable fade-up-on-scroll wrapper
  navLinks.ts      Shared nav links + contact email
public/
  hero.jpg         Hero background  (PLACEHOLDER — replace with your own)
  tech-diagram.png Biodigester schematic (PLACEHOLDER — replace with your own)
\`\`\`

## Replacing the placeholder images

Two placeholder images are committed so the site runs out of the box. Swap in
your own art with the **same file names**:

- **`public/hero.jpg`** — full-bleed hero background. Use a high-resolution
  landscape photo (≈1600×900 or larger). A dark green gradient overlay sits on
  top for text legibility, so a clean, slightly darker image works best.
- **`public/tech-diagram.png`** — schematic of the biodigester with labeled IoT
  sensor points, shown in the Technology section (rendered `object-contain`, so
  a transparent PNG or SVG-exported PNG looks best).

## Customizing the brand

- **Colors** live in `tailwind.config.ts` under `theme.extend.colors.brand`
  (and mirrored as CSS variables in `app/globals.css`):

  | Token            | Hex       | Use                          |
  | ---------------- | --------- | ---------------------------- |
  | `brand-primary`  | `#1A7A4A` | deep forest green            |
  | `brand-accent`   | `#2ECC71` | vibrant energy green         |
  | `brand-dark`     | `#111827` | charcoal — navbar, headings  |
  | `brand-offwhite` | `#F7F9F5` | section backgrounds          |
  | `brand-amber`    | `#F5A623` | CTA highlights, stat numbers |

- **Navigation links** and the **contact email** are defined once in
  `components/navLinks.ts` and shared by the navbar and footer.

## Notes

- Anchor navigation uses native CSS smooth scrolling with `scroll-padding-top`
  so the sticky navbar never covers a section heading.
- Animations respect `prefers-reduced-motion`.
- Built mobile-first; all multi-column grids collapse to a single column and the
  navbar becomes a slide-in hamburger drawer below the `md` breakpoint.
