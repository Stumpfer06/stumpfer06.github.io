# stumpfer06.github.io

My personal portfolio site, built with React, TypeScript, and Vite, deployed
to GitHub Pages via GitHub Actions.

## Editing content

All page copy, nav links, skills, projects, timeline entries, and contact
links live in one place: `src/data/site.ts`. Edit that file to change what's
on the page — components pull their content from it rather than hardcoding
copy. The site is in German; technology names and proper nouns stay as-is.

Styles are split into `src/styles/tokens.css` (palette, band/spacing scale,
type scale, motion variables), `src/styles/base.css` (reset, band rhythm,
accessibility defaults), and `src/styles/components.css` (header, hero,
marquee, bands, timeline, footer, and all `@keyframes`). `src/index.css` just
imports the three.

The layout is a stack of full-bleed colour bands — there is no centred
content container. Each band sets its own background and, on the light bands
(`.band-yellow` / `.band-coral`), flips the text colour and the
`--focus-ring` token so focus outlines stay visible.

