# My Website

A small React + Vite frontend portfolio built with TypeScript and SCSS.

## Prerequisites

- Node.js (v18+ recommended)
- npm

## Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production build is served from `/portfolio/` (GitHub Pages project URL). After `npm run dev` or `npm run preview`, open `http://localhost:5173/portfolio/`.

## Deploy (GitHub Pages)

The site is published automatically on every push to `main`:

https://samheatfield1199.github.io/portfolio/

In the GitHub repo go to **Settings → Pages** and set **Source** to **GitHub Actions**. The workflow `.github/workflows/deploy.yml` builds the app and deploys the `dist` folder.

## Linting

Check code and styles:

```bash
npm run lint
```

Auto-fix JS and styles where possible:

```bash
npm run lint:fix
```

## Project structure (brief)

- `src/` — application source
  - `components/` — React components
  - `assets/` — images and icons
  - `styles/` — shared SCSS variables
- `public/` — static assets

