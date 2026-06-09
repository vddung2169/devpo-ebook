"use client";

import { useMemo, useState } from "react";
import { faqs, faqCategories } from "@/data/faq";
import { SectionHeading, Card } from "@/components/Card";
import { Accordion, type AccordionItem } from "@/components/Accordion";
import { Icon } from "@/components/Icon";
import { normalize } from "@/utils/search";

export default function FaqPage() {
  const [cat, setCat] = useState<string>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return faqs.filter((f) => {
      if (cat !== "all" && f.category !== cat) return false;
      if (q) {
        const hay = normalize(`${f.question} ${f.answer} ${f.category}`);
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [cat, query]);

  const items: AccordionItem[] = filtered.map((f) => ({
    id: f.id,
    title: f.question,
    meta: f.category,
    content: <p className="muted leading-relaxed">{f.answer}</p>,
  }));

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Câu hỏi thường gặp"
        title="FAQ"
        desc="Những câu hỏi khách hàng thường đặt ra và cách trả lời chuẩn, dựa trên cẩm nang."
      />

      <div className="surface flex items-center gap-2 rounded-xl border px-3 py-2 shadow-card">
        <Icon name="search" size={18} className="muted shrink-0" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm câu hỏi: Lock, chống nước, trả góp…"
          className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--muted)]"
        />
        {query && (
          <button onClick={() => setQuery("")} className="muted hover:text-[var(--text)]">
            <Icon name="x" size={16} />
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <Chip label="Tất cả" active={cat === "all"} onClick={() => setCat("all")} />
        {faqCategories.map((c) => (
          <Chip key={c} label={c} active={cat === c} onClick={() => setCat(c)} />
        ))}
      </div>

      <p className="muted text-sm">
        {filtered.length} câu hỏi
        {cat !== "all" || query ? " (đã lọc)" : ""}
      </p>

      {items.length > 0 ? (
        <Accordion items={items} />
      ) : (
        <Card className="p-8 text-center">
          <p className="muted text-sm">Không tìm thấy câu hỏi phù hợp.</p>
        </Card>
      )}
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
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-colors focus-visible:focus-ring ${
        active ? "bg-brand-600 text-white" : "surface-2 muted hover:text-[var(--text)]"
      }`}
    >
      {label}
    </button>
  );
}
