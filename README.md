# founder-portfolio

Founder portfolio for Siddharth Dwivedi — a struggling founder building simple SaaS for millions. Warm paper + ember theme, butter-smooth animations, waitlist-first.

## Links

- **Live site:** https://founder-portfolio-n3y5gertv-siddz05s-projects.vercel.app
- **GitHub:** https://github.com/siddz05/founder-portfolio
- **Vercel dashboard:** https://vercel.com/siddz05s-projects/founder-portfolio

## Stack

Next.js 16 (App Router) + TypeScript + Tailwind v4 + Framer Motion + Lenis smooth scroll + Lucide icons. Deployed on Vercel.

## Edit your content (one file)

All copy lives in `src/data/portfolio.ts` — role, bio, stealth SaaS, experiments, journey, socials, email. Edit that, save, done.

- Photo: drop `avatar.png` in `public/` and wire it in `src/components/About.tsx` (placeholder initials for now)
- Accent color: `--color-ember` in `src/app/globals.css`
- Sections: `src/components/{Navbar,Hero,Marquee,About,Projects,Journey,Footer}.tsx`
- Waitlist form: `src/components/WaitlistForm.tsx` — currently confirms locally; wire to Formspree / Buttondown / Resend when the waitlist goes live (see TODO in file)

## Run

```bash
npm run dev    # http://localhost:4000 (port 4000 is the default — see package.json)
npm run build  # production check
npm run lint
```

## Deploy

Pushes to `main` + `npx vercel --prod` redeploy. Run `vercel git connect` once to enable automatic deploys on every push.

> Note: Vercel enables Deployment Protection (SSO login wall) by default — turn it off under Project → Settings → Deployment Protection so the site is publicly reachable.
