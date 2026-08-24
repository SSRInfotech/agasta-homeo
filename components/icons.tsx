import type { SVGProps } from "react";

/**
 * One small, hand-drawn line-icon set for the whole site. Geometric and
 * restrained on purpose — AGASTA_FOUNDATION_DOC.md §10 bans the
 * wellness-influencer look, so these read closer to a hospital signage
 * system than a marketing icon pack. Every icon shares the same stroke
 * weight, corner radius and 24×24 grid so they drop into any card without
 * per-icon tuning.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconStethoscope(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3v6a4 4 0 0 0 8 0V3" />
      <path d="M6 3H4.5M14 3h1.5" />
      <path d="M10 13v2.5a5.5 5.5 0 0 0 11 0V14" />
      <circle cx="20.5" cy="12.5" r="1.6" />
    </svg>
  );
}

export function IconHospital(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="8" width="17" height="13" rx="1.4" />
      <path d="M9 21v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5" />
      <path d="M12 3v5M9.5 5.5h5" />
      <path d="M3.5 11h17" />
    </svg>
  );
}

export function IconBed(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 18.5v-8a2 2 0 0 1 2-2H10a2 2 0 0 1 2 2v2" />
      <path d="M2.5 15h17a2 2 0 0 1 2 2v3.5" />
      <path d="M2.5 20.5V15M21.5 20.5V17" />
      <circle cx="6" cy="11" r="1.3" />
    </svg>
  );
}

export function IconFlask(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9.5 3h5" />
      <path d="M10.3 3v5.6L5.6 17a2 2 0 0 0 1.75 3h9.3a2 2 0 0 0 1.75-3l-4.7-8.4V3" />
      <path d="M8 15h8" />
    </svg>
  );
}

export function IconFileText(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h8l4.5 4.5V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4.5H18.5" />
      <path d="M8.5 13h7M8.5 16.5h7M8.5 9.5h3" />
    </svg>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20v-1.5A4.5 4.5 0 0 1 8 14h2a4.5 4.5 0 0 1 4.5 4.5V20" />
      <circle cx="17.5" cy="9" r="2.4" />
      <path d="M15.8 14.2a4.2 4.2 0 0 1 4.7 4.2V20" />
    </svg>
  );
}

export function IconShieldCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2 5 5.8v5.6c0 4.6 3 7.9 7 9.4 4-1.5 7-4.8 7-9.4V5.8Z" />
      <path d="m9 12 2.2 2.2L15.5 9.5" />
    </svg>
  );
}

export function IconBookOpen(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5.5c-1.6-1.3-4-1.8-6.5-1.6a1 1 0 0 0-.9 1v12.4a.8.8 0 0 0 .9.8c2.3-.2 4.6.3 6.1 1.5" />
      <path d="M12 5.5c1.6-1.3 4-1.8 6.5-1.6a1 1 0 0 1 .9 1v12.4a.8.8 0 0 1-.9.8c-2.3-.2-4.6.3-6.1 1.5" />
      <path d="M12 5.5v13.6" />
    </svg>
  );
}

export function IconLeaf(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 20c-2-4.5-1.6-9.4 1.4-13C10.7 3 15.7 3 19 3.2c.4 4.4-.4 9-3.8 12.3C12 18.7 8.7 19.6 6 20Z" />
      <path d="M6.5 19.5c3-4 6-7 11.6-15" />
    </svg>
  );
}

export function IconEar(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15 4a5.5 5.5 0 0 0-6 9.2c1 .8 1.5 1.6 1.5 2.8a2 2 0 1 0 4 0" />
      <path d="M9 9.5a3 3 0 0 1 4-2.8" />
    </svg>
  );
}

export function IconFingerprint(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5a6.5 6.5 0 0 1 6.5 6.5c0 3.4-.5 6-1.8 8" />
      <path d="M12 3.5A6.5 6.5 0 0 0 5.5 10c0 1.7-.1 3.1-.5 4.5" />
      <path d="M9 20.5c1-2 1.5-4 1.5-6.5a1.5 1.5 0 1 1 3 0c0 2.8-.6 5-2 7" />
      <path d="M8 17.5c.6-1.5.9-2.6.9-4a3.1 3.1 0 0 1 6.2 0c0 1.4-.1 2.4-.4 3.5" />
    </svg>
  );
}

export function IconDroplet(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5s6 6.4 6 10.6a6 6 0 0 1-12 0c0-4.2 6-10.6 6-10.6Z" />
    </svg>
  );
}

export function IconCalendarClock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="1.4" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      <circle cx="15" cy="14.5" r="3.3" />
      <path d="M15 13v1.6l1 .9" />
    </svg>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function IconTrendingUp(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 17 9.8 10.6l4 4L20.5 6.5" />
      <path d="M15 6.5h5.5V12" />
    </svg>
  );
}

export function IconLandmark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21h18M4 21V10M20 21V10M2.5 10 12 4l9.5 6" />
      <path d="M7 10v11M11 10v11M13 10v11M17 10v11" />
    </svg>
  );
}

export function IconGlobe(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.2-3.6-8.5s1.2-6.2 3.6-8.5Z" />
    </svg>
  );
}

export function IconScale(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v17M8 20h8" />
      <path d="M5 7h5M14 7h5" />
      <path d="m5 7-2.5 5a2.6 2.6 0 0 0 5 0Z" />
      <path d="m19 7-2.5 5a2.6 2.6 0 0 0 5 0Z" />
    </svg>
  );
}

export function IconHandHeart(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 13.5h4l2.8-1.6a2 2 0 0 1 2.5.3.5.5 0 0 1-.1.8l-3 2h6.3a1.4 1.4 0 0 1 .5 2.7l-6 2.3H7l-4-1.5" />
      <path d="M3 12.8h3.3v4.6H3z" />
      <path d="M16.5 8.2c-2.4-1.6-4-3.7-4-5.4a2.3 2.3 0 0 1 4-1.5 2.3 2.3 0 0 1 4 1.5c0 1.7-1.6 3.8-4 5.4Z" />
    </svg>
  );
}

export function IconWallet(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 7.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2Z" />
      <path d="M16 5.5 6.5 3a1.7 1.7 0 0 0-2 1.3v1.6" />
      <path d="M15.5 13.2h3.5v2.6h-3.5a1.3 1.3 0 0 1 0-2.6Z" />
    </svg>
  );
}

export function IconGraduationCap(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m2.5 8.5 9.5-4 9.5 4-9.5 4-9.5-4Z" />
      <path d="M7 10.6v4.4c0 1.3 2.2 2.4 5 2.4s5-1.1 5-2.4v-4.4" />
      <path d="M21 8.5v6" />
    </svg>
  );
}

export function IconNetwork(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="4.5" r="2" />
      <circle cx="5" cy="18.5" r="2" />
      <circle cx="19" cy="18.5" r="2" />
      <path d="M12 6.5v5M10.7 15 6.8 17M13.3 15l3.9 2" />
    </svg>
  );
}

export function IconWrench(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 3.5a4.5 4.5 0 0 0-5.9 5.1L3.5 13.7a2 2 0 0 0 2.8 2.8l5.1-5.1a4.5 4.5 0 0 0 5.1-5.9l-3 3-2.2-2.2Z" />
    </svg>
  );
}

export function IconCheckCircle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.3 12.3 2.6 2.6 4.8-5.4" />
    </svg>
  );
}

export function IconClipboardHeart(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="4.5" width="14" height="16" rx="1.5" />
      <path d="M9 4.5V3.8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v.7" />
      <path d="M12 15.6c-2.4-1.5-3.6-2.9-3.6-4.3a1.8 1.8 0 0 1 3.2-1.1 1.8 1.8 0 0 1 3.2 1.1c0 1.4-1.2 2.8-3.6 4.3Z" />
    </svg>
  );
}

export function IconAlertTriangle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.8 2.7 19.5A1 1 0 0 0 3.6 21h16.8a1 1 0 0 0 .9-1.5L12 3.8Z" />
      <path d="M12 10v4.2" />
      <circle cx="12" cy="17.3" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}
