import type { PriceRow } from "@/types";

export interface SimGroup {
  id: string;
  group: string;
  rows: PriceRow[];
  notes?: string[];
}

// Chính sách SIM & Sóng (mục 1.4) — toàn bộ chi phí độ EID / CNC / SIM ghép
export const simPolicy: SimGroup[] = [
  {
    id: "lock-duoi-14",
    group: "Lock — iP < 14 (dùng SIM ghép / độ EID)",
    rows: [
      { label: "Độ EID — iPhone 12 / 13", value: "2 SIM", hint: "Theo bảng chi phí SIM" },
      { label: "Độ EID — iPhone 12 Pro / 12 Pro Max", value: "1 SIM" },
      { label: "Độ EID — iPhone 13 Pro / 13 Pro Max", value: "Không độ được" },
      { label: "Chi phí độ EID", value: "500k" },
      { label: "SIM ghép 1 SIM Pronew 5.7", value: "150k", hint: "Tất cả dòng Lock" },
      { label: "SIM ghép đôi DB", value: "250k", hint: "Dùng cho máy từ 14 trở lên" },
    ],
  },
  {
    id: "lock-tren-14",
    group: "Lock — iP > 14 (dùng 2 SIM vật lý / eSIM)",
    rows: [
      {
        label: "CNC + độ lại EID (đã CNC, độ lại)",
        value: "500k",
        hint: "Riêng 16 Pro / 16 Pro Max: 800k",
      },
      { label: "Dòng 16 — khách cửa hàng", value: "1tr2" },
      { label: "Dòng 16 — khách ngoài", value: "1tr5" },
      { label: "14 / 15 / 15 Plus — khách cửa hàng", value: "800k" },
      { label: "14 / 15 / 15 Plus — khách ngoài", value: "1tr" },
      {
        label: "15 Pro / 15 Pro Max",
        value: "Đồng giá 1tr5",
        hint: "CNC 2 SIM vật lý hoặc độ 2 eSIM không cần CNC",
      },
      { label: "17 — CNC 2 SIM (cửa hàng / ngoài)", value: "1tr2 / 1tr5" },
      {
        label: "17 Pro / 17 Pro Max — độ 2 eSIM (cửa hàng / ngoài)",
        value: "1tr5 / 2tr",
        hint: "Không cần CNC",
      },
      {
        label: "17 Pro / 17 Pro Max — CNC 2 SIM (cửa hàng / ngoài)",
        value: "2tr / 2tr5",
      },
    ],
    notes: ["16E đang phải CNC dùng SIM ghép."],
  },
];

// Tình trạng chống nước (mục 1.3)
export const waterproof: PriceRow[] = [
  { label: "Quốc tế / Quốc tế nửa mùa", value: "Áp zin (nguyên bản, chưa tháo mở)" },
  { label: "Lock — iP < 14 (không độ EID)", value: "Áp zin (nguyên bản)" },
  {
    label: "Lock — CNC + độ EID",
    value: "Mất áp zin",
    hint: "Do can thiệp phần cứng để độ khay SIM. Vẫn đi mưa, dùng bình thường nhưng không còn kháng nước tiêu chuẩn.",
  },
  { label: "MDM", value: "Như máy Quốc tế hoặc Lock (tùy nguồn gốc)" },
];
