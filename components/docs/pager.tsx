"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { flatNav } from "@/lib/docs-nav";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/** Nút Previous / Next theo thứ tự đọc của mục lục */
export function Pager() {
  const pathname = usePathname();
  const index = flatNav.findIndex((item) => item.href === pathname);
  if (index === -1) return null;

  const prev = index > 0 ? flatNav[index - 1] : null;
  const next = index < flatNav.length - 1 ? flatNav[index + 1] : null;

  return (
    <div className="mt-12 flex items-center justify-between gap-4 border-t pt-6">
      {prev ? (
        <Link
          href={prev.href}
          className={cn(buttonVariants({ variant: "outline" }), "h-auto py-2")}
        >
          <ChevronLeft />
          <span className="flex flex-col items-start">
            <span className="text-xs text-muted-foreground">Trước</span>
            {prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-auto py-2 text-right"
          )}
        >
          <span className="flex flex-col items-end">
            <span className="text-xs text-muted-foreground">Tiếp theo</span>
            {next.title}
          </span>
          <ChevronRight />
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
