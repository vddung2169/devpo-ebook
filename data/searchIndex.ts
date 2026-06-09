import type { SearchEntry } from "@/types";
import { iphones } from "./iphone";
import { services } from "./services";
import { faqs } from "./faq";
import { knowledge } from "./knowledge";
import { troubleshooting } from "./troubleshooting";
import { warrantyPackages } from "./warranty";

export const searchIndex: SearchEntry[] = [
  ...iphones.map((m) => ({
    title: m.name,
    subtitle: m.simSupport,
    href: `/iphone#${m.id}`,
    section: "iPhone",
    keywords: `${m.name} ${m.series} ${m.tier} ${m.eid} ${m.simSupport} lock`,
  })),
  ...services.map((s) => ({
    title: s.name,
    subtitle: s.description,
    href: `/services#${s.id}`,
    section: "Dịch vụ",
    keywords: `${s.name} ${s.description} dịch vụ`,
  })),
  ...knowledge.map((k) => ({
    title: k.term,
    subtitle: k.definition,
    href: `/knowledge#${k.id}`,
    section: "Kiến thức",
    keywords: `${k.term} ${k.category} ${k.definition}`,
  })),
  ...faqs.map((f) => ({
    title: f.question,
    subtitle: f.answer.slice(0, 90) + "…",
    href: `/faq#${f.id}`,
    section: "FAQ",
    keywords: `${f.question} ${f.answer} ${f.category}`,
  })),
  ...troubleshooting.map((t) => ({
    title: t.issue,
    subtitle: t.fix[0] ?? "",
    href: `/knowledge#troubleshooting`,
    section: "Sự cố",
    keywords: `${t.issue} ${t.fix.join(" ")} ${t.category} lỗi`,
  })),
  ...warrantyPackages.map((w) => ({
    title: `Gói bảo hành ${w.name}`,
    subtitle: `${w.price} · 1 đổi 1 ${w.oneToOne} · phần cứng ${w.hardware}`,
    href: `/warranty#${w.id}`,
    section: "Bảo hành",
    keywords: `bảo hành ${w.name} ${w.price} ${w.oneToOne} ${w.hardware} ${w.simCnc}`,
  })),
  {
    title: "Chính sách giá & thanh toán",
    subtitle: "Trả thẳng, Ship COD, quẹt thẻ, trả góp",
    href: "/payment",
    section: "Thanh toán",
    keywords: "giá thanh toán trả góp ship cod quẹt thẻ visa mastercard phụ kiện icloud mira",
  },
];
