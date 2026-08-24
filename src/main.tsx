import React, { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { App } from './App'
import { VerticalProvider } from './lib/VerticalContext'
import { WhatsAppFab } from './components/WhatsAppFab'
import { GlassDefs } from './components/GlassDefs'
import { AtlasBlobs } from './components/AtlasBlobs'
// Orden obligatorio: atlas.css (fuente de verdad del design system) → tokens.css
// (shim legacy→atlas, se retira en la Fase 5) → global.css (recetas del sitio).
import './styles/atlas.css'
import './styles/tokens.css'
import './styles/global.css'

// Route-level code splitting: the landing (App) loads eagerly; the module
// pages and index load on demand so the initial bundle stays light.
const ModulePage = lazy(() =>
  import('./components/ModulePage').then((m) => ({ default: m.ModulePage })),
)
const ModulesIndex = lazy(() =>
  import('./components/ModulesIndex').then((m) => ({ default: m.ModulesIndex })),
)
const TwentyAgentPage = lazy(() =>
  import('./components/TwentyAgentPage').then((m) => ({ default: m.TwentyAgentPage })),
)

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VerticalProvider>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/hatlas-agent" element={<TwentyAgentPage />} />
            <Route path="/modulos" element={<ModulesIndex />} />
            <Route path="/modulos/:slug" element={<ModulePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <AtlasBlobs />
        <WhatsAppFab />
        <GlassDefs />
      </BrowserRouter>
    </VerticalProvider>
  </React.StrictMode>,
)
