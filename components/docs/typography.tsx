import * as React from "react";
import { Link as LinkIcon } from "lucide-react";

import { cn, slugify } from "@/lib/utils";

function useHeadingId(id: string | undefined, children: React.ReactNode) {
  if (id) return id;
  return slugify(
    React.Children.toArray(children)
      .map((c) => (typeof c === "string" || typeof c === "number" ? String(c) : ""))
      .join(" ")
  );
}

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  id?: string;
}

/** Heading cấp 2 có anchor link (hiện icon # khi hover) */
export function H2({ id, className, children, ...props }: HeadingProps) {
  const slug = useHeadingId(id, children);
  return (
    <h2
      id={slug}
      className={cn(
        "group mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    >
      <a href={`#${slug}`} className="inline-flex items-center gap-2">
        {children}
        <LinkIcon className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </a>
    </h2>
  );
}

/** Heading cấp 3 có anchor link */
export function H3({ id, className, children, ...props }: HeadingProps) {
  const slug = useHeadingId(id, children);
  return (
    <h3
      id={slug}
      className={cn(
        "group mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    >
      <a href={`#${slug}`} className="inline-flex items-center gap-2">
        {children}
        <LinkIcon className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </a>
    </h3>
  );
}

export function Lead({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-lg text-muted-foreground", className)}
      {...props}
    />
  );
}

export function P({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-4", className)}
      {...props}
    />
  );
}

export function Ul({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn("my-4 ml-6 list-disc [&>li]:mt-2 [&>li]:leading-7", className)}
      {...props}
    />
  );
}

export function InlineCode({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  );
}
