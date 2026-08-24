/**
 * Original geometric illustration — a doctor taking a case, not a stock
 * photo. AGASTA_FOUNDATION_DOC.md §10 bans stock chakras and glowing-hands
 * photography, and no real doctor or consulting room exists yet to
 * photograph honestly. Figures are deliberately faceless silhouettes (flat
 * shapes, no skin tone, no likeness) so this reads as signage/iconography,
 * never as a claim that a specific person or room is real. Gradients below
 * are for depth (a soft backdrop, grounded shadows, a lit coat) — not for
 * realism; nothing here is trying to pass as a photograph.
 */
export function ConsultationScene(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      className={props.className}
      role="img"
      aria-label="एक चिकित्सक मरीज़ का पूरा केस सुनते हुए — Illustration of a doctor taking a full case, not a photograph"
    >
      {/* claim-lint-ok-start: SVG gradient-stop offsets (0%/100%), not claims */}
      <defs>
        <radialGradient id="cs-backdrop" cx="38%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#f2f8f5" />
          <stop offset="100%" stopColor="var(--color-brand-soft)" />
        </radialGradient>
        <radialGradient id="cs-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-brand-dark)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--color-brand-dark)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cs-coat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#eef4f1" />
        </linearGradient>
        <radialGradient id="cs-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* claim-lint-ok-end */}

      {/* Organic backdrop, softly lit top-left for depth */}
      <path
        d="M241 26c78-6 150 34 168 108 17 71-19 146-93 168-76 23-171 12-217-46C51 199 56 116 106 68c37-36 88-38 135-42Z"
        fill="url(#cs-backdrop)"
      />

      {/* Slow-drifting dotted orbit — purely decorative, disabled under reduced motion */}
      <circle
        cx="240"
        cy="188"
        r="152"
        stroke="var(--color-brand-line)"
        strokeWidth="2.5"
        strokeDasharray="0.5 16"
        strokeLinecap="round"
        className="orbit-spin"
        style={{ transformOrigin: "240px 188px" }}
      />

      {/* Ambient light behind the doctor — warmth, not a halo */}
      <circle cx="168" cy="150" r="92" fill="url(#cs-glow)" />

      {/* Table + plant, between the two figures */}
      <ellipse cx="252" cy="278" rx="32" ry="7" fill="url(#cs-shadow)" />
      <ellipse cx="252" cy="280" rx="30" ry="6" fill="#ffffff" stroke="var(--color-line)" />
      <rect x="248" y="280" width="7" height="26" fill="var(--color-brand-line)" />
      <rect x="238" y="258" width="26" height="19" rx="4" fill="var(--color-brand-soft)" stroke="var(--color-brand-line)" />
      <path d="M251 258c-2-9-9-13-16-14M251 258c1-10 7-15 15-17M251 258c-1-8 2-14 8-18" stroke="var(--color-brand-mid)" strokeWidth="2" strokeLinecap="round" />

      {/* Doctor — seated, left */}
      <ellipse cx="168" cy="320" rx="70" ry="11" fill="url(#cs-shadow)" />
      <rect x="114" y="196" width="108" height="100" rx="36" fill="url(#cs-coat)" stroke="var(--color-brand-dark)" strokeWidth="1.8" />
      {/* soft fold shading, lower-right of the coat */}
      <path
        d="M222 240c4 22-4 42-22 56-16 0-30 0-42 0 20-8 38-24 48-46 6-4 12-8 16-10Z"
        fill="var(--color-brand-dark)"
        opacity="0.05"
      />
      <path d="M141 202 168 232 195 202" stroke="var(--color-brand-line)" strokeWidth="2" />
      <circle cx="168" cy="165" r="29" fill="var(--color-brand-dark)" />
      <circle cx="157" cy="153" r="8" fill="#ffffff" opacity="0.08" />
      {/* stethoscope */}
      <path d="M150 188c-6 14-5 24 9 31" stroke="var(--color-brand-mid)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M186 188c6 14 7 26-8 32" stroke="var(--color-brand-mid)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="150" cy="186" r="3" fill="var(--color-brand-mid)" />
      <circle cx="186" cy="186" r="3" fill="var(--color-brand-mid)" />
      <circle cx="160" cy="221" r="6.5" fill="var(--color-brand-mid)" />
      {/* clipboard + arm */}
      <path d="M220 222q17-7 12 8" stroke="var(--color-brand-dark)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <rect x="222" y="222" width="30" height="38" rx="4" fill="#ffffff" stroke="var(--color-brand-dark)" strokeWidth="1.6" />
      <path d="M229 233h16M229 241h16M229 249h10" stroke="var(--color-brand-line)" strokeWidth="2.2" strokeLinecap="round" />

      {/* Patient — seated, right, smaller */}
      <ellipse cx="336" cy="314" rx="54" ry="9" fill="url(#cs-shadow)" />
      <rect x="296" y="230" width="82" height="78" rx="28" fill="#fbf6ef" stroke="var(--color-accent)" strokeOpacity="0.55" strokeWidth="1.6" />
      <path d="M378 254c2 18-4 34-18 44-4 0-8 0-11 0 14-10 22-26 24-44Z" fill="var(--color-accent)" opacity="0.05" />
      <circle cx="337" cy="203" r="23" fill="var(--color-brand-mid)" />
      <circle cx="329" cy="195" r="6.5" fill="#ffffff" opacity="0.1" />

      {/* Being heard — three soft dots, gentle staggered bob */}
      <circle cx="313" cy="158" r="3.2" fill="var(--color-brand-mid)" opacity="0.55" className="convo-dot" style={{ animationDelay: "0s" }} />
      <circle cx="326" cy="149" r="3.8" fill="var(--color-brand-mid)" opacity="0.6" className="convo-dot" style={{ animationDelay: "0.18s" }} />
      <circle cx="340" cy="156" r="3.2" fill="var(--color-brand-mid)" opacity="0.55" className="convo-dot" style={{ animationDelay: "0.36s" }} />
    </svg>
  );
}
