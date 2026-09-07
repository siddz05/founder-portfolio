# Siddharth Dwivedi — Portfolio

Dark-minimal, super-animated-but-chill portfolio. Next.js 16 + Tailwind v4 + Framer Motion + Lenis, deployed on Vercel.

## Edit your content (one file)

All copy lives in `src/data/portfolio.ts` — name, role, bio, projects, socials, email. Edit that, save, done.

- Photo: drop `avatar.png` in `public/` and wire it in `src/components/About.tsx` (placeholder initials for now)
- Accent color: `--color-lime-glow` in `src/app/globals.css`
- Sections: `src/components/{Navbar,Hero,Marquee,About,Projects,Footer}.tsx`

## Run

```bash
npm run dev    # http://localhost:3000
npm run build  # production check
npm run lint
```

## Deploy (Vercel)

Push to GitHub → Import in Vercel → Deploy (zero config). SEO meta + OG tags are in `src/app/layout.tsx`.
