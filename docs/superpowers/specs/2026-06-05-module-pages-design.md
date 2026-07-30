# Module pages — design spec

Date: 2026-06-05
Status: approved (design), pending implementation plan

## Goal

Give each of the six product modules (Cobros, Almacén, Logística, Finanzas,
Clientes, Personal) its own full marketing page, navigable by clean URL, with
the in-page example adapting to the selected rubro (Salteñería / Gimnasio /
Ferretería). Reuse the existing verticals system, Nav, Footer, chrome, and the
transitions already in place.

## Decisions (locked)

- **Depth:** full marketing page per module (hero + qué resuelve + features +
  rubro-aware live example + mini-FAQ + final CTA + footer).
- **Rubro:** per-rubro. Marketing copy is constant per module; the live
  example/mockup and one tailored benefit line adapt to the active rubro,
  reusing `verticals.tsx → data.modules`.
- **Access:** Sistema cards become links + a "Producto" dropdown in Nav.
- **Router:** `react-router-dom` BrowserRouter (clean URLs) + static-host SPA
  fallback (`vercel.json`, `public/_redirects`).

## Architecture

- Add `react-router-dom`.
- Lift `VerticalProvider` to wrap the router (in `main.tsx`) so the chosen rubro
  persists across the landing and every module page.
- New `src/AppRouter.tsx` (or routes in `main.tsx`):
  - `/` → existing `App` (the landing).
  - `/modulos/:slug` → `ModulePage`.
  - `*` → redirect to `/`.
- New reusable `src/components/ModulePage.tsx` — one template, data-driven.
- New `src/lib/modules.tsx` — content registry for all six modules.
- `Nav` gains a "Producto" dropdown (transitions-dev menu-dropdown, 05).
- `Sistema` cards become `<Link>`s to `/modulos/<slug>`.

## URLs and slugs

| Module    | Slug        | URL                   | verticals.modules key |
| --------- | ----------- | --------------------- | --------------------- |
| Cobros    | `cobros`    | `/modulos/cobros`     | `pos`                 |
| Almacén   | `almacen`   | `/modulos/almacen`    | `almacen`             |
| Logística | `logistica` | `/modulos/logistica`  | `logistica`           |
| Finanzas  | `finanzas`  | `/modulos/finanzas`   | `finanzas`            |
| Clientes  | `clientes`  | `/modulos/clientes`   | `clientes`            |
| Personal  | `personal`  | `/modulos/personal`   | `personal`            |

## Content model — `src/lib/modules.tsx`

```ts
interface ModuleContent {
  slug: string
  name: string                 // "Cobros"
  icon: LucideIcon
  tagline: string              // short, under the H1
  heroH1: string               // value prop
  heroSub: string              // 1-2 sentences
  problems: { pain: string; fix: string }[]   // "Qué resuelve" (2-3)
  features: { title: string; desc: string }[] // 4-6, bento
  faq: { q: string; a: string }[]             // 2-3
  related: string[]            // slugs of related modules
  /** key into verticals.tsx data.modules for the rubro-aware live example */
  exampleKey: 'pos' | 'almacen' | 'logistica' | 'finanzas' | 'clientes' | 'personal'
}
export const MODULES: ModuleContent[] = [ /* 6 entries */ ]
export const getModule = (slug: string) => MODULES.find(m => m.slug === slug)
```

Per-rubro variation: the "Así se ve en tu [rubro]" section renders the existing
rubro-aware mockup (`MkPOS` / `MkAlmacen` / … via `exampleKey`) plus the rubro
label, driven by the live `useVertical()` state and the rubro toggle. No new
per-rubro copy tables are introduced beyond what `verticals.tsx` already holds.

## ModulePage template — sections

1. **Back link / breadcrumb** ("← Volver a Twenty").
2. **Module hero**: eyebrow (name) → H1 → subhead → CTA "Agendar demo"
   (`#cta-final` on home or a module CTA) + the rubro toggle + the large
   module mockup (reuses the `Mk*` component, rubro-aware).
3. **Qué resuelve**: `problems[]` as pain → fix pairs.
4. **Features**: `features[]` in a gapless bento (reuse `.module-card` styling).
5. **Así se ve en tu [rubro]**: rubro-aware example (toggle + mockup via
   `exampleKey`).
6. **Cómo se conecta**: cards linking to `related[]` modules.
7. **Mini-FAQ**: `faq[]` (reuse the FAQ accordion pattern, grid 0fr↔1fr).
8. **Final CTA** + **Footer** (reuse existing components).

## Navigation

- **Nav "Producto" dropdown**: trigger button opens an origin-aware dropdown
  (transitions-dev 05) listing the 6 modules (icon + name). Keyboard
  accessible, closes on outside click / Escape / route change.
- **Sistema cards**: each `<article>` becomes a React Router `<Link>` to
  `/modulos/<slug>`; preserve hover/spotlight styling and the rubro mkFade.

## Transitions reused

- Menu-dropdown (05) on the Nav "Producto" menu.
- The rubro toggle (tabs sliding 16), mkFade, PopNumber, subhead swap already
  built carry into module pages via the shared components.

## Deploy / SPA fallback

- `vercel.json`: rewrite all paths to `/index.html`.
- `public/_redirects`: `/*  /index.html  200` (Netlify).

## Out of scope (YAGNI)

- No CMS, no i18n routing, no per-rubro URL, no SSR/prerender, no analytics.
- No new per-rubro copy beyond the existing verticals example content.

## Testing / verification

- `tsc --noEmit` clean, `vite build` OK.
- Browser checks via Claude Preview: each `/modulos/<slug>` renders, the rubro
  toggle updates the live example, Nav dropdown opens/closes, Sistema card
  links navigate, rubro persists across navigation, deep-link to a module URL
  works (dev), unknown slug redirects home.
```
