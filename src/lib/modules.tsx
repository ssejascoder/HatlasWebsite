import {
  Receipt,
  Boxes,
  Truck,
  LineChart,
  Users,
  IdCard,
  FileCheck,
  BookText,
  QrCode,
  MessageCircle,
  Warehouse,
  BellRing,
  TrendingDown,
  RefreshCw,
  ArrowLeftRight,
  ClipboardList,
  Building2,
  PackagePlus,
  Activity,
  Percent,
  Wallet,
  FileText,
  Contact,
  UserMinus,
  Coins,
  Send,
  Clock,
  CalendarDays,
  type LucideIcon,
} from 'lucide-react'

/**
 * modules.tsx — content registry for the six module marketing pages.
 *
 * One reusable ModulePage template reads these entries. Marketing copy is
 * constant per module; the live example/mockup adapts to the active rubro via
 * `exampleKey` (a key into verticals.tsx → data.modules), so we get six rich
 * pages without tripling the copy.
 *
 * Wording adapted to the Bolivian SMB context (benchmarked against
 * tugerente.bo and izisoluciones.com): "factura en línea / Impuestos
 * Nacionales", "Libro de Ventas", "órdenes de compra / proveedores", "baja
 * rotación", "ganás o perdés en tiempo real", "cuentas por cobrar / fiado",
 * "planillas". Hatlas's differentiator vs those tools stays front: Hatlas Agent
 * AVISA (proactive), it does not only record.
 *
 * Copy constraints: no em dashes, no jargon beyond standard BO terms, brand is
 * "Hatlas Agent", "por vos" never "por voz".
 */

export type ModuleExampleKey =
  | 'pos'
  | 'almacen'
  | 'logistica'
  | 'finanzas'
  | 'clientes'
  | 'personal'

export interface ModuleContent {
  slug: string
  name: string
  /** key into verticals.tsx data.modules for the rubro-aware live example */
  exampleKey: ModuleExampleKey
  icon: LucideIcon
  /** short line under the H1 */
  tagline: string
  heroH1: { lead: string; em: string }
  heroSub: string
  problems: { pain: string; fix: string }[]
  features: { title: string; desc: string; icon?: LucideIcon }[]
  faq: { q: string; a: string }[]
  /** secondary "y además" feature chips that convey depth */
  more: string[]
  /** what Hatlas Agent does proactively in this module (highlight band) */
  agent: string
  /** optional device/offline line (used by Punto de Venta) */
  channels?: string
  /** slugs of related modules shown in "Cómo se conecta" */
  related: string[]
}

export const MODULES: ModuleContent[] = [
  {
    slug: 'punto-de-venta',
    name: 'Punto de Venta',
    exampleKey: 'pos',
    icon: Receipt,
    tagline: 'Vendé y facturá en la misma pantalla.',
    heroH1: { lead: 'Cobrá en la hora pico y ', em: 'facturá en línea, sin multas.' },
    heroSub:
      'Cobrá con QR, tarjeta o efectivo y emití la factura en línea, autorizada por Impuestos Nacionales, en el mismo momento. Tu Libro de Ventas se arma solo y cada venta descuenta tu stock.',
    problems: [
      {
        pain: 'Una multa de Impuestos te arruina el mes.',
        fix: 'Hatlas emite facturas en línea autorizadas y arma tu Libro de Ventas solo. Cumplís sin tener que pensarlo.',
      },
      {
        pain: 'En la hora pico, facturar a mano te traba la caja.',
        fix: 'Elegís, cobrás y la factura sale con su QR en segundos. La fila sigue avanzando.',
      },
      {
        pain: 'Las notas de venta, los recibos y las facturas viven en cuadernos distintos.',
        fix: 'Todo queda en un solo lugar y conectado a tus números, sin volver a cargar nada.',
      },
    ],
    features: [
      {
        icon: FileCheck,
        title: 'Factura en línea autorizada',
        desc: 'Conectado a Impuestos Nacionales. Emití la factura legal en el momento.',
      },
      {
        icon: BookText,
        title: 'Libro de Ventas automático',
        desc: 'Se arma solo con cada venta. A fin de mes lo descargás y listo.',
      },
      {
        icon: QrCode,
        title: 'Cobrá como te paguen',
        desc: 'QR, tarjeta o efectivo, todo en la misma caja.',
      },
      {
        icon: MessageCircle,
        title: 'Factura por WhatsApp',
        desc: 'Mandá la factura con su QR al cliente, sin imprimir nada.',
      },
    ],
    faq: [
      {
        q: '¿Está autorizado por Impuestos Nacionales?',
        a: 'Sí. Hatlas emite facturas en línea conectado al sistema de Impuestos Nacionales. Facturás legal desde el día uno, sin complementos ni trámites raros.',
      },
      {
        q: '¿Qué pasa si se cae el internet en plena venta?',
        a: 'Seguís cobrando igual. Cuando vuelve la conexión, las facturas se emiten en orden y no se pierde ninguna venta.',
      },
      {
        q: '¿Puedo mandar la factura por WhatsApp o correo?',
        a: 'Sí. La factura sale con su QR y se la enviás al cliente por WhatsApp o correo en el momento, sin imprimir nada.',
      },
    ],
    channels: 'Funciona en tu celular, tablet o PC. Y seguís cobrando aunque se caiga el internet.',
    more: [
      'Notas de venta',
      'Cotizaciones',
      'Devoluciones',
      'Pagos mixtos',
      'Descuentos y promos',
      'Multi-sucursal',
    ],
    agent:
      'Hatlas Agent mira tus ventas en vivo y te avisa si baja el ticket promedio, si un producto se vende distinto o si te falta ajustar un precio.',
    related: ['almacen', 'finanzas', 'clientes'],
  },
  {
    slug: 'almacen',
    name: 'Almacén',
    exampleKey: 'almacen',
    icon: Boxes,
    tagline: 'Tu stock, siempre al día.',
    heroH1: { lead: 'Nunca más te quedes ', em: 'sin lo que más vendés.' },
    heroSub:
      'Controlá tu stock por sucursal y por producto, actualizado solo con cada venta y cada compra. Hatlas Agent te avisa antes de que algo se acabe, al ritmo real en que se vende.',
    problems: [
      {
        pain: 'Te enterás de que faltó tu producto estrella cuando ya no hay.',
        fix: 'Hatlas Agent calcula cuántos días te quedan y te avisa con tiempo para reponer.',
      },
      {
        pain: 'No sabés qué hay en cada sucursal sin llamar y preguntar.',
        fix: 'Stock por sucursal y por producto, actualizado al instante, en una sola vista.',
      },
      {
        pain: 'Tenés plata dormida en productos que no rotan.',
        fix: 'Hatlas te marca lo que está parado para que no vuelvas a comprar de más.',
      },
    ],
    features: [
      {
        icon: Warehouse,
        title: 'Stock por sucursal',
        desc: 'Mirá qué hay y dónde, sin llamar a nadie.',
      },
      {
        icon: BellRing,
        title: 'Aviso antes de agotar',
        desc: 'Calculado sobre tu ritmo de venta real.',
      },
      {
        icon: TrendingDown,
        title: 'Productos de baja rotación',
        desc: 'Hatlas te marca lo que está parado y te ahorra plata dormida.',
      },
      {
        icon: RefreshCw,
        title: 'Conectado a la caja',
        desc: 'Cada venta descuenta y cada compra suma, sin recontar.',
      },
    ],
    faq: [
      {
        q: '¿Maneja varias sucursales?',
        a: 'Sí. Ves el stock de cada sucursal por separado y los traspasos entre ellas en Logística. Varias sucursales vienen en el plan Crecimiento.',
      },
      {
        q: '¿Cómo sabe cuándo avisar?',
        a: 'Hatlas Agent mira a qué ritmo se vende cada producto y cuánto suele tardar tu proveedor, y te avisa con margen para reponer a tiempo.',
      },
    ],
    more: [
      'Lotes y vencimientos',
      'Código QR',
      'Kardex por producto',
      'Mínimos por producto',
      'Inventario por sucursal',
      'Conteo cíclico',
    ],
    agent:
      'Hatlas Agent calcula a qué ritmo se vende cada producto y te avisa cuántos días te quedan, antes de que te quedes sin lo que más vendés.',
    related: ['punto-de-venta', 'logistica', 'finanzas'],
  },
  {
    slug: 'logistica',
    name: 'Logística',
    exampleKey: 'logistica',
    icon: Truck,
    tagline: 'Compras y traspasos, sin enredos.',
    heroH1: { lead: 'Mové mercadería entre sucursales ', em: 'sin perder el rastro.' },
    heroSub:
      'Órdenes de compra a proveedores, traspasos entre sucursales y movimientos de stock, todo registrado y conectado a tu almacén. Recibís una compra y el stock se suma solo.',
    problems: [
      {
        pain: 'No sabés qué salió de una sucursal y si llegó a la otra.',
        fix: 'Cada traspaso queda registrado: qué se mandó, a dónde y si ya llegó.',
      },
      {
        pain: 'Las compras a proveedores viven en WhatsApp y papelitos.',
        fix: 'Registrás la orden de compra con sus precios y, al recibirla, el stock se suma solo.',
      },
      {
        pain: 'Reponés a ojo y terminás con faltantes o sobrantes.',
        fix: 'Logística lee tu almacén, así pedís lo que de verdad hace falta.',
      },
    ],
    features: [
      {
        icon: ArrowLeftRight,
        title: 'Traspasos entre sucursales',
        desc: 'De dónde sale, a dónde llega y en qué estado.',
      },
      {
        icon: ClipboardList,
        title: 'Órdenes de compra',
        desc: 'Registrá el pedido con sus precios y recibí contra stock.',
      },
      {
        icon: Building2,
        title: 'Proveedores ordenados',
        desc: 'Sus datos y precios de compra, en un solo lugar.',
      },
      {
        icon: PackagePlus,
        title: 'Conectado al almacén',
        desc: 'Recibir una compra suma stock al instante.',
      },
    ],
    faq: [
      {
        q: '¿Sirve si tengo una sola sucursal?',
        a: 'Sí. Registrás compras a proveedores y los movimientos de stock quedan ordenados con su historial, aunque no hagas traspasos.',
      },
      {
        q: '¿Puedo ver qué está en camino?',
        a: 'Sí. Cada traspaso y cada orden de compra muestran su estado, así sabés qué ya llegó y qué todavía viene en camino.',
      },
    ],
    more: [
      'Recepción parcial',
      'Precios por proveedor',
      'Historial de movimientos',
      'Estados de envío',
      'Traspasos entre sucursales',
      'Órdenes de compra',
    ],
    agent:
      'Hatlas Agent cruza tu stock con tu ritmo de venta y te sugiere qué pedir y a qué proveedor, para que no compres de más ni de menos.',
    related: ['almacen', 'punto-de-venta', 'finanzas'],
  },
  {
    slug: 'finanzas',
    name: 'Finanzas',
    exampleKey: 'finanzas',
    icon: LineChart,
    tagline: 'Tus números, sin planillas.',
    heroH1: { lead: 'Sabé si estás ganando o perdiendo ', em: 'en tiempo real.' },
    heroSub:
      'Ingresos, egresos, gastos y cuentas por cobrar en un solo tablero, actualizado solo. Hatlas Agent te muestra dónde ganás, dónde no, y te avisa cuando un costo cambia.',
    problems: [
      {
        pain: 'Vendés mucho pero no sabés cuánto te queda.',
        fix: 'Hatlas cruza ventas y costos y te muestra la ganancia real, producto por producto.',
      },
      {
        pain: 'Los costos suben y te enterás cuando ya perdiste el margen.',
        fix: 'Hatlas Agent te avisa cuando un costo cambia y te dice qué precio conviene ajustar.',
      },
      {
        pain: 'El cierre de mes es una noche entera de planillas.',
        fix: 'El tablero está siempre al día. Tus reportes salen solos, listos para tu contador.',
      },
    ],
    features: [
      {
        icon: Activity,
        title: 'Ganás o perdés, en vivo',
        desc: 'La posición del día sin tener que armar nada.',
      },
      {
        icon: Percent,
        title: 'Ganancia por producto',
        desc: 'Cuánto te deja de verdad cada cosa que vendés.',
      },
      {
        icon: Wallet,
        title: 'Cuentas por cobrar y pagar',
        desc: 'Quién te debe y a quién le debés, listo para seguimiento.',
      },
      {
        icon: FileText,
        title: 'Reportes para tu contador',
        desc: 'El cierre del mes, hecho y listo para descargar.',
      },
    ],
    faq: [
      {
        q: '¿De dónde saca los números?',
        a: 'De tu propia operación: cada venta, cada compra y cada gasto que cargás. No tenés que volver a anotar nada en otro lado.',
      },
      {
        q: '¿Reemplaza a mi contador?',
        a: 'No, lo complementa. Hatlas deja todo ordenado y al día para que tu contador trabaje mucho más rápido.',
      },
    ],
    more: [
      'Conciliación bancaria',
      'Cuentas por cobrar y pagar',
      'Flujo de caja',
      'Centro de costos',
      'Gastos por categoría',
      'Reportes exportables',
    ],
    agent:
      'Hatlas Agent vigila tus costos y márgenes, y te avisa cuando algo sube y te empieza a comer la ganancia, con el precio que conviene ajustar.',
    related: ['punto-de-venta', 'almacen', 'clientes'],
  },
  {
    slug: 'clientes',
    name: 'Clientes',
    exampleKey: 'clientes',
    icon: Users,
    tagline: 'Conocé a quién te compra.',
    heroH1: { lead: 'Sabé quién vuelve ', em: 'y quién está por irse.' },
    heroSub:
      'Hatlas registra quién compra qué y cuándo, y Hatlas Agent te avisa cuando un buen cliente deja de venir, antes de que se vaya para siempre. Y sabés quién te debe.',
    problems: [
      {
        pain: 'Un buen cliente deja de venir y nadie lo nota.',
        fix: 'Hatlas Agent detecta al que compraba seguido y se enfrió, y te arma el mensaje para traerlo de vuelta.',
      },
      {
        pain: 'El fiado se anota en un cuaderno y se termina perdiendo.',
        fix: 'Cada cuenta por cobrar queda registrada: quién te debe, cuánto y hace cuántos días.',
      },
      {
        pain: 'Las promociones se mandan a ciegas.',
        fix: 'Hatlas arma la lista de a quién escribir y te deja la plantilla de WhatsApp lista.',
      },
    ],
    features: [
      {
        icon: Contact,
        title: 'Historial de cada cliente',
        desc: 'Qué compra, cuándo y cada cuánto vuelve.',
      },
      {
        icon: UserMinus,
        title: 'Aviso de cliente que se enfría',
        desc: 'Detectado antes de que sea demasiado tarde.',
      },
      {
        icon: Coins,
        title: 'Fiado y cuentas por cobrar',
        desc: 'Quién te debe, cuánto y hace cuántos días.',
      },
      {
        icon: Send,
        title: 'Campañas por WhatsApp',
        desc: 'Lista y plantilla armadas por Hatlas Agent.',
      },
    ],
    faq: [
      {
        q: '¿Tengo que cargar a mis clientes a mano?',
        a: 'No. Se arman solos a partir de tus ventas. Sumás el teléfono u otros datos cuando te sirva.',
      },
      {
        q: '¿Cómo me ayuda a recuperar clientes?',
        a: 'Hatlas Agent detecta a los que compraban seguido y dejaron de venir, te arma la lista y te deja lista la campaña por WhatsApp para reactivarlos.',
      },
    ],
    more: [
      'Historial de compras',
      'Tags y segmentos',
      'Cuentas por cobrar',
      'Recordatorios de pago',
      'Campañas por WhatsApp',
      'Exportar contactos',
    ],
    agent:
      'Hatlas Agent detecta al cliente que compraba seguido y se enfrió, arma la lista de a quién escribir y te deja la plantilla de WhatsApp lista.',
    related: ['punto-de-venta', 'finanzas', 'almacen'],
  },
  {
    slug: 'personal',
    name: 'Personal',
    exampleKey: 'personal',
    icon: IdCard,
    tagline: 'Tu equipo, sin papeles.',
    heroH1: { lead: 'Asistencia y planillas ', em: 'sin cuadernos ni Excel.' },
    heroSub:
      'Tu equipo, sus turnos, su asistencia y sus planillas en un solo lugar. Sabés quién está, quién faltó y cuánto pagar a fin de mes.',
    problems: [
      {
        pain: 'La asistencia se anota en un cuaderno que nadie revisa.',
        fix: 'Cada entrada y salida queda registrada, con la cobertura del día a la vista.',
      },
      {
        pain: 'Armar la planilla es un cálculo a mano cada mes.',
        fix: 'Hatlas junta turnos y asistencia y te deja la planilla casi lista.',
      },
      {
        pain: 'No sabés quién está en turno ahora mismo.',
        fix: 'Una vista del día: quién está, quién llegó tarde y quién está de licencia.',
      },
    ],
    features: [
      {
        icon: Clock,
        title: 'Asistencia del día',
        desc: 'Quién está en turno, retrasos y licencias.',
      },
      {
        icon: CalendarDays,
        title: 'Turnos por sucursal',
        desc: 'Organizá la cobertura sin choques.',
      },
      {
        icon: FileText,
        title: 'Planillas más rápidas',
        desc: 'Turnos y asistencia juntos, listos para liquidar.',
      },
      {
        icon: Users,
        title: 'Todo en un solo lugar',
        desc: 'Sin cuadernos sueltos ni planillas dispersas.',
      },
    ],
    faq: [
      {
        q: '¿Sirve para un equipo chico?',
        a: 'Sí. Desde dos personas ya te ahorra el cuaderno: la asistencia queda ordenada y la planilla sale más rápido.',
      },
      {
        q: '¿Reemplaza mi sistema de sueldos?',
        a: 'Te deja la base lista: turnos y asistencia ordenados para liquidar. Lo legal final lo cerrás con tu contador, mucho más rápido.',
      },
    ],
    more: [
      'Aportes patronales (CNS · AFP)',
      'Aguinaldo e indemnización',
      'Turnos por sucursal',
      'Vacaciones',
      'Contratos',
      'Adelantos y descuentos',
    ],
    agent:
      'Hatlas Agent te avisa de vencimientos de contrato, años de antigüedad y cuánto provisionar para aguinaldo, sin que tengas que llevar la cuenta.',
    related: ['punto-de-venta', 'finanzas', 'clientes'],
  },
]

export const getModule = (slug: string | undefined): ModuleContent | undefined =>
  MODULES.find((m) => m.slug === slug)
