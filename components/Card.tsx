import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

export function Card({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`surface rounded-2xl border shadow-card ${className}`}
    >
      {children}
    </div>
  );
}

export function StatCard({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: IconName;
}) {
  return (
    <Card className="flex items-center gap-4 p-5">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/12 text-brand-600 dark:text-brand-400">
        <Icon name={icon} />
      </div>
      <div>
        <div className="font-mono text-2xl font-bold leading-none">{value}</div>
        <div className="muted mt-1 text-sm">{label}</div>
      </div>
    </Card>
  );
}

export function ProgressBar({ value }: { value: number }) {
  return (
    <div
      className="surface-2 h-2.5 w-full overflow-hidden rounded-full"
      role="progressbar"
      aria-valuenow={Math.round(value)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-sky-500 transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <div className="mb-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          {eyebrow}
        </div>
      )}
      <h1 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
        {title}
      </h1>
      {desc && <p className="muted mt-2 max-w-2xl text-sm sm:text-base">{desc}</p>}
    </div>
  );
}

export function DataRow({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="hairline flex flex-col gap-1 border-b py-3 last:border-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <span className="text-sm font-medium">{label}</span>
      <span className="text-right">
        <span className="font-mono text-sm font-semibold text-brand-600 dark:text-brand-400">
          {value}
        </span>
        {hint && <span className="muted mt-0.5 block text-xs">{hint}</span>}
      </span>
    </div>
  );
}
