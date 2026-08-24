/**
 * AppScreen — lo que se ve DENTRO del marco del hero.
 *
 * Es una captura real del producto: el Centro de operaciones de Hatlas
 * ("Vista del negocio") con los KPIs del período, el flujo de ingresos vs
 * gastos y la composición por categoría. Reemplaza al panel que antes se
 * dibujaba en código: acá gana mostrar el producto de verdad.
 *
 * El marco y su animación (ContainerScroll) NO se tocan: este componente solo
 * llena el hueco. `.cscroll__screen > *` fuerza height:100%, así que el
 * contenedor toma todo el alto disponible y la imagen lo cubre desde arriba
 * a la izquierda (queda a la vista el rail, el encabezado y la fila de KPIs).
 *
 * La captura es oscura en los dos temas — es la app real, no una superficie
 * del sitio. El fondo del contenedor va del mismo tono que la captura para
 * que no se vea un flash blanco mientras carga.
 */
export function AppScreen() {
  return (
    <div className="ascreen">
      <img
        className="ascreen__shot"
        src="/hatlas-dashboard.jpg"
        width={2040}
        height={1221}
        alt="Centro de operaciones de Hatlas: vista del negocio con ingresos, resultado, margen, órdenes, ticket promedio y gastos de los últimos 30 días, más el flujo de ingresos vs gastos y los ingresos por categoría."
        loading="eager"
        // @ts-expect-error — atributo estándar del navegador, aún no tipado en React
        fetchpriority="high"
        draggable={false}
      />

      <style>{`
        .ascreen {
          height: 100%;
          width: 100%;
          overflow: hidden;
          /* mismo tono que la captura: sin destello blanco al cargar */
          background: #0E0D11;
        }
        .ascreen__shot {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top left;
        }
      `}</style>
    </div>
  )
}
