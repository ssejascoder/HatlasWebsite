# Hatlas — Landing

Sitio de marketing de **Hatlas** (ERP/POS para PYMEs bolivianas, con Hatlas Agent). React + Vite + TypeScript, sistema de diseño **Atlas Liquid Glass** (papel + verde Salvia, tipografías Sora + Instrument Sans).

## Stack
- **React 18** + **TypeScript** + **Vite 5**
- **react-router-dom** (BrowserRouter, code-splitting por ruta)
- **GSAP** (ScrollTrigger) para animaciones
- Estilos con `<style>` scoped por componente + tokens CSS en `src/styles/tokens.css`

## Desarrollo
```bash
npm install
npm run dev      # http://localhost:5173
```

## Build
```bash
npm run build    # genera dist/
npm run preview  # sirve dist/ localmente
```

## Estructura
- `src/components/` — componentes (Hero, Sistema, Analista, Pricing, ModulePage, etc.)
- `src/lib/` — datos y hooks (`verticals.tsx` = contenido por rubro, `modules.tsx`, `useGsap.ts`)
- `src/styles/` — `tokens.css` (design system) + `global.css`
- `public/` — assets (logos Hatlas, favicon, `_redirects` SPA)

## Rutas
`/` · `/modulos` · `/modulos/:slug` (6 módulos) · `/hatlas-agent`

## Deploy (Netlify)
`netlify.toml` ya define `command = "npm run build"`, `publish = "dist"` y el redirect SPA (`/* → /index.html`). Al conectar este repo a Netlify, cada push a `main` dispara un build automático.

## Notas
- El número de WhatsApp en `src/lib/contact.ts` es **placeholder** (`59170000000`) — reemplazar por el real.
- Dominio de emails `@hatlas.bo` es placeholder — confirmar.
