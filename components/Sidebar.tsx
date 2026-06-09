"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./nav";
import { Icon } from "./Icon";

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const groups = Array.from(new Set(navLinks.map((l) => l.section)));

  return (
    <nav className="flex h-full flex-col gap-6 p-4">
      <Link
        href="/"
        onClick={onNavigate}
        className="flex items-center gap-3 px-2 py-1"
      >
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-sky-500 font-display text-lg font-extrabold text-white shadow-glow">
          P
        </span>
        <span>
          <span className="block font-display text-base font-extrabold leading-none tracking-tight">
            DEV PỒ
          </span>
          <span className="muted text-[11px]">Cẩm nang nội bộ</span>
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-5 overflow-y-auto">
        {groups.map((group) => (
          <div key={group}>
            <div className="muted px-3 pb-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest">
              {group}
            </div>
            <div className="space-y-0.5">
              {navLinks
                .filter((l) => l.section === group)
                .map((link) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onNavigate}
                      className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                        active
                          ? "bg-brand-500/12 font-semibold text-brand-600 dark:text-brand-400"
                          : "muted hover:bg-[var(--surface-2)] hover:text-[var(--text)]"
                      }`}
                    >
                      <Icon name={link.icon} size={18} />
                      <span>{link.label}</span>
                      {active && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-500" />
                      )}
                    </Link>
                  );
                })}
            </div>
          </div>
        ))}
      </div>

      <p className="muted px-3 text-[11px] leading-relaxed">
        Tài liệu nội bộ. Mọi giá & chính sách bám sát cẩm nang gốc của cửa hàng.
      </p>
    </nav>
  );
}
