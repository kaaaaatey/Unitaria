# Unitaria — website and pitch bible

Astro + MDX + Tailwind. All copy lives in `/content` as markdown, so text can change without touching code.

## Layout

- `content/world-bible.md` — the World Bible export, the only source of canon. Replace it with each new export.
- `CANON.md` — summary of decided facts, split into public canon and pitch-only spoilers.
- `GAPS.md` — everything undecided or contradictory. Nothing is filled until Katey answers.
- `content/realms`, `content/houses`, `content/fellows`, `content/pages`, `content/pitch` — site content collections (schemas in `src/content.config.ts`).
- `assets/concept-art` — Katey's concept art.
- `src/` — layouts, components, styles and pages.

## Run it

```
npm install
npm run dev     # local preview
npm run build   # static build into dist/
```

## Still to set up

- A GitHub repository for the code, then a Vercel project connected to it (add `@astrojs/vercel` at that point).
- PDF export of the pitch section (Sprint 4).
