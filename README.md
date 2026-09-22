# stumpfer06.github.io

My personal portfolio site, built with React, TypeScript, and Vite, deployed
to GitHub Pages via GitHub Actions.

## Local development

```bash
npm install
npm run dev
```

Opens a dev server at http://localhost:5173 with hot reload.

## Build

```bash
npm run build
```

Outputs a production build to `dist/`.

## Deployment

Deployment is automatic: every push to `main` triggers
`.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages. The one manual step is enabling it the first time — in the
repo's Settings → Pages, set "Build and deployment" → Source to
"GitHub Actions".

## TODO

- [ ] Fill in real bio text in `src/components/About.tsx`
- [ ] Fill in real email / LinkedIn in `src/components/Contact.tsx`
- [ ] Replace the tagline in `src/components/Hero.tsx` if you want
- [ ] Add real projects to `src/components/Projects.tsx` as they're built
