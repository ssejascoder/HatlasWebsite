#!/usr/bin/env bash
# Publica dist/ en la rama gh-pages CONSERVANDO los assets de deploys previos.
#
# Por qué: GitHub Pages sirve index.html con `cache-control: max-age=600`, así
# que durante 10 minutos hay visitantes con el HTML viejo en caché pidiendo
# `assets/index-<hash>.js`. Si el deploy borra los archivos anteriores, ese
# pedido da 404 y la página queda EN BLANCO. Los assets llevan hash en el
# nombre, así que conservarlos no genera conflictos: solo ocupan lugar.
#
# Uso:  npm run deploy
set -euo pipefail

REPO="https://github.com/ssejascoder/HatlasWebsite.git"
BRANCH="gh-pages"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

[ -d "$ROOT/dist" ] || { echo "No hay dist/. Corré: npm run build"; exit 1; }

echo "→ Trayendo la rama publicada…"
if git clone --quiet --branch "$BRANCH" --depth 1 "$REPO" "$WORK/site" 2>"$WORK/clone.err"; then
  echo "  assets previos: $(ls "$WORK/site/assets" 2>/dev/null | wc -l | tr -d ' ')"
else
  # Si la rama todavía no existe está bien; cualquier otro error (red, permisos)
  # se muestra, porque publicar desde cero borraría los assets que aún se piden.
  if grep -qiE "not found|couldn't find remote ref" "$WORK/clone.err"; then
    echo "  (la rama no existe todavía: se crea)"
    mkdir -p "$WORK/site"
    git -C "$WORK/site" init --quiet
    git -C "$WORK/site" checkout --quiet -b "$BRANCH"
  else
    echo "✗ No se pudo traer $BRANCH — se aborta para no borrar los assets vivos:"
    cat "$WORK/clone.err"; exit 1
  fi
fi

echo "→ Copiando el build encima (sin borrar assets previos)…"
cp -R "$ROOT/dist/." "$WORK/site/"

# Poda: deja los 3 builds más recientes de cada familia de asset. Alcanza para
# cubrir la ventana de caché sin que la rama crezca sin control.
# `|| true` en cada paso: cuando una familia no tiene match, `ls` sale con
# error y con `set -e` eso mataba el script justo antes de publicar.
if [ -d "$WORK/site/assets" ]; then
  echo "→ Podando assets antiguos (deja los 3 últimos por familia)…"
  ( cd "$WORK/site/assets"
    for fam in $(ls | sed -E 's/-[A-Za-z0-9_-]+\.(js|css)$//' | sort -u); do
      for ext in js css; do
        old=$(ls -t "$fam"-*."$ext" 2>/dev/null | tail -n +4 || true)
        [ -n "$old" ] && echo "$old" | xargs rm -f || true
      done
    done
    true )
fi

cd "$WORK/site"
git add -A
if git diff --cached --quiet; then
  echo "→ Sin cambios que publicar."; exit 0
fi
git -c user.name="Samuel Sejas" -c user.email="samsejas@gmail.com" \
    commit --quiet -m "${1:-Deploy}"
git push --quiet "$REPO" "$BRANCH"
echo "✓ Publicado. Assets vivos: $(ls "$WORK/site/assets" | wc -l | tr -d ' ')"
