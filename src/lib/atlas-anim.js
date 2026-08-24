/* ==========================================================================
   ATLAS LIQUID GLASS — atlas-anim.js
   Contrato de animación por atributos `data-anim`. v1.0

   DEPENDENCIAS (cargalas antes de este archivo)
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

   USO
     <script src="atlas-anim.js"></script>
     <script>atlasAnim.init();</script>            // o esperá DOMContentLoaded

     ESM / bundler:
     import { init } from './atlas-anim.js';  init();

   CONTRATO
   ┌──────────────────────────┬───────────────────────────────────────────────┬──────────────────────────┐
   │ atributo                 │ efecto                                        │ extras                   │
   ├──────────────────────────┼───────────────────────────────────────────────┼──────────────────────────┤
   │ data-anim="text-reveal"  │ titular revela palabra por palabra desde abajo│ data-stagger="0.06"      │
   │                          │                                               │ data-delay="0.1"         │
   │ data-anim="clip-reveal"  │ wipe al entrar en viewport                    │ data-direction="left|    │
   │                          │                                               │   right|up|down"         │
   │ data-anim="sticky-nav"   │ la barra gana sombra y se comprime al scroll  │ data-threshold="20"      │
   │ data-anim="fade-up"      │ sube + aparece (explícito)                    │ data-stagger, data-y     │
   │ data-anim="count"        │ cuenta el número hasta data-count             │ data-count, data-dec,    │
   │                          │                                               │ data-prefix, data-suffix,│
   │                          │                                               │ data-dur                 │
   │ data-anim="none"         │ opt-out: excluye del fade-up automático       │ —                        │
   │ (automático)             │ toda <section> sin [data-anim] hace fade-up   │ desactivable con         │
   │                          │ escalonado de sus hijos                       │ init({autoSections:false})│
   └──────────────────────────┴───────────────────────────────────────────────┴──────────────────────────┘

   GARANTÍAS
   · `prefers-reduced-motion: reduce` → no anima nada y el contenido queda
     VISIBLE en su estado final (nunca opacity:0 huérfano).
   · Si GSAP no cargó, reintenta 50× cada 140ms y después se rinde sin romper.
   · Idempotente: marca cada nodo con data-aa-done, podés re-llamar init()
     después de renderizar contenido nuevo.
   ========================================================================== */

(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.atlasAnim = api;
  root.initAtlasAnims = api.init;   // alias suelto
}(typeof self !== 'undefined' ? self : this, function () {

  'use strict';

  const DEFAULTS = {
    scope: null,            // Element | null → document
    autoSections: true,     // fade-up automático por <section>
    sectionSelector: 'section',
    start: 'top 84%',       // ScrollTrigger start del fade-up
    stagger: 0.08,
    y: 42
  };

  let tries = 0;

  function prefersReduce() {
    return typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function num(el, key, fallback) {
    const v = parseFloat(el.getAttribute('data-' + key));
    return isNaN(v) ? fallback : v;
  }

  function once(el) {
    if (el.dataset.aaDone) return false;
    el.dataset.aaDone = '1';
    return true;
  }

  /* El reloj puede no avanzar NUNCA (pestaña en segundo plano, print/PDF,
     pipelines de captura). g.from() escribe el estado oculto al instante, así
     que sin reloj el elemento se queda ahí para siempre. REGLA: nada se
     esconde antes del primer tick REAL — si no hay reloj, el reposo es el
     estado visible. El estado inicial de un tween no puede ser lo único que
     separa al usuario del contenido. */
  function onClock(g, fn) {
    let ran = false;
    const run = () => { if (ran) return; ran = true; g.ticker.remove(run); fn(); };
    g.ticker.add(run);
  }

  /* ---------------------------------------------------------------------- */
  /* text-reveal                                                            */
  /* ---------------------------------------------------------------------- */
  function textReveal(g, el) {
    if (!once(el)) return;
    const words = el.textContent.split(/(\s+)/);
    el.textContent = '';
    const spans = [];
    words.forEach(w => {
      if (/^\s+$/.test(w)) { el.appendChild(document.createTextNode(w)); return; }
      const s = document.createElement('span');
      s.textContent = w;
      s.style.display = 'inline-block';
      s.style.willChange = 'transform,opacity';
      el.appendChild(s);
      spans.push(s);
    });
    onClock(g, () => g.from(spans, {
      yPercent: 110,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: num(el, 'stagger', 0.06),
      delay: num(el, 'delay', 0.1),
      onComplete: function () { g.set(this.targets(), { clearProps: 'transform,willChange' }); }
    }));
  }

  /* ---------------------------------------------------------------------- */
  /* sticky-nav — la barra interior gana sombra y se comprime               */
  /* Aplica la clase .atlas-glass--raised si existe atlas.css; si no,       */
  /* escribe el box-shadow inline (fallback autónomo).                      */
  /* ---------------------------------------------------------------------- */
  const RAISED = '0 2px 6px rgba(23,22,27,.06),0 16px 40px var(--glass-shadow,rgba(23,22,27,.2)),inset 0 1.5px 1.5px var(--glass-hi,rgba(255,255,255,.9))';
  const RESTING = '0 1px 2px rgba(23,22,27,.05),0 10px 30px var(--glass-shadow,rgba(23,22,27,.14)),0 3px 8px rgba(23,22,27,.05),inset 0 1.5px 1.5px var(--glass-hi,rgba(255,255,255,.9)),inset 1.5px 0 1px var(--glass-edge,rgba(255,255,255,.55)),inset -1.5px 0 1px var(--glass-edge,rgba(255,255,255,.55)),inset 0 -10px 20px -10px var(--glass-hi,rgba(255,255,255,.55))';

  function stickyNav(el) {
    if (!once(el)) return;
    const bar = el.firstElementChild || el;
    const th = num(el, 'threshold', 20);
    const onScroll = () => {
      const on = window.scrollY > th;
      bar.classList.toggle('atlas-glass--raised', on);
      bar.style.boxShadow = on ? RAISED : RESTING;
      bar.style.transform = on ? 'scale(.985)' : 'scale(1)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------------------------------------------------------------------- */
  /* clip-reveal                                                            */
  /* ---------------------------------------------------------------------- */
  const HIDDEN = {
    left:  'inset(0 100% 0 0)',
    right: 'inset(0 0 0 100%)',
    up:    'inset(100% 0 0 0)',
    down:  'inset(0 0 100% 0)'
  };

  function clipReveal(g, el) {
    if (!once(el)) return;
    const hidden = HIDDEN[el.getAttribute('data-direction') || 'left'] || HIDDEN.left;
    onClock(g, () => g.fromTo(el,
      { clipPath: hidden, webkitClipPath: hidden },
      {
        clipPath: 'inset(0 0 0 0)', webkitClipPath: 'inset(0 0 0 0)',
        duration: 1.05, ease: 'power3.out',
        immediateRender: false,   // no recorta hasta que su trigger corra
        scrollTrigger: { trigger: el, start: 'top 82%', once: true }
      }
    ));
  }

  /* El contenedor de scroll real puede ser un ancestro con overflow:auto (shell
     de app), no window. Sin pasarlo, ScrollTrigger mide contra el viewport
     equivocado y no dispara nunca. */
  function scrollerOf(el) {
    let p = el.parentElement;
    while (p && p !== document.body && !/(auto|scroll)/.test(getComputedStyle(p).overflowY)) p = p.parentElement;
    return (p && p !== document.body) ? p : window;
  }

  /* ---------------------------------------------------------------------- */
  /* fade-up explícito                                                      */
  /* ---------------------------------------------------------------------- */
  function fadeUp(g, el, opts) {
    if (!once(el)) return;
    const kids = Array.from(el.children).filter(k => k.offsetHeight > 0);
    const targets = kids.length ? kids : [el];
    onClock(g, () => g.fromTo(targets,
      { opacity: 0, y: num(el, 'y', opts.y) },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        stagger: num(el, 'stagger', opts.stagger),
        overwrite: true, immediateRender: false,
        /* GSAP deja `transform: translate(0px,0px)` inline y permanente al
           terminar. Un transform en un elemento estático crea stacking
           context, así que cualquier popover que viva adentro queda encerrado
           y las tarjetas hermanas se pintan encima. Hay que limpiarlo. */
        onComplete: function () { g.set(this.targets(), { clearProps: 'transform,willChange' }); },
        scrollTrigger: { trigger: el, scroller: scrollerOf(el), start: opts.start, once: true }
      }
    ));
  }

  /* ---------------------------------------------------------------------- */
  /* count — cifras que suben. Respeta es-BO.                               */
  /* ---------------------------------------------------------------------- */
  function count(el) {
    const target = num(el, 'count', 0);
    const dur = num(el, 'dur', 1700);
    const dec = num(el, 'dec', 0);
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const fmt = v => prefix + v.toLocaleString('es-BO', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suffix;
    const t0 = performance.now();
    const step = now => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * eased);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = fmt(target);
    };
    requestAnimationFrame(step);
  }

  function countOnEnter(g, ST, el) {
    if (!once(el)) return;
    ST.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => count(el) });
  }

  /* ---------------------------------------------------------------------- */
  /* Fallback sin animación: dejá TODO visible                              */
  /* ---------------------------------------------------------------------- */
  function showStatic(scope) {
    scope.querySelectorAll('[data-anim="count"]').forEach(el => {
      const dec = num(el, 'dec', 0);
      el.textContent = (el.getAttribute('data-prefix') || '')
        + num(el, 'count', 0).toLocaleString('es-BO', { minimumFractionDigits: dec, maximumFractionDigits: dec })
        + (el.getAttribute('data-suffix') || '');
    });
    scope.querySelectorAll('[data-anim="clip-reveal"]').forEach(el => {
      el.style.clipPath = 'none';
      el.style.webkitClipPath = 'none';
    });
  }

  /* ---------------------------------------------------------------------- */
  /* init                                                                   */
  /* ---------------------------------------------------------------------- */
  function init(options) {
    const opts = Object.assign({}, DEFAULTS, options || {});
    const scope = opts.scope || document;
    const reduce = prefersReduce();
    const g = window.gsap;
    const ST = window.ScrollTrigger;

    if ((!g || !ST) && !reduce) {
      if (++tries < 50) return setTimeout(() => init(options), 140);
      showStatic(scope);
      return;
    }
    if (reduce || !g || !ST) { showStatic(scope); return; }

    g.registerPlugin(ST);

    scope.querySelectorAll('[data-anim="text-reveal"]').forEach(el => textReveal(g, el));
    scope.querySelectorAll('[data-anim="sticky-nav"]').forEach(el => stickyNav(el));
    scope.querySelectorAll('[data-anim="clip-reveal"]').forEach(el => clipReveal(g, el));
    scope.querySelectorAll('[data-anim="fade-up"]').forEach(el => fadeUp(g, el, opts));
    scope.querySelectorAll('[data-anim="count"]').forEach(el => countOnEnter(g, ST, el));

    // fade-up automático: cada sección que no declara su propia animación.
    // OJO: en un scroller más alto que el viewport (lo normal en un ERP: un
    // host de 2400px con 7 bloques), los bloques de abajo animan bajo el fold
    // y nadie los ve. Por eso el trigger usa el scroller real y un start
    // tardío, y por eso `autoSections` se apaga en layouts de app: ahí la
    // entrada se declara por bloque con data-anim="fade-up".
    if (opts.autoSections) {
      scope.querySelectorAll(opts.sectionSelector).forEach(sec => {
        if (sec.querySelector('[data-anim]') || sec.hasAttribute('data-anim')) return;
        const kids = Array.from(sec.children).filter(k => k.offsetHeight > 0);
        if (!kids.length) return;
        onClock(g, () => g.fromTo(kids,
          { opacity: 0, y: opts.y },
          {
            opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
            stagger: opts.stagger, overwrite: true, immediateRender: false,
            onComplete: function () { g.set(this.targets(), { clearProps: 'transform,willChange' }); },
            scrollTrigger: { trigger: sec, scroller: scrollerOf(sec), start: opts.start, once: true }
          }
        ));
      });
    }

    ST.refresh();

    /* Red de seguridad: a los 1200ms cualquier cosa que siga oculta se muestra.
       Cubre DESCENDIENTES (palabras del titular, bloques con clip-path), no
       solo hijos directos de sección — ahí se esconden los huecos en blanco. */
    setTimeout(() => {
      scope.querySelectorAll('[data-anim="text-reveal"] span').forEach(s => {
        if (getComputedStyle(s).opacity === '0') g.set(s, { clearProps: 'opacity,transform' });
      });
      scope.querySelectorAll('[data-anim="clip-reveal"]').forEach(el => {
        if (/100%/.test(getComputedStyle(el).clipPath || '')) g.set(el, { clearProps: 'clipPath,webkitClipPath' });
      });
      scope.querySelectorAll(opts.sectionSelector).forEach(sec => {
        Array.from(sec.children).forEach(k => {
          if (getComputedStyle(k).opacity === '0') g.set(k, { clearProps: 'opacity,transform' });
        });
      });
      ST.refresh();
    }, 1200);
  }

  /* Llamalo después de insertar contenido nuevo (los nodos ya animados se ignoran) */
  function refresh(scope) {
    tries = 0;
    init({ scope: scope || null });
  }

  return { init, refresh, count, DEFAULTS };
}));
