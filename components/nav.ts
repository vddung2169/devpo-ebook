import type { IconName } from "./Icon";

export interface NavLink {
  href: string;
  label: string;
  icon: IconName;
  desc: string;
  section: string;
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Trang chủ", icon: "home", desc: "Tổng quan & tra cứu nhanh", section: "Tổng quan" },
  { href: "/iphone", label: "Các dòng iPhone", icon: "phone", desc: "Phân loại máy & khả năng SIM", section: "Sản phẩm" },
  { href: "/payment", label: "Giá & Thanh toán", icon: "wallet", desc: "Phụ kiện, thanh toán, trả góp", section: "Sản phẩm" },
  { href: "/services", label: "Dịch vụ", icon: "wrench", desc: "Độ SIM, skip MDM, trả góp…", section: "Vận hành" },
  { href: "/warranty", label: "Bảo hành", icon: "shield", desc: "Gói, điều kiện, địa chỉ", section: "Vận hành" },
  { href: "/knowledge", label: "Kiến thức", icon: "book", desc: "Thuật ngữ, quy trình, sự cố", section: "Học tập" },
  { href: "/faq", label: "FAQ", icon: "help", desc: "Câu hỏi khách thường gặp", section: "Học tập" },
  { href: "/test", label: "Test nhân viên", icon: "clipboard", desc: "Kiểm tra kiến thức", section: "Học tập" },
];
