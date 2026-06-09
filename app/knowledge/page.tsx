"use client";

import { useMemo, useState } from "react";
import {
  knowledge,
  knowledgeCategories,
  guideLinks,
  videoLinks,
} from "@/data/knowledge";
import { procedures } from "@/data/procedures";
import { troubleshooting } from "@/data/troubleshooting";
import { Card, SectionHeading } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { Icon } from "@/components/Icon";
import { Accordion, type AccordionItem } from "@/components/Accordion";
import { normalize } from "@/utils/search";

export default function KnowledgePage() {
  const [cat, setCat] = useState<string>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return knowledge.filter((k) => {
      if (cat !== "all" && k.category !== cat) return false;
      if (q) {
        const hay = normalize(`${k.term} ${k.definition} ${(k.detail ?? []).join(" ")}`);
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [cat, query]);

  const procItems: AccordionItem[] = procedures.map((p) => ({
    id: p.id,
    title: p.name,
    meta: p.channel,
    content: (
      <div className="space-y-5">
        {p.sections.map((sec) => (
          <div key={sec.title}>
            <h4 className="mb-2 font-mono text-xs font-bold uppercase tracking-wide text-brand-600 dark:text-brand-400">
              {sec.title}
            </h4>
            <div className="space-y-3">
              {sec.steps.map((st) => (
                <div key={st.code} className="flex gap-3">
                  <span className="grid h-6 min-w-6 shrink-0 place-items-center rounded-md bg-brand-500/15 px-1 font-mono text-xs font-bold text-brand-600 dark:text-brand-400">
                    {st.code}
                  </span>
                  <div>
                    <div className="font-semibold">{st.title}</div>
                    {st.points.length > 0 && (
                      <ul className="muted mt-1 space-y-1">
                        {st.points.map((pt, i) => (
                          <li key={i} className="flex gap-1.5">
                            <span className="text-brand-500">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Học tập"
        title="Kiến thức"
        desc="Thuật ngữ sản phẩm, quy trình vận hành và hướng dẫn xử lý sự cố — tổng hợp từ cẩm nang."
      />

      {/* Thuật ngữ */}
      <section id="thuat-ngu">
        <h2 className="mb-4 font-display text-xl font-bold">Bảng thuật ngữ</h2>

        <div className="surface mb-4 flex items-center gap-2 rounded-xl border px-3 py-2 shadow-card">
          <Icon name="search" size={18} className="muted shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm thuật ngữ: Lock, EID, SIM ghép, áp zin…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--muted)]"
          />
          {query && (
            <button onClick={() => setQuery("")} className="muted hover:text-[var(--text)]">
              <Icon name="x" size={16} />
            </button>
          )}
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          <Chip label="Tất cả" active={cat === "all"} onClick={() => setCat("all")} />
          {knowledgeCategories.map((c) => (
            <Chip key={c} label={c} active={cat === c} onClick={() => setCat(c)} />
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {filtered.map((k) => (
            <Card key={k.id} id={k.id} className="p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display font-bold">{k.term}</h3>
                <Badge variant="slate">{k.category}</Badge>
              </div>
              <p className="muted mt-2 text-sm">{k.definition}</p>
              {k.detail && (
                <ul className="muted mt-3 space-y-1 text-sm">
                  {k.detail.map((d, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-brand-500">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
          {filtered.length === 0 && (
            <Card className="col-span-full p-8 text-center">
              <p className="muted text-sm">Không tìm thấy thuật ngữ phù hợp.</p>
            </Card>
          )}
        </div>
      </section>

      {/* Quy trình */}
      <section id="quy-trinh">
        <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold">
          <span className="font-mono text-sm text-brand-500">Phần 4</span> Quy trình vận hành
        </h2>
        <Accordion items={procItems} defaultOpen="offline" />
      </section>

      {/* Xử lý sự cố */}
      <section id="troubleshooting">
        <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold">
          <span className="font-mono text-sm text-brand-500">5.1</span> Xử lý sự cố thường gặp
        </h2>
        <div className="space-y-3">
          {troubleshooting.map((t) => (
            <Card key={t.id} id={t.id} className="p-5">
              <div className="flex items-start gap-2.5">
                <Icon name="warn" size={18} className="mt-0.5 shrink-0 text-gold-500" />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold">{t.issue}</h3>
                    <Badge variant="blue">{t.category}</Badge>
                  </div>
                  {t.cause && (
                    <p className="muted mt-1 text-sm">
                      <span className="font-semibold">Nguyên nhân:</span> {t.cause}
                    </p>
                  )}
                  <div className="mt-2">
                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      Xử lý:
                    </span>
                    <ul className="muted mt-1 space-y-1 text-sm">
                      {t.fix.map((f, i) => (
                        <li key={i} className="flex gap-2">
                          <Icon name="check" size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Thư viện hướng dẫn */}
      <section id="thu-vien">
        <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold">
          <span className="font-mono text-sm text-brand-500">5.2</span> Thư viện hướng dẫn
        </h2>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="p-5">
            <h3 className="mb-3 font-semibold">Link hướng dẫn cho khách</h3>
            <ul className="space-y-2 text-sm">
              {guideLinks.map((g, i) => (
                <li key={i} className="flex gap-2">
                  <Icon name="book" size={15} className="mt-0.5 shrink-0 text-brand-500" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-5">
            <h3 className="mb-3 font-semibold">Video kiến thức iPhone Lock / MDM</h3>
            <ul className="space-y-2 text-sm">
              {videoLinks.map((v, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Icon name="phone" size={15} className="shrink-0 text-brand-500" />
                  <a
                    href={v}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all font-mono text-xs text-brand-600 hover:underline dark:text-brand-400"
                  >
                    {v}
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
}

function Chip({
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
        active ? "bg-brand-600 text-white" : "surface-2 muted hover:text-[var(--text)]"
      }`}
    >
      {label}
    </button>
  );
}
