"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { searchIndex } from "@/data/searchIndex";
import { searchEntries } from "@/utils/search";
import { Icon } from "./Icon";
import { Badge } from "./Badge";

const sectionVariant: Record<string, "blue" | "amber" | "green" | "red" | "slate" | "brand"> = {
  iPhone: "blue",
  "Dịch vụ": "amber",
  "Kiến thức": "green",
  FAQ: "brand",
  "Sự cố": "red",
  "Bảo hành": "slate",
  "Thanh toán": "amber",
};

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo(() => searchEntries(searchIndex, query), [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 30);
    else {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="surface flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm muted transition-colors hover:bg-[var(--surface-2)] focus-visible:focus-ring sm:w-64"
      >
        <Icon name="search" size={16} />
        <span className="flex-1 truncate">Tìm iPhone, pin, lock, bảo hành…</span>
        <kbd className="surface-2 hidden rounded px-1.5 py-0.5 font-mono text-[10px] sm:inline">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-4 pt-[12vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="surface w-full max-w-xl overflow-hidden rounded-2xl border shadow-glow animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="hairline flex items-center gap-3 border-b px-4">
              <Icon name="search" size={18} className="muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActive((a) => Math.min(a + 1, results.length - 1));
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActive((a) => Math.max(a - 1, 0));
                  } else if (e.key === "Enter" && results[active]) {
                    go(results[active].href);
                  }
                }}
                placeholder="Tìm kiếm toàn cục…"
                className="flex-1 bg-transparent py-4 text-base outline-none placeholder:muted"
              />
              <kbd className="surface-2 muted rounded px-1.5 py-0.5 font-mono text-[10px]">
                ESC
              </kbd>
            </div>

            <div className="max-h-[52vh] overflow-y-auto p-2">
              {query && results.length === 0 && (
                <p className="muted px-3 py-8 text-center text-sm">
                  Không tìm thấy kết quả cho “{query}”. Thử từ khóa khác như “lock”, “EID”, “bảo hành”.
                </p>
              )}
              {!query && (
                <p className="muted px-3 py-8 text-center text-sm">
                  Gõ để tìm trong toàn bộ cẩm nang: iPhone, SIM ghép, độ EID, trả góp, bảo hành…
                </p>
              )}
              {results.map((r, i) => (
                <button
                  key={r.href + r.title}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => go(r.href)}
                  className={`flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                    i === active ? "bg-[var(--surface-2)]" : ""
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold">{r.title}</div>
                    <div className="muted truncate text-xs">{r.subtitle}</div>
                  </div>
                  <Badge variant={sectionVariant[r.section] ?? "brand"}>{r.section}</Badge>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
