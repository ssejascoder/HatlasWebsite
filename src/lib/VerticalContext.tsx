import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import {
  VERTICALS,
  DEFAULT_VERTICAL,
  type VerticalKey,
  type VerticalData,
} from './verticals'

/**
 * VerticalContext — holds the currently selected rubro and exposes its data.
 *
 * The hero toggle calls setVertical; every consumer (hero subhead, orbiting
 * cards, Hatlas Agent chat + insights) reads `data` and re-renders instantly.
 * Pure in-memory state — no persistence, default = Salteñería.
 */

interface VerticalContextValue {
  vertical: VerticalKey
  setVertical: (key: VerticalKey) => void
  data: VerticalData
}

const VerticalContext = createContext<VerticalContextValue | null>(null)

export function VerticalProvider({ children }: { children: ReactNode }) {
  const [vertical, setVertical] = useState<VerticalKey>(DEFAULT_VERTICAL)
  const value = useMemo<VerticalContextValue>(
    () => ({ vertical, setVertical, data: VERTICALS[vertical] }),
    [vertical],
  )
  return <VerticalContext.Provider value={value}>{children}</VerticalContext.Provider>
}

export function useVertical(): VerticalContextValue {
  const ctx = useContext(VerticalContext)
  if (!ctx) {
    throw new Error('useVertical must be used inside <VerticalProvider>')
  }
  return ctx
}
