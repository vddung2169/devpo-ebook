import type { ReactNode } from "react";

type Variant = "blue" | "amber" | "green" | "red" | "slate" | "brand";

const styles: Record<Variant, string> = {
  blue: "bg-sky-500/12 text-sky-600 dark:text-sky-400 ring-sky-500/25",
  amber: "bg-gold-500/12 text-gold-600 dark:text-gold-400 ring-gold-500/25",
  green: "bg-emerald-500/12 text-emerald-600 dark:text-emerald-400 ring-emerald-500/25",
  red: "bg-red-500/12 text-red-600 dark:text-red-400 ring-red-500/25",
  slate: "bg-slate-500/12 text-slate-600 dark:text-slate-300 ring-slate-500/25",
  brand: "bg-brand-500/12 text-brand-600 dark:text-brand-400 ring-brand-500/25",
};

export function Badge({
  children,
  variant = "brand",
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
