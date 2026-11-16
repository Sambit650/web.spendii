<div align="center">

<img src="public/app-icon.png" alt="Spendii app icon" width="120" height="120" />

# Spendii Website

**Snap, Track & Save.**
The marketing website for Spendii, a personal finance companion that turns payment screenshots into organized spending.

[![Live site](https://img.shields.io/badge/live-sambit650.github.io%2Fweb.spendii-8C5BF4?style=for-the-badge)](https://sambit650.github.io/web.spendii/)

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Deployed on GitHub Pages](https://img.shields.io/badge/GitHub_Pages-deployed-28D3A5?logo=github&logoColor=white)

</div>

---

## About

Spendii helps people understand where their money goes. Take a screenshot of any payment, and the app extracts the details with on-device OCR, categorizes the spend, and turns it into budgets, goals and insights, all without collecting your data.

This repository contains the **public website**: the landing page plus the About, Privacy, Terms and Support pages.

## Features showcased

| | |
|---|---|
| **Scan payments** | Extract details from UPI payment screenshots with on-device OCR |
| **Smart insights** | Spending trends, auto-tagging, heatmaps and monthly reports |
| **Loans & splits** | Track debts, splits and settlements with friends and family |
| **Subscriptions** | Renewal tracking with alerts before charges hit |
| **Savings goals** | Targets with deadlines and visual progress |
| **Budgets** | Category budgets with alerts near the limit |
| **Multi-currency** | 9 currencies, including INR, USD, EUR and GBP |
| **Family sync** | iCloud sync and shared finances |
| **5 color themes** | Lavender, Midnight Blue, Forest Green, Sunset and Monochrome |
| **Spending map** | Tag locations to payments |
| **Export & backup** | CSV export and backups |
| **App lock** | Face ID or Touch ID protection |

## Tech stack

- **[Next.js 16](https://nextjs.org/)** (App Router, static export) with **React 19**
- **TypeScript** in strict mode
- **Tailwind CSS 4**, built through Turbopack
- **[lucide-react](https://lucide.dev/)** icons
- **ESLint 10** with `eslint-config-next`
- **GitHub Actions** deploying to **GitHub Pages**

## Getting started

**Requirements:** Node.js 20 or newer and npm.

```bash
# Clone
git clone https://github.com/Sambit650/web.spendii.git
cd web.spendii

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create the static export in `out/` |
| `npm run lint` | Run ESLint |

## Project structure

```
.
├── .github/workflows/deploy.yml   # Build and deploy to GitHub Pages
├── public/                        # Static assets (app icon, theme previews)
├── src/
│   ├── app/                       # Routes: /, /about, /privacy, /terms, /support
│   ├── components/                # Header, Hero, FeaturesGrid, Footer, ...
│   ├── hooks/                     # useInView scroll-reveal hook
│   └── lib/asset.ts               # Prefixes public URLs with the base path
└── next.config.ts                 # Static export and base path config
```

## Deployment

Pushing to `main` triggers the workflow in `.github/workflows/deploy.yml`, which builds the static site and publishes it to GitHub Pages.

**One-time setup:** in the repository go to **Settings → Pages** and set **Source** to **GitHub Actions**.

### How the base path works

Project sites on GitHub Pages are served from `/<repo-name>/`. The workflow sets the `BASE_PATH` environment variable from the repository name, and `next.config.ts` applies it. Locally it is empty, so `npm run dev` works at the root.

To preview a production build with the base path:

```bash
BASE_PATH=/web.spendii npm run build
npx serve out
```

### Using a custom domain

1. Add a `CNAME` file containing your domain to `public/`.
2. Make `BASE_PATH` empty by removing the `/$REPO` logic in the workflow.
3. Add the DNS records GitHub shows under **Settings → Pages**.
4. Set `metadataBase` in `src/app/layout.tsx` to your final URL so social-share images resolve correctly.

## Design

The site uses a dark theme with a purple-to-blue gradient.

| Token | Value |
|---|---|
| Primary | `#8C5BF4` |
| Secondary | `#60ADFF` |
| Accent | `#28D3A5` |
| Warm | `#FF705E` |
| Surface | `#141414` |

Tokens live in `src/app/globals.css`.

## Security

- No backend, API routes or secrets, and the site makes no network calls.
- `npm audit` reports 0 vulnerabilities.
- Dependencies install with `--ignore-scripts` in CI.

## Contact

Questions or feedback: [dev.sambit12@gmail.com](mailto:dev.sambit12@gmail.com)
