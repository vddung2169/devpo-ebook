// =============================================================
// Kiểu dữ liệu dùng chung cho toàn bộ cẩm nang DEV PỒ
// =============================================================

export interface StoreInfo {
  name: string;
  tagline: string;
  focus: string[];
  notes: string[];
}

export interface PhoneType {
  id: string;
  name: string;
  short: string;
  esim: string;
  waterproof: string;
  details: string[];
  badge: "blue" | "amber" | "green" | "red" | "slate";
}

/** Một dòng máy iPhone với khả năng SIM/EID rút ra từ cẩm nang */
export interface IPhoneModel {
  id: string;
  name: string;
  series: string; // "12" | "13" | "14" ...
  tier: "Thường" | "Plus/Mini" | "Pro" | "Pro Max" | "Air" | "E";
  simSupport: string; // mô tả khả năng dùng sim ở bản Lock
  eid: string; // khả năng độ EID
  waterproof: string;
  highlights: string[]; // điểm tư vấn
  notes: string[]; // lưu ý đặc thù
  simCost?: string; // chi phí độ sim/cnc nếu có
}

export interface PriceRow {
  label: string;
  value: string;
  hint?: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  summary: string;
  steps: string[];
  fees: PriceRow[];
  notes: string[];
}

export interface InstallmentPlan {
  id: string;
  name: string;
  channel: string; // Online / Offline
  rows: PriceRow[];
  notes: string[];
}

export interface WarrantyPackage {
  id: string;
  name: string;
  price: string;
  oneToOne: string;
  hardware: string;
  simCnc: string;
  highlight?: boolean;
}

export interface WarrantyCenter {
  shop: string;
  address: string;
  contact: string;
  phone: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  process: string[];
  notes: string[];
}

export interface ProcedureStep {
  code: string;
  title: string;
  points: string[];
}

export interface Procedure {
  id: string;
  name: string;
  channel: string;
  sections: { title: string; steps: ProcedureStep[] }[];
}

export interface Troubleshoot {
  id: string;
  issue: string;
  cause?: string;
  fix: string[];
  category: string;
}

export interface KnowledgeItem {
  id: string;
  term: string;
  category: string;
  definition: string;
  detail?: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index trong options
  explanation: string;
  category: string;
  difficulty: "Dễ" | "Trung bình" | "Khó";
}

/** Mục dùng cho thanh tìm kiếm toàn cục */
export interface SearchEntry {
  title: string;
  subtitle: string;
  href: string;
  section: string;
  keywords: string;
}
