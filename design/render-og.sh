#!/usr/bin/env bash
# Renderiza design/og-card.html → public/og-image.png (1200×630) con Chrome headless.
set -euo pipefail
cd "$(dirname "$0")"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --hide-scrollbars --window-size=1200,630 --virtual-time-budget=5000 \
  --screenshot="$PWD/../public/og-image.png" "file://$PWD/og-card.html" 2>/dev/null
sips -g pixelWidth -g pixelHeight ../public/og-image.png | tail -2
