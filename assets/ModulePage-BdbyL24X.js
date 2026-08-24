import{h as v,l as c,j as e,u as j,i as _,r as p,k,e as y,N,G as w,S as z,b as q,L as h,V as g,g as L,a as F,f as A,d as M,F as H,c as R}from"./index-DLK22a14.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=v("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=v("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);function x({value:s}){const{vertical:a}=c(),i=s.split("");return e.jsx("span",{className:"t-digit-group is-animating",children:i.map((n,t)=>{const d=t===i.length-2?1:t===i.length-1?2:void 0;return e.jsx("span",{className:"t-digit","data-stagger":d,children:n},t)})},a)}function m({label:s,live:a=!0}){return e.jsxs("div",{className:"hm__top",children:[e.jsx("span",{className:"hm__eyebrow",children:s}),a&&e.jsxs("span",{className:"hm__live",children:[e.jsx("span",{})," en vivo"]})]})}function P(){const s=c().data.modules.pos;return e.jsxs("div",{className:"hm",children:[e.jsx(m,{label:s.title}),e.jsx("div",{className:"hm__ticket",children:s.lines.map(a=>e.jsxs("div",{className:"hm__line",children:[e.jsxs("span",{className:"hm__line-name",children:[e.jsx("span",{className:"hm__dot"}),a.label]}),e.jsx("span",{className:"hm__line-amt",children:a.amount})]},a.label))}),e.jsxs("div",{className:"hm__total",children:[e.jsx("span",{className:"hm__total-l",children:"Total"}),e.jsxs("span",{className:"hm__total-v",children:["Bs ",e.jsx("em",{children:s.total})]})]}),e.jsxs("div",{className:"hm__status",children:[e.jsx("span",{className:"hm__sc","aria-hidden":"true",children:e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:e.jsx("path",{d:"M5 12.5l4 4 9.5-10",fill:"none",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),"Factura en línea emitida"]}),e.jsxs("div",{className:"hm__chips",children:[e.jsx("span",{className:"hm__chip",children:"QR"}),e.jsx("span",{className:"hm__chip",children:"Tarjeta"}),e.jsx("span",{className:"hm__chip",children:"Efectivo"}),e.jsx("span",{className:"hm__chip hm__chip--gold",children:"Libro de Ventas ✓"})]})]})}function T(){const s=c().data.modules.almacen,a=s.items.filter(n=>n.stock<10).length,i=s.items.reduce((n,t)=>n+t.stock,0);return e.jsxs("div",{className:"hm",children:[e.jsx(m,{label:s.title,live:!1}),e.jsxs("div",{className:"hm__kpis",children:[e.jsxs("div",{className:"hm__kpi",children:[e.jsx("div",{className:"hm__kpi-l",children:"Filas"}),e.jsx("div",{className:"hm__kpi-v",children:s.items.length})]}),e.jsxs("div",{className:"hm__kpi",children:[e.jsx("div",{className:"hm__kpi-l",children:"Unidades"}),e.jsx("div",{className:"hm__kpi-v",children:i})]}),e.jsxs("div",{className:"hm__kpi hm__kpi--gold",children:[e.jsx("div",{className:"hm__kpi-l",children:"Reponer"}),e.jsx("div",{className:"hm__kpi-v",children:e.jsx(x,{value:String(a)})})]})]}),e.jsxs("table",{className:"hm__table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Producto"}),e.jsx("th",{className:"hm__num",children:"Stock"}),e.jsx("th",{className:"hm__right",children:"Estado"})]})}),e.jsx("tbody",{children:s.items.map(n=>{const t=n.stock<10;return e.jsxs("tr",{children:[e.jsx("td",{className:"hm__sku",children:n.sku}),e.jsx("td",{className:`hm__num ${t?"hm__num--low":""}`,children:n.stock}),e.jsx("td",{className:"hm__right",children:e.jsx("span",{className:`hm__pill ${t?"hm__pill--low":"hm__pill--ok"}`,children:t?"Bajo":"OK"})})]},n.sku)})})]})]})}function E(){const s=c().data.modules.logistica;return e.jsxs("div",{className:"hm",children:[e.jsx(m,{label:s.title,live:!1}),e.jsxs("div",{className:"hm__route",children:[e.jsx("span",{className:"hm__route-node",children:s.from}),e.jsx("span",{className:"hm__route-arrow","aria-hidden":"true",children:"→"}),e.jsx("span",{className:"hm__route-node hm__route-node--to",children:s.to})]}),e.jsx("div",{className:"hm__chips",children:s.chips.map((a,i)=>e.jsx("span",{className:`hm__chip ${i===s.chips.length-1?"hm__chip--ok hm__chip--shimmer":""}`,children:a},a))}),e.jsxs("div",{className:"hm__movs",children:[e.jsxs("div",{className:"hm__mov",children:[e.jsxs("span",{className:"hm__mov-l",children:[e.jsx("span",{className:"hm__dot"}),"Traspaso entre sucursales"]}),e.jsx("span",{className:"hm__pill hm__pill--ok",children:"en camino"})]}),e.jsxs("div",{className:"hm__mov",children:[e.jsxs("span",{className:"hm__mov-l",children:[e.jsx("span",{className:"hm__dot hm__dot--muted"}),"Orden de compra a proveedor"]}),e.jsx("span",{className:"hm__pill hm__pill--done",children:"recibido"})]})]})]})}function B(){const s=c().data.modules.finanzas;return e.jsxs("div",{className:"hm",children:[e.jsxs("div",{className:"hm__top",children:[e.jsx("span",{className:"hm__eyebrow",children:s.title}),e.jsx("span",{className:"hm__period",children:"30 días"})]}),e.jsxs("div",{className:"hm__big",children:["Bs ",e.jsx("em",{children:e.jsx(x,{value:s.amount})})]}),e.jsx("div",{className:"hm__delta",children:s.delta}),e.jsxs("svg",{className:"hm__chart",viewBox:"0 0 320 90",preserveAspectRatio:"none",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"hm-fin",x1:"0",x2:"0",y1:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"color-mix(in srgb, var(--ac) 28%, transparent)"}),e.jsx("stop",{offset:"100%",stopColor:"transparent"})]})}),e.jsx("path",{d:"M0,74 L46,68 L92,58 L138,62 L184,42 L230,36 L276,22 L320,12",fill:"none",stroke:"var(--ac)",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M0,74 L46,68 L92,58 L138,62 L184,42 L230,36 L276,22 L320,12 L320,90 L0,90 Z",fill:"url(#hm-fin)"})]}),e.jsxs("div",{className:"hm__chips",children:[e.jsx("span",{className:"hm__chip hm__chip--ok",children:"Ingresos"}),e.jsx("span",{className:"hm__chip",children:"Egresos"}),e.jsx("span",{className:"hm__chip hm__chip--gold",children:"Margen"})]})]})}const O=["Bs 1.240","Bs 860","Bs 540"];function W(){const s=c().data.modules.clientes;return e.jsxs("div",{className:"hm",children:[e.jsx(m,{label:s.title,live:!1}),e.jsxs("div",{className:"hm__kpis",children:[e.jsxs("div",{className:"hm__kpi",children:[e.jsx("div",{className:"hm__kpi-l",children:"Clientes"}),e.jsx("div",{className:"hm__kpi-v",children:"104"})]}),e.jsxs("div",{className:"hm__kpi",children:[e.jsx("div",{className:"hm__kpi-l",children:"Recurrentes"}),e.jsx("div",{className:"hm__kpi-v",children:"38"})]}),e.jsxs("div",{className:"hm__kpi hm__kpi--gold",children:[e.jsx("div",{className:"hm__kpi-l",children:"En riesgo"}),e.jsx("div",{className:"hm__kpi-v",children:e.jsx(x,{value:"5"})})]})]}),e.jsx("div",{className:"hm__list",children:s.rows.map((a,i)=>e.jsxs("div",{className:"hm__client",children:[e.jsx("span",{className:"hm__avatar",children:a.name.charAt(0)}),e.jsxs("span",{className:"hm__client-text",children:[e.jsx("span",{className:"hm__client-name",children:a.name}),e.jsx("span",{className:"hm__client-sub",children:a.visits})]}),e.jsx("span",{className:"hm__client-amt",children:O[i]??"Bs 320"})]},a.name))})]})}const I=["M","C","R","A"];function K(){const s=c().data.modules.personal;return e.jsxs("div",{className:"hm",children:[e.jsx(m,{label:s.title,live:!1}),e.jsx("div",{className:"hm__statgrid",children:s.stats.map(a=>e.jsxs("div",{className:"hm__stat",children:[e.jsx("div",{className:"hm__stat-num",children:a.num}),e.jsx("div",{className:"hm__stat-l",children:a.label})]},a.label))}),e.jsxs("div",{className:"hm__team",children:[e.jsx("div",{className:"hm__avatars",children:I.map((a,i)=>e.jsx("span",{className:"hm__avatar hm__avatar--sm",children:a},i))}),e.jsxs("span",{className:"hm__team-note",children:[e.jsx("span",{className:"hm__sc","aria-hidden":"true",children:e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:e.jsx("path",{d:"M5 12.5l4 4 9.5-10",fill:"none",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round",strokeLinejoin:"round"})})}),"Planilla del mes al día"]})]})]})}const V={pos:P,almacen:T,logistica:E,finanzas:B,clientes:W,personal:K};function $({exampleKey:s}){const{vertical:a}=c(),i=V[s];return e.jsxs("div",{className:"hm-fade",children:[e.jsx(i,{}),e.jsx("style",{children:`
        .hm {
          display: flex;
          flex-direction: column;
          gap: 14px;
          height: 100%;
          padding: 18px;
          font-family: var(--font-ui);
        }
        .hm__top { display: flex; align-items: center; justify-content: space-between; }
        .hm__eyebrow {
          font-family: var(--font-display);
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink3);
        }
        .hm__live, .hm__period {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-display);
          font-size: 9px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink3);
        }
        .hm__period {
          padding: 3px 8px;
          border: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          border-radius: 999px;
        }
        .hm__live span {
          width: 6px; height: 6px; border-radius: 999px;
          background: var(--ok);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--ok) 14%, transparent);
        }
        .hm__dot {
          display: inline-block;
          width: 6px; height: 6px; border-radius: 999px;
          background: var(--ac);
          margin-right: 9px;
          vertical-align: middle;
        }
        .hm__dot--muted { background: var(--ph); }

        /* KPI strip */
        .hm__kpis { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .hm__kpi {
          padding: 11px 12px;
          border: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          border-radius: 11px;
          background: color-mix(in srgb, var(--ac) 6%, transparent);
        }
        .hm__kpi--gold { border-color: color-mix(in srgb, var(--ac) 40%, transparent); background: color-mix(in srgb, var(--ac) 10%, transparent); }
        .hm__kpi-l {
          font-family: var(--font-display);
          font-size: 8px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink3);
          margin-bottom: 5px;
        }
        .hm__kpi-v {
          font-family: var(--font-display);
          font-style: normal;
          font-weight: 700;
          letter-spacing: -0.03em;
          font-size: 22px;
          line-height: 1;
          color: var(--ink);
        }
        .hm__kpi--gold .hm__kpi-v { color: var(--ac-hover); }

        /* POS ticket */
        .hm__ticket { display: flex; flex-direction: column; gap: 2px; }
        .hm__line {
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px;
          padding: 9px 0;
          border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          font-size: 13px;
          color: var(--ink2);
        }
        .hm__line-name { display: inline-flex; align-items: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .hm__line-amt { flex-shrink: 0; font-family: var(--font-display); color: var(--ink); }
        .hm__total {
          display: flex; align-items: baseline; justify-content: space-between;
          margin-top: 2px;
        }
        .hm__total-l {
          font-family: var(--font-display);
          font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--ink3);
        }
        .hm__total-v { font-family: var(--font-display); font-style: normal; font-weight: 700; font-size: 30px; color: var(--ink); }
        .hm__total-v em { color: var(--ac-on); font-weight: 500; }
        .hm__status {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; color: var(--ok);
          padding: 3px 9px; border-radius: 999px; background: var(--surface);
        }
        .hm__check {
          display: inline-flex; align-items: center; justify-content: center;
          width: 16px; height: 16px; border-radius: 999px;
          background: color-mix(in srgb, var(--ok) 16%, transparent);
          font-size: 10px;
        }
        /* transitions-dev · success-check (10) — POS "factura emitida" moment.
           Pops + draws after the card crossfade settles; replays on rubro
           toggle (the whole mock remounts via .hm-fade key). */
        .hm__sc {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px; height: 18px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--ok) 16%, transparent);
          color: var(--ok);
          animation: hm-sc-pop 460ms cubic-bezier(0.34, 1.35, 0.64, 1) 240ms both;
        }
        .hm__sc path {
          stroke-dasharray: 20;
          stroke-dashoffset: 20;
          animation: hm-sc-draw 520ms var(--ease-out) 340ms both;
        }
        @keyframes hm-sc-pop {
          0% { transform: scale(0.3); opacity: 0; }
          60% { transform: scale(1.12); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes hm-sc-draw { to { stroke-dashoffset: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .hm__sc { animation: none; }
          .hm__sc path { animation: none; stroke-dashoffset: 0; }
        }

        /* chips */
        .hm__chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: auto; }
        .hm__chip {
          font-family: var(--font-display);
          font-size: 10px;
          padding: 4px 9px;
          border: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          border-radius: 999px;
          color: var(--ink2);
          background: var(--surface);
        }
        .hm__chip--ok { color: var(--ok); border-color: color-mix(in srgb, var(--ok) 30%, transparent); }
        .hm__chip--gold { color: var(--ac-on); border-color: color-mix(in srgb, var(--ac) 40%, transparent); }
        /* transitions-dev · shimmer-text (15) — "en camino" = in transit */
        .hm__chip--shimmer {
          color: var(--ok);
          animation: hm-shimmer 2.6s linear infinite;
        }
        @keyframes hm-shimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: .62; }
        }

        /* transitions-dev · number-pop-in (02) inside the mock — delayed so it
           punctuates AFTER the card crossfade settles (scoped to .hm so the
           home-hero PopNumber keeps its no-delay timing). */
        .hm .t-digit-group.is-animating .t-digit { animation-delay: 240ms; }
        .hm .t-digit-group.is-animating .t-digit[data-stagger='1'] { animation-delay: 310ms; }
        .hm .t-digit-group.is-animating .t-digit[data-stagger='2'] { animation-delay: 380ms; }

        @media (prefers-reduced-motion: reduce) {
          .hm__chip--shimmer {
            animation: none;
            color: var(--ok);
          }
        }

        /* table (Almacén) */
        .hm__table { width: 100%; border-collapse: collapse; }
        .hm__table th {
          font-family: var(--font-display);
          font-size: 8px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--ink3);
          text-align: left; font-weight: 400;
          padding: 0 0 8px;
          border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
        }
        .hm__table td {
          font-size: 12px; color: var(--ink2);
          padding: 9px 0;
          border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
        }
        .hm__table tr:last-child td { border-bottom: none; }
        .hm__sku { font-family: var(--font-display); }
        .hm__num { font-family: var(--font-display); color: var(--ink); text-align: right; }
        .hm__num--low { color: var(--danger); }
        .hm__right { text-align: right; }
        .hm__pill {
          font-family: var(--font-display);
          font-size: 9px; padding: 2px 8px; border-radius: 999px;
          border: 1px solid color-mix(in srgb, var(--ink) 6%, transparent); color: var(--ink2);
          background: var(--surface);
        }
        .hm__pill--ok { color: var(--ok); border-color: color-mix(in srgb, var(--ok) 30%, transparent); }
        .hm__pill--low { color: var(--danger); border-color: color-mix(in srgb, var(--danger) 35%, transparent); }
        .hm__pill--done { color: var(--ink3); }

        /* route (Logística) */
        .hm__route {
          display: flex; align-items: center; gap: 12px;
          font-size: 15px; color: var(--ink);
          padding: 4px 0;
        }
        .hm__route-arrow { color: var(--ac-on); font-family: var(--font-display); }
        .hm__route-node--to { color: var(--ink); }
        .hm__movs { display: flex; flex-direction: column; gap: 8px; margin-top: 2px; }
        .hm__mov {
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          padding: 11px 12px;
          border: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          border-radius: 11px;
          background: color-mix(in srgb, var(--ac) 6%, transparent);
          font-size: 12px; color: var(--ink2);
        }
        .hm__mov-l { display: inline-flex; align-items: center; }

        /* Finanzas */
        .hm__big { font-family: var(--font-display); font-style: normal; font-weight: 700; font-size: 38px; line-height: 1; color: var(--ink); }
        .hm__big em { color: var(--ac-on); }
        .hm__delta {
          font-family: var(--font-display); font-size: 10px; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--ok);
          margin-top: -4px;
          padding: 2px 7px; border-radius: 999px; align-self: flex-start;
          background: var(--surface);
        }
        .hm__chart { width: 100%; flex: 1; min-height: 80px; }

        /* Clientes */
        .hm__list { display: flex; flex-direction: column; gap: 2px; }
        .hm__client {
          display: flex; align-items: center; gap: 11px;
          padding: 9px 0;
          border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
        }
        .hm__client:last-child { border-bottom: none; }
        .hm__avatar {
          display: inline-flex; align-items: center; justify-content: center;
          width: 30px; height: 30px; flex-shrink: 0;
          border-radius: 999px;
          background: color-mix(in srgb, var(--ac) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--ac) 30%, transparent);
          color: var(--ac-on);
          font-family: var(--font-display); font-style: normal; font-weight: 700; font-size: 13px;
        }
        .hm__avatar--sm { width: 26px; height: 26px; font-size: 11px; }
        .hm__client-text { display: flex; flex-direction: column; gap: 1px; min-width: 0; flex: 1; }
        .hm__client-name { font-size: 13px; color: var(--ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .hm__client-sub { font-family: var(--font-display); font-size: 10px; color: var(--ink3); }
        .hm__client-amt { flex-shrink: 0; font-family: var(--font-display); font-style: normal; font-weight: 700; font-size: 16px; color: var(--ink); }

        /* Personal */
        .hm__statgrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .hm__stat {
          padding: 16px 12px;
          border: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          border-radius: 11px;
          background: color-mix(in srgb, var(--ac) 6%, transparent);
          text-align: center;
        }
        .hm__stat-num { font-family: var(--font-display); font-style: normal; font-weight: 700; font-size: 30px; line-height: 1; color: var(--ink); }
        .hm__stat-l {
          font-family: var(--font-display); font-size: 8px; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--ink3); margin-top: 6px;
        }
        .hm__team {
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          margin-top: auto;
          padding: 12px;
          border: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          border-radius: 11px;
          background: color-mix(in srgb, var(--ac) 6%, transparent);
        }
        .hm__avatars { display: flex; }
        .hm__avatars .hm__avatar { margin-right: -8px; box-shadow: 0 0 0 2px #FFFFFF; }
        .hm__team-note { display: inline-flex; align-items: center; gap: 8px; font-size: 12px; color: var(--ok); padding: 3px 9px; border-radius: 999px; background: var(--surface); }
      `})]},a)}function f({exampleKey:s}){return e.jsxs("div",{className:"mscreen",children:[e.jsxs("div",{className:"mscreen__bar",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsx("div",{className:"mscreen__body",children:e.jsx($,{exampleKey:s})})]})}function Y(){const{slug:s}=j(),a=_(s),{data:i}=c();p.useEffect(()=>(window.scrollTo(0,0),a&&(document.title=`${a.name} · Hatlas`),()=>{document.title="Hatlas"}),[a]);const n=p.useRef(null);k(n,[s]);const[t,d]=p.useState(0);if(!a)return e.jsx(y,{to:"/",replace:!0});const u=a.icon,b=a.related.map(_).filter(Boolean);return e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsx(w,{}),e.jsx(z,{}),e.jsx(q,{}),e.jsxs("main",{id:"top",className:"mpage",ref:n,children:[e.jsxs("section",{className:"mhero",children:[e.jsx("div",{className:"mhero__bg","aria-hidden":"true"}),e.jsxs("div",{className:"container-lg mhero__inner",children:[e.jsxs("div",{className:"mhero__content",children:[e.jsxs(h,{to:"/#sistema",className:"mback t-reveal",style:{"--t-i":0},children:[e.jsx(S,{size:15,strokeWidth:1.75}),"Todos los módulos"]}),e.jsxs("span",{className:"meyebrow t-reveal",style:{"--t-i":1},children:[e.jsx("span",{className:"meyebrow__icon",children:e.jsx(u,{size:16,strokeWidth:1.5})}),a.name]}),e.jsxs("h1",{className:"mhero__h1 t-reveal",style:{"--t-i":2},children:[a.heroH1.lead,e.jsx("em",{children:a.heroH1.em})]}),e.jsx("p",{className:"mhero__sub t-reveal",style:{"--t-i":3},children:a.heroSub}),e.jsxs("div",{className:"mhero__ctas t-reveal",style:{"--t-i":4},children:[e.jsx("a",{href:"#cta-final",className:"btn-gold",children:"Agendar demo"}),e.jsx(h,{to:"/#pricing",className:"btn-ghost",children:"Ver precios"})]}),a.channels&&e.jsxs("p",{className:"mhero__channels t-reveal",style:{"--t-i":5},children:[e.jsx(C,{size:15,strokeWidth:1.75}),a.channels]})]}),e.jsxs("div",{className:"mhero__demo t-reveal",style:{"--t-i":6},children:[e.jsx(g,{}),e.jsx(f,{exampleKey:a.exampleKey})]})]})]}),e.jsx("section",{className:"section-pad msolve",children:e.jsxs("div",{className:"container-lg",children:[e.jsxs("h2",{className:"h-section msolve__title t-reveal",children:["Lo que deja de ser ",e.jsx("em",{children:"un problema."})]}),e.jsx("div",{className:"msolve__list",children:a.problems.map((r,l)=>e.jsxs("div",{className:"msolve__row t-reveal",style:{"--t-i":l},children:[e.jsx("p",{className:"msolve__pain",children:r.pain}),e.jsx("p",{className:"msolve__fix",children:r.fix})]},r.pain))})]})}),e.jsx("section",{className:"section-pad mfeatures",children:e.jsxs("div",{className:"container-lg",children:[e.jsxs("h2",{className:"h-section mfeatures__title t-reveal",children:["Todo lo de ",a.name,", ",e.jsx("em",{children:"en serio."})]}),e.jsx("div",{className:"mfeatures__grid",children:a.features.map((r,l)=>{const o=r.icon;return e.jsxs("article",{className:"fcard t-reveal",style:{"--t-i":l},children:[o&&e.jsx("span",{className:"fcard__icon",children:e.jsx(o,{size:18,strokeWidth:1.5})}),e.jsxs("div",{className:"fcard__body",children:[e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.desc})]})]},r.title)})}),e.jsxs("div",{className:"mmore t-reveal",children:[e.jsx("span",{className:"mmore__label",children:"Y además"}),e.jsx("ul",{className:"mmore__chips",children:a.more.map(r=>e.jsx("li",{className:"mmore__chip",children:r},r))})]})]})}),e.jsx("section",{className:"section-pad magent",children:e.jsx("div",{className:"container-lg",children:e.jsxs("div",{className:"magent__card t-reveal",children:[e.jsx("span",{className:"magent__icon",children:e.jsx(L,{size:20,strokeWidth:1.5})}),e.jsxs("div",{className:"magent__body",children:[e.jsxs("span",{className:"magent__eyebrow",children:["Hatlas Agent en ",a.name]}),e.jsx("p",{className:"magent__text",children:a.agent})]})]})})}),e.jsx("section",{className:"section-pad mexample",children:e.jsxs("div",{className:"container-lg mexample__inner",children:[e.jsxs("div",{className:"mexample__copy t-reveal",children:[e.jsx("span",{className:"eyebrow",children:"Adaptado a lo tuyo"}),e.jsxs("h2",{className:"h-section",children:["Así se ve ",a.name," en tu ",e.jsxs("em",{children:[i.label.toLowerCase(),"."]})]}),e.jsxs("p",{className:"lede",children:["Cambiá de rubro y mirá cómo ",a.name," habla el idioma de tu negocio. El mismo módulo, con tus productos y tus números."]}),e.jsx(g,{})]}),e.jsx("div",{className:"t-reveal",style:{"--t-i":1},children:e.jsx(f,{exampleKey:a.exampleKey})})]})}),e.jsx("section",{className:"section-pad mrelated",children:e.jsxs("div",{className:"container-lg",children:[e.jsxs("h2",{className:"h-section mrelated__title t-reveal",children:["No trabaja ",e.jsx("em",{children:"solo."})]}),e.jsxs("p",{className:"lede mrelated__lede t-reveal",style:{"--t-i":1},children:[a.name," se conecta con el resto de Hatlas. Vendés en caja y todo lo demás se actualiza solo."]}),e.jsx("div",{className:"mrelated__grid",children:b.map((r,l)=>{const o=r.icon;return e.jsxs(h,{to:`/modulos/${r.slug}`,className:"rcard t-reveal",style:{"--t-i":l},children:[e.jsx("span",{className:"rcard__icon",children:e.jsx(o,{size:18,strokeWidth:1.5})}),e.jsxs("span",{className:"rcard__text",children:[e.jsx("span",{className:"rcard__name",children:r.name}),e.jsx("span",{className:"rcard__tag",children:r.tagline})]}),e.jsx(F,{className:"rcard__arrow",size:16,strokeWidth:1.75})]},r.slug)})})]})}),e.jsx("section",{className:"section-pad mfaq",children:e.jsxs("div",{className:"container-lg mfaq__inner",children:[e.jsx("h2",{className:"h-section mfaq__title t-reveal",children:"Dudas rápidas"}),e.jsx("div",{className:"mfaq__list",children:a.faq.map((r,l)=>{const o=t===l;return e.jsxs("button",{type:"button",className:`mfaq__item t-reveal ${o?"is-open":""}`,style:{"--t-i":l},onClick:()=>d(o?null:l),"aria-expanded":o,children:[e.jsxs("span",{className:"mfaq__q",children:[e.jsx("span",{children:r.q}),e.jsxs("span",{className:"mfaq__toggle","aria-hidden":"true",children:[e.jsx(A,{className:"mfaq__ico mfaq__ico--plus",size:16}),e.jsx(M,{className:"mfaq__ico mfaq__ico--minus",size:16})]})]}),e.jsx("span",{className:"mfaq__a-wrap",style:{gridTemplateRows:o?"1fr":"0fr"},children:e.jsx("span",{className:"mfaq__a-inner",children:e.jsx("span",{children:r.a})})})]},r.q)})})]})}),e.jsx(H,{})]}),e.jsx(R,{}),e.jsx("style",{children:`
        .mpage { position: relative; z-index: 5; }

        /* ---------- Hero ---------- */
        .mhero {
          position: relative;
          padding: 132px 0 64px;
          overflow: hidden;
        }
        .mhero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(48% 60% at 82% 12%, color-mix(in srgb, var(--ac) 30%, transparent), transparent 68%),
            radial-gradient(46% 52% at 16% 4%, color-mix(in srgb, var(--ac-light) 22%, transparent), transparent 70%),
            radial-gradient(50% 50% at 96% 80%, color-mix(in srgb, var(--ac-light) 16%, transparent), transparent 72%);
        }
        .mhero__inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(340px, 1fr) minmax(420px, 1fr);
          gap: 56px;
          align-items: center;
        }
        .mback {
          display: flex;
          width: fit-content;
          align-items: center;
          gap: 7px;
          font-family: var(--font-display);
          font-size: 11px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--ink3);
          text-decoration: none;
          margin-bottom: 20px;
          transition: color 200ms var(--ease-out);
        }
        .mback:hover { color: var(--ac-on); }
        .mhero__h1 {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(34px, 4vw, 56px);
          line-height: 1.02;
          letter-spacing: -0.03em;
          margin: 0 0 22px;
          max-width: 16ch;
          text-wrap: balance;
          color: var(--ink);
        }
        .mhero__h1 em {
          font-style: normal;
          font-weight: 700;
          color: var(--ac-on);
        }
        .mhero__sub {
          margin: 0 0 32px;
          max-width: 48ch;
          font-size: 18px;
          line-height: 1.55;
          color: var(--ink2);
        }
        .mhero__ctas { display: flex; flex-wrap: wrap; gap: 14px; }
        .mhero__channels {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin: 18px 0 0;
          font-size: 13px;
          color: var(--ink2);
        }
        .mhero__channels svg { color: var(--ac-on); flex-shrink: 0; }
        .mhero__demo { justify-self: end; width: 100%; max-width: 460px; }

        /* ---------- Screen frame (reused) ---------- */
        .mscreen {
          border: 1px solid var(--glass-border);
          border-radius: var(--r-xl);
          background: var(--glass-strong);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          box-shadow: var(--e2), var(--e-inner), 0 0 60px color-mix(in srgb, var(--ac) 14%, transparent);
          overflow: hidden;
        }
        .mscreen__bar {
          display: flex;
          gap: 6px;
          padding: 12px 14px;
          border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
        }
        .mscreen__bar span {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--ink) 16%, transparent);
        }
        .mscreen__body {
          min-height: 360px;
          display: flex;
          flex-direction: column;
        }
        .mscreen__body > .hm-fade { flex: 1; display: flex; flex-direction: column; }

        /* ---------- Qué resuelve ---------- */
        .msolve__title { max-width: 16ch; margin: 0 0 40px; }
        .msolve__list {
          display: grid;
          gap: 1px;
          background: color-mix(in srgb, var(--ink) 6%, transparent);
          border: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          border-radius: 14px;
          overflow: hidden;
        }
        .msolve__row {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 32px;
          padding: 28px 28px;
          background: var(--bg);
        }
        .msolve__pain {
          margin: 0;
          font-family: var(--font-ui);
          font-style: italic;
          font-weight: 500;
          font-size: 20px;
          line-height: 1.3;
          color: var(--ink);
        }
        .msolve__fix {
          margin: 0;
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink2);
          align-self: center;
        }

        /* ---------- Features bento ---------- */
        .mfeatures { background: color-mix(in srgb, var(--surface) 12%, var(--bg)); }
        .mfeatures__title { margin: 0 0 40px; }
        .mfeatures__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-flow: dense;
          gap: 12px;
        }
        .fcard {
          padding: 24px;
          background: var(--glass);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-xl);
          box-shadow: var(--e1), inset 0 1px 0 var(--glass-hi);
          min-height: 184px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 24px;
          transition: border-color 300ms var(--ease-out),
            box-shadow 300ms var(--ease-out),
            transform 300ms var(--ease-out);
        }
        .fcard:hover { border-color: color-mix(in srgb, var(--ac) 45%, transparent); transform: translateY(-3px); box-shadow: 0 1px 2px color-mix(in srgb, var(--ink) 5%, transparent), 0 22px 50px var(--glass-shadow), inset 0 1px 0 var(--glass-hi); }
        .fcard__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: color-mix(in srgb, var(--ac) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--ac) 28%, transparent);
          border-radius: 9px;
          color: var(--ac-on);
          transition: border-color 300ms var(--ease-out),
            background 300ms var(--ease-out);
        }
        .fcard:hover .fcard__icon {
          border-color: var(--ac-on);
          background: color-mix(in srgb, var(--ac) 10%, transparent);
        }
        .fcard__body { display: flex; flex-direction: column; gap: 8px; }
        .fcard h3 {
          margin: 0;
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--ink);
        }
        .fcard p { margin: 0; font-size: 13px; line-height: 1.5; color: var(--ink2); }

        /* ---------- "Y además" depth chips ---------- */
        .mmore {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 12px 14px;
          margin-top: 28px;
        }
        .mmore__label {
          font-family: var(--font-display);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink3);
        }
        .mmore__chips { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; }
        .mmore__chip {
          font-size: 13px;
          color: var(--ink2);
          padding: 7px 13px;
          background: var(--glass);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border: 1px solid var(--glass-border);
          border-radius: 999px;
        }

        /* ---------- Hatlas Agent band ---------- */
        .magent__card {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          padding: 28px 32px;
          background:
            radial-gradient(120% 140% at 0% 0%, color-mix(in srgb, var(--ac) 14%, transparent), transparent 60%),
            var(--glass-strong);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border: 1px solid color-mix(in srgb, var(--ac) 35%, transparent);
          border-radius: var(--r-xl);
          box-shadow: var(--e2), var(--e-inner);
        }
        .magent__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          flex-shrink: 0;
          background: color-mix(in srgb, var(--ac) 10%, transparent);
          border: 1px solid var(--ac-deep);
          border-radius: 12px;
          color: var(--ac-hover);
        }
        .magent__eyebrow {
          display: block;
          font-family: var(--font-display);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ac-on);
          margin-bottom: 8px;
        }
        .magent__text {
          margin: 0;
          max-width: 64ch;
          font-family: var(--font-ui);
          font-style: italic;
          font-weight: 500;
          font-size: clamp(18px, 2vw, 23px);
          line-height: 1.4;
          color: var(--ink);
        }

        /* ---------- Rubro example ---------- */
        .mexample__inner {
          display: grid;
          grid-template-columns: 1fr minmax(360px, 0.85fr);
          gap: 56px;
          align-items: center;
        }
        .mexample__copy .eyebrow { display: inline-block; margin-bottom: 16px; }
        .mexample__copy h2 { margin: 0 0 18px; max-width: 16ch; }
        .mexample__copy .lede { margin: 0 0 26px; }

        /* ---------- Related ---------- */
        .mrelated { background: color-mix(in srgb, var(--surface) 12%, var(--bg)); }
        .mrelated__title { margin: 0 0 14px; }
        .mrelated__lede { margin: 0 0 36px; max-width: 52ch; }
        .mrelated__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .rcard {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 20px;
          background: var(--glass);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-xl);
          box-shadow: var(--e1), inset 0 1px 0 var(--glass-hi);
          text-decoration: none;
          transition: border-color 300ms var(--ease-out),
            transform 300ms var(--ease-out);
        }
        .rcard:hover { border-color: color-mix(in srgb, var(--ac) 45%, transparent); transform: translateY(-2px); }
        .rcard__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          background: color-mix(in srgb, var(--ac) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--ac) 28%, transparent);
          border-radius: 9px;
          color: var(--ac-on);
        }
        .rcard__text { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
        .rcard__name { font-size: 15px; font-weight: 500; color: var(--ink); }
        .rcard__tag {
          font-size: 12px;
          color: var(--ink2);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .rcard__arrow {
          margin-left: auto;
          flex-shrink: 0;
          color: var(--ink3);
          transition: transform 300ms var(--ease-out), color 300ms var(--ease-out);
        }
        .rcard:hover .rcard__arrow { transform: translateX(4px); color: var(--ac-on); }

        /* ---------- Mini FAQ ---------- */
        .mfaq__inner { max-width: 820px; }
        .mfaq__title { margin: 0 0 28px; }
        .mfaq__list { display: flex; flex-direction: column; border-top: 1px solid color-mix(in srgb, var(--ink) 6%, transparent); }
        .mfaq__item {
          width: 100%;
          padding: 22px 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          text-align: left;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .mfaq__q {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          font-size: 17px;
          color: var(--ink);
        }
        .mfaq__item:hover .mfaq__q { color: var(--ac-on); }
        .mfaq__toggle {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          border: 1px solid var(--hairline);
          background: var(--surface);
          color: var(--ink2);
          border-radius: 9px;
          transition: background 200ms var(--ease-out),
            border-color 200ms var(--ease-out), color 200ms var(--ease-out);
        }
        .mfaq__item.is-open .mfaq__toggle {
          background: color-mix(in srgb, var(--ac) 10%, transparent);
          border-color: var(--ac-on);
          color: var(--ac-on);
        }
        /* transitions-dev · icon-swap (09) on the +/- toggle */
        .mfaq__ico {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 16px;
          height: 16px;
          transition:
            opacity 200ms ease-in-out,
            transform 200ms ease-in-out,
            filter 200ms ease-in-out;
        }
        .mfaq__ico--minus { opacity: 0; transform: scale(0.4) rotate(-90deg); filter: blur(2px); }
        .mfaq__item.is-open .mfaq__ico--plus { opacity: 0; transform: scale(0.4) rotate(90deg); filter: blur(2px); }
        .mfaq__item.is-open .mfaq__ico--minus { opacity: 1; transform: none; filter: none; }
        .mfaq__a-wrap {
          display: grid;
          grid-template-rows: 0fr;
          overflow: hidden;
          transition: grid-template-rows 350ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        @media (prefers-reduced-motion: reduce) {
          .mfaq__a-wrap { transition: none; }
          .mfaq__ico { transition: none; }
        }
        .mfaq__a-inner { min-height: 0; }
        .mfaq__a-inner > span {
          display: block;
          margin: 14px 0 0;
          padding-right: 44px;
          max-width: 64ch;
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink2);
        }

        /* Entrance + on-scroll reveal handled by the global .t-reveal class
           (transitions-dev "Texts reveal", 18) + IntersectionObserver. */

        /* ---------- Responsive ---------- */
        @media (max-width: 980px) {
          .mhero__inner,
          .mexample__inner { grid-template-columns: 1fr; gap: 40px; }
          .mhero__demo { justify-self: stretch; max-width: 100%; }
          .mfeatures__grid { grid-template-columns: repeat(2, 1fr); }
          .mrelated__grid { grid-template-columns: 1fr; }
          .msolve__row { grid-template-columns: 1fr; gap: 10px; }
        }
        @media (max-width: 560px) {
          .mhero { padding: 116px 0 48px; }
          .mfeatures__grid { grid-template-columns: 1fr; }
        }
      `})]})}export{Y as ModulePage};
