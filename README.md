# BuilderStack

The curated, **vendor-neutral directory of crypto developer infrastructure** — RPC & nodes, data & indexing, security, wallets & custody, oracles, SDKs/dev frameworks, explorers, and debugging tools.

**Live:** https://biff-cloud.github.io/builderstack/

## Suggest a tool

See **[SUBMITTING.md](SUBMITTING.md)** (also on the site at [/submit](https://biff-cloud.github.io/builderstack/submit/)). Open an issue or a PR adding an entry to [`src/data/tools.json`](src/data/tools.json).

## Sponsored placements

BuilderStack is sponsor-funded. Sponsored placements are **always labeled** and kept separate from editorial listings. Rankings are never for sale. Details: [/sponsor](https://biff-cloud.github.io/builderstack/sponsor/).

## Local development

Requires Node 18+.

```sh
npm install
npm run dev     # local dev server
npm run build   # static build into dist/
```

Built with [Astro](https://astro.build) 4 (static output) and `@astrojs/sitemap`. Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Structure

- `src/data/tools.json` — all listings
- `src/pages/` — home, category, tool, sponsor, newsletter, submit pages
- `src/layouts/Base.astro` — shared layout (SEO / Open Graph meta)
- `public/robots.txt` — robots + sitemap pointer
