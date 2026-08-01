import * as React from "react";
import { AlertTriangle, Info, Lightbulb } from "lucide-react";

import { cn } from "@/lib/utils";

const config = {
  note: {
    icon: Info,
    label: "Ghi chú",
    className:
      "border-sky-200 bg-sky-50 text-sky-900 dark:border-sky-900 dark:bg-sky-950/50 dark:text-sky-200 [&_svg]:text-sky-600 dark:[&_svg]:text-sky-400",
  },
  warning: {
    icon: AlertTriangle,
    label: "Cảnh báo",
    className:
      "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950/50 dark:text-amber-200 [&_svg]:text-amber-600 dark:[&_svg]:text-amber-400",
  },
  tip: {
    icon: Lightbulb,
    label: "Mẹo",
    className:
      "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200 [&_svg]:text-emerald-600 dark:[&_svg]:text-emerald-400",
  },
} as const;

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof config;
  /** Ghi đè nhãn mặc định (Ghi chú / Cảnh báo / Mẹo) */
  title?: string;
}

export function Callout({
  variant = "note",
  title,
  className,
  children,
  ...props
}: CalloutProps) {
  const { icon: Icon, label, className: variantClass } = config[variant];
  return (
    <div
      role="note"
      className={cn(
        "my-6 rounded-lg border px-4 py-3 text-sm leading-relaxed",
        variantClass,
        className
      )}
      {...props}
    >
      <p className="mb-1 flex items-center gap-2 font-semibold">
        <Icon className="h-4 w-4 shrink-0" />
        {title ?? label}
      </p>
      <div className="[&>p]:mt-1 [&>ul]:ml-5 [&>ul]:mt-1 [&>ul]:list-disc [&>ul>li]:mt-1">
        {children}
      </div>
    </div>
  );
}
