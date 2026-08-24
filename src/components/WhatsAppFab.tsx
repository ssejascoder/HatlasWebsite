import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../lib/contact'

/**
 * Floating WhatsApp button — persistent low-friction CTA on every page.
 * Bolivian SMBs convert on WhatsApp; this keeps a CTA reachable after the
 * hero (the nav CTA is hidden on small screens). On-brand gold, not the
 * stock green, so it fits the dark/gold system.
 */
export function WhatsAppFab() {
  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-fab"
        aria-label="Escribinos por WhatsApp"
      >
        <MessageCircle size={22} strokeWidth={2} />
        <span className="wa-fab__label">WhatsApp</span>
      </a>
      <style>{`
        .wa-fab {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 150;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 18px;
          color: #fff;
          background: linear-gradient(135deg, var(--ac), var(--ac-deep));
          border-radius: var(--r-pill);
          text-decoration: none;
          font-family: var(--font-ui);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.01em;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.35),
            0 12px 30px -6px color-mix(in srgb, var(--ac) 45%, transparent);
          animation: wa-in 500ms var(--ease-out) 700ms both;
          transition: transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out);
        }
        .wa-fab:hover {
          transform: translateY(-2px);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.35),
            0 16px 38px -6px color-mix(in srgb, var(--ac) 55%, transparent);
        }
        .wa-fab:active { transform: scale(0.97); }
        .wa-fab svg { flex-shrink: 0; }
        @keyframes wa-in {
          from { opacity: 0; transform: translateY(16px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        /* On small screens, collapse to a round icon button to save space. */
        @media (max-width: 600px) {
          .wa-fab { right: 16px; bottom: 16px; padding: 15px; }
          .wa-fab__label { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wa-fab { animation: none; }
        }
      `}</style>
    </>
  )
}
