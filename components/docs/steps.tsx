import * as React from "react";

import { cn } from "@/lib/utils";

/** Danh sách bước kiểu shadcn docs — đường kẻ trái + số tròn */
export function Steps({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("my-6 ml-4 border-l pl-8 [&>*:last-child]:pb-0", className)}
      {...props}
    />
  );
}

export interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Nhãn bước, ví dụ "B1", "1", "ĐS" */
  label: string;
  title: string;
}

export function Step({ label, title, className, children, ...props }: StepProps) {
  return (
    <div className={cn("relative pb-8", className)} {...props}>
      <span
        aria-hidden
        className="absolute -left-[calc(2rem+14px)] flex h-7 w-7 items-center justify-center rounded-full border bg-background font-mono text-[11px] font-semibold"
      >
        {label}
      </span>
      <h4 className="pt-0.5 font-semibold leading-7">{title}</h4>
      {children && (
        <div className="mt-1 text-sm leading-6 text-muted-foreground [&>ul]:ml-5 [&>ul]:list-disc [&>ul>li]:mt-1.5">
          {children}
        </div>
      )}
    </div>
  );
}
