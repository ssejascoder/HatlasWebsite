import type { ReactNode } from 'react'

/**
 * verticals.tsx — single source of truth for the per-rubro demo content.
 *
 * The hero toggle picks one of these; the hero subhead, the four orbiting
 * cards, and the Hatlas Agent chat + insights all read from the selected
 * entry. Adding a new rubro = adding one entry here. Nothing else changes.
 *
 * Only the DEMO content varies. The hero H1, the dashboard image, and all
 * structural copy (Sistema / Pricing / FAQ / Operadores) stay constant.
 *
 * Constraints honored: no em dashes in copy, no jargon (POS / SIAT / modular),
 * "Hatlas Agent" + "por vos" never "por voz".
 */

export type VerticalKey = 'salteneria' | 'gimnasio' | 'ferreteria'

/** Icon registry keys — mapped to lucide components in Analista. */
export type InsightIcon = 'trend' | 'package' | 'user' | 'calendar' | 'wallet'

export interface VerticalData {
  key: VerticalKey
  /** Toggle button label */
  label: string
  /** Hero subhead, split around the single gold <em> phrase */
  heroSubhead: { pre: string; em: string; post: string }
  cards: {
    cobros: { eyebrow: string; value: string; foot: string }
    /** "stock" slot — the card that gets RENAMED per rubro */
    stock: { eyebrow: string; pname: string; pdays: string; level: number; foot: string }
    cliente: {
      eyebrow: string
      initials: string
      name: string
      tag: string
      time: string
      cta: string
    }
    margen: { eyebrow: string; delta: string; foot: string }
  }
  chat: {
    question: string
    lead: string
    steps: { tag: string; text: ReactNode }[]
    suggestion: string
    actions: [string, string]
  }
  insights: { icon: InsightIcon; title: string; detail: string; meta: string }[]
  /**
   * Per-rubro content for the six Sistema module mockups. Keeps the structural
   * module NAMES constant (Cobros / Almacén / Logística / Finanzas / Clientes /
   * Personal) while the demo content inside each preview adapts to the rubro.
   */
  modules: {
    pos: { title: string; lines: { label: string; amount: string }[]; ghost: string; total: string }
    almacen: { title: string; items: { sku: string; stock: number }[] }
    logistica: { title: string; from: string; to: string; chips: string[] }
    finanzas: { title: string; amount: string; delta: string }
    clientes: { title: string; rows: { name: string; visits: string }[] }
    personal: { title: string; stats: { num: string; label: string }[] }
  }
}

/** Order matters — drives the toggle button order. Salteñería first (default). */
export const VERTICAL_ORDER: VerticalKey[] = ['salteneria', 'gimnasio', 'ferreteria']
export const DEFAULT_VERTICAL: VerticalKey = 'salteneria'

export const VERTICALS: Record<VerticalKey, VerticalData> = {
  /* ───────────────────────── SALTEÑERÍA (default) ───────────────────────── */
  salteneria: {
    key: 'salteneria',
    label: 'Salteñería',
    heroSubhead: {
      pre: 'Registrá tus ventas, emití facturas legales al instante, controlá tu stock e inventario, y te avisa cuando ',
      em: 'tus ventas o tus costos cambian.',
      post: ' Todo en un solo lugar, listo en una semana.',
    },
    cards: {
      cobros: { eyebrow: 'COBROS · HOY', value: '12.840', foot: '▲ +18% vs ayer' },
      stock: {
        eyebrow: 'STOCK · ALMACÉN',
        pname: 'Queso fresco',
        pdays: '4 días',
        level: 22,
        foot: 'Último pedido tardó 3 días',
      },
      cliente: {
        eyebrow: 'CLIENTE INACTIVO',
        initials: 'CM',
        name: 'Carlos Mendoza',
        tag: 'Compraba cada semana',
        time: '23d sin volver',
        cta: 'Reactivar →',
      },
      margen: { eyebrow: 'MARGEN · POLLO', delta: '−8%', foot: 'Costo de pollo subió 12%' },
    },
    chat: {
      question: '¿Por qué bajaron las ventas esta semana?',
      lead: 'Tres factores, ordenados por impacto:',
      steps: [
        {
          tag: 'Stock',
          text: (
            <>
              Te quedaste sin <em>empanada de pollo</em> el jueves y el viernes, tu producto más
              vendido en la hora pico.
            </>
          ),
        },
        {
          tag: 'Precios',
          text: (
            <>
              El nuevo proveedor de queso te subió el costo desde el lunes. Ajustaste el precio en{' '}
              <em>4 productos</em> pero faltan <em>3 más</em>.
            </>
          ),
        },
        {
          tag: 'Clientes',
          text: (
            <>
              <em>Carlos Mendoza</em> compraba todas las semanas. No vuelve hace 23 días.
            </>
          ),
        },
      ],
      suggestion: 'Campaña WhatsApp a tus 38 clientes inactivos. Plantilla lista.',
      actions: ['Aprobar campaña', 'Ver detalle por sucursal'],
    },
    insights: [
      {
        icon: 'trend',
        title: 'Ganás 8% menos por cada empanada de pollo esta semana.',
        detail: 'El pollo te subió 12% y todavía no ajustaste el precio de venta.',
        meta: 'Sucursal Equipetrol · Hace 2 horas',
      },
      {
        icon: 'package',
        title: 'Te quedan 4 días de queso al ritmo en que se vende.',
        detail: 'Tu último pedido tardó 3 días en llegar. Conviene pedir ahora.',
        meta: 'Almacén central · Hace 30 minutos',
      },
      {
        icon: 'user',
        title: 'Carlos Mendoza era cliente todas las semanas. No compra hace 23 días.',
        detail: 'Te sugiero mandarle un mensaje antes de que se vaya.',
        meta: 'Detectado hoy',
      },
    ],
    modules: {
      pos: {
        title: 'Facturar',
        lines: [
          { label: 'Empanada de pollo · 2', amount: 'Bs 24' },
          { label: 'Jugo de frutilla', amount: 'Bs 10' },
        ],
        ghost: 'QR de factura listo',
        total: '34,00',
      },
      almacen: {
        title: 'Almacén · Equipetrol',
        items: [
          { sku: 'Empanada pollo · picante', stock: 22 },
          { sku: 'Empanada pollo · suave', stock: 8 },
          { sku: 'Jugo frutilla · agua', stock: 14 },
        ],
      },
      logistica: {
        title: 'Movimientos de hoy',
        from: 'Cocina central',
        to: 'Las Palmas',
        chips: ['320 unidades', '8 productos', 'en camino'],
      },
      finanzas: { title: 'Posición consolidada', amount: '4.488', delta: '▲ 18% vs mes pasado' },
      clientes: {
        title: 'Clientes recientes',
        rows: [
          { name: 'Camila Vega', visits: 'Semanal' },
          { name: 'Carlos Mendoza', visits: '23d sin volver' },
          { name: 'Andrea Roldán', visits: 'Mensual' },
        ],
      },
      personal: {
        title: 'Hoy · cobertura',
        stats: [
          { num: '14', label: 'en turno' },
          { num: '2', label: 'retraso' },
          { num: '1', label: 'licencia' },
        ],
      },
    },
  },

  /* ───────────────────────────── GIMNASIO ───────────────────────────────── */
  gimnasio: {
    key: 'gimnasio',
    label: 'Gimnasio',
    heroSubhead: {
      pre: 'Registrá tus cobros, emití facturas legales al instante, controlá tus socios y sus cuotas, y te avisa cuando ',
      em: 'alguien está por darse de baja.',
      post: ' Todo en un solo lugar, listo en una semana.',
    },
    cards: {
      cobros: { eyebrow: 'COBROS · ESTE MES', value: '18.400', foot: '▲ +12% vs mes pasado' },
      stock: {
        eyebrow: 'SUSCRIPCIONES POR VENCER',
        pname: 'Vencen esta semana',
        pdays: '20',
        level: 30,
        foot: 'Mandales el recordatorio de pago',
      },
      cliente: {
        eyebrow: 'SOCIO EN RIESGO',
        initials: 'CR',
        name: 'Carlos Rivas',
        tag: '8 meses seguidos activo',
        time: '23d sin venir',
        cta: 'Escribirle →',
      },
      margen: { eyebrow: 'RENOVACIONES', delta: '−12%', foot: '3 semanas cayendo seguidas' },
    },
    chat: {
      question: '¿Por qué bajaron las renovaciones este mes?',
      lead: 'Tres factores, ordenados por impacto:',
      steps: [
        {
          tag: 'Asistencia',
          text: (
            <>
              <em>63 socios</em> dejaron de venir hace más de 2 semanas. Los que faltan tanto casi
              nunca renuevan.
            </>
          ),
        },
        {
          tag: 'Cobros',
          text: (
            <>
              <em>20 cuotas</em> vencen esta semana y todavía nadie les avisó.
            </>
          ),
        },
        {
          tag: 'Socios',
          text: (
            <>
              <em>Carlos Rivas</em> entrenó 8 meses seguidos. No viene hace 23 días.
            </>
          ),
        },
      ],
      suggestion: 'Campaña WhatsApp a tus socios inactivos y a los que vencen. Plantilla lista.',
      actions: ['Aprobar campaña', 'Ver socios en riesgo'],
    },
    insights: [
      {
        icon: 'calendar',
        title: '63 socios no vienen hace más de 2 semanas.',
        detail: 'Los que faltan dos semanas casi nunca renuevan. Conviene escribirles ya.',
        meta: 'Sede Las Palmas · Hace 2 horas',
      },
      {
        icon: 'trend',
        title: 'Las renovaciones cayeron 12% este mes.',
        detail: 'Tres semanas seguidas a la baja. Revisá los planes que están por vencer.',
        meta: 'Hace 30 minutos',
      },
      {
        icon: 'user',
        title: 'Carlos Rivas entrenó 8 meses seguidos. No viene hace 23 días.',
        detail: 'Te sugiero mandarle un mensaje antes de que se dé de baja.',
        meta: 'Detectado hoy',
      },
    ],
    modules: {
      pos: {
        title: 'Cobrar cuota',
        lines: [
          { label: 'Plan mensual full', amount: 'Bs 250' },
          { label: 'Inscripción', amount: 'Bs 80' },
        ],
        ghost: 'Factura enviada por WhatsApp',
        total: '330,00',
      },
      almacen: {
        title: 'Suplementos · Las Palmas',
        items: [
          { sku: 'Proteína 1kg · vainilla', stock: 6 },
          { sku: 'Pre-entreno · sandía', stock: 3 },
          { sku: 'Agua saborizada', stock: 24 },
        ],
      },
      logistica: {
        title: 'Traspasos de hoy',
        from: 'Sede Central',
        to: 'Sede Norte',
        chips: ['4 mancuernas', '2 colchonetas', 'en camino'],
      },
      finanzas: { title: 'Posición consolidada', amount: '18.400', delta: '▲ 12% vs mes pasado' },
      clientes: {
        title: 'Socios recientes',
        rows: [
          { name: 'Lucía Paz', visits: '3x semana' },
          { name: 'Carlos Rivas', visits: '23d sin venir' },
          { name: 'Marco Díaz', visits: 'Mensual' },
        ],
      },
      personal: {
        title: 'Hoy · entrenadores',
        stats: [
          { num: '6', label: 'en turno' },
          { num: '1', label: 'retraso' },
          { num: '1', label: 'licencia' },
        ],
      },
    },
  },

  /* ───────────────────────────── FERRETERÍA ─────────────────────────────── */
  ferreteria: {
    key: 'ferreteria',
    label: 'Ferretería',
    heroSubhead: {
      pre: 'Registrá tus ventas, emití facturas legales al instante, controlá tu stock e inventario, y te avisa cuando ',
      em: 'un producto está por agotarse o un cliente te debe.',
      post: ' Todo en un solo lugar, listo en una semana.',
    },
    cards: {
      cobros: { eyebrow: 'COBROS · HOY', value: '5.120', foot: '▲ +9% vs ayer' },
      stock: {
        eyebrow: 'STOCK · REPONER',
        pname: 'Cemento',
        pdays: '8 bolsas',
        level: 18,
        foot: 'Al ritmo de venta, ~3 días',
      },
      cliente: {
        eyebrow: 'CLIENTE CON FIADO',
        initials: 'DM',
        name: 'Don Mario',
        tag: 'Compra cada semana',
        time: 'Debe Bs 1.240 · 18d',
        cta: 'Cobrar →',
      },
      margen: { eyebrow: 'MARGEN · CEMENTO', delta: '−6%', foot: 'El cemento te subió 9%' },
    },
    chat: {
      question: '¿Por qué cayó la venta esta semana?',
      lead: 'Tres factores, ordenados por impacto:',
      steps: [
        {
          tag: 'Stock',
          text: (
            <>
              Te quedaste sin cemento <em>2 días</em>. Es tu producto más vendido.
            </>
          ),
        },
        {
          tag: 'Fiado',
          text: (
            <>
              <em>5 clientes</em> con cuenta te deben Bs 8.900 hace más de 30 días.
            </>
          ),
        },
        {
          tag: 'Precios',
          text: (
            <>
              El proveedor subió la varilla <em>9%</em> y todavía no ajustaste el precio.
            </>
          ),
        },
      ],
      suggestion: 'Recordatorio de pago por WhatsApp a tus clientes con fiado vencido. Plantilla lista.',
      actions: ['Aprobar recordatorios', 'Ver fiados vencidos'],
    },
    insights: [
      {
        icon: 'package',
        title: 'Te quedan unos 3 días de cemento al ritmo en que se vende.',
        detail: 'Tu último pedido tardó 2 días en llegar. Conviene pedir ahora.',
        meta: 'Depósito · Hace 30 minutos',
      },
      {
        icon: 'wallet',
        title: '5 clientes con fiado vencido hace más de 30 días.',
        detail: 'Suman Bs 8.900. Te armo el recordatorio por WhatsApp.',
        meta: 'Detectado hoy',
      },
      {
        icon: 'trend',
        title: 'Ganás 6% menos por bolsa de cemento esta semana.',
        detail: 'El proveedor te subió 9% y todavía no ajustaste el precio de venta.',
        meta: 'Hace 2 horas',
      },
    ],
    modules: {
      pos: {
        title: 'Facturar',
        lines: [
          { label: 'Cemento IP-30 · 4 bolsas', amount: 'Bs 220' },
          { label: 'Varilla 12mm · 3', amount: 'Bs 96' },
        ],
        ghost: 'QR de factura listo',
        total: '316,00',
      },
      almacen: {
        title: 'Stock · Depósito',
        items: [
          { sku: 'Cemento IP-30', stock: 8 },
          { sku: 'Varilla 12mm', stock: 24 },
          { sku: 'Clavos 2" · kg', stock: 5 },
        ],
      },
      logistica: {
        title: 'Movimientos de hoy',
        from: 'Depósito',
        to: 'Sucursal Centro',
        chips: ['40 bolsas', '6 productos', 'en camino'],
      },
      finanzas: { title: 'Posición consolidada', amount: '5.120', delta: '▲ 9% vs mes pasado' },
      clientes: {
        title: 'Clientes recientes',
        rows: [
          { name: 'Constructora Sur', visits: 'Semanal' },
          { name: 'Don Mario', visits: 'Debe Bs 1.240' },
          { name: 'Rosa Lima', visits: 'Mensual' },
        ],
      },
      personal: {
        title: 'Hoy · cobertura',
        stats: [
          { num: '5', label: 'en turno' },
          { num: '1', label: 'retraso' },
          { num: '0', label: 'licencia' },
        ],
      },
    },
  },
}
