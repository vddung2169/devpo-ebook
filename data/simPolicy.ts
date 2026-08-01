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
      { label: "Độ EID — iPhone 13", value: "2 SIM" },
      { label: "Độ EID — iPhone 12 / 12 Pro / 12 Pro Max", value: "1 SIM" },
      { label: "Độ EID — iPhone 13 Pro / 13 Pro Max", value: "Không độ được" },
      { label: "Chi phí độ EID", value: "500k" },
      { label: "SIM ghép 1 SIM Pronew 5.7", value: "150k", hint: "Tất cả dòng Lock" },
    ],
  },
  {
    id: "lock-tren-14",
    group: "Lock — iP > 14 (dùng 2 SIM vật lý / eSIM)",
    rows: [
      {
        label: "CNC + độ lại EID (máy đã CNC nhưng chưa độ EID)",
        value: "500k",
        hint: "Riêng 16 Pro / 16 Pro Max: 800k",
      },
      { label: "Dòng 16 series — khách cửa hàng / khách ngoài", value: "1tr2 / 1tr5" },
      { label: "14 / 15 / 15 Plus — khách cửa hàng / khách ngoài", value: "800k / 1tr" },
      {
        label: "15 Pro / 15 Pro Max",
        value: "Đồng giá 1tr5",
        hint: "CNC 2 SIM vật lý hoặc độ 2 eSIM không cần CNC",
      },
      {
        label: "17 (CNC 2 SIM vật lý / 2 eSIM) — khách cửa hàng / khách ngoài",
        value: "1tr2 / 1tr5",
      },
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
    notes: [
      "16E / 17E: dùng 2 SIM vật lý không cần kèm SIM ghép, nhưng vẫn là chế độ ghép TMSI, không phải EID.",
      "17 Air: chưa độ được EID — độ được 1 SIM vật lý ghép chế độ TMSI.",
    ],
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
