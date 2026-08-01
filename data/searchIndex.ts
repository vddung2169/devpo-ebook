import type { SearchEntry } from "@/types";
import { iphones } from "./iphone";
import { faqs } from "./faq";
import { knowledge } from "./knowledge";
import { troubleshooting } from "./troubleshooting";
import { warrantyPackages } from "./warranty";
import { phoneTypes } from "./store";
import { paymentMethods, installments } from "./pricing";
import { simPolicy } from "./simPolicy";

export const searchIndex: SearchEntry[] = [
  ...phoneTypes.map((t) => ({
    title: `Máy ${t.name}`,
    subtitle: t.short,
    href: `/products#${t.id}`,
    section: "Phân loại máy",
    keywords: `${t.name} ${t.short} ${t.esim} ${t.details.join(" ")}`,
  })),
  ...iphones.map((m) => ({
    title: m.name,
    subtitle: m.simSupport,
    href: `/iphone#${m.id}`,
    section: "iPhone",
    keywords: `${m.name} ${m.series} ${m.tier} ${m.eid} ${m.simSupport} lock`,
  })),
  ...simPolicy.map((g) => ({
    title: g.group,
    subtitle: "Chi phí độ EID / CNC / SIM ghép",
    href: `/sim#${g.id}`,
    section: "SIM & Sóng",
    keywords: `${g.group} ${g.rows.map((r) => `${r.label} ${r.value}`).join(" ")} độ sim eid cnc`,
  })),
  ...paymentMethods.map((p) => ({
    title: p.name,
    subtitle: p.summary,
    href: `/payment#${p.id}`,
    section: "Thanh toán",
    keywords: `${p.name} ${p.summary} ${p.steps.join(" ")} thanh toán`,
  })),
  ...installments.map((p) => ({
    title: p.name,
    subtitle: p.channel,
    href: `/payment#${p.id}`,
    section: "Trả góp",
    keywords: `${p.name} ${p.channel} trả góp ${p.rows.map((r) => `${r.label} ${r.value}`).join(" ")}`,
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
    href: `/support#${t.id}`,
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
    title: "Quy trình OFFLINE — bán hàng tại cửa hàng",
    subtitle: "Chốt đơn, gửi/nhận đơn, báo cáo cuối ca",
    href: "/process/offline",
    section: "Quy trình",
    keywords: "quy trình offline chốt đơn bill báo cáo cuối ca đối soát kho tồn kho",
  },
  {
    title: "Quy trình ONLINE — bán hàng từ xa",
    subtitle: "Chốt đơn online, form check máy, tiếp nhận bảo hành",
    href: "/process/online",
    section: "Quy trình",
    keywords: "quy trình online chốt đơn ship cod grab form check máy tiếp nhận bảo hành độ sim telegram",
  },
  {
    title: "Thư viện hướng dẫn",
    subtitle: "Link gửi khách + video về iPhone Lock, MDM",
    href: "/library",
    section: "Thư viện",
    keywords: "thư viện hướng dẫn link video tiktok sim ghép hotspot danh bạ mdm lock",
  },
];
