// =============================================================
// Cấu hình điều hướng của tài liệu — nguồn duy nhất cho
// sidebar, breadcrumb, prev/next và Command Menu
// =============================================================

export interface DocLink {
  title: string;
  href: string;
  /** Mô tả ngắn hiển thị trong Command Menu */
  desc?: string;
}

export interface DocGroup {
  title: string;
  items: DocLink[];
}

export const docsNav: DocGroup[] = [
  {
    title: "Cẩm nang sản phẩm",
    items: [
      { title: "Tổng quan & phân loại máy", href: "/products", desc: "Quốc tế, nửa mùa, Lock, MDM" },
      { title: "Các dòng iPhone Lock", href: "/iphone", desc: "Khả năng SIM/EID theo dòng 12–17" },
      { title: "Chống nước & SIM/Sóng", href: "/sim", desc: "Áp zin, chi phí độ EID/CNC" },
      { title: "Giá & Thanh toán", href: "/payment", desc: "Phụ kiện, ship COD, trả góp" },
      { title: "Bảo hành & Đổi trả", href: "/warranty", desc: "3 gói, điều kiện, địa chỉ" },
    ],
  },
  {
    title: "Quy trình kinh doanh",
    items: [
      { title: "Quy trình OFFLINE", href: "/process/offline", desc: "Bán hàng tại cửa hàng, báo cáo ca" },
      { title: "Quy trình ONLINE", href: "/process/online", desc: "Bán hàng từ xa, form check máy" },
      { title: "CSKH & Xử lý sự cố", href: "/support", desc: "4 sự cố thường gặp" },
      { title: "Thư viện hướng dẫn", href: "/library", desc: "Link gửi khách, video sản phẩm" },
    ],
  },
  {
    title: "Học tập & kiểm tra",
    items: [
      { title: "Thuật ngữ nhanh", href: "/knowledge", desc: "Tra cứu khái niệm Lock, EID, TMSI…" },
      { title: "FAQ", href: "/faq", desc: "Câu hỏi khách thường gặp" },
      { title: "Test nhân viên", href: "/test", desc: "Kiểm tra kiến thức" },
    ],
  },
];

/** Danh sách phẳng theo thứ tự đọc — dùng cho Prev/Next */
export const flatNav: DocLink[] = [
  { title: "Giới thiệu", href: "/" },
  ...docsNav.flatMap((g) => g.items),
];

/** Tìm nhóm chứa một trang (cho breadcrumb) */
export function findGroup(href: string): DocGroup | undefined {
  return docsNav.find((g) => g.items.some((i) => i.href === href));
}

export function findLink(href: string): DocLink | undefined {
  return flatNav.find((i) => i.href === href);
}
