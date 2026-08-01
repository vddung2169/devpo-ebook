"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { findGroup, findLink } from "@/lib/docs-nav";
import { Pager } from "@/components/docs/pager";
import { Toc } from "@/components/docs/toc";
import { Lead } from "@/components/docs/typography";

interface DocPageProps {
  title: string;
  description?: string;
  /** Ẩn cột "Trong trang này" (cho trang đặc biệt như bài test) */
  hideToc?: boolean;
  children: React.ReactNode;
}

/**
 * Khung trang tài liệu chuẩn: breadcrumb → tiêu đề → nội dung →
 * Prev/Next, kèm cột phải "Trong trang này" (ẩn dưới xl).
 */
export function DocPage({ title, description, hideToc, children }: DocPageProps) {
  const pathname = usePathname();
  const group = findGroup(pathname);
  const link = findLink(pathname);

  return (
    <div className="flex gap-10">
      <main className="min-w-0 flex-1 py-8 lg:py-10">
        <nav
          aria-label="Breadcrumb"
          className="mb-4 flex items-center gap-1 text-sm text-muted-foreground"
        >
          <span>{group?.title ?? "Tài liệu"}</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-foreground">
            {link?.title ?? title}
          </span>
        </nav>

        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description && <Lead className="mt-3">{description}</Lead>}

        <article className="mt-8">{children}</article>

        <Pager />
      </main>

      {!hideToc && (
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-60 shrink-0 overflow-y-auto py-10 xl:block">
          <Toc />
        </aside>
      )}
    </div>
  );
}
