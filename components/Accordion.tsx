"use client";

import { useState, type ReactNode } from "react";
import { Icon } from "./Icon";

export interface AccordionItem {
  id: string;
  title: ReactNode;
  meta?: ReactNode;
  content: ReactNode;
}

export function Accordion({
  items,
  defaultOpen,
}: {
  items: AccordionItem[];
  defaultOpen?: string;
}) {
  const [open, setOpen] = useState<string | null>(defaultOpen ?? null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div
            key={item.id}
            id={item.id}
            className="surface overflow-hidden rounded-xl border shadow-card"
          >
            <button
              onClick={() => setOpen(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-[var(--surface-2)] focus-visible:focus-ring sm:px-5"
            >
              <span className="flex-1">
                <span className="block font-semibold">{item.title}</span>
                {item.meta && (
                  <span className="muted mt-0.5 block text-xs">{item.meta}</span>
                )}
              </span>
              <Icon
                name="chevron"
                size={18}
                className={`shrink-0 muted transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="hairline border-t px-4 py-4 text-sm leading-relaxed sm:px-5">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
