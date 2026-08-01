import type { Metadata } from "next";

import { knowledge, knowledgeCategories } from "@/data/knowledge";
import { DocPage } from "@/components/docs/doc-page";
import { H2, P } from "@/components/docs/typography";

export const metadata: Metadata = { title: "Thuật ngữ nhanh" };

export default function KnowledgePage() {
  return (
    <DocPage
      title="Thuật ngữ nhanh"
      description="Tra cứu nhanh các khái niệm cốt lõi: Lock, Quốc tế, MDM, EID, TMSI, CNC, áp zin…"
    >
      {knowledgeCategories.map((category) => {
        const items = knowledge.filter((k) => k.category === category);
        if (items.length === 0) return null;
        return (
          <section key={category}>
            <H2 id={category}>{category}</H2>
            <div className="mt-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} id={item.id} className="rounded-lg border p-4">
                  <p className="font-semibold">{item.term}</p>
                  <P className="mt-1 text-sm [&:not(:first-child)]:mt-1">
                    {item.definition}
                  </P>
                  {item.detail && item.detail.length > 0 && (
                    <ul className="ml-5 mt-2 list-disc space-y-1 text-sm text-muted-foreground">
                      {item.detail.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </DocPage>
  );
}
