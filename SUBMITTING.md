# Submitting a tool to BuilderStack

BuilderStack is a curated, vendor-neutral directory of **developer infrastructure** for crypto builders. Anyone — including vendors — can suggest a listing. Listings are free.

## What belongs

Tools that developers use to build, run, secure or debug crypto applications:

- **RPC & nodes** — node providers, RPC endpoints, streams/webhooks
- **Data & indexing** — indexers, subgraphs, query/analytics APIs
- **Security** — auditing tools, static analysis, monitoring, bug bounty platforms
- **Wallets & custody / account abstraction** — embedded wallets, MPC, smart accounts, bundlers, paymasters
- **Oracles** — price feeds, VRF, cross-chain data
- **SDKs & dev frameworks** — smart-contract toolkits, client libraries, frontend SDKs
- **Explorers** — block explorers, contract verification
- **Debugging & simulation** — tx simulation, tracing, testnets/forks

## What does not belong

- Consumer dapps (games, NFT marketplaces, DeFi front-ends for end users)
- Tokens, presales, airdrops, launchpads
- Casinos, betting or gambling products
- Exchanges / trading venues as products
- Anything without a public website or docs a developer can actually use

## Required fields

| Field | Description |
|---|---|
| `name` | Product name as the vendor writes it |
| `url` | Official homepage (https) |
| `category` | One of the existing categories (see below) or a proposed new one |
| `pricing` | One line, e.g. `Free + paid`, `Open source`, `Pay per query` |
| `desc` | One short sentence (≤ ~120 chars), factual, no marketing superlatives |

Existing categories: `RPC & Nodes`, `Data & Indexing`, `Security`, `Wallets & Custody`, `Oracles`, `Dev Frameworks`, `Frontend SDKs`, `Explorers`, `Debugging & Simulation`.

## How to submit (for now)

Either:

1. **Open a GitHub issue** at <https://github.com/biff-cloud/builderstack/issues/new> titled `Submit: <Tool name>` with the fields above, **or**
2. **Open a pull request** that adds one object to [`src/data/tools.json`](src/data/tools.json).

Each entry has this shape (`slug` is lowercase, hyphenated, unique):

```json
{
  "slug": "example-tool",
  "name": "Example Tool",
  "url": "https://example.com",
  "category": "RPC & Nodes",
  "pricing": "Free + paid",
  "desc": "One-sentence factual description of what it does for developers."
}
```

Please run `npm run build` locally before opening a PR to make sure the site still builds.

## Editorial policy

- We may edit names, descriptions, pricing lines and categories for clarity and consistency.
- We may decline or remove listings that are out of scope, inactive, or misleading.
- **Rankings and organic placement are not for sale.** There is no pay-to-rank.
- Paid placements exist (see [/sponsor](https://biff-cloud.github.io/builderstack/sponsor/)) and are **always labeled "Sponsored"**, kept separate from editorial listings.
