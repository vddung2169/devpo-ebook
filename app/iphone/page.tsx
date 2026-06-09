"use client";

import { useMemo, useState } from "react";
import { iphones, seriesList, tierList } from "@/data/iphone";
import { phoneTypes } from "@/data/store";
import type { IPhoneModel } from "@/types";
import { Card, SectionHeading, DataRow } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { Icon } from "@/components/Icon";
import { normalize } from "@/utils/search";

const tierVariant: Record<string, "blue" | "amber" | "green" | "red" | "slate" | "brand"> = {
  "Thường": "slate",
  "Plus/Mini": "blue",
  Pro: "brand",
  "Pro Max": "amber",
  Air: "green",
  E: "red",
};

export default function IphonePage() {
  const [series, setSeries] = useState<string>("all");
  const [tier, setTier] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<IPhoneModel | null>(null);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return iphones.filter((m) => {
      if (series !== "all" && m.series !== series) return false;
      if (tier !== "all" && m.tier !== tier) return false;
      if (q) {
        const hay = normalize(
          `${m.name} ${m.series} ${m.tier} ${m.simSupport} ${m.eid} ${m.simCost ?? ""}`
        );
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [series, tier, query]);

  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Phần 1 · Thông tin sản phẩm"
        title="Các dòng iPhone"
        desc="Phân loại và khả năng SIM/EID của từng dòng, tổng hợp đúng theo cẩm nang. Bấm vào một máy để xem chi tiết."
      />

      {/* Lưu ý nguồn dữ liệu */}
      <Card className="flex items-start gap-3 p-4">
        <Icon name="warn" size={18} className="mt-0.5 shrink-0 text-gold-500" />
        <p className="muted text-sm">
          Cẩm nang gốc không liệt kê thông số kỹ thuật chi tiết (màn hình, chip,
          RAM, camera, pin, giá máy) cho từng dòng. Phần này chỉ thể hiện đúng dữ
          liệu có trong tài liệu: khả năng SIM/eSIM, độ EID, tình trạng chống nước
          và chi phí độ SIM. Bộ lọc vì vậy giới hạn ở Series và Phân loại.
        </p>
      </Card>

      {/* Loại máy tổng quan */}
      <section>
        <h2 className="mb-3 font-display text-lg font-bold">Phân loại máy</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {phoneTypes.map((t) => (
            <Card key={t.id} className="p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="font-display font-bold">{t.name}</span>
                <Badge variant={t.badge}>{t.esim.includes("Không") ? "No eSIM" : "eSIM"}</Badge>
              </div>
              <p className="muted mt-2 text-sm">{t.short}</p>
              <p className="muted mt-2 flex items-center gap-1.5 text-xs">
                <Icon name="water" size={13} /> {t.waterproof}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Bộ lọc */}
      <section className="space-y-4">
        <div className="surface flex items-center gap-2 rounded-xl border px-3 py-2 shadow-card">
          <Icon name="search" size={18} className="muted shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm theo tên máy, khả năng SIM…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--muted)]"
          />
          {query && (
            <button onClick={() => setQuery("")} className="muted hover:text-[var(--text)]">
              <Icon name="x" size={16} />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="muted text-xs font-semibold uppercase tracking-wide">Series:</span>
          <FilterChip label="Tất cả" active={series === "all"} onClick={() => setSeries("all")} />
          {seriesList.map((s) => (
            <FilterChip key={s} label={`iP ${s}`} active={series === s} onClick={() => setSeries(s)} />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="muted text-xs font-semibold uppercase tracking-wide">Phân loại:</span>
          <FilterChip label="Tất cả" active={tier === "all"} onClick={() => setTier("all")} />
          {tierList.map((t) => (
            <FilterChip key={t} label={t} active={tier === t} onClick={() => setTier(t)} />
          ))}
        </div>
      </section>

      {/* Lưới máy */}
      <section>
        <p className="muted mb-3 text-sm">
          {filtered.length} dòng máy{series !== "all" || tier !== "all" || query ? " (đã lọc)" : ""}
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => (
            <button
              key={m.id}
              id={m.id}
              onClick={() => setActive(m)}
              className="surface group rounded-2xl border p-5 text-left shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-500/50 hover:shadow-glow focus-visible:focus-ring"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-display text-lg font-bold leading-tight">{m.name}</span>
                <Badge variant={tierVariant[m.tier] ?? "slate"}>{m.tier}</Badge>
              </div>
              <p className="muted mt-3 flex items-start gap-1.5 text-sm">
                <Icon name="sim" size={14} className="mt-0.5 shrink-0" />
                <span>{m.simSupport}</span>
              </p>
              {m.simCost && (
                <p className="mt-2 font-mono text-xs font-semibold text-brand-600 dark:text-brand-400">
                  {m.simCost}
                </p>
              )}
              <span className="muted mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 group-hover:gap-2 dark:text-brand-400">
                Xem chi tiết <Icon name="arrow" size={13} />
              </span>
            </button>
          ))}
          {filtered.length === 0 && (
            <Card className="col-span-full p-8 text-center">
              <p className="muted text-sm">Không tìm thấy dòng máy phù hợp bộ lọc.</p>
            </Card>
          )}
        </div>
      </section>

      {/* Modal chi tiết */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-4 animate-fade-up"
          onClick={() => setActive(null)}
        >
          <div
            className="surface max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-t-3xl border shadow-card sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex items-center justify-between gap-3 border-b border-[var(--border)] bg-[var(--surface)] px-6 py-4">
              <div>
                <h3 className="font-display text-xl font-extrabold">{active.name}</h3>
                <span className="muted font-mono text-xs">Series {active.series}</span>
              </div>
              <Badge variant={tierVariant[active.tier] ?? "slate"}>{active.tier}</Badge>
              <button
                onClick={() => setActive(null)}
                className="muted ml-1 grid h-8 w-8 place-items-center rounded-lg hover:bg-[var(--surface-2)]"
                aria-label="Đóng"
              >
                <Icon name="x" size={18} />
              </button>
            </div>

            <div className="px-6 py-5">
              <div className="mb-4">
                <DataRow label="Khả năng SIM (bản Lock)" value={active.simSupport} />
                <DataRow label="Độ EID" value={active.eid} />
                <DataRow label="Chống nước" value={active.waterproof} />
                {active.simCost && <DataRow label="Chi phí độ SIM/CNC" value={active.simCost} />}
              </div>

              {active.highlights.length > 0 && (
                <div className="mb-4">
                  <h4 className="mb-2 flex items-center gap-1.5 font-semibold">
                    <Icon name="check" size={15} className="text-emerald-500" /> Điểm tư vấn
                  </h4>
                  <ul className="muted space-y-1.5 text-sm">
                    {active.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-brand-500">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {active.notes.length > 0 && (
                <div className="rounded-xl border border-gold-500/30 bg-gold-500/8 p-3">
                  <h4 className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-gold-600 dark:text-gold-400">
                    <Icon name="warn" size={14} /> Lưu ý
                  </h4>
                  <ul className="muted space-y-1 text-sm">
                    {active.notes.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors focus-visible:focus-ring ${
        active
          ? "bg-brand-600 text-white"
          : "surface-2 muted hover:text-[var(--text)]"
      }`}
    >
      {label}
    </button>
  );
}
