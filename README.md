# Nadia Nathania — Personal Website

A multi-persona personal website for **Nadia Nathania** — doctor, designer, and
writer. Editorial & minimalist design, built as a fast static site.

## Tech stack

- **[Astro 7](https://astro.build)** — static-first site framework (Vite under the hood)
- **React + TypeScript** — interactive islands (the navbar)
- **Tailwind CSS v4** — utility styling via `@tailwindcss/vite`
- **shadcn/ui (Base UI primitives)** — accessible components built on
  [`@base-ui/react`](https://base-ui.com)
- **DM Sans** — self-hosted variable font via `@fontsource-variable/dm-sans`

## Pages

| Route       | Description                                 |
| ----------- | ------------------------------------------- |
| `/`         | Home — hero, about, selected works, contact |
| `/doctor`   | Doctor persona (placeholder content)        |
| `/designer` | Designer persona (placeholder content)      |
| `/writer`   | Writer persona (placeholder content)        |

The navbar's **About me** and **Contact me** links are in-page anchors on the
home page (`/#about-me`, `/#contact-me`). **Selected works** is a dropdown to the
three persona pages.

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:4321)
```

## Build

```bash
npm run build   # production build to ./dist
npm run preview # preview the production build locally
```

## Code quality

ESLint and Prettier are set up and enforced automatically:

```bash
npm run lint          # check for lint errors (cached — faster on repeat runs)
npm run lint:fix       # auto-fix what ESLint can
npm run format         # format all files with Prettier
```

A Husky **pre-commit hook** runs `lint-staged` on every commit, which lints and
formats only the files you've staged — commits are blocked if there's an error
ESLint can't auto-fix. The hook installs automatically via the `prepare` script
the first time you run `npm install`.

## Editing content

Most copy lives in **`src/data/site.ts`** — site metadata, navigation, contact
details, and the per-persona content used by both the home page and the persona
pages. The persona pages currently use placeholder text; replace the `personas`
entries there with real bios and work as they become available.

Before deploying, set the real production domain in **`astro.config.mjs`**
(`site:`) so canonical URLs, Open Graph tags, and the sitemap are correct.

## Project structure

```
src/
├── components/
│   ├── ui/            # shadcn/ui components (Base UI): button, menu, dialog
│   ├── home/          # home page sections
│   ├── Navbar.tsx     # navigation (React island)
│   ├── Footer.astro   # shared footer
│   └── BaseHead.astro # SEO <head>: meta, canonical, OG/Twitter, JSON-LD
├── data/site.ts       # site + persona content (edit here)
├── layouts/BaseLayout.astro
├── pages/             # index, doctor, designer, writer
└── styles/global.css  # theme tokens + Tailwind
```
