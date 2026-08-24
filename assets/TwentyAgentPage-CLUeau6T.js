import{r as n,k as d,j as a,N as c,G as x,S as p,b as m,g,L as o,V as h,A as v,M as _,a as f,F as u,c as b,l as j,W as k,C as w,U as y,P as N,T as z}from"./index-DLK22a14.js";const A={trend:z,package:N,user:y,calendar:w,wallet:k};function H(){const{vertical:t,data:e}=j(),s=e.insights.slice(0,2);return a.jsxs("div",{className:"hm-fade ta-alerts",children:[a.jsx("div",{className:"ta-alerts__head",children:a.jsxs("span",{className:"ta-alerts__live",children:[a.jsx("span",{})," Hatlas Agent · en vivo"]})}),s.map((r,i)=>{const l=A[r.icon];return a.jsxs("article",{className:`ta-alert ${i===0?"ta-alert--lead":""}`,children:[a.jsx("span",{className:"ta-alert__icon",children:a.jsx(l,{size:18,strokeWidth:1.5})}),a.jsxs("div",{className:"ta-alert__body",children:[a.jsx("p",{className:"ta-alert__title",children:r.title}),i===0&&a.jsx("p",{className:"ta-alert__detail",children:r.detail}),a.jsx("div",{className:"ta-alert__meta",children:r.meta})]})]},i)})]},t)}function C(){n.useEffect(()=>(window.scrollTo(0,0),document.title="Hatlas Agent · Hatlas",()=>{document.title="Hatlas"}),[]);const t=n.useRef(null);return d(t),a.jsxs(a.Fragment,{children:[a.jsx(c,{}),a.jsx(x,{}),a.jsx(p,{}),a.jsx(m,{}),a.jsxs("main",{id:"top",className:"tapage",ref:t,children:[a.jsxs("section",{className:"ta-hero",children:[a.jsx("div",{className:"ta-hero__bg","aria-hidden":"true"}),a.jsxs("div",{className:"container-lg ta-hero__inner",children:[a.jsxs("div",{className:"ta-hero__content",children:[a.jsxs("span",{className:"meyebrow t-reveal",style:{"--t-i":0},children:[a.jsx("span",{className:"meyebrow__icon",children:a.jsx(g,{size:16,strokeWidth:1.5})}),"Hatlas Agent"]}),a.jsxs("h1",{className:"ta-hero__h1 t-reveal",style:{"--t-i":1},children:["Un analista que ",a.jsx("em",{children:"nunca duerme."})]}),a.jsx("p",{className:"ta-hero__sub t-reveal",style:{"--t-i":2},children:"Hatlas Agent vigila tus ventas, tu stock, tus costos y tus clientes las 24 horas. Te avisa qué conviene hacer, en español y sin que se lo pidas."}),a.jsxs("div",{className:"ta-hero__ctas t-reveal",style:{"--t-i":3},children:[a.jsx("a",{href:"#cta-final",className:"btn-gold",children:"Agendar demo"}),a.jsx(o,{to:"/modulos",className:"btn-ghost",children:"Ver los módulos"})]})]}),a.jsxs("div",{className:"ta-hero__demo t-reveal",style:{"--t-i":4},children:[a.jsx(h,{}),a.jsx(H,{})]})]})]}),a.jsx(v,{}),a.jsx("section",{className:"section-pad ta-mods","aria-labelledby":"ta-mods-title",children:a.jsxs("div",{className:"container-lg",children:[a.jsxs("h2",{id:"ta-mods-title",className:"h-section ta-mods__title t-reveal",children:["Lo que hace en ",a.jsx("em",{children:"cada parte de tu negocio."})]}),a.jsx("div",{className:"ta-mods__grid",children:_.map((e,s)=>{const r=e.icon;return a.jsxs(o,{to:`/modulos/${e.slug}`,className:"ta-mod t-reveal",style:{"--t-i":s},children:[a.jsx("span",{className:"ta-mod__icon",children:a.jsx(r,{size:18,strokeWidth:1.5})}),a.jsxs("span",{className:"ta-mod__name",children:[e.name,a.jsx(f,{className:"ta-mod__arrow",size:14,strokeWidth:1.75})]}),a.jsx("p",{className:"ta-mod__text",children:e.agent})]},e.slug)})})]})}),a.jsx(u,{})]}),a.jsx(b,{}),a.jsx("style",{children:`
        .tapage { position: relative; z-index: 5; }

        /* ---------- Hero ---------- */
        .ta-hero { position: relative; padding: 140px 0 64px; overflow: hidden; }
        .ta-hero__bg {
          position: absolute; inset: 0; z-index: 0;
          background:
            radial-gradient(48% 60% at 82% 12%, color-mix(in srgb, var(--ac) 32%, transparent), transparent 68%),
            radial-gradient(46% 52% at 16% 6%, color-mix(in srgb, var(--ac-light) 22%, transparent), transparent 70%),
            radial-gradient(50% 50% at 96% 82%, color-mix(in srgb, var(--ac-light) 16%, transparent), transparent 72%);
        }
        .ta-hero__inner {
          position: relative; z-index: 1;
          display: grid;
          grid-template-columns: minmax(340px, 1fr) minmax(380px, 0.95fr);
          gap: 56px; align-items: center;
        }
        .ta-hero__h1 {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(36px, 4.6vw, 60px);
          line-height: 1.02;
          letter-spacing: -0.03em;
          margin: 18px 0 22px;
          max-width: 14ch;
          text-wrap: balance;
          color: var(--ink);
        }
        .ta-hero__h1 em { font-style: normal; font-weight: 700; color: var(--ac-on); }
        .ta-hero__sub {
          margin: 0 0 32px; max-width: 50ch;
          font-size: 18px; line-height: 1.55; color: var(--ink2);
        }
        .ta-hero__ctas { display: flex; flex-wrap: wrap; gap: 14px; }
        .ta-hero__demo { justify-self: end; width: 100%; max-width: 440px; }

        /* ---------- Agent alerts (hero visual) ---------- */
        .ta-alerts {
          display: flex; flex-direction: column; gap: 10px;
          padding: 16px;
          border: 1px solid var(--glass-border);
          border-radius: var(--r-xl);
          background: var(--glass-strong);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          box-shadow: var(--e2), var(--e-inner), 0 0 60px color-mix(in srgb, var(--ac) 14%, transparent);
        }
        .ta-alerts__head { padding: 4px 4px 2px; }
        .ta-alerts__live {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-display); font-size: 10px; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--ink3);
        }
        .ta-alerts__live span {
          width: 6px; height: 6px; border-radius: 999px; background: var(--ok);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--ok) 14%, transparent);
        }
        .ta-alert {
          display: flex; gap: 12px;
          padding: 14px;
          border: 1px solid var(--hairline);
          border-radius: 12px;
          background: var(--surface);
        }
        .ta-alert--lead { background: color-mix(in srgb, var(--ac) 10%, transparent); border-color: color-mix(in srgb, var(--ac) 40%, transparent); }
        .ta-alert__icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 34px; height: 34px; flex-shrink: 0;
          color: var(--ac-on);
          background: color-mix(in srgb, var(--ac) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--ac) 28%, transparent);
          border-radius: 9px;
        }
        .ta-alert__title {
          margin: 0 0 5px;
          font-family: var(--font-ui); font-style: italic; font-weight: 500; font-size: 15px;
          line-height: 1.35; color: var(--ink);
        }
        .ta-alert__detail { margin: 0 0 7px; font-size: 12px; line-height: 1.5; color: var(--ink2); }
        .ta-alert__meta {
          font-family: var(--font-display); font-size: 9px; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--ink3);
        }

        /* ---------- Per-module ---------- */
        .ta-mods { position: relative; z-index: 10; background: color-mix(in srgb, var(--surface) 12%, var(--bg)); }
        .ta-mods__title { text-align: center; max-width: 18ch; margin: 0 auto 48px; }
        .ta-mods__grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
        }
        .ta-mod {
          display: flex; flex-direction: column; gap: 10px;
          padding: 24px;
          background: var(--glass);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-xl);
          box-shadow: var(--e1), inset 0 1px 0 var(--glass-hi);
          text-decoration: none;
          transition: border-color 300ms var(--ease-out), box-shadow 300ms var(--ease-out), transform 300ms var(--ease-out);
        }
        .ta-mod:hover { border-color: color-mix(in srgb, var(--ac) 45%, transparent); transform: translateY(-3px); box-shadow: 0 1px 2px color-mix(in srgb, var(--ink) 5%, transparent), 0 22px 50px var(--glass-shadow), inset 0 1px 0 var(--glass-hi); }
        .ta-mod__icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 38px; height: 38px;
          color: var(--ac-on);
          background: color-mix(in srgb, var(--ac) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--ac) 28%, transparent);
          border-radius: 9px;
          transition: border-color 300ms var(--ease-out), background 300ms var(--ease-out);
        }
        .ta-mod:hover .ta-mod__icon { border-color: var(--ac-on); background: color-mix(in srgb, var(--ac) 10%, transparent); }
        .ta-mod__name {
          display: flex; align-items: center; justify-content: space-between;
          font-family: var(--font-display); font-size: 17px; font-weight: 600; letter-spacing: -0.02em; color: var(--ink);
        }
        .ta-mod__arrow { color: var(--ink3); transition: transform 300ms var(--ease-out), color 300ms var(--ease-out); }
        .ta-mod:hover .ta-mod__arrow { transform: translateX(4px); color: var(--ac-on); }
        .ta-mod__text { margin: 0; font-size: 13px; line-height: 1.5; color: var(--ink2); }

        @media (max-width: 980px) {
          .ta-hero__inner { grid-template-columns: 1fr; gap: 40px; }
          .ta-hero__demo { justify-self: stretch; max-width: 100%; }
          .ta-mods__grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .ta-hero { padding: 116px 0 48px; }
        }
      `})]})}export{C as TwentyAgentPage};
