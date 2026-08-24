# Atlas Liquid Glass — Guía de implementación

> **Para Claude / cualquier IA que reciba este archivo.** Esto es todo lo que necesitás para
> aplicar el design system de **Hatlas** (ERP gastronómico, Bolivia — el rename de «Twenty» a «Hatlas» **está pendiente de ratificación**, ver §Marca) sin abrir el showcase de 988 KB.
> Regla de oro: **no inventes colores, tipografías, sombras ni radios.** Todo sale de acá.
> Copiá el bloque `atlas.css` tal cual, usá los tokens `var(--*)`, y para animar copiá `atlas-anim.js`.

---

## 0. Cómo usar esta guía (checklist)

Este sistema se entrega en **tres archivos**:

| Archivo | Qué es |
|---------|--------|
| **`atlas.css`** | Fuente de verdad: tokens, receta de vidrio, utilities, TODOS los `@keyframes`. Copialo tal cual, no lo edites. |
| **`atlas-anim.js`** | El contrato `data-anim` implementado. Requiere GSAP + ScrollTrigger. |
| **esta guía** | Las reglas y los snippets. Lo que el CSS no puede declarar. |

> **Qué es normativo:** estos tres archivos, y nada más. El **showcase** (`Atlas Design System.dc.html`) y el **Manual de Marca** son ilustrativos: si alguno contradice a `atlas.css` o a esta guía, gana el token. En particular el manual de marca es hoy un bundle sin texto extraíble — no lo citen como spec.

> **Regla de sincronía del showcase (D70).** El showcase se construye **CON** `atlas.css`, no al lado: toda superficie que ya tiene receta va con su clase (`.atlas-glass`, `.atlas-solid`, `.atlas-progress`, `.atlas-breakdown`…), no con `style` a mano. Lo que **no** se pueda escribir con una clase queda **marcado** (una sección o un `data-*`): ese residuo **es** el inventario de recetas faltantes, y si es invisible, las contradicciones (donut pintado a mano, `9px` vs `8`, pista en `--glass-strong`) sólo se cazan por suerte — cuatro de las fichas de la ronda XI nacieron de eso. La regla de desempate «gana el token» sólo funciona si un humano NOTA la contradicción, y con cientos de fondos escritos a mano no la nota. `Shell D32 — dos maquetas.dc.html` ya prueba el molde: linkea `atlas.css` y consume `.atlas-nav-item`, `.atlas-crumbs`, `.atlas-kpi-strip__*`, `.atlas-pagestate`, `.atlas-blobs`. El pendiente es aplicar eso a `Atlas Design System.dc.html` (conversión mecánica, no decisión de diseño) y validar el conteo en cada release: `class="atlas-*"` > 0, y `style` con `background` sobre superficies con receta = 0.

1. Cargá las **fuentes** (§1), después `atlas.css`, y el `<svg id="lg-refract">` (está comentado al final del CSS) una vez en el `<body>`.
2. `<html data-theme="light" data-accent="salvia">`. Cambiar cualquiera de los dos re-tinta todo. No hace falta JS.
3. Para cada UI, copiá el **snippet** del componente (§5) — ya usan `var(--*)` y las clases `.atlas-*`.
4. Si vas a animar: GSAP + ScrollTrigger, después `atlas-anim.js`, después `atlasAnim.init()` (§6).
5. Gráficos: §9. Qué keyframe usa cada componente y si loopea o no: **§10 — leelo, es donde más se equivoca la implementación.**

**Principios de estilo (no negociables):**
- **Dos planos, y el plano lo decide el CONTENIDO.** Vidrio para las superficies en las que el ojo se apoya (shell, nav, hero, panel ambiental); **sólido** para las que se leen (texto ≤13.5px, datos densos, inputs, tooltips, headers sticky, popovers). Si dudás: sólido. Detalle y presupuesto en §4.
- **Máximo 2 superficies con `url(#lg-refract)` por pantalla.** Medido: 14 superficies con la receta completa → 10.6 fps; con 1–2 → 59–87 fps. El costo escala con el **área** de vidrio, no con el ambiente.
- **Un solo acento activo** por pantalla. Los gráficos usan rampas monocromáticas de ese acento, nunca mezcla de los tres.
- Tipografía: **Sora** para títulos/números, **Instrument Sans** para texto/UI. Nada más.
- Números siempre `font-variant-numeric: tabular-nums`.
- Radios generosos (10–24 px), sombras suaves, transiciones 0.15–0.5 s. Sin gradientes agresivos, sin emojis.
- Moneda `Bs 1.234,56` (es-BO), fechas/horas localizadas.

---

## 1. Tipografía

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Instrument+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

| Uso | Familia | Pesos | Notas |
|-----|---------|-------|-------|
| Títulos, cifras, labels de sección | **Sora** | 600 / 700 | `letter-spacing:-.02em` en titulares; `.12–.16em` en overlines |
| Cuerpo, inputs, botones, UI | **Instrument Sans** | 400–600 | `-webkit-font-smoothing:antialiased` en el root |

> **La voz tipográfica es Sora — firme y adoptado.** El serif italic del wordmark viejo no es una excepción tipográfica a negociar: el sistema tiene exactamente dos familias y los títulos son Sora.

### Marca — el nombre del producto (sin ratificar)

> ⚠️ **El nombre del producto es otra cosa, y NO está ratificado.** «Twenty se llama Hatlas» es una decisión de **producto**, pendiente del lado del equipo — no una consecuencia de la regla tipográfica. Mientras no esté ratificada: aplicá Sora en todo, y **no** portes marca (wordmark, nombre en copy) por accidente. La sección de abajo describe los assets **para cuando** esa decisión exista.

### El logo es un asset, no se dibuja

Los archivos oficiales están en `assets/`:

| Archivo | Cuándo |
|---------|--------|
| `hatlas-wordmark-negro.png` | tema claro |
| `hatlas-wordmark-blanco.png` | tema oscuro, y **siempre** sobre foto o relleno de acento |
| `hatlas-isotipo.png` | solo la marca, para espacios cuadrados (avatar, favicon, tile) |
| `hatlas-rounded.png` | isotipo en badge circular + wordmark, para firmas y presentaciones |

> Estos assets aplican **solo si** el rename se ratifica (ver el aviso de arriba). No reemplaces marca en producción con esta sección como único respaldo.

**Reglas:**
- **Nunca redibujes el logo** con divs, barras o SVG improvisado, y nunca lo reemplaces por la palabra «hatlas» en Sora. Es un asset.
- Se elige la **versión** por tema; no se recolorea con `filter: invert()` ni con `mix-blend-mode`.
- Alto de referencia: **26px** en topbar de producto · 20–22px en barras densas y mocks · 24px en footer. Siempre `width:auto`.
- No lo pongas sobre vidrio con foto detrás sin la versión blanca: el wordmark negro sobre imagen desaparece.

**Escala de referencia (clamp para responsive):**
- H1 hero: `clamp(40px,7vw,84px)`, weight 700, `line-height:.98`, `letter-spacing:-.035em`
- H2 sección: `clamp(26px,3.2vw,36px)`, weight 600
- Título de tarjeta: 17px / 600 · Cuerpo: 14.5–15px / `line-height:1.6` · Overline: 12px / 600 / `letter-spacing:.12–.16em`

---

## 2. Modelo de color: acentos + tema

Hay **3 acentos** y **2 temas**. Cada acento define 3 tonos:

| Acento | `ac` (base) | `light` | `deep` |
|--------|-------------|---------|--------|
| **Salvia** (default) | `#3E7C5B` | `#8FBCA4` | `#2F5E45` |
| **Morado** | `#6C5BE0` | `#A79AF5` | `#4B3FB0` |
| **Ámbar** | `#B9772A` | `#E0B278` | `#8A5718` |

Regla de contraste: en **tema claro**, el texto de acento (`--ac-on`) usa **`deep`** — no `ac`: el par tinta-de-acento sobre tinte-de-acento (badge, chip, nav activo, pager… 25 reglas del sistema) no llega a 4.5:1 con `ac` (techo 4.95 Salvia / 3.66 Ámbar), y `deep` pasa en los tres sobre el plano sólido. En **tema oscuro** usa `light`. El CSS de §3 lo resuelve automáticamente; el contraste de estos rótulos tintados se certifica en el plano sólido (§4).
> ⚠️ Ámbar en `ac` sobre claro queda en 3.1:1 (AA-large) — por eso `--ac-on` va en `deep`. Un `<em>` decorativo o un hero de 24px+ sí puede usar `ac` directo.

Neutros de marca: `Hueso #F2EFE8` (bg claro) · `Tinta #17161B` (texto) · `Grafito #55534E` (texto 2) · `Carbón #141317` (bg oscuro).

### Semánticos — REGLA: un semántico nunca es un acento

| Token | Claro | Oscuro | Significa |
|-------|-------|--------|-----------|
| `--ok` | `#2E6B4A` | `#7FB79A` | confirmado, cerrado, pagado |
| `--warn` | `#8F5516` | `#DFA85C` | requiere atención, aún no falló |
| `--info` | `#4453A8` | `#93A2EE` | neutro informativo |
| `--danger` | `#9B453C` | `#E08C82` | falló, se rompió, hay que actuar |
| `--ph` | `rgba(23,22,27,.62)` | `rgba(242,239,232,.86)` | placeholder de campo |
| `--focus` | `--ac-deep` | `--ac-light` | anillo de `:focus-visible` |

**`--focus` es token propio** porque `--ac-on` sobre vidrio claro cae a **3.38:1** (el mismo anillo da 11.37:1 sobre carbón). Se escribe en los DOS bloques de tema **y en la media query `prefers-color-scheme`**, como los otros 19 tokens de tema: sin ese espejo, una pantalla en oscuro que sigue al SO sin `data-theme` dejaba el anillo en 2.24:1.
> **El indicador es el ANILLO** (`outline: 2px solid var(--focus)` + 2px offset, ≥3:1). El halo exterior al 26% es un extra que **no sobrevive** a un `box-shadow` propio: 45 de las 46 declaraciones de `box-shadow` del archivo lo reemplazan (el `box-shadow` no compone). Sobre una superficie elevada —CTA, secundario, tarjeta— la señal que llega es el anillo solo, y alcanza: por eso el anillo es lo que se certifica.

**Por qué `--danger` en oscuro es tan claro:** el texto de error real mide 11.5–13px sobre una tarjeta de vidrio. Un rojo medio (`#C87066`) da 3.70:1 ahí — debajo de AA. Y **`--ph` existe como token propio** porque `--ink3` deja el placeholder en **4.09:1** (`--ink3` compuesto sobre el campo `--glass-strong` apoyado en `--surface`) **en oscuro** — bajo AA para 15px; `--ph` (.86) da 5.92:1. (El «3.67» viejo era de otro par: `#C87066` sobre `--glass`, no del placeholder.)

**Por qué importa:** si «éxito» fuera el verde de Salvia, la marca y un estado dirían lo mismo, y dos estados distintos se verían idénticos — exactamente el bug que rompía el mapa de mesas. `--info` **es azul a propósito**: ningún acento es azul, así nunca colisiona.

Corolario: **nunca uses `--ac-light` o `--ac-deep` como si fueran estados.** Son pasos de la rampa del acento (series de gráfico, avatares, jerarquía), no vocabulario semántico.

---

## 3. Tokens (referencia — el archivo real es `atlas.css`)

> Lo de abajo es el contenido de `atlas.css` §1 para que puedas leer los valores sin abrir el archivo.
> **Usá el archivo, no copies este bloque.** Diferencia importante: en el archivo real las alfas del
> vidrio se derivan de `--gi` (intensidad, canónica **70**) con `calc()`; acá están resueltas a gi=70.

```css
/* ===== ATLAS LIQUID GLASS — TOKENS ===== */
:root{
  /* acento activo (Salvia por defecto) */
  --ac:#3E7C5B; --ac-light:#8FBCA4; --ac-deep:#2F5E45;
  --blur:21px;   /* radio de desenfoque del vidrio */
}
/* ---- Acentos: cambian --ac / --ac-light / --ac-deep ---- */
[data-accent="salvia"]{ --ac:#3E7C5B; --ac-light:#8FBCA4; --ac-deep:#2F5E45; }
[data-accent="morado"]{ --ac:#6C5BE0; --ac-light:#A79AF5; --ac-deep:#4B3FB0; }
[data-accent="ambar"] { --ac:#B9772A; --ac-light:#E0B278; --ac-deep:#8A5718; }

/* ---- Tema CLARO (default) ---- */
:root, [data-theme="light"]{
  --bg:#F2EFE8; --ink:#17161B; --ink2:#55534E; --ink3:rgba(23,22,27,.65);
  --surface:#FFFFFF;
  --glass:rgba(255,255,255,.564);        /* = 0.34 + gi*0.0032 */
  --glass-strong:rgba(255,255,255,.725); /* = 0.55 + gi*0.0025 */
  --glass-border:rgba(255,255,255,.75);
  --glass-hi:rgba(255,255,255,.92);
  --glass-edge:rgba(255,255,255,.6);
  --glass-shadow:rgba(23,22,27,.14);
  --hairline:rgba(23,22,27,.1);
  --blob:.5;
  --ac-on:var(--ac);            /* texto de acento en claro */
  --danger:#9B453C;
}
/* ---- Tema OSCURO ---- */
[data-theme="dark"]{
  --bg:#141317; --ink:#F2EFE8; --ink2:rgba(242,239,232,.80); --ink3:rgba(242,239,232,.64);
  --surface:#1E1D23;
  --glass:rgba(255,255,255,.127);        /* = 0.05 + gi*0.0011 */
  --glass-strong:rgba(255,255,255,.212); /* = 0.10 + gi*0.0016 */
  --glass-border:rgba(255,255,255,.16);
  --glass-hi:rgba(255,255,255,.22);
  --glass-edge:rgba(255,255,255,.16);
  --glass-shadow:rgba(0,0,0,.5);
  --hairline:rgba(242,239,232,.12);
  --blob:.6;
  --ac-on:var(--ac-light);      /* texto de acento en oscuro */
  --danger:#E08C82;
}

/* Root de página */
html,body{ margin:0; }
body{
  background:var(--bg); color:var(--ink);
  font-family:'Instrument Sans',system-ui,sans-serif;
  -webkit-font-smoothing:antialiased;
  transition:background .5s ease,color .5s ease;
}
a{ color:var(--ac-on); text-decoration:none; }
a:hover{ color:var(--ac-deep); }
```

Uso: `<html data-theme="light" data-accent="salvia">`. Cambiar cualquiera de los dos atributos re-tinta toda la UI.

**Filtro de refracción (opcional pero recomendado)** — pegalo una vez en el `<body>` para que `backdrop-filter:url(#lg-refract)` funcione:

```html
<svg aria-hidden="true" width="0" height="0" style="position:absolute">
  <defs><filter id="lg-refract" x="-20%" y="-20%" width="140%" height="140%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="0.011 0.011" numOctaves="2" seed="7" result="n"/>
    <feGaussianBlur in="n" stdDeviation="1.3" result="nb"/>
    <feDisplacementMap in="SourceGraphic" in2="nb" scale="7" xChannelSelector="R" yChannelSelector="G"/>
  </filter></defs>
</svg>
```

---

## 4. Dos planos, presupuesto de vidrio y elevación

> Atlas decía «cada superficie es vidrio». **Ya no.** Medido sobre una pantalla real, esa regla produce dos problemas que no se arreglan token por token: 14 superficies con la receta completa dan **10.6 fps** (opaco: 120), y el contraste sobre vidrio **no es verificable por herramienta automática** — axe reporta 0 violaciones porque no ve el fondo detrás de un `backdrop-filter`.

### La regla: el plano lo decide el contenido, no la jerarquía

| Plano | Para | Clase |
|-------|------|-------|
| **Vidrio** | superficies donde el ojo **se apoya**: shell, nav, hero, panel ambiental, overlay grande | `.atlas-glass` |
| **Sólido** | superficies que se **leen**: texto ≤13.5px, datos densos, inputs, tooltip, header sticky, popover, menú | `.atlas-solid` |

**Si dudás, sólido.** El vidrio es para mirar, no para leer a través. Esto no es una concesión de performance: es que sobre una superficie translúcida el contraste depende de lo que pase por detrás, así que deja de ser una propiedad del diseño y pasa a ser un accidente del scroll.

> **El MATIZ del ambiente es privativo del vidrio (D76).** El verde de las tarjetas del showcase no lo pinta la tarjeta: es `--glass` + los blobs del acento refractando sobre `--bg`. En plano sólido (`--surface` = `#FFFFFF`) ese matiz no existe, y las superficies de datos son sólidas — así que **la app no puede parecerse a su showcase pintando las tarjetas de datos de vidrio**. Si querés el tinte sin ir a vidrio, la única vía sancionada es `.atlas-solid--ambient`: `--surface` teñido un **4%** por el acento (no por `--bg`, que da crema), con el texto todavía sobre AA. Es opt-in y deliberadamente tenue; el default de una superficie de datos sigue siendo blanco.

El sistema ya venía descubriendo esta regla de a un componente por vez — el header sticky del data grid, el `tfoot`, el tooltip, el token `--ph`, el `--danger` aclarado. Las cinco excepciones eran la misma regla pidiendo ser declarada.

### Presupuesto de vidrio (los números)

| Superficies con la receta completa | fps |
|---|---|
| 1 | 86.9 |
| 2 | 59.6 |
| 4 | 36.2 |
| 8+ | 10.6 |

Y descomponiendo: **`url(#lg-refract)` solo ya cuesta el 70%** (solo refract → 17 fps; `blur+saturate+brightness` → 34.6). Por eso:

- **`.atlas-glass` NO lleva refracción.** Es el vidrio estándar: `blur + saturate + brightness`.
- **`.atlas-glass--refract` es el protagonista, techo duro de 2 por pantalla.** Nunca en tarjetas repetidas ni en filas.
- **Vidrio nunca dentro de vidrio.** Una tarjeta dentro de un panel de vidrio es sólida — dos capas de `backdrop-filter` pagan dos veces y el contraste del contenido deja de ser predecible. El CSS ya lo fuerza.
- Área total de vidrio: apuntá a **≤40% del viewport**. Hoy una pantalla mal presupuestada llega al 88%.
- **Ese techo es del plano de REPOSO** (D61β): se mide sobre la pantalla asentada, no sobre los overlays. Un modal, un drawer o un backdrop hacen `inset: 0` por definición — si el techo de área los contara, todo modal del sistema sería ilegal. El backdrop es lo que **no** se lee, así que no entra en el presupuesto; lo que se presupuesta es el vidrio que compite con el contenido en reposo.
- **Diálogos apilados** (un confirm dentro de un modal): **un solo backdrop**, el del shell de abajo. La escala Z no puede meter un `backdrop-filter` entre `--z-overlay` y su propio diálogo, así que el 2º diálogo se apoya sin backdrop propio — con 3 capas de filtro la Σ de área llega a 206% y el viewport entero paga doble (17 fps). Ver la anatomía en §5 (`.atlas-dialog--stacked`).

Lo que **no** sirve, para que no pierdan tiempo: achicar el blob (el blob cuesta **0.0 ms**), `position: fixed`, `contain`. Y `will-change` **empeora** (7.8 fps).

### Degradación declarada

Tres salidas, en orden de prioridad del usuario sobre la del sistema:
1. `@media (prefers-reduced-transparency: reduce)` → superficie sólida y sin blobs.
2. `[data-perf="lite"]` en el `<body>` → escape explícito para equipos sin compositing por GPU, capturas y vistas de export: conserva el color, tira el filtro.
3. `@media print` → siempre sólido.

### Elevación: tres niveles declarados (`--e1` / `--e2` / `--e3`)

Existen para que **nadie invente un `box-shadow`** cuando necesita jerarquía. En un lenguaje donde todo es el mismo material, la jerarquía la da la **elevación**, no un tinte nuevo:

| Token | Uso |
|-------|-----|
| `--e1` | apoyada: fila, chip, tarjeta anidada (en cualquier plano) |
| `--e2` | flotante: tarjeta, panel, barra — el default |
| `--e3` | por encima de todo: popover, menú, diálogo, toast |
| `--e-inner` | la luz interior del vidrio; **se suma** a `--e*`, no lo reemplaza |

Si necesitás tres niveles de jerarquía (el viejo gold / silver / carbon), son **plano + elevación**: una superficie sólida **suelta** flota en `--e2` (el default), y **anidada dentro de otra sólida baja a `--e1`** (`.atlas-solid .atlas-solid`); el vidrio protagonista es `--e3`. No tres sombras nuevas. Así convergen las tres frases del sistema: `.atlas-solid` suelta = `--e2`, la fila `--e1` = «tarjeta anidada», y la escalera = la subordinación por anidamiento.

**`.atlas-card-compact` es geometría, no material:** declara padding + radio y **nada de plano/elevación**. Va emparejada con una clase de plano (`atlas-solid atlas-card-compact`); compuesta anidada, resulta `--e1` por la regla de arriba. La `.atlas-grid-wrap` es la **excepción** — una superficie anidada que **no** flota (es la más grande de la pantalla; flotar una tabla de alto completo es ruido), y por eso su sección hermana tampoco tiene que flotar.

### Cómo se verifica el contraste acá

> **Las herramientas automáticas no ven a través del vidrio.** axe-core reporta **0 violaciones** sobre una pantalla Atlas, no porque esté bien sino porque no puede resolver el fondo real detrás de un `backdrop-filter`. El gate automático de accesibilidad queda de adorno.

Regla del sistema, entonces: **el contraste se certifica en el plano sólido, y se mide muestreando el píxel renderizado** (no el color computado, que sobre vidrio miente). Corolario práctico: si un texto necesita que su contraste esté garantizado, va en plano sólido. Eso es lo que hace que la regla de planos sea también la regla de accesibilidad.

---

## 4a. La receta de vidrio

Copiá el bloque y ajustá solo `border-radius` y `padding`.

```css
/* .atlas-glass — superficie base, SIN refracción */
background: var(--glass);
-webkit-backdrop-filter: var(--glass-filter);   /* -webkit- PRIMERO: lightningcss (Tailwind v4) colapsa el par en la prefijada y descarta la estándar; con el orden inverso Chrome/Firefox se quedan sin desenfoque en build (D53) */
backdrop-filter: var(--glass-filter);
border: 1px solid var(--glass-border);
box-shadow: var(--e2), var(--e-inner);        /* elevación + luz interior */
border-radius: var(--r-xl);
```

La refracción es **opt-in**: agregá `.atlas-glass--refract` a la superficie protagonista, máximo 2 por pantalla (§4). Todo `backdrop-filter` del sistema sale de `--glass-filter` / `--glass-filter-refract`, y las 3 degradaciones apagan **esas variables** — así alcanzan a cualquier superficie, también a las que no lleven clase `.atlas-glass`.

Escalas: `border-radius` 18 (barras/nav) · 20–22 (tarjetas) · 24 (paneles). `padding` 14 (compacto) · 24–34 (tarjetas).
Fondos ambientales opcionales: 3 «blobs» radiales con `--ac-light`, `--ac` y `--ac-deep` a `opacity:var(--blob)` y `filter:blur()`, animados con `floatBlob`. (Los tres salen del acento activo — **ningún hex suelto**, ni siquiera acá.)

---

## 4b. Densidad — cuatro modos, y por qué es local

Atlas nació con una sola densidad, la de vitrina. Una app que se usa 8 horas necesita cuatro. Los componentes consumen `var(--d-*)`; nunca escribas px de layout a mano.

| Modo | `--d-pad` | `--d-row` | `--d-text` | `--d-control` | Para |
|------|-----------|-----------|------------|---------------|------|
| `vitrina` | 28px | 56px | 14.5px | 44px | marketing, showcase, onboarding |
| `comoda` | 20px | 48px | 14px | 40px | **el default de la app**: dashboards, detalle, formularios |
| `densa` | 14px | 36px | 14px | 32px | tablas de 15 columnas, planilla editable, listados largos |
| `tactil` | 22px | 64px | 16px | 56px | POS: se toca con el dedo, a veces con guante |

```html
<div data-density="comoda">        <!-- pantalla cómoda… -->
  <div class="atlas-glass">
    <table class="atlas-table" data-density="densa">…</table>   <!-- …con tabla densa -->
  </div>
</div>
```

> **REGLA: la densidad es LOCAL.** Va en cualquier contenedor, nunca en `<html>`. Una pantalla real es mixta — un dashboard cómodo con una tabla densa adentro — y si la densidad fuera global cada pantalla mixta necesitaría overrides, que es exactamente el problema que la escala viene a resolver.

**Dos pisos que no se negocian:**
- **`--d-text` nunca baja de 14px**, ni en `densa`. Texto de 12–13px en una planilla que se mira todo el día es fatiga, no densidad. Si no entra, sacá columnas.
- **`--d-control` nunca baja de 56px en `tactil`.** El hit target manda sobre la estética: un botón de POS que se falla cuesta una comanda.

Lo que la densidad **no** cambia: radios de marca, la receta de vidrio, la escala tipográfica de titulares, ni los colores. Solo respiración y alto de fila. Si un cambio de densidad altera la identidad, está mal implementado.

---

## 4c. Tipografía operativa — eyebrow, numerales, headers (E4)

### Eyebrow — un tamaño, diez tonos

El rótulo más repetido de la app: encabeza secciones, tarjetas, filas y estados. **El tono es lo único que varía.** Si cambiara tamaño o tracking dejaría de leerse como la misma cosa, y el ojo perdería el ancla que usa para escanear la pantalla.

`11.5px · Sora 600 · letter-spacing .14em · uppercase` — siempre.

| Clase | Color | Cuándo |
|-------|-------|--------|
| `.atlas-eyebrow` | `--ink3` | neutro base, el default |
| `--accent` | `--ac-on` | encabeza una sección de marca |
| `--ink` | `--ink` | rótulo que pesa tanto como el contenido |
| `--muted` | `--ink2` | subordinado dentro de una tarjeta |
| `--hairline` | `--ink3` @ .7 | metadato **decorativo** al borde de lo legible (2.91:1 en claro): NO rotula secciones navegables ni datos — para eso `--muted` o el tono semántico |
| `--ok` `--warn` `--info` `--danger` | tokens semánticos | rotula un **estado**, no una sección |
| `--inverse` | `#fff` @ .88 | el único válido sobre relleno de acento o foto |

Los cuatro semánticos usan los tokens fijos (§2), nunca el acento: un eyebrow que dice «PAGADO» no puede cambiar de significado cuando el negocio elige Morado.

### Numerales — cinco pasos

| Clase | Tamaño | Uso |
|-------|--------|-----|
| `.atlas-num-hero` | **44px** | el KPI protagonista de un dashboard |
| `.atlas-num-xl` | 34px | cifra principal de tarjeta |
| `.atlas-num-lg` | 28px | cifra de tarjeta secundaria |
| `.atlas-num-md` | 20px | total de fila, subtotal |
| `.atlas-num-sm` | **13.5px** (peso 600) | celda de tabla, planilla densa |

44px es el paso nuevo: por debajo, la cifra hero competía con el título de pantalla (26px) en vez de dominarlo. `--sm` baja a peso 600 y `letter-spacing: 0` — a 13.5px el tracking negativo empasta los dígitos.

### Numeral monetario — REGLA

> **El símbolo no compite con la cifra.** `Bs` va a `.62em` en `--ink2`; los decimales a `.68em`. La cifra entera queda como única figura.

El tratamiento tiene **piso**: `.cur`/`.dec` no bajan de 10px (`max(.62em,10px)`), así el símbolo no cae a 9px heredando un contexto chico. **Posición del símbolo:** prefijo por default; `.atlas-money--suffix` lo manda al final con la misma separación (convención fiscal boliviana, «12,00 Bs»), sin aire muerto contra el borde.

```html
<p class="atlas-money atlas-num-xl"><span class="cur">Bs</span>12.480<span class="dec">,00</span></p>
<p class="atlas-money atlas-num-xl atlas-money--suffix">12.480<span class="dec">,00</span><span class="cur">Bs</span></p>
```

**Excepción, y es importante:** en una columna de planilla usá `.atlas-money--plain`. Quince filas de «Bs» gris es ruido, no jerarquía — `--plain` **apaga el tratamiento y conserva el dato** (el símbolo sigue ahí, sin jerarquía, para que la celda pueda nombrar la moneda; el header no está obligado a llevarlo). El tratamiento se ve bien cuando la cifra es un objeto que se mira; estorba cuando es una columna que se escanea.

Negativos: `.atlas-money--neg` (`--danger`). Un negativo es un veredicto, no una categoría — coherente con §9.10.

### Identificador — la cadena que se compara carácter por carácter

Cupón, NIT, SKU, folio de comanda, credencial: una cadena que se **copia, se dicta o se compara** carácter por carácter. No es cifra (no se suma ni se ordena por magnitud — `.atlas-num-*` le inventaría una escala) ni prosa. **Un solo lugar en el sistema, `.atlas-ident`**, no transcrito dentro de cada componente:

- **Lectura** (`.atlas-ident`): Sora 600, `letter-spacing:.04em`, `tabular-nums`. **Nunca monoespaciado** — la display con tracking abierto ya separa los glifos.
- **Tipeo** (`.atlas-ident--input`): familia de UI, sin tabular, `text-transform:uppercase` como **ayuda de tipeo**. El `uppercase` es presentacional: **normalizá el valor a mayúsculas antes de mostrarlo** en el chip, o el mismo código se ve `AMIGO10` en el campo y `amigo10` en el chip que lo confirma.

`.atlas-pos-coupon__code` y `.atlas-reveal-once__val` son especializaciones de la cara de lectura (las dos con `tabular-nums`: una credencial también se compara dígito a dígito).

### Headers — tres, y cuándo cada uno

| Clase | Composición | Dónde |
|-------|-------------|-------|
| `.atlas-page-header` | eyebrow + título 26px + subtítulo + acciones a la derecha | tope de pantalla |
| `.atlas-section-header` | título 16px + acción, baseline alineada | dentro de una página o tarjeta |
| `.atlas-hero-title` | `clamp(32px,5vw,56px)`, fragmentos en `<em>` | marketing, onboarding, estado vacío grande |

El header de página **hereda densidad**: en `densa` el título baja a 20px y el subtítulo se oculta — en una planilla el subtítulo es una línea que le robás a los datos.

En `.atlas-hero-title` el énfasis va con `<em>` y se pinta en `--ac-on` con `font-style: normal`. **Nunca negrita**: el titular ya es 700, así que el peso no puede enfatizar nada — el color sí.

---

## 5. Snippets de componentes

> Todos usan `var(--*)` de §3. La clase `.glass` = la receta de §4 (en `atlas.css` es `.atlas-glass`).
> Los ejemplos son HTML plano; para React/DC, `class`→`className` y `style` inline igual.

### Botones
```html
<!-- Primario -->
<button style="font-family:'Instrument Sans';font-weight:600;font-size:15px;cursor:pointer;padding:12px 22px;border-radius:13px;border:none;color:#fff;background:var(--ac-deep);box-shadow:0 5px 16px color-mix(in srgb,var(--ac) 38%,transparent),inset 0 1px 0 rgba(255,255,255,.35);transition:transform .15s,filter .2s">Primario</button>
<!-- Secundario (vidrio) -->
<button style="font-family:'Instrument Sans';font-weight:600;font-size:15px;cursor:pointer;padding:12px 22px;border-radius:13px;color:var(--ink);background:var(--glass-strong);border:1px solid var(--glass-border);box-shadow:inset 0 1px 0 var(--glass-hi)">Secundario</button>
<!-- Tintado -->
<button style="font-family:'Instrument Sans';font-weight:600;font-size:15px;cursor:pointer;padding:12px 22px;border-radius:13px;border:none;color:var(--ac-on);background:color-mix(in srgb,var(--ac) 14%,transparent)">Tintado</button>
<!-- Fantasma -->
<button style="font-family:'Instrument Sans';font-weight:600;font-size:15px;cursor:pointer;padding:12px 18px;border-radius:13px;border:none;color:var(--ac-on);background:transparent">Fantasma</button>
```
Tamaños: Pequeño `8px 15px / 12.5px / r10` · Mediano `12px 22px / 15px / r13` · Grande `16px 30px / 17px / r16`.
Hover primario `filter:brightness(1.08)` · active todos `transform:scale(.96)`. Icon-only: `44×44`, `place-items:center`, r13.

**Enlace de acción in-situ — `.atlas-linkbtn`.** Un texto que dispara algo en la MISMA pantalla («Volver», «Limpiar filtros», «Ocultar») es un `<button>` que se ve como enlace — no un `<a>` (no navega) ni un `.atlas-btn` (once líneas de texto no son once botones). Va en **tinta** (13px, `--ink2` → hover `--ink`), **no en acento: el acento es para navegar**. El `<a>` de navegación sí va en `--ac-on` (§2–§3). `.atlas-ask-a__link` y `.atlas-crumbs__link` son especializaciones del mismo rol.

### Input / Select / Textarea
```html
<label style="display:block;font-weight:600;font-size:13px;margin:0 0 8px;color:var(--ink)">Nombre del negocio</label>
<input placeholder="ej. La Esquina" style="width:100%;font-family:'Instrument Sans';font-size:15px;padding:13px 15px;border-radius:12px;color:var(--ink);background:var(--glass-strong);border:1px solid var(--glass-border);box-shadow:inset 0 1px 0 var(--glass-hi);outline:none;transition:box-shadow .2s,border-color .2s">
<!-- focus: border-color:var(--ac-on); box-shadow:0 0 0 3px color-mix(in srgb,var(--ac) 22%,transparent) -->
```
Estado error: `color`, `border` y texto de ayuda en `var(--danger)`, fondo `color-mix(in srgb,var(--danger) 8%,transparent)`.
Otros estados del campo: `:disabled` (opacidad .55, cursor `not-allowed`), `[readonly]` (fondo `--ink 3%`, tinta `--ink2`, cursor `default` — el equivalente de campo del `td.ro` de la tabla), y `:hover` (borde apenas más marcado; la afordancia la da el borde ya visible, no un color nuevo).
Select: `appearance:none` + chevron SVG absoluto a la derecha. **`.atlas-select--bare`** apaga el relleno conservando borde, chevron y alto — para un selector dentro de una barra de herramientas densa. Input con icono: `padding-left:42px` + SVG absoluto a 14px.

### Switch / Checkbox / Radio

**Casilla y radio: control NATIVO pintado con `accent-color`** — el mismo camino que el `input range` del slider. El token es **`--ac-deep`**, no `--ac`: con `--ac` el tilde blanco de la casilla sobre Ámbar cae a 3.66:1. El foco es el del navegador sobre el control real (nunca `opacity:0`, que se lleva puesto el anillo). El **interruptor no tiene equivalente nativo**, así que es del sistema (`<button role="switch">`), con la geometría de la vitrina (50×30) y el pulgar por `transform` (§10, no `left`).

```html
<input type="checkbox" class="atlas-check">   <!-- checked / indeterminate / disabled los da el UA -->
<input type="radio" class="atlas-radio" name="g">
<button class="atlas-switch" role="switch" aria-checked="true"></button>
```

Estados: casilla → `:checked` / `:indeterminate` / `:disabled` (del UA, con `accent-color`); interruptor → `aria-checked` on/off, `:disabled`. **`:indeterminate` se declara explícito** (`accent-color: var(--ac-deep)`) — es la casilla de **encabezado de una tabla con selección múltiple** (algunas filas tildadas), y el guión del estado indeterminado **no** hereda `accent-color` en todos los motores; sin la regla, el guión sale del UA mientras el tilde sale del sistema. (D39)

### Segmentado
```html
<div style="display:inline-flex;padding:4px;border-radius:14px;background:var(--glass-strong);border:1px solid var(--hairline)">
  <button style="font-family:'Instrument Sans';font-weight:600;font-size:14px;cursor:pointer;padding:9px 22px;border-radius:10px;border:none;color:#fff;background:var(--ac-deep);box-shadow:0 2px 8px color-mix(in srgb,var(--ac) 30%,transparent)">Hoy</button>
  <button style="font-family:'Instrument Sans';font-weight:600;font-size:14px;cursor:pointer;padding:9px 22px;border-radius:10px;border:none;color:var(--ink2);background:transparent;box-shadow:none">Semana</button>
</div>
```

### Slider / Stepper / Progreso
```html
<!-- Slider: pista var(--glass-strong)+borde --hairline, relleno var(--ac), input range accent-color:var(--ac-on) -->
<!-- Stepper: − en var(--surface), + en var(--ac), cifra Sora tabular-nums -->
<div style="height:10px;border-radius:999px;background:var(--glass-strong);border:1px solid var(--hairline);overflow:hidden">
  <div style="height:100%;width:68%;border-radius:999px;background:var(--ac)"></div>
</div>
```

### Tarjetas
```html
<!-- Stat card (.glass, r22, padding 24) -->
<div class="glass">
  <p style="font-size:12.5px;margin:0 0 12px;color:var(--ink2)">Ventas de hoy</p>
  <div style="display:flex;align-items:baseline;gap:10px">
    <p style="font-family:Sora;font-weight:700;font-size:32px;letter-spacing:-.02em;margin:0;color:var(--ink);font-variant-numeric:tabular-nums">Bs 12.480</p>
    <!-- D46/§9.15(a): el delta va AL LADO del número, en la misma baseline — debajo se lee como un dato aparte. Toma la clase .atlas-delta (badge) o .atlas-kpi__delta (texto) -->
    <span class="atlas-delta atlas-delta--up" style="font-size:11.5px;font-weight:600;padding:3px 8px;border-radius:7px;color:var(--ac-on);background:color-mix(in srgb,var(--ac) 14%,transparent)">↑ 8,2%</span>
  </div>
</div>
<!-- Feature card (sólida, gradiente de acento) -->
<div style="position:relative;border-radius:22px;padding:30px;overflow:hidden;color:#fff;background:linear-gradient(135deg,var(--ac),var(--ac-deep));box-shadow:0 14px 40px color-mix(in srgb,var(--ac) 40%,transparent)">
  <div style="position:absolute;inset:0;background:radial-gradient(circle at 75% 15%,rgba(255,255,255,.35),transparent 55%)"></div>
  <div style="position:relative">…contenido…</div>
</div>
```

### Familia KPI — tres formas

> Las tres formas (`.atlas-kpi` stat card · `.atlas-kpi-strip` · `.atlas-kpi-ed`) viven en §9.15. El markup del **strip** (D24): el tono cuelga del `__cell` y pinta el `__val`, nunca el fondo.

```html
<div class="atlas-kpi-strip">
  <div class="atlas-kpi-strip__cell">
    <span class="atlas-kpi-strip__label">Ventas hoy</span>
    <span class="atlas-kpi-strip__val">Bs 8.420</span>
  </div>
  <div class="atlas-kpi-strip__cell atlas-kpi-strip__cell--warn">
    <span class="atlas-kpi-strip__label">Margen</span>
    <span class="atlas-kpi-strip__val">18%</span>
  </div>
</div>
```

### Badges · Chips
```html
<!-- Status badge: punto + label, color/bg semántico -->
<span style="display:inline-flex;align-items:center;gap:7px;font-size:12.5px;font-weight:600;padding:6px 12px;border-radius:9px;color:var(--ac-on);background:color-mix(in srgb,var(--ac) 13%,transparent)"><span style="width:7px;height:7px;border-radius:50%;background:var(--ac-on)"></span>Pagado</span>
<!-- Chip removible (pill de vidrio) -->
<span style="display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:500;padding:8px 8px 8px 14px;border-radius:999px;color:var(--ink);background:var(--glass-strong);border:1px solid var(--glass-border)">Vegetariano <button style="width:20px;height:20px;border-radius:50%;border:none;cursor:pointer;color:var(--ink2);background:color-mix(in srgb,var(--ink) 8%,transparent)">✕</button></span>
<!-- Notificación (count): min 22px, r999, bg var(--danger), #fff -->
```

**Un tamaño (12.5px), el tono es lo único que varía** — como el eyebrow. 12.5px es el **piso** del rol etiqueta: lo que va por debajo **no es un badge**, es otro rol con su propia razón — `count`/`__count` (11px, una cifra), `.atlas-subtab__soon` (10px, un sello de roadmap), `.atlas-coltype` (10.5px, una inicial de tipo), `.atlas-statuspill` (12px, un control). Un dato que necesita rótulo por debajo de 12.5px se rotula con uno de esos, no con un `.atlas-badge` más chico.

### Estados de entidad (mapa de mesas, tarjetas de recurso)

> **REGLA: los estados se distinguen por MATERIAL, no por matiz.** Un set de estados que necesita tres hues distintos va a robarle color a los otros acentos — y en el acento que coincide, dos estados colapsan. Con un solo acento y cuatro materiales, el mapa se lee en Salvia, Morado, Ámbar, claro, oscuro y en escala de grises.

| Estado | Superficie | Punto | Lectura |
|--------|-----------|-------|---------|
| **Vacío** (libre) | `var(--glass-strong)`, sin tinte | hueco: `2px solid var(--ink3)` | "no pasa nada" — el más callado |
| **En curso** (ocupada) | `color-mix(--ac 14%)` | sólido `var(--ac)` | activo, sin urgencia |
| **Acción pendiente** (por cobrar) | **`var(--ac-deep)` sólido**, texto `#fff` | sólido `#fff` | **el único relleno sólido del mapa: por eso salta** |
| **Futuro** (reservada) | transparente + `2px dashed color-mix(--ac 45%)` | hueco punteado `2px dashed var(--ac)` | comprometido pero todavía no real |

Clases en `atlas.css` §10b: `.atlas-tile--idle` / `--active` / `--action` / `--pending` / `--add`.

**`--add` («agregar uno nuevo») usa punteado NEUTRO, no de acento.** El punteado de acento ya carga dos sentidos — `--pending` («todavía no real») y el chip `--edit` del consultor («editable») —; un tercer sentido sobre el mismo color choca, que es el bug que rompió el mapa de mesas. El contorno neutro + la tinta de acento del texto dicen «crear» sin colisión.

**Selección:** `box-shadow: 0 0 0 2px var(--bg), 0 0 0 4px var(--ac)` — el hueco del color del fondo hace que el halo se vea incluso sobre el relleno sólido de acento, donde un borde de acento sería invisible. No uses `border` para seleccionar: cambia el tamaño y desaparece sobre acento.

**Un solo estado fuerte por vista.** Si dos estados llevan relleno sólido, ninguno llama la atención. El estado que grita es el que cuesta dinero si lo ignorás.

**El relleno sólido va en `--ac-deep`, no en `--ac`** — y el subtítulo en `#fff` puro, no `rgba(255,255,255,.85)`. Con `--ac` el texto de 12px queda en 4.07:1 en Salvia y **3.66:1 en Ámbar**; con `--ac-deep` los tres acentos pasan 4.5:1.

**La leyenda muestra el material, no un punto de color.** Cada muestra es una mini mesa de 26px con el relleno y el borde reales del estado. Una leyenda de puntos vuelve a introducir el bug original: en el acento que coincide, dos entradas se ven como el mismo círculo.

### Navegación (top bar / sidebar / tab bar)

> **La barra entra en dos formas — arriba o a la izquierda — y la elige el ancho del tenant, no la estética.** Con 8 grupos y iconos, la topbar horizontal llena ~1670px y a 1440 el nav scrollea escondiendo la última entrada; el eje vertical (sidebar) no compite por ancho y las entra todas. Regla de qué cede: en la topbar cede primero el nombre del negocio (trunca) y el usuario colapsa a avatar+menú; en el sidebar cede el ancho colapsando a rail de solo-iconos, **nunca una entrada**. Las dos maquetas de referencia están en `Shell D32 — dos maquetas.dc.html`.

**Entrada destacada — `.atlas-nav-item--feature`.** Una barra a veces necesita destacar UNA acción operativa (el POS del cajero): tinte de acento en reposo, relleno de acento (`--ac-deep`, #fff) cuando es la actual. Es **1 modificador**, no `.atlas-btn--primary` — el botón pondría relleno permanente y, con el actual ya en `--ac` 13%, la barra se gastaría el presupuesto de acento de la pantalla. **Máximo una `--feature` por barra.** (D31)

```html
<!-- Top bar: .glass r18, item activo = color var(--ac-on) + bg color-mix(var(--ac) 13%) -->
<!-- Sidebar item activo idem; inactivo color var(--ink2), bg transparent -->
<!-- Avatar: relleno sólido var(--ac-deep) (no gradiente: #fff sobre --ac daba 3.66:1 en ámbar), iniciales Sora #fff. Acepta <img> (recorta con overflow:hidden). Tallas: --sm 30px · 40px default · --lg 52px -->
<!-- Tab bar (móvil): pills 74px, icono 22px + label 11px, activo tintado -->
```

### Lista / Tabla
```html
<!-- Fila de lista: .glass contenedor, filas separadas por 1px var(--hairline); hover bg color-mix(var(--ink) 4%) -->
<!-- Tabla: header bg var(--glass-strong), labels Sora 11.5px letter-spacing .06em var(--ink2);
     celdas 14px; totales Sora tabular-nums alineados a la derecha; filas separadas por --hairline -->
```

### Chat / Mensajería (entre personas)

> **Esto NO es «Preguntale a tu negocio».** Para el consultor de datos ver §6b — son dos componentes distintos y confundirlos es el error de diseño más probable acá.

Anatomía: **lista de conversaciones** · **encabezado de hilo** · **burbujas** · **divisores** · **acuse de recibo** · **adjuntos** · **respuestas rápidas** · **compositor**.

```html
<!-- Burbuja ENTRANTE: avatar 30px r10 tintado + nombre 11.5px arriba -->
<div style="display:flex;align-items:flex-end;gap:9px">
  <div style="width:30px;height:30px;border-radius:10px;display:grid;place-items:center;font-family:Sora;font-weight:600;font-size:11px;color:var(--ac-on);background:color-mix(in srgb,var(--ac) 16%,transparent)">MC</div>
  <div style="max-width:72%">
    <p style="font-size:11.5px;font-weight:600;margin:0 0 4px 3px;color:var(--ink3)">Marco C.</p>
    <div style="padding:11px 15px;border-radius:16px 16px 16px 5px;background:var(--glass-strong);border:1px solid var(--glass-border);box-shadow:0 2px 8px rgba(23,22,27,.05),inset 0 1px 0 var(--glass-hi)">
      <p style="margin:0;font-size:14.5px;line-height:1.5;color:var(--ink);text-wrap:pretty">Mesa 7 salió completa.</p>
    </div>
    <p style="font-size:11px;margin:5px 0 0 4px;color:var(--ink3);font-variant-numeric:tabular-nums">14:28</p>
  </div>
</div>

<!-- Burbuja SALIENTE: acento sólido, cola en la esquina inferior derecha -->
<div style="display:flex;justify-content:flex-end">
  <div style="max-width:72%">
    <div style="padding:11px 15px;border-radius:16px 16px 5px 16px;background:var(--ac);box-shadow:0 5px 16px color-mix(in srgb,var(--ac) 30%,transparent),inset 0 1px 0 rgba(255,255,255,.28)">
      <p style="margin:0;font-size:14.5px;line-height:1.5;color:#fff;text-wrap:pretty">Avisá cuando salga la mesa 9.</p>
    </div>
    <div style="display:flex;align-items:center;justify-content:flex-end;gap:5px;margin:5px 4px 0 0">
      <span style="font-size:11px;color:var(--ink3);font-variant-numeric:tabular-nums">14:29</span>
      <!-- doble check: stroke var(--ac-on) si leído, var(--ink3) si no -->
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--ac-on)" stroke-width="2.2" stroke-linecap="round"><path d="M2 12.5l4 4 8-8.5M10 16.5l1.5 1.5 8-8.5"/></svg>
    </div>
  </div>
</div>

<!-- Compositor: adjuntar · input · emoji · enviar 42px en acento -->
<div style="display:flex;align-items:center;gap:9px;padding:14px 18px;border-top:1px solid var(--hairline);background:var(--glass-strong)">
  <button style="width:38px;height:38px;display:grid;place-items:center;border-radius:12px;border:none;cursor:pointer;color:var(--ink2);background:transparent">📎→icono paperclip</button>
  <input placeholder="Escribí un mensaje…" style="flex:1;min-width:0;font-family:'Instrument Sans';font-size:14.5px;padding:12px 15px;border-radius:13px;color:var(--ink);background:var(--surface);border:1px solid var(--glass-border);box-shadow:inset 0 1px 2px rgba(23,22,27,.05);outline:none">
  <button style="width:42px;height:42px;display:grid;place-items:center;border-radius:13px;border:none;cursor:pointer;color:#fff;background:var(--ac);box-shadow:0 5px 16px color-mix(in srgb,var(--ac) 38%,transparent)">→icono send</button>
</div>
```

**Reglas del chat:**
- Burbuja propia = **acento sólido, texto blanco**; ajena = **vidrio**. Nunca dos acentos distintos entre autores.
- Cola: `border-radius:16px 16px 16px 5px` (entrante) / `16px 16px 5px 16px` (saliente). En mensajes agrupados del mismo autor, las intermedias llevan `5px` en ambas esquinas del lado del autor.
- Hora **siempre fuera** de la burbuja entrante y dentro de la fila de acuse en la saliente. `tabular-nums`.
- **Acuse de recibo:** enviando → reloj `--ink3` · enviado → 1 check `--ink3` · entregado → doble check `--ink3` · leído → doble check `--ac-on` · error → círculo `--danger` + botón "Reintentar".
- Divisor de día: línea `--hairline` + label 11.5px/600 en `--ink3`. Divisor de no leídos: línea en `color-mix(--ac 40%)` + pill tintada.
- Escribiendo: 3 puntos 6px con `@keyframes chatDot` (delays 0 / .18s / .36s) dentro de una burbuja entrante.
- Entrada de mensaje nuevo: `animation:chatIn .3s ease both`.
- Adjuntos del negocio (comanda, factura, foto) = tarjeta `--surface` r11 **dentro** de la burbuja, no texto plano.
- Respuestas rápidas: chips pill tintadas encima del compositor; al tocarlas llenan el input, no envían. (Clase: `.atlas-ask-chip`, compartida con el consultor — ver §6b.)
- Enter envía, Shift+Enter salto de línea. Botón enviar mínimo 42×42.

---

## 6b. Consultor de datos — «Preguntale a tu negocio»

> **La asimetría ES el componente.** En un chat entre personas las burbujas son simétricas porque las dos partes dicen cosas del mismo tipo. Acá **no**: el usuario manda **texto** y el sistema devuelve un **dato**. Por eso no se usa `.atlas-bubble-*` — la pregunta se ve como enunciado y la respuesta se ve como un número que se lee de lejos.

El contenedor es el drawer (§5.3). Esto es la anatomía interna.

### Launcher — `.atlas-ask-fab`

FAB **con label**, esquina inferior derecha del shell, sobre la topbar en z (`--z-nav`). Un icono solo no enseña que se puede *preguntar*, y **esta función no existe para el usuario si no la descubre**. En `tactil` colapsa a círculo de 60px (el pulgar no lee).

Tres estados: **idle** · **abierto** (`aria-expanded="true"` — se repliega al 90% y baja a .55 de opacidad, no desaparece: así el usuario sabe dónde volver) · **pensando** (`--thinking`, el punto late con `pulseDot`). El punto late en vez de girar un spinner porque una consulta que tarda tiene que decir que está *pensando*, no que *carga*.

### Card de respuesta — `.atlas-ask-a` · el corazón

**Orden obligatorio: qué entendió → el número → cómo verificarlo.**

| Parte | Regla |
|-------|-------|
| `__read` | los chips de **interpretación**: métrica + rango de fechas que el parser entendió |
| `__value` | la cifra en `.atlas-money` / `.atlas-num-hero` + `__delta` contra el período anterior |
| `__note` | una línea de contexto («sobre 47 ventas»), 12.5px `--ink3` |
| `__link` | deep-link «ver en Reportes» |
| `__break` | desglose opcional — reusa `.atlas-breakdown` (§9.5b) |

**La fila de interpretación va ARRIBA del número, no abajo.** El parser puede equivocarse, y el usuario tiene que poder **descartar la respuesta antes de creérsela** — si el rango aparece debajo de la cifra, ya la leyó y ya la creyó. Un número sin su pregunta es un rumor.

**El chip de rango es editable** (`--edit`, borde punteado): corregir «ayer» por «anteayer» sin reescribir la pregunta entera.

**El deep-link no es opcional.** La respuesta es un **atajo** al reporte, no un reemplazo: la pantalla real es donde el dato es auditable, y una cifra sin salida a su fuente no se puede defender frente al contador.

### Chips de sugerencia — `.atlas-ask-chip`

Dos trabajos, y ninguno es «quick reply»:
1. **Enseñan qué se puede preguntar.** Un input vacío no comunica su vocabulario.
2. **Funcionan sin LLM.** Son consultas fijas — andan con el parser caído, sin cuota, sin conexión al modelo. El `__dot` de acento marca justamente esas.

**Al tocarlas llenan el input, no envían.** Así el usuario aprende la *forma* de la pregunta y puede editarla antes de mandarla — que es cómo pasa de las sugerencias a preguntar por su cuenta.

### Pensando — `.atlas-ask-thinking`

**No uses `.atlas-typing`: nadie está tipeando.** Es una consulta corriendo, así que se muestra el **esqueleto de la respuesta que viene** (`.atlas-skeleton--eyebrow` + `--num-xl` + `--small`): el usuario ya sabe qué forma va a tener y dónde mirar cuando llegue.

### Los tres estados

| Estado | Clase | Regla |
|--------|-------|-------|
| No te entendí | `.atlas-ask-fail` | **obliga** a mostrar los chips como salida |
| Error de conexión | `.atlas-ask-err` | distinto del anterior: acá la acción es *reintentar*, la pregunta estaba bien |
| Límite diario | `.atlas-ask-limit` | cuenta explícita (`__count`), tono `--warn`, y **no** se redacta como error del usuario |

«No te entendí» **sin** sugerencias deja al usuario adivinando la sintaxis — por eso los chips son parte del estado, no un extra.

```html
<div class="atlas-drawer">   <!-- el drawer YA es sólido (rellena --surface); NO le cuelgues data-plane="solid": sería un no-op, no un re-planeo. Para re-planear de verdad, poné el atributo sobre una superficie de VIDRIO declarada antes del bloque (D3) -->
  <div class="atlas-ask-thread">

    <p class="atlas-ask-q">¿cuánto vendí ayer?</p>

    <div class="atlas-ask-a">
      <div class="atlas-ask-a__read">
        <span class="atlas-ask-a__chip">Ventas netas</span>
        <span class="atlas-ask-a__chip atlas-ask-a__chip--edit">28 jul · todo el día</span>
      </div>
      <div class="atlas-ask-a__value">
        <span class="atlas-money atlas-num-xl">Bs 4.820,00</span>
        <span class="atlas-ask-a__delta atlas-ask-a__delta--up">↑ 12% vs. martes</span>
      </div>
      <p class="atlas-ask-a__note">Sobre 47 ventas cerradas. No incluye 2 pedidos abiertos.</p>
      <a class="atlas-ask-a__link" href="/reportes/ventas?d=2026-07-28">Ver en Reportes →</a>
    </div>

    <div class="atlas-ask-fail">
      <p class="atlas-ask-fail__title">No entendí la pregunta</p>
      <p class="atlas-ask-fail__body">Probá con una de estas, o preguntame por un plato,
        un rango de fechas o un canal.</p>
      <div class="atlas-ask-chips">
        <button class="atlas-ask-chip"><span class="atlas-ask-chip__dot"></span>¿Cuánto vendí hoy?</button>
        <button class="atlas-ask-chip"><span class="atlas-ask-chip__dot"></span>Plato más vendido esta semana</button>
        <button class="atlas-ask-chip">Comparar delivery vs. salón</button>
      </div>
    </div>

  </div>
  <div class="atlas-ask-composer">
    <textarea class="atlas-ask-composer__input" rows="1" placeholder="Preguntá por ventas, platos, costos…"></textarea>
    <button class="atlas-ask-send"><svg data-icon="arrow-up"></svg></button>
  </div>
</div>

<button class="atlas-ask-fab" aria-expanded="false">
  <span class="atlas-ask-fab__dot"></span>
  <span class="atlas-ask-fab__label">Preguntá a tu negocio</span>
</button>
```

```css
@keyframes chatDot{0%,60%,100%{transform:translateY(0);opacity:.45}30%{transform:translateY(-4px);opacity:1}}
@keyframes chatIn{from{opacity:0;transform:translateY(8px) scale(.97)}to{opacity:1;transform:none}}
```

### Overlays (modal / hoja / popover / command palette)

> **Los overlays van en plano SÓLIDO** (`.atlas-solid--raised`), no en vidrio: llevan texto y decisiones, y tienen que ocluir lo de atrás. El vidrio queda para el **backdrop**, que es justamente lo que **no** se lee.

```html
<!-- Backdrop: el filtro sale de la VARIABLE (--backdrop-filter), no un blur literal -->
<div class="atlas-backdrop"></div>
<!-- Diálogo: plano sólido elevado, radio de la escala (--r-2xl), anatomía propia -->
<div class="atlas-solid atlas-solid--raised atlas-dialog">
  <div class="atlas-dialog__head">
    <h2 class="atlas-dialog__title">Transferir ítems entre bodegas</h2>
  </div>
  <div class="atlas-dialog__body">…contenido…</div>
  <div class="atlas-dialog__foot">
    <button class="atlas-btn atlas-btn--secondary">Cancelar</button>
    <button class="atlas-btn atlas-btn--primary">Transferir</button>
  </div>
</div>
<!-- Todos cierran con Escape y clic en backdrop. -->
```

**Anatomía y tamaño del diálogo.** El título es `.atlas-dialog__title` (Sora 22px, **fijo** — no `clamp`: el diálogo mide 460px a cualquier viewport, un título fluido contra el ancho de pantalla se parte a 2 líneas). El radio sale de la escala (`--r-2xl`), no de un `28px` a mano. **Anchos:** 460px default (formulario de una columna) · `--md` 560px (dos columnas, tabla de confirmación) · `--lg` 720px (wizard). Más ancho que `--lg` deja de ser un diálogo: es una pantalla o un drawer. `.atlas-sheet` y `.atlas-popover` comparten la anatomía; el popover toma `--r-lg`. **Eje horizontal único:** cabecera, cuerpo y pie sangran los mismos 32px — el margen negativo lleva el divisor de borde a borde y el padding lo devuelve. El diálogo es de padding fijo (mide 460px a cualquier densidad), así que las bandas usan ese mismo fijo, no `--d-pad-x`: si no, el título arrancaba 12–20px a la izquierda del cuerpo y el desalineo cambiaba con la densidad mientras el cuerpo no se movía. (D38)

**Diálogo apilado (`.atlas-dialog--stacked`).** Un confirm SOBRE un modal (27 pantallas lo hacen) no monta backdrop propio — lo pinta el shell de abajo (el presupuesto de vidrio, §4b, explica por qué). Para despegarse del diálogo de abajo, el de arriba lleva **tinte propio** (un pelín de acento sobre `--surface`) y sube a `--e3`; no una sombra inventada. Es la única pieza del caso apilado que la escala Z no derivaba sola. (D61)

### Tooltip — la única superficie invertida, y **es** su mecanismo

`.atlas-tooltip` es la única superficie **invertida** del sistema (`background: var(--ink)`, texto `var(--bg)`): un tooltip no compite con la pantalla, la interrumpe. Pero un tooltip **es** su mecanismo de posicionamiento — sin eso era sólo un chip de texto invertido. La familia declara las cinco cosas que definen el rol:

- **Contrato de contenido: ELEMENTO, no `attr()`.** El texto va como hijo del `.atlas-tooltip` (`attr(data-tooltip)` no envuelve ni admite marcado interno). Para accesibilidad el disparador sigue llevando `aria-label`/`aria-describedby` — el tooltip visual **no** reemplaza el nombre accesible (justo el caso del botón de ícono, donde el `title` nativo era el fallback del nombre).
- **Posición:** absoluta dentro de un ancla `position:relative` (`.atlas-tt-anchor`). El **lado estático** lo da `[data-side]` (`top` por defecto · `bottom` · `left` · `right`), con la punta re-anclada por lado. El **flip** contra el viewport lo pone el JS cambiando `[data-side]` — el **mismo contrato** que combo/datepicker/FilterSelect («la clase/el atributo lo pone el JS midiendo el espacio»).
- **Techo de ancho:** `max-width: 240px` + `width: max-content` — un texto largo corta en más de una línea en vez de estirarse.
- **Capa:** `--z-popover` (la que la escala §13 ya le reservaba).
- **No se come el click:** `pointer-events: none`.

```html
<span class="atlas-tt-anchor">
  <button class="atlas-btn atlas-btn--icon" aria-label="Exportar">⇩</button>
  <span class="atlas-tooltip" data-side="top" role="tooltip">Exportar a CSV</span>
</span>
```

> El rol nativo `title=` queda para lo que Atlas no monta como pantalla propia; dentro de una pantalla de Atlas, `.atlas-tooltip` — con techo de ancho y control de lado — reemplaza el estilo del sistema operativo.

### Cola de toasts — el undo vive acá

Un toast suelto no alcanza. **La cola es el componente; el toast es su hijo** (`.atlas-toast-queue` > `.atlas-toast`), porque la operación real dispara varios seguidos: guardé 3 precios, borré una fila, se cayó la conexión.

- **Posición de app, no de landing:** abajo-izquierda, lejos del centro donde vive el trabajo. En `tactil` (POS) va **arriba**, para que la mano y el teclado no lo tapen.
- El más nuevo **abajo** (`column-reverse`): el ojo ya está ahí.
- **La variante no se codifica SÓLO por color** (WCAG 1.4.1): cada tono expone `--toast-tone`, que pinta el borde izquierdo **y** el glifo de `.atlas-toast__icon` — dos toasts que sólo difieren en el modificador difieren en la franja y en el ícono, no en 3px de color. El glifo por variante lo pone el consumidor; el texto igual lleva la carga semántica (un toast de error dice **qué** falló). El toast no se tiñe entero. (D36)
- **Acción inline «Deshacer»** (`.atlas-toast__action`): es el motivo de que la cola exista. Nunca un icono solo — un undo tiene que decir qué deshace.
- `.atlas-toast__timer` muestra cuánto queda para deshacer. Un undo con plazo invisible es un undo que se pierde.
- Salida = la entrada al revés (`animation-direction: reverse`).

### Página-estado y skeleton

**Una sola anatomía, cuatro tonos** (`.atlas-pagestate--empty|error|denied|soon`): icono en caja tintada + eyebrow + título + cuerpo + **una** acción. Cambia el tono, **nunca la forma** — así el usuario reconoce «no hay nada que hacer acá» antes de leer. `--inline` para cuando va dentro de una tabla o tarjeta chica.

**La acción es `.atlas-pagestate__action`, y su variante la fija el tono** — no queda a criterio de quien arma la pantalla:

| Tono | Variante | Por qué |
|------|----------|---------|
| `--empty` | primaria (relleno `--ac-deep`) | hay algo que hacer: crear el primer registro |
| `--error` | primaria | «Reintentar» es la salida real |
| `--denied` | secundaria | la salida es irse, no insistir |
| `--soon` | ghost, **o ninguna** | no hay nada que hacer todavía |

**Plano:** el pagestate **no pinta superficie**. Vive dentro de una `.atlas-card` o de una celda de grid y hereda ese plano — nunca es vidrio propio.

**En fila y compacto.** `.atlas-pagestate--inline` voltea a fila (celda de tabla, tarjeta chica). La base son 5 hijos planos en columna, así que en fila el texto va agrupado en **`.atlas-pagestate__text`** (un bloque al lado del icono); sin ese bloque, eyebrow/título/cuerpo/acción se alinean los cuatro uno al lado del otro. En fila se emiten **icono + `__text`** (el eyebrow entra dentro del bloque). (D35) · `.atlas-pagestate--compact` baja el icono a 28px (< 46) para el vacío de un contenedor chico — panel angosto, columna. Para un contenedor de **menos de 40px de alto** (una paleta de chips) el vacío NO es este rol: va como texto tenue en línea, no como pagestate. (D28)

```html
<div class="atlas-card">
  <div class="atlas-pagestate atlas-pagestate--empty">
    <div class="atlas-pagestate__icon"><svg data-icon="package"></svg></div>
    <p class="atlas-pagestate__eyebrow">Inventario</p>
    <h3 class="atlas-pagestate__title">Todavía no cargaste insumos</h3>
    <p class="atlas-pagestate__body">Cuando cargues el primero vas a ver el costo por plato
      y las alertas de stock bajo.</p>
    <button class="atlas-pagestate__action">Cargar insumo</button>
  </div>
</div>
```

**El skeleton hereda la métrica del texto que reemplaza**, no es un bloque genérico: `--text` `--small` `--title` `--num` `--eyebrow` `--row` `--avatar`. El alto sale del `line-height` real del contenido que va a llegar. **La receta base declara `display: block`** — sin él, sobre un `<span>` (inline por defecto) ninguno de los modificadores de alto/ancho aplica y el esqueleto mide 0px. (D30) Para lo que **no es texto**: `--control` (alto = `--d-control`, el mismo token que leen los controles del sistema bajo `[data-density]` — **no** `.atlas-input`, que declara `padding` fijo y **no** lee el eje) y `--tile` (bloque cuadrado); el valor ya vive en el sistema, el modificador sólo lo nombra. (D29) El skeleton hereda la métrica del contenido final, así que **no hay salto de layout** cuando llega el dato. `--last` acorta la última línea de un párrafo (si no, parece un bloque sólido).

**Valor AUSENTE (fuera de un campo).** Un «Sin categoría», «sin contacto», una celda sin dato: se distingue con **`.atlas-absent`** — tinta `--ink3`, y el **em dash** como glifo cuando convive con valores presentes en la misma columna. No es `--ph` (ése es el placeholder de un *input*) ni `.atlas-pagestate--empty` (ése es el vacío de un contenedor entero; §6b lo acota a >40px de alto — por debajo va como texto tenue en línea, que es justo este rol). **Nunca `italic`:** Atlas no tiene itálica (§4c), así que la oblicua sintética no es la señal. (D54)

---

## 6. Animación — contrato `data-anim` + `atlas-anim.js`

El archivo **`atlas-anim.js`** implementa todo esto. No lo reescribas: cargalo.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="atlas-anim.js"></script>
<script>atlasAnim.init();</script>
```

Después poné el atributo en el elemento:

| Atributo | Efecto | Extras |
|----------|--------|--------|
| `data-anim="text-reveal"` | titular revela palabra por palabra desde abajo | `data-stagger="0.06"`, `data-delay="0.1"` |
| `data-anim="clip-reveal"` | wipe al entrar en viewport | `data-direction="left\|right\|up\|down"` |
| `data-anim="sticky-nav"` | la barra gana sombra y se comprime al scroll | `data-threshold="20"` |
| `data-anim="fade-up"` | sube + aparece, escalonando sus hijos | `data-stagger`, `data-y` |
| `data-anim="count"` | cuenta la cifra hasta `data-count` (formato es-BO) | `data-count`, `data-dec`, `data-prefix`, `data-suffix`, `data-dur` |
| `data-anim="none"` | opt-out del fade-up automático | — |
| *(automático)* | toda `<section>` sin `[data-anim]` hace fade-up escalonado | `init({autoSections:false})` lo apaga |

**Garantías del archivo** (no las reimplementes):
- `prefers-reduced-motion: reduce` → no anima y el contenido queda **visible en su estado final**.
- **Nada se esconde antes del primer tick real del reloj.** `gsap.from()` escribe el estado oculto al instante, así que en un contexto donde el reloj no avanza (pestaña en segundo plano, print/PDF, pipelines de captura) el elemento se quedaría invisible para siempre. El archivo espera un tick antes de esconder nada: sin reloj, el reposo es el estado visible.
- Red de seguridad a los 1200 ms que revela cualquier cosa que siga oculta, **incluidos descendientes** (palabras del titular, bloques con `clip-path`), no solo hijos directos de sección.
- Si GSAP no cargó, reintenta 50× cada 140 ms y después se rinde sin romper la página.
- Idempotente (`data-aa-done`): podés llamar `atlasAnim.refresh()` después de renderizar contenido nuevo.
- `sticky-nav` anima **el primer hijo** del elemento marcado, no el elemento en sí.

> **La regla detrás de todo esto:** el estado inicial de un tween no puede ser lo único que separa al usuario del contenido. Si la animación no corre, el contenido se ve.

**Escalonar una PILA de pistas** (D65). El stagger CSS de barras usa `:nth-child`, que sólo compone cuando los elementos son **hermanos** — el caso de las barras verticales de un gráfico. El relleno de una barra de progreso / desglose es **hijo único de su `__track`** (una pista por fila), así que todas son `:nth-child(1)` y la cascada no degrada: desaparece. Para esa forma el enganche es un **índice**, no la posición: poné `--anim-i: 0,1,2…` en cada `.atlas-anim-fill` (o en la fila que lo contiene, que hereda) y el sistema fija el paso (40ms) y el techo (5). No inventás el tiempo, sólo numerás las filas. Y si una pila de pistas **no** debe llevar cascada, no pongas `--anim-i`: entran juntas, que es una decisión legítima.

Los `@keyframes` CSS (todos) están completos en **`atlas.css` §15**. Cuál usa cada componente y si loopea o no: **§10**.

**Microinteracciones con clase (D78).** Las cinco que §10 documenta como producción ya no se escriben a mano (eso viola `no-handwritten-motion`): `.atlas-shimmer` (barrido one-shot al montar), `.atlas-breathe` (CTA, one-shot ×2 máximo), `.atlas-ripple` (one-shot, remové el nodo en `animationend`), `.atlas-dots3` (los 3 puntos del botón en vuelo — el único que loopea, mientras la promesa vive). `heartPop` **no** recibe clase: 0 consumidores (no hay favoritos), y receta sin consumidor es código dormido (§1) — su keyframe queda para cuando exista la feature.

**Entrada del anillo de N segmentos (D79).** `.atlas-anim-gauge` anima `stroke-dashoffset`, que en arcos CONTIGUOS es *dónde empieza* cada arco — animarlo los hace ORBITAR, no entrar. `.atlas-anim-seg` es la entrada correcta: cada `<circle>` de segmento aparece por **opacidad** (no toca `dashoffset`), escalonado por `--anim-i` (mismo mecanismo que D65: paso 40ms, techo 5), así el anillo se arma arco por arco. El total del centro entra después, con `.atlas-live` si cuenta. Termina en el valor final (`fill-mode: both`), y `prefers-reduced-motion` lo deja en opacidad 1.

### Una animación que APLICA crea contexto de apilamiento — y atrapa popovers (D97)

> **`.atlas-reveal` usa `fill-mode: backwards`, no `both`.** Es la regla más contraintuitiva del motion de Atlas y vale escribirla entera, porque el síntoma no se parece a la causa: *el calendario del filtro salía **debajo** de las tarjetas KPI*, con `--z-popover` (58) correctamente puesto y sin que las tarjetas declararan ningún `z-index`.

La causa inmediata: con `fill-mode: both` la animación **sigue aplicando después de terminar**, y una animación que aplica y toca `transform`/`opacity` crea un **contexto de apilamiento**. El `58` del popover queda encerrado en el bloque de su tarjeta, y los hermanos posteriores pintan encima.

Pero **medimos las tres salidas que la ficha ofrecía y dos no funcionan**, así que la respuesta del sistema es la tercera:

- **Retocar el `to` del keyframe: NO.** Una variante que termina en `transform: none` en vez de `translateY(0)` falla idéntico — lo que crea el contexto es *que la animación aplique*, no su valor final.
- **Cambiar el `fill-mode`: NO ALCANZA.** `.atlas-reveal` pasó a `backwards` porque es **higiene** (con `both` la animación aplica para siempre), pero con control positivo el popover **sigue atrapado**: en Chromium el contexto sobrevive mientras el objeto `animation` existe.
- 🔴 **Y la causa de fondo no es la cascada: es el VIDRIO.** `backdrop-filter` crea contexto de apilamiento **siempre**, con animación o sin ella — y la tarjeta que aloja el calendario es `.atlas-card`, o sea vidrio. **Un popover anclado dentro de una superficie de vidrio está atrapado por construcción.** `position: fixed` tampoco escapa: un `fixed` dentro de un ancestro filtrado sigue confinado.
- ✅ **Lo único que escapa es estar AFUERA — se PORTALIZA.** `.atlas-popover-layer` se monta como **último hijo del shell** (hermana del contenido, nunca descendiente de una tarjeta) y el popover se renderiza adentro con **coordenadas de viewport** calculadas desde su disparador. Verificado con control: el mismo popover que queda debajo dentro de `.atlas-card` queda encima al montarse en la capa. La capa lleva `pointer-events: none` (no come clics) y el hijo `auto`; el `z-index` sale de `--z-popover`, así que la escala sigue mandando.

> **La regla que se sigue, y aplica a los cinco popovers del sistema** (`.atlas-datepick__pop`, `.atlas-combo__list`, `.atlas-fsel__pop`, `.atlas-menu`, `.atlas-tooltip`): **si el disparador vive dentro de una superficie de vidrio o de un bloque animado, el popover se portaliza.** Si vive en plano sólido y sin cascada, el anclaje local alcanza y `--z-popover` funciona. El anclaje no se pierde: se calcula del `getBoundingClientRect()` del disparador, que es lo que el auto-flip de `--up`/`--right` ya hacía.

**Regla general de `fill-mode`:** una entrada cuyo estado final existe en la hoja va con `backwards`; `both` sólo cuando el estado final **no** existe ahí (el caso de `.atlas-anim-*` sobre SVG, que arrancan en `opacity: 0`).

**El nodo del ripple es del sistema (D93).** `.atlas-ripple` ahora trae **su círculo** (posición absoluta, `border-radius: 50%`, `pointer-events: none`, tinta `--ac` al 34%) y el keyframe escribe su **`from`** (`scale(0)`, `opacity: .6`), que antes vivía en un handler del showcase — y el re-sync copia `atlas.css` y nada más, así que media anatomía del rol no podía llegar nunca. El host lleva `.atlas-ripple-host` (`position` + `overflow: hidden`, o el círculo se escapa de la caja). **Lo que queda del consumidor, y sólo eso:** la posición y el tamaño del nodo (`size = max(w,h)`, `left/top = puntero − size/2`) y removerlo en `animationend` — depende del evento, no del diseño. Duración canónica: `.55s var(--ease-out)` (el artboard decía `.6s ease-out`; gana la clase).

---

## 7. Iconos — reglas de trazo

Línea, `stroke-width:1.8`, `stroke="currentColor"`, `fill:none`, `stroke-linecap:round`, `stroke-linejoin:round`, viewBox `0 0 24 24`. **Sin relleno y sin color propio:** el icono hereda el `color` del contenedor, así sigue al tema y al acento solo. Nunca escales un icono con `transform` — cambiá `width`/`height` para que el trazo no engorde.

El catálogo curado está en §8.

---

## 7c. Data grid — la tabla de trabajo (§8b del CSS)

`.atlas-table` es para **mostrar** filas. `.atlas-grid` es para **trabajar** sobre ellas: 15 filas visibles, edición en celda, totales al pie, header que no se va. Son dos componentes distintos, no dos tamaños del mismo.

Y `.atlas-grid` tiene **dos formas**. La default es una **LISTA**: cada columna es un atributo distinto, la línea vertical es ruido y el rótulo va `nowrap`. La otra es la **MATRIZ** (`.atlas-grid--matrix`): producto × columna, todas las columnas la misma magnitud, donde la columna **es** la unidad de comparación — ahí la vertical sí es dato (canto con `--hairline` entre columnas) y el rótulo **envuelve** con el nombre completo (nombres largos como «Producción del día» no tienen inicial que los reemplace). El marcador de tipo (`.atlas-coltype`) **no vive en el header de la matriz**: el header ya muestra el nombre entero.

### Anatomía

| Parte | Regla |
|-------|-------|
| `thead th` | **sticky y opaco** (`var(--surface)`, no vidrio). Un header translúcido sobre filas que pasan por debajo es ilegible — es el caso testigo de §4. |
| `tfoot` | sticky abajo, mismo tratamiento opaco. Los totales se leen mientras scrolleás. Con `--freeze`, la **primera celda del `tfoot` también se congela** (si no, «Total» se va de vista al scrollear en horizontal). |
| `--freeze` | primera columna sticky; su `th` sube a `z-index: 3` para ganarle al header. En una **matriz** congelada esa columna lleva canto a la derecha (el vecino le pasa por debajo y no se lo puede dibujar). |
| `--matrix` | producto × columna: canto vertical entre columnas y **rótulo que envuelve**, con `vertical-align: bottom` para que los rótulos compartan una sola línea de base. Sin esto, `nowrap` fija un piso de ~958px con 9 rótulos y la última columna se scrollea. |
| Fila | alto `var(--d-row)`. La densidad la fija el contenedor, nunca px a mano. |
| Cifras | el input y la celda de lectura miden **lo mismo** (`var(--d-text)`, ≥14px): antes leían 13.5 y editaban 14 en la misma planilla. `tabular-nums`, a la derecha. En columna monetaria el `Bs` va **en el header**. La receta de campo (caja + rol numérico) alcanza a los **tres** regímenes editables sin clases extra. |
| Tipo de columna | `.atlas-coltype` (letra, un tono) va en chrome compacto —config de columna, chips de filtro—, **no en el header de la planilla**: la matriz muestra el nombre entero. |
| `-bulk` | barra de selección múltiple; aparece cuando hay filas elegidas, tinte de acento al 13%. |

### Los 4 regímenes de celda

Una planilla de gastronomía no tiene un solo tipo de edición. Cada régimen se **ve** distinto porque exige algo distinto:

| Régimen | Clase | Qué muestra |
|---------|-------|-------------|
| Entrada directa | `td.editable` | el input, y nada más. Precio, nombre, cantidad. |
| **Conteo físico** | `td.count` | el input **y al lado la varianza** contra lo esperado (`__expected` + `__var`). El operador tiene que ver que difiere mientras tipea, no al guardar. |
| **Lote aditivo** | `td.add` | `+N` sobre lo existente, mostrando el **acumulado resultante** en `__running`. Recepción de mercadería: se suma a lo que hay. |
| **Solo lectura** | `td.ro` | la celda existe, se alinea con las demás, y **se nota que no se edita** (fondo con 3% de tinta, cursor `default`, sin foco). Una celda vacía no comunica «acá no». |

**La varianza no va en ámbar.** Ámbar ya significa «modificado, sin guardar» (`td.dirty`) en la misma planilla. La varianza usa **signo + flecha** en `--ink2` (dentro de tolerancia) o `--danger` (fuera): es un **dato** — tiene magnitud y signo — mientras dirty es un **estado** binario y transitorio. Dos significados del mismo color en el mismo viewport es el bug que rompió el mapa de mesas.

### Modelo de teclado — contrato, no sugerencia

Quien carga 200 precios no toca el mouse. Esto es Excel y no se negocia:

| Tecla | Efecto |
|-------|--------|
| `Enter` | confirma y **baja** una fila (en la última, queda) |
| `Tab` / `Shift+Tab` | confirma y va a la **derecha** / izquierda, salteando `td.ro` |
| `Esc` | **revierte el draft** de la celda y sale del modo edición |
| Flechas | navegan entre celdas cuando **no** estás editando |
| Tipear sobre celda enfocada | **reemplaza** el contenido y entra en edición |
| `Ctrl/⌘ + Z` | deshace la última celda confirmada (vía cola de toasts) |

Dos reglas que se olvidan: `Esc` revierte **el draft**, no la fila entera; y la navegación **saltea las celdas de solo lectura** — si el Tab cae en una celda que no se edita, el operador pierde el ritmo.

### Autosave en 3 capas

No hay botón de guardar, así que el feedback tiene que estar en las tres escalas a la vez:

1. **Celda** — `td.saving` (spinner de 10px) → `td.saved` (tick de `--ok`, vive **1.4s** y se va). Es la confirmación inmediata.
2. **Fila** — `tr.saving` / `tr.saved`: barra de 2px en el borde izquierdo. Agrupa el resultado de varias celdas.
3. **Tabla** — `.atlas-grid-status`: «Guardando…» / «Todo guardado» / «2 sin guardar». Es lo que el usuario mira antes de cerrar la pestaña.

**¿Dónde va el error si la celda ya perdió el foco?** En la celda (`td.err`, borde de `--danger`) **y** en la cola de toasts con acción «Reintentar». La celda sola no alcanza: puede estar fuera de pantalla cuando falla.

### Snippet

```html
<div class="atlas-grid-wrap" data-density="densa">
  <div class="atlas-grid-status atlas-grid-status--saved">
    <span class="atlas-grid-status__dot"></span>Todo guardado
  </div>
  <table class="atlas-grid atlas-grid--freeze">
    <thead>
      <tr>
        <th>Insumo</th>
        <th>Costo (Bs)</th>
        <th>Conteo físico</th>
        <th>Recepción</th>
        <th>Costo/plato (Bs)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Carne molida</td>

        <!-- 1 · entrada directa -->
        <td class="editable dirty"><input value="38.50" class="atlas-num-sm"/></td>

        <!-- 2 · conteo físico: la varianza se ve MIENTRAS tipea -->
        <td class="count">
          <div class="wrap">
            <input value="11.2" class="atlas-num-sm"/>
            <span class="atlas-grid__expected">esp. 12.0</span>
            <span class="atlas-grid__var atlas-grid__var--out">↓ 0.8</span>
          </div>
        </td>

        <!-- 3 · lote aditivo: +N y el acumulado resultante -->
        <td class="add">
          <div class="wrap">
            <span class="atlas-grid__op">+</span>
            <input value="6" class="atlas-num-sm"/>
            <span class="atlas-grid__running">= 17.2</span>
          </div>
        </td>

        <!-- 4 · solo lectura: existe, se alinea, y se nota que no se edita -->
        <td class="ro atlas-num-sm">4.81</td>
      </tr>
      <tr class="saved">
        <td>Queso criollo</td>
        <td class="editable saved"><input value="22.00" class="atlas-num-sm"/></td>
        <td class="count">
          <div class="wrap">
            <input value="8.0" class="atlas-num-sm"/>
            <span class="atlas-grid__expected">esp. 8.0</span>
            <span class="atlas-grid__var">—</span>
          </div>
        </td>
        <td class="add"><div class="wrap"><span class="atlas-grid__op">+</span><input value="0" class="atlas-num-sm"/><span class="atlas-grid__running">= 8.0</span></div></td>
        <td class="ro atlas-num-sm">2.75</td>
      </tr>
    </tbody>
    <tfoot>
      <tr><td>Total</td><td class="atlas-num-sm">60.50</td><td></td><td></td><td class="atlas-num-sm">7.56</td></tr>
    </tfoot>
  </table>
</div>
```

Estados de celda que se agregan por JS, no se escriben a mano: `saving` → `saved` (el tick vive 1.4s) · `err` cuando falla · `dirty` mientras hay draft sin confirmar.

---

## 8. Curaduría de iconos — el set completo

Se usa **Lucide** (`https://unpkg.com/lucide@latest/dist/umd/lucide.js`) con estos nombres exactos, agrupados como en el sistema. Todos: `stroke-width:1.8`, `stroke="currentColor"`, `fill:none`, `stroke-linecap:round`. `empanada` (salteña) es propio del sistema, no existe en Lucide — el path está más abajo.

| Grupo | Lucide → etiqueta es-BO |
|-------|--------------------------|
| **PLATOS** | `Utensils` cubiertos · `UtensilsCrossed` plato · `Pizza` pizza · `Sandwich` sándwich · `Salad` ensalada · `Soup` sopa · `Fish` pescado · `Drumstick` pollo · `Beef` carne · `Ham` jamón · `EggFried` huevo · `empanada`\* salteña · `Popcorn` snack |
| **PANADERÍA & POSTRES** | `Croissant` croissant · `CakeSlice` pastel · `Cake` torta · `Cookie` galleta · `Donut` dona · `IceCreamCone` helado · `Dessert` postre · `Candy` dulce · `Wheat` pan |
| **BEBIDAS** | `Coffee` café · `CupSoda` gaseosa · `GlassWater` agua · `Milk` leche · `Wine` vino · `Beer` cerveza · `Martini` cóctel · `Grape` jugo |
| **INGREDIENTES** | `Apple` manzana · `Carrot` zanahoria · `Cherry` cereza · `Citrus` cítrico · `Banana` banana · `Bean` grano · `Nut` nuez · `Wheat` trigo · `Leaf` hierba · `Vegan` vegano |
| **COCINA** | `ChefHat` chef · `CookingPot` olla · `Microwave` microondas · `Refrigerator` refri · `Flame` fuego · `Timer` temporizador · `Thermometer` termómetro · `Scale` balanza · `Soup` caldo |
| **SERVICIO & PAGOS** | `ConciergeBell` campana · `HandPlatter` servir · `ClipboardList` comanda · `BookOpen` menú · `Store` local · `Truck` delivery · `ShoppingBag` para llevar · `Receipt` recibo · `CreditCard` tarjeta · `Banknote` efectivo · `Wallet` billetera · `Coins` monedas · `Percent` descuento · `Barcode` código · `QrCode` QR · `Gift` regalo |

\* `empanada` / salteña — icono propio, no de Lucide:
```html
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
  <path d="M3 15.5a9 7 0 0118 0z"/><path d="M5.5 14a6.5 5 0 0113 0"/>
  <path d="M7.2 14.6l-.6 1.3M10 13.1l-.3 1.4M12.6 13l.2 1.4M15.2 13.4l.5 1.3M17.4 14.2l.8 1.1"/>
</svg>
```

**Set de UI** (no gastronómico, para chrome de la app): `search plus check x bell user users home cart box chart cog calendar clock heart star trash edit download upload filter card tag printer lock wifi camera mail map grid list refresh share coffee qr cash more send paperclip smile mic phone video chat imagefile file reply`.

Tamaños: **18–19px** en UI y botones · **20–22px** en navegación · **14–15px** inline con texto · **22px** en estados vacíos. El color lo hereda del `color` del contenedor — nunca lo pintes en el SVG.

---

## 9. Gráficos

### 9.1 La rampa de serie — 4 pasos, derivados del acento

Monocromática, **siempre del acento activo**. Nunca mezclás Salvia con Morado en un mismo gráfico.

| Paso | Valor | Uso |
|------|-------|-----|
| `--s1` | `var(--ac)` | serie principal, la que el usuario vino a ver |
| `--s2` | `var(--ac-light)` | segunda categoría |
| `--s3` | `var(--ac-deep)` | tercera categoría |
| `--s4` | `color-mix(in srgb, var(--ac-light) 42%, #fff)` | cuarta / resto / "Otros" |
| `--s-ref` | `var(--ink3)` | **serie de referencia** (neutra, punteada) |
| `--track` | `color-mix(in srgb, var(--ink) 12%, transparent)` | pista de ring y barra de progreso — tinte relativo a `--ink`, **no** `--glass-strong`: sobre superficie sólida el vidrio componía 1.00:1 (D37) |idrio componía 1.00:1 (0% y «sin barra» idénticos). Visible en claro y oscuro; las 4 recetas lo heredan. (D37) |
| `--gridline` | `var(--hairline)` | gridlines |

**Cuatro pasos es el máximo de COLOR.** Con 5+ categorías, agrupá el resto en «Otros» — y «Otros» **no es un 5º paso**: va en `--s-ref` (neutro), no en un quinto tono del acento (un quinto tono del mismo acento ya no se distingue). Así **§9.1 y §9.5b dicen el mismo número** (D77): hasta 4 partes con color + «Otros» neutro = las 5 filas que §9.5b muestra. Si el consumidor **no puede** agrupar (canales reales que no se dejan meter bajo «Otros»), la 5ª fila y siguientes caen igual a `--s-ref` — dos barras neutras entre las de color son, precisamente, la señal de que faltó agrupar (D68).

En `atlas.css` esto vive en `.atlas-chart` como custom properties, así que un gráfico entero es `<div class="atlas-chart">` y adentro usás `var(--s1)`.

### 9.2 Líneas

| | Grosor | Estilo | Color |
|-|--------|--------|-------|
| **Serie principal** | `2.5` | sólida, `stroke-linecap/linejoin: round` | `var(--s1)` |
| **Serie de referencia** | `2` | `stroke-dasharray: 5 5` | `var(--s-ref)` |
| **Sparkline** (en KPI card) | `2` | sólida | `var(--s1)` |

Siempre `vector-effect="non-scaling-stroke"` cuando el `<svg>` usa `preserveAspectRatio="none"` — sin eso el grosor se deforma.

**Relleno de área** bajo la serie principal: gradiente vertical del acento, `stop-opacity` **0.26 → 0**. Nunca rellenes la serie de referencia.

```html
<linearGradient id="revfill" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="var(--ac)" stop-opacity="0.26"/>
  <stop offset="1" stop-color="var(--ac)" stop-opacity="0"/>
</linearGradient>
```

### 9.3 Puntos de dato

`r="4"`, `fill: var(--surface)` (¡no transparente — el punto tapa la línea a propósito!), `stroke: var(--s1)`, `stroke-width: 2.5`.
Van **solo en la serie principal**, y **se dibujan donde el eje X NOMBRA una fecha** — uno por tick, no cada N puntos (D95). Un punto marca un dato **legible**, y un dato que el eje no nombra no se puede leer. Con eso el viejo umbral «≤ 12 puntos» se cae solo: hay a lo sumo 5 ticks y dos ticks nunca se pisan. **Una serie de 30 días —el default de un tablero— rinde 5 puntos**, no 0 (que es lo que producía el umbral leído literal) ni 30.

> §9.3 y §9.4 están en relación de **dependencia**, no de identidad: sin eje no hay ticks, sin ticks no hay puntos. Por eso compartían el número «12» — y por eso separarlas del todo tampoco era correcto. El conteo de la serie no decide nada; lo decide el eje.

### 9.4 Gridlines y ejes

- Gridlines **horizontales solamente**, `stroke: var(--hairline)`, `stroke-width: 1`. Tres líneas es lo normal (a 25 / 50 / 75 % del alto). **Nunca verticales, nunca eje visible, nunca marco.**
- Labels de eje X: `11px`, Instrument Sans, `var(--ink3)`, en un flex `space-between` **fuera del SVG** (así no escalan con el viewBox).
- Sin eje Y **en gráficos chicos** (sparkline, tarjeta KPI, ≤12 puntos): el valor va en el tooltip o sobre la barra. Ahí, si necesitás eje Y, es que necesitás menos datos.
- **Excepción nombrada — la serie DENSA de tablero** (D80): el gráfico grande de `/` tiene 30 puntos, se lee de un vistazo y en táctil no hay hover, así que el tooltip no alcanza. Ahí SÍ hay eje Y: `.atlas-chart-yaxis`, columna de rótulos fuera del SVG, **a la derecha** (un solo lado para los dos gráficos de una pantalla, alineado con el remate del trazo, §9.15), compacta (`Bs 4k`), **sin línea de base ni marco** — las gridlines siguen siendo las 3 de arriba (25/50/75), que son cromo. Lo que la regla prohíbe es el eje que se dibuja como línea y el marco, no el rótulo de magnitud de una serie densa.
- **Las marcas que SEÑALAN sin llevar dato son cromo, no texto** (D41): la gridline y la línea guía (`.atlas-chart-crosshair`) apuntan el punto activo, no lo cuantifican, así que **no** rigen el piso de 3:1 — van sobre el token de cromo, que compone ~1,2:1 a propósito. El dato del punto vive en el tooltip o sobre la marca. El piso de 3:1 (WCAG 1.4.11) es para las marcas que **son** el dato (barra, arco, serie).
- **El tooltip de gráfico** (`.atlas-chart-tip`) toma el mismo contrato de flip que date picker / combo / FilterSelect / tooltip: `--left` / `--right` en los dos ejes, la clase la pone el JS midiendo el espacio, y `width: max-content` para que la caja no cambie de forma según dónde caiga el dato (D55).

### 9.5 Donut de N segmentos — **vuelve, como widget compuesto** (D42)

> **El dueño lo revive (19 Ago 2026).** No es familia nueva: se compone con `.atlas-chart-ring-*` (anillo) + `.atlas-legend*` (leyenda). Antes decía «retirado, borren el widget»; esa decisión se revierte, con su defecto de contraste asumido y sostenido por la leyenda.

Geometría portada del showcase (`CategoryDonut.tsx`): `viewBox 0 0 140 140`, `r=52`, `stroke-width=20`, pista en `.atlas-chart-ring-track`, total compacto en el centro. **El remate es lo único propio:** los arcos son CONTIGUOS, así que van con `[data-ring="segments"]` → `stroke-linecap: butt`. Con punta redonda, un arco del 6% se dibuja como ~9% (la punta agrega `stroke-width/2` por lado) y el largo del arco **es** el dato.

Medido en oscuro, con la rampa correcta de 4 pasos, **2 de 4 arcos quedan bajo 3:1** — y no hay rampa monocromática de un solo acento que arregle eso, porque el problema es geométrico: en un anillo los segmentos se tocan entre sí y cada uno necesita contrastar con sus **dos vecinos** además del fondo. Un desglose horizontal no tiene ese problema: cada barra contrasta solo con la pista, y su identidad la da el label que tiene al lado.

Por eso, cuando el donut vive, **el piso accesible lo sostiene la LEYENDA** (§9.6b), no el arco — y para 5+ categorías **preferí `.atlas-breakdown`** (§9.5b), que no arrastra el defecto. El donut es la elección del dueño para «Ingresos por categoría», no el default para toda composición.

### 9.5b CategoryBreakdown — el reemplazo

Una **columna de filas horizontales**, no un anillo. Clases: `.atlas-breakdown`.

- **Cabecera** (`__total`): label a la izquierda, total en `.atlas-money` a la derecha, `baseline` compartida, separada del resto por `1px solid var(--hairline)`.
- **Fila** (`__row`): grid de 2 columnas — `label` · (`val` + `pct`) — y la **pista ocupa toda la fila abajo** (`grid-column: 1 / -1`). El orden de lectura es label → valor → magnitud, que es cómo se pregunta.
- **Pista y relleno** (`__track` / `__fill`): alto `8px`, `border-radius: var(--r-pill)`, pista en `var(--track, var(--glass-strong))`, relleno en el paso de rampa de esa fila. `transition: width var(--t-slow) ease`.
- **Orden:** de mayor a menor. **Top-N + «Otros»**: mostrá 5 filas y agrupá la cola; «Otros» va siempre último aunque su valor lo pondría más arriba, y en el paso más tenue de la rampa.
- **Hero:** la primera fila puede llevar el valor un paso tipográfico más grande (`.atlas-num-md`). Es la única jerarquía interna — no cambies el alto de la pista.
- **Anomalía:** `__row--flag` tiñe el **valor** en `--warn`, `__flag` es un punto de 6px antes del label, y `__note` es una línea de 11.5px explicando qué pasó. El relleno **no** cambia de color: la rampa codifica magnitud, y la anomalía es señalización, no otra dimensión de dato.
- **No hay leyenda,** y eso es la mitad del punto: cada label está pegado a su barra, así que «¿cuál es la segunda categoría?» se responde sin alternar la mirada.

### 9.6 Barras verticales

- Contenedor `display:flex; align-items:flex-end; gap:14px; height:170px`; cada barra `flex:1`.
- Alto = `valor / máximo * 140` px (deja 30px de aire para el valor arriba).
- `border-radius: 8px 8px 4px 4px` — más redondeado arriba que abajo.
- **Color: la barra máxima va en `var(--ac)` sólido; todas las demás en `color-mix(in srgb, var(--ac) 32%, transparent)`.** Ese contraste ES el mensaje del gráfico. No pintes todas iguales.
- Valor arriba: Sora 600, 12.5px, `--ink2`, `tabular-nums`. Label abajo: 11px, `--ink2`.
- `transition: height .4s ease` para cambios de dato.

### 9.6b REGLA — el piso de los gráficos: ningún dato se codifica solo por color

Sí, el 32% de las barras de contexto es intencional, y sí, computa ~1.34:1 sobre la tarjeta oscura. **Eso no es un piso de texto porque no es texto:** la barra de contexto comunica **magnitud por altura**, y el color solo la agrupa. El pico va sólido justamente para que la comparación no dependa del tinte.

El piso que SÍ rige, y que resuelve la pregunta de fondo:

> **Ningún dato existe solo como color.** Toda barra, arco o serie lleva su valor como **texto** (o su label al lado). El color agrupa y jerarquiza; el número informa.

De ahí se deduce todo lo demás: el valor sobre la barra no es decoración opcional, es el canal accesible. La leyenda del breakdown no es opcional —y esto NO contradice el «no hay leyenda» de las barras (§9.5b/§9.6b): ahí cada label va pegado a su barra y la leyenda sobra; acá una sola pista apila varios tramos y sin leyenda no se nombran. Y si un gráfico solo se entiende mirando colores, le falta texto — no le falta contraste.

Para los elementos que **sí** son texto (valores, labels, ejes, leyendas) rige el piso normal: 4.5:1, en plano sólido (§4).

### 9.7 Gauge / ring de progreso

- viewBox `120×120`, render **96px**, `transform: rotate(-90deg)` en el `<svg>` (arranca arriba).
- `r="46"`, **`stroke-width: 12`**, `stroke-linecap: round`.
- Track: mismo círculo en `var(--track)`, sin linecap.
- Valor: `stroke-dasharray = 2πr = 289.0` · `stroke-dashoffset = 289 * (1 - pct/100)`.
- Centro: porcentaje en Sora 700 19px `--ink`.
- `transition: stroke-dashoffset .5s ease`.

### 9.8 Barras de progreso horizontales

| Variante | Alto | Fondo | Relleno |
|----------|------|-------|---------|
| En listas / P&L | `9px` | `var(--track)`, sin borde | color de serie |
| Standalone (slider-like) | `10px` | `var(--track)` + `1px solid var(--hairline)` | `var(--ac)` |
| Indeterminada | `6px` | `var(--track)` | segmento 40 % en `var(--ac)`, `@keyframes indet` |

**Alto:** `atlas.css` y esta tabla coinciden ahora en **9px** para «En listas / P&L» (D67); `.atlas-breakdown__track` es otro rol y se queda en **8px**. `.atlas-progress--thick` (10px + borde) se declara **una sola vez y después de la base** (D81) — antes vivía en §11 y la base la re-declaraba 944 líneas más abajo con la misma especificidad, así que la variante rendía 9px y esta guía afirmaba un efecto que el archivo no producía. *Una guía que afirma un efecto no lo produce; el token lo produce.*e su alto, que estaba muerto por orden.

**Relleno y serie (D68):** `.atlas-progress__fill` lee `var(--s1)` (default `--ac`, sin cambio visual) — antes horneaba `--ac` pelado y era la única que no podía tomar un paso de serie. La **rampa por fila** es opt-in, `.atlas-breakdown--ramp` con `__fill--s2/-s3/-s4`, sólo donde las filas son PARTES de un total; la base es uniforme (§9.5b). La 5ª fila sin «Otros» va en `--s-ref` (`__fill--rest`), nunca un 5º paso inventado.

**Pista sobre superficie SÓLIDA (D69):** el casi-blanco del showcase (`--glass-strong`) compone 1.00:1 sobre `--surface` y pierde la fila al 0% — es el defecto de D37. La receta consumible es `.atlas-progress--on-solid` / `.atlas-breakdown--on-solid` (gemela de `.atlas-input--on-solid`): pista en `--surface` con el límite en el **borde** (inset box-shadow, no cambia el alto), que sí rinde al 0%. `--track` (`--ink` 12%) sigue siendo el default sobre ambiente/vidrio.

`border-radius: 999px` en pista y relleno, `overflow:hidden` en la pista, `transition: width .5s ease`.
En un grupo de barras comparables (un P&L), el ancho es relativo al **mayor valor del grupo**, no a 100 — así la más larga llena la fila.

### 9.9 Tipografía de gráficos

| Elemento | Familia | Tamaño | Peso | Color |
|----------|---------|--------|------|-------|
| Título del gráfico | Sora | 16px | 600 | `--ink` |
| Título de gráfico chico | Sora | 15px | 600 | `--ink` |
| Cifra grande / KPI | Sora | 28px (34px hero) | 700, `-.02em` | `--ink` |
| Valor sobre barra | Sora | 12.5px | 600 | `--ink2` |
| Porcentaje de leyenda | Sora | 13px | 600 | `--ink2` |
| Label de leyenda | Instrument Sans | 13px | 400 | `--ink` |
| Label de eje / categoría | Instrument Sans | 11px | 400 | `--ink3` |
| Label de KPI | Instrument Sans | 12.5px | 400 | `--ink2` |
| Delta / badge (`.atlas-delta`) | Instrument Sans | 11.5px | 600 | ver 9.10 |

> **Cuidado: «delta» es CUATRO roles, no uno** (D46). `.atlas-delta` es el **badge** de un delta — en el `__head` de una tarjeta KPI **con o sin sparkline** (D94a), o fuera de una tarjeta. El delta de una `.atlas-kpi` es **otro rol y otra métrica**: `.atlas-kpi__delta`, **texto** de 12,5px Sora **al lado** del número (§9.15(a): al lado, no debajo). `.atlas-ask-a__delta` es el del panel de preguntas (texto, 13px). El badge del snippet de §5 toma la clase `.atlas-delta` con sus valores.

**Toda cifra lleva `font-variant-numeric: tabular-nums`.** Sin excepción — si una columna de números baila al actualizarse, falta esto.

### 9.9b El delta: flecha, magnitud absoluta, y el cero (D96)

> **Un delta se lee con FLECHA y magnitud absoluta — `↑ 18%`, nunca `+18%`.** Estaba implícito en las 9 apariciones entre el showcase y esta guía, y una regla derivada de ejemplos se pierde con el próximo consumidor. Ahora **el glifo sale de la receta** (`.atlas-delta--up/--down::before`, ídem `.atlas-kpi__delta`): el consumidor emite sólo la magnitud, así que no puede inventarlo de nuevo en cada pantalla.

- **Flecha = dirección. Color = veredicto. Separados a propósito.** En Gastos subir es malo: un gasto que crece sale **`↑ 8%` en rojo**. Si el glifo llevara el veredicto, las dos señales codificarían el mismo hecho y la dirección se perdería.
- **Un delta que redondea a `0%` NO lleva flecha** y va en `--flat` (neutro): afirmaría un movimiento que el número mostrado no respalda. El badge ya lo declara (`.atlas-delta--flat`), como el delta de texto (`.atlas-kpi__delta--flat`) — antes faltaba, y era omisión, no decisión.

### 9.9c La tarjeta KPI: rótulo, delta y color de la sparkline (D94)

- **El delta de un KPI va como BADGE en el `__head`, con sparkline o sin ella.** La regla vieja lo reservaba para «un KPI sin sparkline» y las dos fuentes del sistema se contradecían (el artboard lo dibuja con sparkline; el demo de clases rendía `.atlas-kpi__delta` al lado del número, también con sparkline). Gana el badge: en una fila de 5 tarjetas se lee de lejos. `.atlas-kpi__delta` (texto en la baseline del número) queda para el KPI **suelto** o dentro de prosa, donde no hay fila que escanear.
- **`.atlas-kpi__label` es el rótulo de la tarjeta** — 12,5px, caja de oración, `--ink2`. Era el elemento que faltaba (la familia tenía `__head`, `__value`, `__delta`, `__spark`, `__foot` y nada para la etiqueta), y por eso el vestido lo elegía el consumidor y las dos fuentes pudieron divergir. **No es un eyebrow:** el eyebrow abre SECCIONES; el rótulo de una cifra se lee, no se escanea.
- **El color de la sparkline lo decide el VEREDICTO del delta, no la serie.** Acento por defecto; `--danger` cuando el delta es adverso, con `.atlas-kpi--bad` en la tarjeta («Margen bruto ↓2 pts» va en rojo). Emitirlo desde la tarjeta —y no a mano en el SVG— es lo que impide que el trazo y el badge se contradigan. Coherente con §9.10: un veredicto no es una categoría.

### 9.10 REGLA — color neutro vs. color semántico

> **En Atlas el color de una serie codifica JUICIO, no CATEGORÍA.**

Esa es la regla, y resuelve tu pregunta:

- **Neutra punteada** (`--s-ref`, `dasharray 5 5`) = la serie es **contexto**: misma unidad que la principal, sin veredicto propio. "Costos" contra "Ingresos" es contexto — un costo alto no es un error, es cómo funciona un restaurante. Por eso en el sistema la línea de costos es gris punteada y la barra de costos del P&L es un tinte claro del acento, **no roja**.
- **`--danger`** = el valor **es un veredicto**: un delta que se movió para el lado malo (`Margen bruto ↓ 2 pts` va en `#9B453C`), una variación de caja, un sobregiro, un pago fallido. Acá el rojo no describe la categoría, describe que alguien tiene que actuar.

**Cuál gana en tu app:** ganás vos. Si en tu producto "gastos" es una categoría con carga semántica propia y ya la enseñaste como roja, **el significado de producto manda sobre el default del sistema**. La regla del sistema es el default para datos sin polaridad, no una prohibición. Pero entonces respetá estas tres consecuencias, que es donde se rompe:

1. **Un canal, un significado.** Si la serie va en `--danger`, va **sólida**. El punteado ya significa "referencia"; rojo + punteado son dos códigos peleando por la misma línea. Rojo sólido = "esto es el dato malo". Gris punteado = "esto es el fondo contra el que comparás".
2. **Una sola serie roja por gráfico.** Si hay dos, el rojo dejó de significar algo.
3. **El rojo no entra en la rampa.** `--danger` nunca ocupa `--s1..--s4`: es una capa aparte encima de la rampa monocromática. Un gráfico de 4 categorías donde una es roja tiene 3 pasos de rampa + 1 excepción, no 4 pasos.

Y el default sigue siendo neutro: **si dudás, gris punteado.** Es más fácil agregar rojo después que quitarle rojo a un dashboard que ya grita.

### 9.11 REGLA — el numeral sobre la tarjeta destacada

> **El numeral toma el acento cuando la superficie está tintada. En superficie neutra va en tinta.**

No es preferencia, es contraste de figura contra fondo:

| Superficie de la tarjeta | Color del numeral | Por qué |
|--------------------------|-------------------|---------|
| Vidrio / neutra (`.atlas-glass`) | **`var(--ink)`** | la cifra ya es el elemento más grande; pintarla de acento le suma énfasis a algo que no lo necesita, y el acento queda para el delta |
| Tintada (`color-mix(--ac 10%)`, `.atlas-card-tint`) | **`var(--ac-on)`** | el fondo ya declaró "esto es lo destacado"; la cifra en tinta sobre tinte se ve apagada, sin compromiso |
| Rellena de acento (`.atlas-card-feature`, gradiente) | **`#fff`** | nunca acento sobre acento |

Corolario que importa: en una fila de tarjetas donde una es la destacada, **el numeral no es lo que marca la destacada — la superficie sí.** No pintes un numeral de acento sobre vidrio para "resaltarlo": tintá la tarjeta.

**Tamaño mínimo:** el par `--ac-on` sobre tinte vale de **18px para arriba**. `--ac-on` en claro resuelve a `--ac-deep` (§2), que sobre el tinte del 10% pasa AA a ese tamaño; por debajo de 18px, subí el escalón o tintá más fuerte. (El color que la fila manda —`var(--ac-on)`— es idéntico al que computa `.atlas-card-tint`: los dos leen el mismo token.)

---

## 9.12 REGLA — color-de-datos: el hex que elige el dueño del negocio (E10)

Un tag de cliente, una categoría o un salón pueden llevar un color que **elige el dueño**, no el sistema. Ese hex es **dato, no branding**.

> **El color-de-datos no entra en la rampa del acento ni desplaza a un semántico.** Se pasa en `--dc` y el sistema lo doma:

| Capa | Valor |
|------|-------|
| Fondo | `color-mix(in srgb, var(--dc) 12%, transparent)` |
| Borde | `color-mix(in srgb, var(--dc) 40%, transparent)` |
| Texto | `oklch(from var(--dc) min(l, 0.38) c h)` en claro · `max(l, 0.82)` en oscuro |
| Punto y swatch | el hex **crudo**, sin tocar |

```html
<span class="atlas-data-tag" style="--dc:#E23D6B">Cliente VIP</span>
```

**El piso de contraste clampea la LUMINOSIDAD, no mezcla un porcentaje fijo.** Esto importa: un empujón de 24% de tinta sobre un fluor `#C6F24E` sigue dando un amarillo claro (1.83:1, ilegible). Clampeando `l` el mismo hex conserva su tono y pasa 4.5:1. Así cualquier hex arbitrario queda legible **sin pedirle nada al usuario** — el dueño elige un color, no una relación de contraste.

**Dos detalles que cuestan medio punto de contraste si se ignoran:**
- El fondo real **no** es la tarjeta limpia: lleva encima el tinte del 12% del propio `--dc`, que lo oscurece. Un clamp calculado contra la tarjeta sola se queda corto.
- Un clamp fijo trata igual a un fluor y a un teal medio. `#0F766E` ya cumple el umbral de luminosidad y aun así queda en 4.38:1.

Por eso, **cuando podés calcular en runtime, iterá sobre el contraste real** contra el fondo compuesto hasta alcanzar 4.5, en vez de fijar un `l`. El clamp de CSS es la aproximación estática; el cálculo por-color es el piso exacto.

**El punto y el swatch no se clampean:** son forma, no texto. Ahí el dueño tiene que ver el color que eligió, tal cual.

**Techo de uso: tag, punto (`.atlas-data-dot`), borde de 3px (`.atlas-data-edge`), swatch.** Nunca rellena una superficie grande ni pinta un botón primario: a esa escala compite con el acento y la pantalla pierde dueño. Si el color del negocio puede gritar más que la marca, la jerarquía se invierte cada vez que alguien elige mal.

---

## 9.13 REGLA — emojis: prohibidos, con una excepción declarada (E11)

Atlas no usa emojis. **Una excepción, y una sola: el tile de producto del POS.**

Ahí el emoji lo elige el dueño para reconocer su producto de un toque, en una pantalla que se usa con el dedo y a veces con guante. Es **dato del negocio** — igual que el nombre y el precio — no decoración nuestra.

```html
<button class="atlas-pos-tile">
  <span class="atlas-pos-tile__glyph">🥟</span>
  <span class="atlas-pos-tile__name">Salteña de carne</span>
  <span class="atlas-pos-tile__price">Bs 8,00</span>
</button>
```

**El límite, explícito:**
- Solo en `.atlas-pos-tile__glyph`. En ningún otro componente, y nunca en copy, títulos, botones, badges, notificaciones ni documentación.
- El glifo va en **caja propia de tamaño fijo** (38px): así un emoji y un icono de línea ocupan lo mismo y la grilla no salta cuando un producto no tiene emoji.
- El emoji **nunca es el único identificador**: siempre acompañado del nombre. Si el emoji fuera la única etiqueta, el producto sería ilegible para quien no lo eligió.
- Fallback: si el producto no tiene emoji, va un icono del set gastronómico (§8) en la misma caja.

La distinción que gobierna esto: **un emoji que escribimos nosotros es slop; un emoji que carga el usuario es contenido.** El sistema no lo juzga, lo aloja.

---

## 9.14 POS — la pantalla de venta (§11b del CSS)

> **Todo el POS asume `data-density="tactil"`.** Dedo, no mouse; parado, no sentado; apurado, no explorando. De ahí se deduce lo demás — incluida la parte incómoda: **el POS no usa vidrio en sus superficies de trabajo.** Grid, carrito y keypad son plano sólido (§4). Un mozo con la mano ocupada no puede pagar el costo de leer a través.

### Grid de productos — `.atlas-pos-grid`

`auto-fill` con mínimo de **132px**, no columnas fijas: el mismo markup sirve en tablet de 10" y en monitor de 24" sin media queries. 132px es el tile más chico donde un nombre de dos palabras todavía entra sin cortarse.

**El producto agotado no se oculta** (`aria-disabled="true"`): baja a .42 y se rotula «Agotado». El mozo tiene que poder decirle «no hay» al cliente **sin buscar** — si el tile desaparece, el que no lo encuentra piensa que se equivocó de categoría. El badge `__stock` avisa el stock crítico antes de que llegue a cero.

### Carrito — `.atlas-pos-cart`

| Parte | Regla |
|-------|-------|
| `__list` | scroll propio; la línea más nueva **arriba** |
| `.atlas-pos-line` | grid `34px 1fr auto`: **cantidad · nombre · importe**. La línea SELECCIONADA cambia el `__qty` por el stepper `.atlas-pos-step` (`:has()` le da la columna) |
| `.atlas-pos-line__mods` | modificadores bajo el nombre (12px, `--ink3`): «sin cebolla». `__name` y `__mods` declaran `display: block` para apilar dentro del span del nombre, no en columna propia (D49) |
| `.atlas-pos-line--counter` | **carrito de MOSTRADOR** (venta por docena, ticket de corrido): dos filas — nombre a todo el ancho arriba (nunca trunca, ≥102px), y abajo el stepper **permanente** con `.atlas-pos-qty` (un `input`: tipear «12» es un gesto, no 11 toques) + el importe. Cuesta filas visibles (~5 vs 8) a cambio del nombre entero. Distinto del carrito de mozo (base), donde el stepper aparece sólo en la línea tocada (D49-bis) |
| `__foot` | subtotal chico + **total grande** + **CTA Cobrar** full-width debajo, sticky abajo |

**La cantidad va primero y tabular.** Responder «¿cuántas milanesas?» no debe requerir leer el nombre: el ojo baja por una columna de números alineados. Y el total va **abajo** porque es lo último que se mira antes de cobrar, donde el pulgar ya está.

`--free` pinta el importe en `--ok`: una cortesía a Bs 0 con tipografía normal se lee como error de carga.

**Stepper de cantidad — `.atlas-pos-step`.** Aparece en la línea que el cajero **toca**, reemplazando al `__qty`; las demás líneas quedan con el número plano (escanea más rápido, y un control táctil de 56px no cabe en las 34px de todas las líneas a la vez). Dos decisiones:
- **En `−` con cantidad 1 el botón pasa a ELIMINAR** (`__btn--del`, tinte `--danger`), no se deshabilita: quitar la línea es la intención real, y un botón muerto obliga a buscar otra forma.
- **Piso táctil ≥56px por control** en `tactil` (E1) — el pulgar, apurado, sin mirar.

**CTA «Cobrar» — `.atlas-pos-pay-cta`.** La jerarquía máxima de la pantalla, así que va **en el `__foot`, full-width y DEBAJO del total** (no al lado): el total es la referencia que se lee, el botón es la acción. Relleno sólido `--ac-deep` — el CTA **no** tiene excepción de contraste (§ botones). Con el carrito vacío va `disabled`: gris, sin sombra de invitación.

### Keypad — `.atlas-pos-keypad`

4×4, teclas de **64px mínimo**. Los 44px del objetivo táctil son el piso para un dedo **apoyado**; acá se tipea rápido y sin mirar. `--wide` / `--tall` para las teclas dobles, `--ac` para confirmar.

**Borrar va en `--danger` tenue, no en rojo pleno:** borrar un dígito es la acción más frecuente del keypad, no una destructiva. Si grita, grita cien veces por turno.

### Modal de cobro — `.atlas-pos-pay`

**El vuelto es el elemento principal del modal**, no el total: es el número que el cajero dice en voz alta. Va en `.atlas-pos-change` (fondo `--ok` al 10%), y si el pago no alcanza pasa a `--short` en `--danger` — el mismo lugar, otro signo.

Los métodos (`.atlas-pos-method`) cambian **borde y fondo** al seleccionarse, no solo un check: con luz de cocina y pantalla sucia, un check de 14px no se ve. `.atlas-pos-split` para pago dividido.

**Cupón — `.atlas-pos-coupon`.** El descuento **se recomputa server-side** y modifica el total a cobrar, así que la spec fija DÓNDE se ve y CÓMO pega en el desglose:
- **Antes de aplicar:** input (`__input`, mayúsculas) + botón `__apply`.
- **Aplicado:** el input se reemplaza por un **chip** (`__chip`) con el código en `--ok` y una `×` para quitarlo — el cajero ve *qué* cupón está activo, no solo que "hay uno".
- **En el desglose (`__due`):** una **fila de descuento** (`.atlas-pos-pay__disc`) con el monto en `--ok` y signo `−`, entre el subtotal y el total a cobrar — el nuevo total tiene que mostrar de dónde salió.

```html
<div class="atlas-solid atlas-solid--raised atlas-pos-pay">
  <div class="atlas-pos-pay__due">
    <span class="atlas-eyebrow">A cobrar</span>
    <span class="atlas-money atlas-num-xl">Bs 14,00</span>
  </div>
  <!-- desglose con el descuento del cupón -->
  <div class="atlas-pos-cart__row"><span>Subtotal</span><span>16,00</span></div>
  <div class="atlas-pos-pay__disc"><span>Cupón AMIGO10</span><span class="atlas-pos-pay__disc-amt">− 2,00</span></div>
  <!-- cupón: aplicado → chip; sin aplicar → input + apply -->
  <div class="atlas-pos-coupon">
    <span class="atlas-pos-coupon__chip">
      <span class="atlas-pos-coupon__code">AMIGO10</span>
      <button class="atlas-pos-coupon__x" aria-label="Quitar cupón">×</button>
    </span>
  </div>
  <!-- estado inicial:
  <div class="atlas-pos-coupon">
    <input class="atlas-pos-coupon__input" placeholder="Código de cupón">
    <button class="atlas-pos-coupon__apply">Aplicar</button>
  </div> -->
  <div class="atlas-pos-change">
    <span class="atlas-pos-change__label">Vuelto</span>
    <span class="atlas-money atlas-num-lg">Bs 6,00</span>
  </div>
</div>
```

### Slot-picker de combo — `.atlas-pos-combo`

**Un combo no es un producto con modificadores: son N decisiones obligatorias.** Esa es toda la diferencia — un modificador se puede omitir, un slot de combo no. El picker existe para que no se pueda cerrar la venta con un slot vacío y para que se **vea** cuántos faltan (`__status`).

- `--done` → paso en `--ok`. `--todo` → paso tintado de acento.
- **El slot pendiente no va en `--danger`:** no es un error, es un paso que falta. El rojo se reserva para el intento de cobrar incompleto.
- `__up` muestra el recargo **siempre, aunque sea 0** — el cliente pregunta, y un extra sin precio visible es una discusión en la caja.
- **Slot con CANTIDAD por opción (`.atlas-pos-opt--multi`)** (D51-bis, enmendado por D82): cuando un slot admite N del mismo sabor (el Combo Familiar pide 6 salteñas en un slot, que el booleano `aria-pressed` no expresa), la cantidad va como **readout** (`.atlas-pos-opt__qty`, un chip `×N`) en el carril del recargo — **nunca un stepper inline en la opción**, que se come el nombre («Carne · Picante» → «P.», medido). El `±` para cambiar N vive en la fila elegida, no dentro de cada opción.
- **El readout de CERO no reserva carril, y es OPT-IN** (D82). `__qty--zero` es un **punto** (6px, sin `min-width`, sin padding lateral), no la píldora `×0`: la píldora mide 30px rendidos contra los 16px del texto suelto de `__up`, y ponerla en las 22 opciones de un combo real cortaba **4 sabores** — justo el dato que distingue un producto de otro cuando el nombre es la categoría («Carne · Super picante» → «Super pic…»). Y **con opciones de 2 líneas, o con más de 8 opciones en el pool, el cero se OMITE**: que un slot admita cantidad se aprende de las opciones que SÍ la tienen, no de 19 marcas vacías que compiten con las 3 que llevan dato.

> **Nota de método, del port de D82.** `scrollWidth`/`clientWidth` son **enteros redondeados**: un nodo que desborda 0,19px informa «no cortado» y en pantalla termina en «…» comiéndose tres caracteres. **El costo visible de un corte no es proporcional al desborde** — si un readout entra «justo», no entra.

```html
<div data-density="tactil" style="display:grid;grid-template-columns:1fr 380px;gap:14px">
  <div class="atlas-pos-grid">
    <button class="atlas-tile atlas-pos-tile">   <!-- D48: sin --action: el tile de producto es superficie de trabajo SÓLIDA (§11b); el acento --ac-deep queda para el CTA de cobro -->
      <span class="atlas-pos-tile__glyph">🥟</span>
      <span class="atlas-pos-tile__name">Salteña de carne</span>
      <span class="atlas-pos-tile__price">Bs 8,00</span>
      <span class="atlas-pos-tile__stock">4</span>
    </button>
    <button class="atlas-tile atlas-pos-tile" aria-disabled="true">
      <span class="atlas-pos-tile__glyph">🍛</span>
      <span class="atlas-pos-tile__name">Pique macho</span>
      <span class="atlas-pos-tile__price">Bs 45,00</span>
    </button>
  </div>

  <div class="atlas-pos-cart">
    <div class="atlas-pos-cart__head">
      <span class="atlas-eyebrow">Mesa 4</span>
      <span class="atlas-badge">3 ítems</span>
    </div>
    <div class="atlas-pos-cart__list">
      <div class="atlas-pos-line">
        <span class="atlas-pos-step">
          <button class="atlas-pos-step__btn" aria-label="Quitar uno">−</button>
          <span class="atlas-pos-step__n">2</span>
          <button class="atlas-pos-step__btn" aria-label="Agregar uno">+</button>
        </span>
        <span>
          <span class="atlas-pos-line__name">Salteña de carne</span>
          <span class="atlas-pos-line__mods">sin cebolla</span>
        </span>
        <span class="atlas-pos-line__amt">16,00</span>
      </div>
      <!-- línea NO seleccionada: __qty plano. En qty 1 el «−» sería .atlas-pos-step__btn--del -->
      <div class="atlas-pos-line atlas-pos-line--free">
        <span class="atlas-pos-line__qty">1</span>
        <span class="atlas-pos-line__name">Refresco (cortesía)</span>
        <span class="atlas-pos-line__amt">0,00</span>
      </div>
    </div>
    <div class="atlas-pos-cart__foot">
      <div class="atlas-pos-cart__row"><span>Subtotal</span><span>16,00</span></div>
      <div class="atlas-pos-cart__total">
        <span class="atlas-eyebrow">Total</span>
        <span class="atlas-money atlas-num-xl">Bs 16,00</span>
      </div>
      <button class="atlas-pos-pay-cta">Cobrar <span class="atlas-pos-pay-cta__amt">Bs 16,00</span></button>
    </div>
  </div>
</div>
```

---

## 9.15 RankedList y la familia KPI (§11d del CSS)

### RankedList — `.atlas-ranked`

`#N · glifo · nombre · subtítulo · valor` + barra proporcional inline. Es un breakdown **ordenado** donde el puesto importa tanto como la magnitud, así que el numeral de posición es un elemento propio y no un contador de lista.

- **El numeral va en tinta, no en acento.** Si cada fila lleva acento, el acento deja de señalar nada. El `--first` sí lo lleva — ahí sí distingue.
- **La barra va debajo de la fila**, a 5px, cruzando desde el glifo hasta el borde. No compite con el texto: es el eje que hace comparable la columna de números.
- El #1 sube a peso 600 y su relleno a `--ac-deep`. Nada más cambia — un #1 con tarjeta propia rompe la comparación, que es el punto de la lista.

### Familia KPI — tres formas, y cuándo cada una

| Clase | Cuándo | Regla que la define |
|-------|--------|--------------------|
| `.atlas-kpi` | stat card con sparkline | el número manda, la sparkline es **contexto** |
| `.atlas-kpi-strip` | 3–5 cifras al tope de una pantalla que ya tiene tarjetas | **sin card**: anidar cards es el ruido que §4 evita |
| `.atlas-kpi-ed` | el objetivo del mes, una sola cifra que narra | la cifra vive **dentro de la frase** |

**(a) Stat card.** La sparkline va abajo, **34px, sin ejes ni labels**: si necesitara ejes sería un gráfico, y un gráfico no cabe en una stat card. **El delta va al lado del número, en la misma baseline** — es un adjetivo de esa cifra; debajo se lee como un dato aparte.

**(b) Strip plano.** El tono (`--warn` / `--neg`) tiñe **el numeral, no el fondo**: un strip con celdas de fondo rojo se lee como cuatro alertas simultáneas cuando en realidad es una cifra que bajó. La cifra declara su tamaño (`__val`, 20px — no hereda el cuerpo) y la celda apila rótulo (`__label`) + cifra. **Máximo 3–5 celdas, y es duro:** con 6 o más al tope de una pantalla, la forma no es el strip — va a tarjetas KPI (`.atlas-kpi`) o se parte en dos filas. Colapsa a filas bajo 720px.

**(c) Stat editorial.** `__num` coloreado por signo, un paso más grande que la frase que lo contiene. Es la única forma de la familia que admite prosa.

**Progreso hacia una meta** (`.atlas-progress`): la marca de objetivo es una **línea vertical**, no un cambio de color. Pasar la meta no es éxito ni error — es un hecho, y el `--over` en `--ok` es lo más lejos que llega.

### Sparkline dual — `.atlas-spark`

Actual + período anterior en 34px de alto. Las tres decisiones:

1. **El fantasma es `--s-ref` punteada y sin relleno.** §9.2 ya manda sin relleno para la referencia, y acá hay una razón extra: dos áreas apiladas en 34px se pisan y no se lee ninguna.
2. **La serie actual sí lleva relleno tenue** (14%): es la que se mide, y el relleno le da el peso que la distingue del fantasma sin necesitar leyenda.
3. **No hay leyenda — se etiqueta con el punto final.** En 34px no cabe, y tampoco hace falta: el último punto es donde el ojo ya está. El actual lleva su **valor**, el fantasma la **palabra del período** («jun»).

**Un solo marcador, el final.** Los puntos intermedios en una sparkline de 34px son ruido: la forma ya está en la línea.

---

## 9.16 Catálogo operativo — los 13 de E5 (§11f del CSS)

Reglas que no se deducen del CSS. Cada una es una decisión, no un estilo.

### Paginación server-side — `.atlas-pager`

**El conteo «1–15 de 248» no es decoración.** Con paginación server-side el usuario no sabe cuánto hay hasta que se lo digan: es su única señal de escala. **La página actual va con borde de acento, no relleno** — un relleno sólido en un pager se lee como botón primario, y la página actual no es una acción.

### Tabs de página + subnav — los 3 niveles

| Nivel | Forma | Clase |
|-------|-------|-------|
| 1 · página | **subrayado** | `.atlas-tabs` |
| 2 · sección | **segmentado** (rect. redondeado) o **pills en track tintado** | `.atlas-segmented` / `.atlas-subtab` |
| 3 · filtro | **pills sueltas** (sin track) | `.atlas-chip` |

**Lo que separa un nivel de otro no es solo la forma — es también el track.** El nivel 2 vive en un **contenedor tintado** (`.atlas-segmented` rect., `.atlas-subtab` pill-track que **se encoge al contenido**, `inline-flex`, para no dejar track vacío); el nivel 3 son pills **sueltas**, sin contenedor. `.atlas-subtab` y `.atlas-chip` comparten `--r-pill` a propósito: los distingue el track, no el radio. **`.atlas-segmented` es también el radio de FORMULARIO compacto** (tres opciones de una palabra en una fila): su activo engancha en `aria-selected`, `aria-checked` **y** `aria-pressed`, así un `role="radio"` (que emite `aria-checked`) matchea sin degradar accesibilidad. La card de 190px (`.atlas-radiocard`) queda para la elección que ocupa una pantalla.

El badge de count va **dentro** del tab (el número pertenece a la pestaña). Y el tab «Pronto» **se ve pero no se toca, con su palabra**: ocultarlo esconde el roadmap, y deshabilitarlo sin decir por qué parece un bug. El sello `.atlas-subtab__soon` es **transversal**: se escribe también dentro de un `.atlas-tabs__item` (nivel 1), no solo en el subtab — no lleva namespace de nivel porque el estado «pronto» es el mismo en los tres.

```html
<!-- Nivel 1: subrayado. El activo lo marca la LÍNEA (border-bottom --ac), no un relleno -->
<div class="atlas-tabs">
  <button class="atlas-tabs__item" aria-selected="true">Resumen
    <span class="atlas-tabs__count">8</span>
  </button>
  <button class="atlas-tabs__item">Movimientos</button>
  <button class="atlas-tabs__item" disabled>Reportes <span class="atlas-subtab__soon">Pronto</span></button>
</div>
```

### Date pickers — `.atlas-datepick`

**Los presets van a la izquierda y primero en el DOM.** «Últimos 7 días» resuelve la mayoría de las consultas; el calendario es el camino largo, no el principal.

- **Extremos del rango en relleno, interior en tinte** — así el rango se lee como un tramo continuo y no como 15 días seleccionados por separado. Un **rango de un día** (y el single-date) cae con los dos extremos en el mismo nodo: `--start.--end` lo redondea entero.
- **El trigger muestra la palabra relativa cuando existe** («Hoy», «Ayer») con la fecha absoluta debajo.
- **Encabezado de mes/año:** la familia declara `__head` / `__nav` / `__title` para que el calendario se arme con clases; el **contenido** del control lo elige el consumidor (‹ › mes contra `[mes ▾][año ▾]`) — saltar de año con ‹ › son 12 clics, y los dos calendarios de la app usan encabezados distintos a propósito.
- **Auto-flip obligatorio en los DOS ejes** (`.atlas-datepick__pop--up` vertical, `--right` horizontal; paridad con combobox `__list--up/--right` y FilterSelect `__pop--up/--right`): la clase la pone el JS midiendo el espacio. Un popover de 340–420px cortado contra el viewport es inusable, y con `left:0` fijo se corta contra el borde derecho tanto como contra el inferior.

### Combobox / typeahead — `.atlas-combo`

**El resaltado del teclado y el del mouse son el mismo estado** (`aria-selected` y `:hover` comparten regla). Si difieren, el usuario que alterna entre ambos pierde el rastro de dónde está.

**Multi-select:** los chips viven **dentro del campo** (`.atlas-multi`), no en una fila aparte debajo — ahí es donde el usuario espera ver lo que ya eligió. Esto le da dueño a `.atlas-chip`, que hasta ahora era decoración.

### Master-detail — `.atlas-md`

Lista de 320px + panel. **El ítem activo usa la misma gramática que la fila seleccionada del data grid**: tinte al 8% + barra izquierda de 3px. Dos formas distintas para «esto está activo» obligan a aprenderlo dos veces.

**Fila APAGADA (`.atlas-tr--off`)** (D62): una fila inactiva / anulada / rechazada / revertida sigue la **misma gramática** que la seleccionada — tinte + barra inset — pero NEUTRA (`--ink` al 4%, barra `--ink3`). El texto se de-enfatiza por **color** (`--ink2`, ≥4.5:1), **nunca por `opacity`**: `opacity` es una capa que apaga también el texto que hay que leer (medido: 19/19 textos bajo 4.5:1, y una fila anulada sigue siendo legible/clickeable, fuera de la exención 1.4.3). Convive con `[aria-selected]`: la fila off va declarada **antes**, así que en una fila inactiva **y** elegida el acento (que viene después, misma especificidad) gana el fondo y la barra; la fila off sólo aporta la tinta del texto.

El CTA de crear va **fijo al pie de la lista** — crear no debe requerir scrollear 200 ítems. Bajo 880px colapsa a pila.

### Login — `.atlas-login`

> **Sí: es el único full-glass legítimo bajo el presupuesto de §4.** Una sola superficie en toda la pantalla, sin datos densos, sin tablas, sin texto de 12px. Es el caso exacto para el que el material existe — y por eso mismo no se repite adentro de la app.

**El paso 2 (elegir negocio) va en la misma card**, no en otra pantalla: es el mismo acto de entrar. Cambia el contenido, no el contenedor.

### Confirm destructivo — `.atlas-btn--danger` + `.atlas-confirm`

**El botón danger sólido existe solo acá.** Regla de pareo: **nunca dos botones sólidos en un diálogo** — si «Eliminar» es sólido, «Cancelar» es secundario.

**Type-to-confirm** para lo irreversible: escribir el nombre habilita el botón. La fricción **es** la función; un clic de más no alcanza cuando no hay vuelta atrás.

**Decision-modal de 3 salidas** (`.atlas-decide`): la recomendada va **primera y jerarquizada** (`--rec`, borde de acento). Ofrecer «desactivar» al mismo peso visual que «eliminar» hace que la mitad de la gente elija mal — y la que elige mal no vuelve a confiar en el diálogo.

### FilterSelect — `.atlas-fsel`

**Borde de acento cuando hay override.** Un filtro activo que se ve igual que uno vacío es cómo se leen mal los reportes: el dueño mira un total filtrado creyendo que es el total. El popover usa **radio de punto, no check** — son opciones excluyentes y la forma lo dice.

### Menú popover — `.atlas-menu`

Anatomía de la fila: `icono + label + hint`. El hint (atajo) va a la derecha, tabular y tenue — es referencia, se busca solo cuando se lo busca.

**Estado busy: la fila se queda en su lugar con spinner, y el menú NO se cierra.** Cerrar sin mostrar resultado deja al usuario sin saber si la acción corrió.

### Banner de modo — `.atlas-sysbar`

Cuatro usos, un componente: `--demo` `--maint` `--denied` `--offline`. **Va pegado al tope del contenido, no como toast:** no es una notificación, es una condición persistente de la pantalla. **Solo `--offline` late** — es el único cuyo estado cambia por sí solo. Conecta con `.atlas-readonly` (§10b): una pantalla gateada necesita **banner y** lenguaje de form deshabilitado, no uno de los dos.

**El eje real es la SEVERIDAD, no el escenario.** Los cuatro nombres son alias de tres severidades (`--demo`=info, `--maint`/`--denied`=warn en dos grados, `--offline`=danger), y esa severidad está expuesta como `--sysbar-tone` (border, fondo y punto salen de ahí). Un negocio con un **quinto** escenario no pide prestado `--maint`: setea `--sysbar-tone` directo (`<div class="atlas-sysbar" style="--sysbar-tone:var(--warn)">`), el mismo mecanismo que `--tone` en `.atlas-pagestate`.

### Radio-cards — `.atlas-radiocard`

**La opción deshabilitada siempre dice por qué** (`__why`). Una opción gris sin motivo parece un bug y genera un ticket de soporte por cada usuario que la mira.

### Wizard en modal — `.atlas-wizard`

Fase 2 es preview con checklist y **totales que se recomputan en vivo**. El total va junto al botón de confirmar: es el número que la acción va a ejecutar.

**Credencial de una sola vez** (`.atlas-reveal-once`): el aviso de «no vuelve a mostrarse» va **arriba del valor** — después de copiar la credencial nadie lee.

### Badges operativos

- **`.atlas-statuspill` clickeable es un control** (cursor, hover), y respeta el piso táctil (≥56px en `tactil`). Un badge que cambia estado pero parece etiqueta estática no se descubre nunca. **Un estado de SOLO LECTURA no es una píldora: va en `.atlas-badge`** — la píldora es siempre un control. Las acciones que editan estado (desactivar cupón, suspender tenant) van como botón en la columna de acciones, no como píldora estática.
- **El `padding` del `.atlas-badge` es FIJO a cualquier densidad** (D52): el badge es de sólo lectura, no un hit target, así que **no** lee `--d-control`/`--d-pad-x` — su piso es tipográfico (12,5px, §5). El que **sí** toma el eje es `.atlas-statuspill`, porque es control (`min-height: var(--d-control)` en `tactil`).
- **El modal de cobro usa `.atlas-pos-method`** (D50), no `.atlas-segmented`: de las 6 familias que marcan su elegido con relleno, `.atlas-pos-method` es la que declara las **tres** partes (borde + relleno + tinta `--ac-on`) y vive en grilla de tarjetas, no en barra. `.atlas-segmented` (radio de formulario compacto) ahora engancha en los **tres** atributos — `aria-selected`, `aria-checked` **y** `aria-pressed` — como prometía el mapa.
- **Semáforo de stock de 5 niveles** (`--out` `--crit` `--low` `--ok` `--over`): el color es **redundante con la palabra** (§9.6b), y **texto y punto salen del mismo tono** (`--stock-tone`). Agotado / crítico / bajo (`--danger`/`--danger`/`--warn`), sano (`--ok`), y el tramo de **arriba** (`--over`) — exceso — que por default es `--info` («capital inmovilizado»). Un negocio donde **más es mejor** repinta ese tramo seteando `--stock-tone` (p. ej. `--ok`) sin abandonar el rol. *(Ojo: en `.atlas-progress`, `--over` es `--ok` — ahí «pasar la meta» es un hecho neutro; dos familias, mismo sufijo, sentidos distintos a propósito.)*
- `.atlas-coltype`: letra en 18px, **un tono** (la letra es la señal, no el color — como el semáforo). Va en chrome compacto (config de columna, chips de filtro) donde no entra «moneda» pero sí una M — **no en el header de la planilla**, que en matriz muestra el nombre entero.

### Breadcrumbs + topbar

El último crumb **no es link** y se ve distinto: es el lugar donde estás. **El reloj vivo es el único elemento del sistema que se actualiza solo sin animación** — en un turno de caja la hora es dato operativo, y parpadear cada segundo sería insoportable.

### Fila-tarea — `.atlas-task`

La pill lleva el progreso **en unidades de trabajo** («2/5»), no una barra: una barra sin números no dice cuánto falta. Cuatro estados: `--todo` `--doing` `--done` `--block`.

---

## 10. Motion aplicado — qué usa cada keyframe, y qué loopea

> ⚠️ **Leé esto antes de copiar un keyframe.** Siete de las animaciones de gráfico del
> showcase **loopean a propósito**, y para poder loopear **terminan en el estado vacío**:
> `growBar` cierra en `scaleY(0)`, `gaugeFill` vuelve a `stroke-dashoffset: 289`,
> `fillW` a `scaleX(0)`, `drawLoop` a `dashoffset: 1`. Copiadas literal a una app real,
> **tus datos laten para siempre y se borran solos**. Para producción usá las variantes
> `atlas*In` de `atlas.css` §15, que terminan en el valor final con `fill-mode: both`.

| Keyframe | Componente que lo usa | Demo | **En PRODUCCIÓN** |
|----------|----------------------|------|-------------------|
| `floatBlob` | blob ambiental 1 y 3 del fondo | loop 18–26s | **loop** — es ambiente, correcto que respire |
| `floatBlobB` | blob ambiental 2 | loop 22s | **loop** |
| `spin` | `.atlas-spinner` | loop | **loop** mientras carga; desmontalo al terminar |
| `shimmer` | `.atlas-skeleton` | loop | **loop** mientras carga; reemplazá por contenido real |
| `indet` | `.atlas-progress-indet` | loop | **loop** mientras el progreso sea desconocido |
| `shimmerSweep` | brillo que barre un botón/CTA destacado | loop | **one-shot** al montar, o quitalo. En loop es publicidad. |
| `dot3` | puntos de "cargando" genéricos | loop | **loop** mientras espera |
| `chatDot` | `.atlas-typing` (escribiendo…) | loop | **loop** mientras el otro escribe; desmontá el nodo al recibir el mensaje |
| `chatIn` | burbuja de mensaje nuevo | one-shot | **one-shot** `.3s both` |
| `overlayIn` | `.atlas-backdrop` | one-shot | **one-shot** `.25s both` |
| `dialogIn` | `.atlas-dialog`, `.atlas-popover` | one-shot | **one-shot** `.35s` / `.22s both` |
| `sheetIn` | `.atlas-sheet` (hoja inferior) | one-shot | **one-shot** `.4s both` |
| `toastIn` | `.atlas-toast` | one-shot | **one-shot** `.4s both`; salida = reverso o `opacity` |
| `heartPop` | botón de favorito al activarse | one-shot | **one-shot**, disparado por el click, no al montar |
| `rippleOut` | ripple de tap | one-shot | **one-shot**, y **remové el nodo** en `animationend` |
| `breathe` | CTA que pide atención | loop | **one-shot ×2 máximo**, o sólo mientras el CTA está en viewport. Un botón que late eternamente es ansiedad. |
| `slideX` | demo del switch/segmentado moviéndose | **loop demo** | **no existe en producción** — es una vitrina. Usá `transition: transform .25s`. |
| `countGlow` | destello del contador al llegar al valor | one-shot | **one-shot** `.6s`, encadenado al final del conteo |
| `drawLoop` | línea del gráfico dibujándose | **loop, vuelve a vacío** | → **`atlasDrawIn`** one-shot `1.1s both` |
| `areaReveal` | relleno de área apareciendo | **loop, vuelve a opacity 0** | → **`atlasAreaIn`** one-shot `.6s .3s both` |
| `dotPop` | puntos de dato apareciendo | **loop, vuelve a scale 0** | → **`atlasDotIn`** one-shot `.4s both`, stagger 40ms |
| `growBar` | barras verticales creciendo | **loop, cierra en `scaleY(0)`** | → **`atlasBarIn`** one-shot `.7s both`, `transform-origin: bottom`, stagger 90ms |
| `gaugeFill` | ring de meta llenándose | **loop, vuelve a `dashoffset: 289`** | → **`atlasGaugeIn`** one-shot `.9s both` con `--gauge-to` = tu offset real |
| `fillW` | barras de progreso del P&L | **loop, cierra en `scaleX(0)`** | → **`atlasFillIn`** one-shot `.7s both`, `transform-origin: left`, stagger 120ms |

**Reglas de motion en producción:**
- **Limpiá el `transform` al terminar.** GSAP deja `transform: translate(0px,0px)` inline y permanente; un `transform` en un elemento estático crea **stacking context**, así que cualquier popover que viva dentro de un contenedor animado queda encerrado y las tarjetas hermanas se pintan encima (medido: 94% del popover ocluido, un date-picker inusable). `atlas-anim.js` ya hace `clearProps` en `onComplete` — si escribís tu propio tween, hacelo también.
- **`fade-up` automático asume una página de secciones, no un scroller de app.** Con un host más alto que el viewport (lo normal en un ERP: 2400px con 7 bloques), los bloques de abajo animan **bajo el fold** y nadie los ve; `ScrollTrigger` no lo arregla, porque el trigger nace ya pasado. En layouts de app: `init({autoSections:false})` y declará la entrada por bloque con `data-anim="fade-up"`. El archivo detecta el scroller real (ancestro con `overflow:auto`), no `window`.
- Un gráfico se anima **una vez, al entrar en viewport** (`once: true`). No en cada re-render ni en cada cambio de filtro — para cambios de dato usá `transition` en `height` / `width` / `stroke-dashoffset`, que es lo que ya trae `atlas.css`.
- Duraciones: entrada de dato 0.7–1.1s · overlay 0.22–0.4s · microinteracción 0.3–0.5s · hover/active 0.15s.
- Easing: `--ease-out` (`cubic-bezier(.22,1,.36,1)`) para entradas · `--ease-spring` (`cubic-bezier(.34,1.56,.64,1)`) sólo para toast, `heartPop` y `atlasDotIn`.
- Todo lo que loopea tiene que tener una **condición de salida**: se desmonta, o para al salir del viewport.
- `prefers-reduced-motion` ya está cubierto en `atlas.css` §16 — no vuelvas a manejarlo a mano.

---

## 10b. Motion de ESTADO — lo que una entrada no cubre (§11e del CSS)

> §10 lista animaciones de **entrada**: algo aparece. Una transición de **estado** es otra cosa — algo que ya estaba cambia. Copiar una entrada para un cambio de estado es el error que produce dashboards que parpadean.

### Cambio de tab / subnav

**Se mueve el contenido, nunca el chrome.** El panel entrante hace fade + 6px (`.atlas-tabpanel`, 200 ms); la barra de tabs, el header y la nav quedan **quietos**. Si el chrome se mueve, el usuario cree que navegó a otra pantalla y pierde el hilo de dónde estaba.

La única excepción es el **indicador del tab activo** (`.atlas-tab-ind`), que sí se desliza: su movimiento **es** la información — de dónde a dónde fuiste.

### Coreografía skeleton → contenido (con 14 widgets)

La pregunta era cascada, batch o cada-uno-cuando-llega. **Las tres, en este orden:**

1. **Cada widget aparece cuando llega su dato.** No se espera al más lento — un dashboard que espera al widget más lento se siente más lento que su peor consulta.
2. **Cascada corta para los que ya están:** 6 pasos de 40 ms (`.atlas-reveal`), y del séptimo en adelante todos con el mismo delay. Con 14 pasos la cascada tarda más que los datos, y eso es animación cobrándole tiempo al usuario.
3. **Nunca re-animar** un widget que ya se mostró, aunque su dato se actualice — para eso está `.atlas-live`.

### Autosave sin submit — el contrato completo

| Capa | Señal | Timing |
|------|-------|--------|
| Celda | spinner de 10px → tick de `--ok` | el tick vive **1.4 s** y se va |
| Fila | barra de 2px en el borde izquierdo | acompaña a la celda |
| Tabla | «Guardando…» / «Todo guardado» / «2 sin guardar» | **persistente** |

**El tick se va; el estado de tabla se queda.** Un acuse que permanece deja la planilla como un árbol de navidad, y un estado global que desaparece deja al usuario sin saber si puede cerrar la pestaña.

**¿Dónde va el error si la celda perdió el foco?** En los dos lados: `td.err` marca la celda, y la **cola de toasts** lleva la acción «Reintentar». La celda sola no alcanza — puede estar fuera de pantalla cuando falla.

### Optimistic update

`pendiente → confirmado → rollback` (`.atlas-optimistic`, `--done`, `--rollback`). El **único loop** permitido es el pulso de «pendiente», y solo mientras la promesa está en vuelo. El rollback sacude 4px y vuelve: es un «no se pudo», no un error de validación.

### Valor que refresca en vivo

**Sí, `countGlow` es el canónico** (`.atlas-live`), con un límite: **solo cuando el valor cambia sin que el usuario haya pedido nada** — una venta nueva entrando al dashboard. Si el cambio es consecuencia de su propia acción, esa acción ya tiene feedback, y dos acuses para un solo hecho es ruido.

**Nunca en loop.** Un KPI que late para siempre entrena al ojo a ignorarlo, que es lo contrario de lo que se buscó.

### Ritual de bienvenida

El **único one-shot largo** que el sistema permite: hasta **1.8 s** en total (`.atlas-welcome` + `__mark` + `__line`). Solo en tres momentos: **primer login del día**, **cierre de caja exitoso**, **fin de onboarding**.

Nunca en una pantalla de trabajo, nunca dos veces en la misma sesión, y **siempre salteable** con cualquier tecla o toque — un ritual que no se puede saltear es una demora con buena intención.

### Escala de z (declarada)

`--z-base: 0` (ambiente: los blobs) · `--z-content: 1` (contenido) · `--z-sticky: 20` · `--z-nav: 40` · `--z-backdrop: 50` · `--z-overlay: 55` · `--z-popover: 58` · `--z-toast: 60` · `--z-ritual: 70`.

- **El contenido tiene su propio peldaño** (`--z-content: 1`), un escalón por encima de los blobs (`--z-base: 0`). Los blobs son un elemento **posicionado**, así que sin ese peldaño el contenido empataba en 0 y el desempate quedaba en el orden del DOM — montar el contenido antes que los blobs lo mandaba atrás (medido: 34% de la tarjeta de login tapada). El contenido posicionado usa `--z-content`; `.atlas-blobs` lee `--z-base`. (D25)
- **La cola de toasts es el techo de lo INTERACTIVO** (`--z-toast: 60`), no de todo. Por encima vive **el rito a pantalla completa** (`--z-ritual: 70`, la bienvenida): un acuse no debe flotar sobre algo que el usuario todavía no puede ver. Nada más sube ahí. (D26)
- **Las familias leen el token, no el número.** `.atlas-backdrop` y `.atlas-toast-queue` consumen `var(--z-backdrop)` / `var(--z-toast)`; reasignar un peldaño en `:root` mueve la app entera. (D27)

---

## 11. Defaults del panel de Tweaks

| Prop | Tipo | Opciones | **Default canónico** |
|------|------|----------|----------------------|
| `accent` | enum | Salvia · Morado · Ámbar | **Salvia** |
| `theme` | enum | Light · Dark | **Light** |
| `glass` | range 0–100, paso 5, `%` | — | **70** |

**Sí, `glass: 70` es el valor canónico**, y de ahí sale todo el material:

| | Fórmula | **gi = 70** |
|-|---------|-------------|
| `--blur` | `6 + gi × 0.22` px | **21px** |
| `--glass` (claro) | `0.34 + gi × 0.0032` | **.564** |
| `--glass-strong` (claro) | `0.55 + gi × 0.0025` | **.725** |
| `--glass` (oscuro) | `0.05 + gi × 0.0011` | **.127** |
| `--glass-strong` (oscuro) | `0.10 + gi × 0.0016` | **.212** |

En `atlas.css` esas fórmulas están como `calc()` sobre `--gi`, así que en código **movés `--gi` y listo** — no toques `--glass` a mano. Rango sano: **55–85**. Debajo de 40 el vidrio desaparece y las tarjetas flotan sin material; arriba de 90 el fondo se pierde y ya es una superficie opaca (usá `--surface` si eso es lo que querés).

Los otros tres tokens sensibles al tema (`--blob`, `--ac-on`, `--glass-shadow`) **no son tweakables**: se derivan del tema y del acento, y tocarlos rompe contraste.

---

## 11e. Familias de pantalla-de-app (ronda XI)

Cuatro familias que el showcase demostraba y `atlas.css` no declaraba, y una que queda **fuera de alcance**. Todas nuevas — sin colisión con nada declarado arriba.

- **Armazón del shell (D75) — `.atlas-shell` · `.atlas-topbar` · `.atlas-sidebar` · `.atlas-raised` · `.atlas-orgswitch`.** D32 resolvió *dónde* va cada pieza con dos maquetas; esto da las **clases**. El material de la barra (`--surface` al 82% + `blur(18px)`) vivía a mano en las dos maquetas y en `SideNav.tsx` — un valor en dos lados y en ninguno no es receta. `.atlas-raised` es la superficie apoyada (`--e1`), un escalón por debajo de `.atlas-solid` (`--e2`): el token existía y la clase no. `.atlas-orgswitch` es el switcher de negocio/sucursal, control propio.
- **Comanda de cocina (D71) — `.atlas-ticket`.** Tarjeta sólida de trabajo (§11b, el POS no usa vidrio): `__head` (n° + mesa/hora), `__line` (`__qty` × `__item`, con `small` para modificadores), `__turn` (divisor rotulado entre tandas) y el estado por color del **borde superior** (`--new`/`--cooking`/`--ready`), no tiñendo la tarjeta. Consumidor vivo: `features/kitchen` (13 archivos).
- **Arqueo de caja (D73) — `.atlas-cashcount`.** `__row` (denominación × cantidad = subtotal), y `__diff` con veredicto por **tolerancia** (`--ok`/`--warn`/`--danger` vía `--diff-tone`), no por el signo del descuadre — la tolerancia de `Bs 5` ya vive en el código. Consumidor: `features/cash-closing` (17 archivos).
- **Tira de etapas (D74) — `.atlas-stepstrip`.** Distinta de `.atlas-wizard` (pasos de un alta modal) y de `.atlas-statuspill` (una etiqueta): muestra *dónde* está la orden en su recorrido (recibido → cocina → listo → entregado), con `--done`/`--now`. Prioridad menor: la etiqueta actual funciona; esto es mejora.
- **Recibo térmico (D72) — FUERA DE ATLAS, por decisión.** El ticket de 58 mm es otro medio: monoespaciado real, sin color, ancho físico fijo — contradice la tipografía, el color y la escala de todo el sistema. **No** lleva familia `atlas-*`; se escribe con su propio CSS de impresión térmica. El límite queda escrito para que no se intente meter a la fuerza: `atlas.css` sólo toca impresión para **degradar** el vidrio (`@media print`), nunca para componer el documento térmico.

---

## 11f. Familias del barrido showcase-contra-APP (ronda XIII)

Cinco familias que el showcase dibujaba **a mano** y `atlas.css` no declaraba, más dos decisiones de alcance. Todas nuevas.

> **Lección de método, y vale para leer cualquier artboard:** *un dibujo del showcase no implica que la receta exista.* En el mismo artboard de los sliders la maqueta dibuja «Progreso» **inline** teniendo `.atlas-progress` declarada y consumida. El showcase es una maqueta, no la fuente de clases — la fuente es `atlas.css`.

- **Barra inferior (D85) — `.atlas-bottomnav`.** La **tercera** forma de navegar: el artboard dibujaba tres y el sistema declaraba dos (`.atlas-topbar`, `.atlas-sidebar`). Sujeto real: el POS corre en tablet y celular en el salón, donde la lateral de 248px no entra — hoy esa pantalla no tiene navegación. **Flota** (píldora centrada, `env(safe-area-inset-bottom)` sumado al margen; a sangre el gesto de home la roza), en **vidrio** porque es cromo que se apoya sobre contenido en scroll, no una superficie de datos. Celda de 74px × ≥56px (piso táctil), glifo 22px sobre rótulo de 11px Sora 600, activa en tinte de acento por `aria-current`. **Techo: 5 celdas** (74×5 + padding entra en 360px, el piso de pantalla que soportamos); con más, las 4 primeras van por frecuencia y la 5ª es **«Más»**, que abre el resto en una hoja — **nunca scroll horizontal**, que esconde entradas sin decirlo.
- **Subir archivo (D87) — `.atlas-drop` + `.atlas-upload-row`.** Zona de arrastre con punteado **neutro** (la misma decisión que `.atlas-tile--add`: el punteado de acento ya carga «pendiente» y «editable»), y el acento entra **sólo** en `dragover` (`--over`), que es el único momento en que hay que confirmar el destino del gesto. La fila del archivo en curso **no es `.atlas-progress` sin más**: lleva nombre truncable, tamaño/porcentaje tabular, una acción de cancelar y la barra abajo a todo el ancho.
- **Línea de tiempo (D88) — `.atlas-timeline`.** Histórico de eventos, **no** la tira de etapas de D74: `.atlas-stepstrip` dice *dónde está* la orden; esto dice *qué le pasó*, con hora y autor. El riel es un `border-left` de la fila (así la última lo corta sin trucos), el punto codifica tipo por tono semántico — y como el color no puede ser el único portador (§9.6b), **el tipo también está en el título**. `__body` para el evento que trae cuerpo (un `old→new` de auditoría). Sujeto con dato ya guardado: anulación de orden (`voided_at`/`by`/`reason`) y el audit append-only de la planilla.
- **Acordeón (D92) — `.atlas-accordion`.** Familia propia, **no** composición: la app ya resolvió el mismo gesto de dos formas distintas (`CollapsibleRow` y el desplegable de `StockTableSection`), que es justo el modo de falla que esta migración existe para matar. El estado sale de `aria-expanded` (el glifo rota con `transform`, §10), así que no hay clase de estado que el consumidor pueda olvidar.
- **Tecla (D86) — `.atlas-kbd`.** La tecla aparecía en tres lugares sin forma propia (hint de menú, campo de búsqueda, atajo suelto).

**Dos decisiones de alcance:**

- **La PALETA DE COMANDOS se COMPONE, no es familia nueva (D86).** `.atlas-dialog` (contenedor, ancho `--md`) + `.atlas-input` (campo) + `.atlas-menu__item` con su `.atlas-menu__hint` (fila de comando: glifo, rótulo, sección, tecla) cubren el artboard entero. Lo único que faltaba era la tecla, y ya está declarada. Una familia paralela duplicaría la fila de menú con otro nombre — el defecto que D92 documenta.
- **La MENSAJERÍA INTERNA no entra en Atlas (D89).** Los dos artboards (30 KB) demuestran cuatro bloques que el sistema no declara —acuse de recibo en cinco estados, cita + reacciones, adjuntos de negocio como tarjeta en la burbuja, divisores y vacíos— y **no hay sujeto**: es mensajería salón↔cocina↔proveedor, que Twenty no tiene. Declararla sería código dormido con superficie de mantenimiento (§1), y el acuse de recibo por sí solo pide cinco estados con iconografía propia. **No es el chat del asistente:** eso es `.atlas-ask-*`, que sí existe y sí se consume. Las seis clases de burbuja que hay (`.atlas-bubble-in/-out`, `-time`, `.atlas-divider-day/-unread`, `.atlas-msg-enter`) se quedan como están: alcanzan para un hilo simple y no prometen lo que no cubren. **Si la mensajería entra al producto, la ficha vuelve** — como el recibo térmico de D72.

---

## 11g. El chequeo de release: una propiedad, una vía (bloque A de la ronda XII)

> **Ninguna familia declara la misma propiedad en dos secciones, ni por dos vías que se anulan entre sí.** Es lo único de esta ronda que no es una receta: es el chequeo que habría cazado **ocho** defectos que llegaron hasta el consumidor.

El modo de falla no produce un error y no se ve leyendo la sección que uno tiene abierta: la regla simplemente **no aplica** y el consumidor cree que sí. Las tres formas que ya nos pasaron:

1. **Gana la última que emite el archivo, no la que la prosa nombra.** `.atlas-btn--danger` (tintada en §5, sólida en §11f) · el trazo de sparkline (D45) · `.atlas-pos-tile` (D48, y **reincidió** en la ronda X porque el entregable del emoji la volvió a declarar) · `.atlas-progress--thick` (D81: su `height` moría 944 líneas más abajo).
2. **Gana la especificidad, y mover la regla no salva.** `.atlas-pos-line--counter` (D83): `:has()` toma la especificidad de su argumento (**0,2,0**) y le ganaba a la variante de una sola clase (**0,1,0**) — y la condición se cumplía en el 100% de sus líneas, porque el stepper permanente *es* lo que la variante significa. Se arregla acotando la base con `:not(--counter)`, no reordenando.
3. **Gana el MOTOR DE RENDER: la vía es inalcanzable por construcción.** `.atlas-scroll` (D84): en Chromium cualquiera de las props estándar (`scrollbar-width`/`scrollbar-color`) desactiva el bloque `::-webkit-scrollbar*` entero, así que los 10px, la píldora y el borde de 2px **nunca** se rendían. No pierde por orden ni por especificidad, y no hay escotilla de call site.

**Qué valida el chequeo, en concreto:** para cada clase `atlas-*`, que ninguna propiedad esté declarada en dos bloques de nivel superior separados; para cada variante `--x`, que su declaración se emita **después** de su base; y que no convivan dos vías conocidas de anularse (props estándar de scrollbar + bloque webkit; `fill-mode: both` en una entrada que aloja un popover, §10).

**La regla de escritura que se sigue de esto:** una variante se declara **junto a su base y después**, nunca en la sección donde «temáticamente» encaja. Y cuando una receta re-declara una familia que ya existe más arriba, **el comentario tiene que decirlo** — es la única señal que sobrevive a leer el archivo por partes.

**Decisión de `.atlas-scroll` (D84), las dos que pedía la ficha:**

- **Cuál mitad es la receta: las props ESTÁNDAR.** El bloque webkit se retiró: era código muerto por construcción. Lo que la receta certifica es el **color** (thumb 3,31:1 claro / 4,77:1 oscuro, ≥3:1 WCAG 1.4.11) sobre la barra **fina del sistema**; la **forma la elige el SO**, y para un ERP eso es correcto — la barra es cromo del sistema operativo, no una pieza de marca. Nadie reconoce a Hatlas por su scrollbar.
- **Sobre qué nodo va: el contenedor de scroll de una REGIÓN**, no cada caja con overflow. En la práctica: el `<main>` del shell, y los paneles que scrollean solos (drawer, lista de master-detail, cuerpo de diálogo). **No** en los scrollers internos de un widget — ahí la barra es del widget y la hereda del SO. **Nunca global:** `html`/`body` se quedan con la barra del sistema sin teñir. Con 38 scrollers, la clase va en 3 o 4.
- ⚠ **Y adoptarla cambia la barra de esta app a propósito:** el `<main>` pasa de un carril de 5px siempre visible a la barra superpuesta del sistema, y `scrollbar-gutter: stable` queda no-op. Los 5px de hoy son una regla global propia que fuerza barra clásica sobre el default de macOS (paridad con el legacy); **Atlas no la pide**, y una barra permanente que nadie mira le cobra 5px a cada región de contenido.

---

## 12. Errores comunes a evitar

- ❌ Colores hex sueltos → ✅ siempre `var(--ac)`, `var(--ink)`, `var(--ok)`, etc.
- ❌ **Usar los hexes de los otros acentos (`#B9772A`, `#6C5BE0`) como colores de estado** → ✅ `--ok/--warn/--info/--danger`, o material (§5 Estados de entidad). Este es el error más común y el más difícil de ver: funciona en un acento y se rompe en los otros dos.
- ❌ Un semántico igual a un acento (`--ok` = verde Salvia) → ✅ semánticos fijos e independientes; `--info` azul.
- ❌ Pintar el hex crudo del dueño como texto → ✅ `.atlas-data-tag` con el piso de contraste de §9.12; el color-de-datos no entra en la rampa.
- ❌ Emojis en copy, títulos, badges o notificaciones → ✅ solo en `.atlas-pos-tile__glyph` (§9.13), y siempre con el nombre al lado.
- ❌ `--ac-light` / `--ac-deep` como si fueran estados → ✅ son pasos de rampa (series, avatares, jerarquía).
- ❌ Mezclar los 3 acentos en una pantalla o en un gráfico → ✅ un acento; gráficos = rampa monocromática con `color-mix(in srgb,var(--ac) N%,#fff)`.
- ❌ Sombra plana o `box-shadow` inventado en tarjetas → ✅ `var(--e1|--e2|--e3)` + `var(--e-inner)` (§4). La jerarquía la da la **elevación**, no un tinte nuevo.
- ❌ **Vidrio dentro de vidrio** → ✅ una tarjeta dentro de un panel de vidrio es **sólida**. Dos capas de `backdrop-filter` pagan dos veces y el contraste del contenido deja de ser predecible.
- ❌ **Más de 2 `.atlas-glass--refract` por pantalla** → ✅ techo duro de 2. Con 8 el sistema mide 10.6 fps.
- ❌ **Texto ≤13.5px, dato denso o input sobre vidrio** → ✅ plano sólido (§4). Sobre una superficie translúcida el contraste depende del scroll, así que deja de ser una propiedad del diseño.
- ❌ **Texto chico sobre relleno de `--ac`** → ✅ `--ac-deep`. Blanco sobre Ámbar `--ac` mide 3.66:1 a 15px/600. Vale para el botón primario y para el tile de acción, sin excepción.
- ❌ `composes:` en una hoja plana → ✅ es sintaxis de CSS Modules; el parser la **descarta en silencio**. Agrupá el selector.
- ❌ Inter/Roboto/Arial → ✅ solo Sora + Instrument Sans.
- ❌ Animar con CSS `animation` en entradas de scroll → ✅ `data-anim` + `atlas-anim.js`.
- ❌ Olvidar `tabular-nums` en cifras, o `Escape`/clic-fuera para cerrar overlays.
