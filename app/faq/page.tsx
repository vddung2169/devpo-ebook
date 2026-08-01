import type { Metadata } from "next";

import { faqs, faqCategories } from "@/data/faq";
import { DocPage } from "@/components/docs/doc-page";
import { H2 } from "@/components/docs/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <DocPage
      title="FAQ — Câu hỏi thường gặp"
      description="Các câu hỏi khách hay hỏi và cách trả lời chuẩn theo cẩm nang, nhóm theo chủ đề."
    >
      {faqCategories.map((category) => {
        const items = faqs.filter((f) => f.category === category);
        if (items.length === 0) return null;
        return (
          <section key={category}>
            <H2 id={category}>{category}</H2>
            <Accordion type="multiple" className="mt-2">
              {items.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} id={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-6 text-muted-foreground">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        );
      })}
    </DocPage>
  );
}
