/**
 * AtlasBlobs — el ambiente del sistema (receta `.atlas-blobs` de atlas.css).
 *
 * Tres radiales derivados del ACENTO activo (--ac-light / --ac / --ac-deep) con
 * `floatBlob`, montados una sola vez y fijos al viewport. Reemplazan las auras
 * escritas a mano en el body: así el ambiente responde al tema y al acento, y
 * las degradaciones del DS (prefers-reduced-transparency, [data-perf="lite"],
 * @media print) lo apagan sin que el sitio declare nada.
 *
 * Los blobs cuestan 0.0 ms medidos; lo caro es el área de vidrio, no el ambiente.
 */
export function AtlasBlobs() {
  return (
    <div className="atlas-blobs" aria-hidden="true">
      <i />
      <i />
      <i />
    </div>
  )
}
