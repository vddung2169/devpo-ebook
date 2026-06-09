import type { KnowledgeItem } from "@/types";

export const knowledge: KnowledgeItem[] = [
  {
    id: "lock",
    term: "Máy Lock",
    category: "Loại máy",
    definition:
      "Máy của nhà mạng nước ngoài, bị khóa mạng; không dùng được eSIM theo cách thông thường.",
    detail: [
      "Dòng < iP14: 1 SIM vật lý qua SIM ghép / độ EID.",
      "Dòng > iP14: CNC độ EID để dùng 2 SIM (16E phải CNC dùng SIM ghép).",
      "Là sản phẩm chủ yếu của cửa hàng (Lock Mỹ).",
    ],
  },
  {
    id: "quoc-te",
    term: "Máy Quốc tế",
    category: "Loại máy",
    definition: "Dùng được mọi SIM của mọi nhà mạng toàn thế giới, hỗ trợ eSIM.",
  },
  {
    id: "quoc-te-nua-mua",
    term: "Quốc tế nửa mùa",
    category: "Loại máy",
    definition: "Như máy quốc tế nhưng không dùng được SIM của các nhà mạng Mỹ.",
  },
  {
    id: "mdm",
    term: "MDM (Mobile Device Management)",
    category: "Loại máy",
    definition:
      "Máy doanh nghiệp được quản lý từ xa qua phần mềm; khi bán đã được skip MDM.",
    detail: [
      "Không được reset dòng 2 (Xóa tất cả nội dung và cài đặt) — sẽ bị khóa lại.",
      "Tặng kèm tool skip MDM miễn phí, bảo hành trọn đời máy.",
    ],
  },
  {
    id: "eid",
    term: "Độ EID",
    category: "Kỹ thuật SIM",
    definition:
      "Can thiệp để máy Lock dùng được SIM vật lý mà không cần SIM ghép.",
    detail: [
      "12/12Pro/12ProMax: 1 SIM · 13: 2 SIM · 13Pro/13ProMax: chưa độ được.",
      "Chi phí độ EID cơ bản: 500k (16 Pro/Pro Max: 800k).",
    ],
  },
  {
    id: "cnc",
    term: "CNC khay SIM",
    category: "Kỹ thuật SIM",
    definition:
      "Gia công vỏ máy để thêm khay SIM cho dòng > iP14, giúp dùng 2 SIM vật lý.",
    detail: ["Làm mất khả năng kháng nước tiêu chuẩn (mất áp zin)."],
  },
  {
    id: "sim-ghep",
    term: "SIM ghép",
    category: "Kỹ thuật SIM",
    definition: "Phụ kiện giúp máy Lock nhận SIM khi chưa/không độ EID.",
    detail: [
      "1 SIM Pronew 5.7: 150k (mọi dòng Lock).",
      "SIM ghép đôi DB: 250k (máy từ 14 trở lên).",
    ],
  },
  {
    id: "ap-zin",
    term: "Áp zin (chống nước)",
    category: "Kỹ thuật",
    definition: "Máy còn nguyên bản, chưa tháo mở, giữ khả năng kháng nước.",
    detail: ["Máy CNC/độ EID mất áp zin nhưng vẫn đi mưa, dùng bình thường."],
  },
  {
    id: "full-phu-kien",
    term: "Gói Full phụ kiện",
    category: "Giá & Phụ kiện",
    definition: "Bộ sạc + ốp lưng + cường lực, đã gồm trong giá niêm yết trên web.",
    detail: ["Không lấy sạc: -100k · không lấy ốp + cường lực: -50k · máy SALE bỏ phụ kiện: -100k."],
  },
  {
    id: "reset-dong-2",
    term: "Reset dòng 2",
    category: "Kỹ thuật",
    definition:
      'Lệnh "Xóa tất cả nội dung và cài đặt". Với máy MDM, tuyệt đối không thực hiện.',
  },
];

export const knowledgeCategories = [
  "Loại máy",
  "Kỹ thuật SIM",
  "Kỹ thuật",
  "Giá & Phụ kiện",
];

// 5.2 Thư viện hướng dẫn (link cho khách)
export const guideLinks = [
  "Cách sử dụng SIM ghép 1 SIM",
  "Cách sử dụng SIM ghép 2 SIM",
  "Fix điểm truy cập cá nhân (Hotspot)",
  "Fix lỗi danh bạ (hiện +84)",
  "Fix lỗi mất sóng, chậm thông báo, không xoay ngang màn hình (máy độ IC)",
  "Cách lắp SIM EID 1 SIM",
  "Cách lắp SIM EID 2 SIM",
];

export const videoLinks = [
  "https://vt.tiktok.com/ZGdarKKf8/",
  "https://vt.tiktok.com/ZGHGj1RNJC14K-HCqB5/",
  "https://vt.tiktok.com/ZGHGj1RNJC1qo-KPg62/",
  "https://vt.tiktok.com/ZGdarcEmK/",
  "https://vt.tiktok.com/ZGdahrfgt/",
];
