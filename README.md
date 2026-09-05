# my-website

Jayson AI Holland's landing page. Next.js (App Router) + Tailwind v4, built with Claude Code.

## Design

"Blueprint" concept — engineering/schematic aesthetic, since this is an automation agency that builds real systems (n8n workflows, AI agents), not generic AI-agency gloss. Palette, type, and layout tokens live in `app/globals.css`; the signature hero element is `components/NodeCanvas.tsx`.

No real logo yet — header uses a text wordmark. Swap in a logo file + update `brand_assets/` whenever one exists.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Deployed via Vercel, connected to this GitHub repo.
