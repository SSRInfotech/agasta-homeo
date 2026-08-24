import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold transition-all duration-200 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-sm hover:bg-brand-dark hover:shadow-md",
  secondary: "border-2 border-brand text-brand hover:bg-brand-soft",
  ghost: "border border-line bg-surface text-ink hover:border-brand-line",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a data-cta href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link data-cta href={href} className={cls}>
      {children}
    </Link>
  );
}
