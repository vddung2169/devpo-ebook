"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

/**
 * "Trong trang này" — tự quét các heading h2/h3 (có id) trong <article>
 * và highlight mục đang xem bằng IntersectionObserver.
 */
export function Toc() {
  const [items, setItems] = React.useState<TocItem[]>([]);
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll<HTMLHeadingElement>(
        "article h2[id], article h3[id]"
      )
    );
    setItems(
      headings.map((h) => ({
        id: h.id,
        text: h.textContent?.replace(/#$/, "").trim() ?? "",
        level: h.tagName === "H2" ? 2 : 3,
      }))
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0% -70% 0%" }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Mục lục trong trang" className="text-sm">
      <p className="mb-3 font-medium text-foreground">Trong trang này</p>
      <ul className="space-y-2 border-l">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "-ml-px block border-l border-transparent py-0.5 transition-colors hover:text-foreground",
                item.level === 3 ? "pl-7" : "pl-4",
                activeId === item.id
                  ? "border-foreground font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
