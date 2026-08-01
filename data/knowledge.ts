import type { KnowledgeItem } from "@/types";

export const knowledge: KnowledgeItem[] = [
  {
    id: "lock",
    term: "Máy Lock",
    category: "Loại máy",
    definition:
      "Máy của nhà mạng nước ngoài, bị khóa mạng; không dùng được eSIM và SIM vật lý nếu chưa độ SIM / không kèm SIM ghép.",
    detail: [
      "Dòng < iP14: 1 SIM vật lý qua SIM ghép / độ EID.",
      "Dòng > iP14: CNC độ EID để dùng 2 SIM.",
      "16E / 17E: 2 SIM vật lý không cần SIM ghép, nhưng là chế độ ghép TMSI (không phải EID).",
      "Là sản phẩm chủ yếu của cửa hàng (Lock Mỹ).",
    ],
  },
  {
    id: "quoc-te",
    term: "Máy Quốc tế",
    category: "Loại máy",
    definition: "Dùng được mọi SIM của mọi nhà mạng toàn thế giới, hỗ trợ eSIM.",
    detail: [
      "Từ Xr đến 13 series: 1 SIM vật lý + 1 eSIM.",
      "Từ 14 series: bản Quốc tế Mỹ dùng 2 eSIM; bản VNA / KHA / ZPA dùng 1 SIM vật lý + 1 eSIM.",
      "Tất cả các dòng bản ZA/A: 2 SIM vật lý.",
    ],
  },
  {
    id: "quoc-te-nua-mua",
    term: "Quốc tế nửa mùa",
    category: "Loại máy",
    definition:
      "Như máy quốc tế nhưng không dùng được SIM (kể cả eSIM) của các nhà mạng Mỹ.",
    detail: [
      "Trong Cài đặt máy vẫn báo SIM bị khóa — nhưng bản chất là máy quốc tế.",
    ],
  },
  {
    id: "mdm",
    term: "MDM (Mobile Device Management)",
    category: "Loại máy",
    definition:
      "Máy doanh nghiệp được quản lý từ xa qua phần mềm; khi bán đã được skip MDM. Có thể là máy Quốc tế hoặc Lock.",
    detail: [
      "Không được reset dòng 2 (Xóa tất cả nội dung và cài đặt) — sẽ bị khóa lại, cần máy tính để skip.",
      "Shop nhận skip MDM free; tặng kèm tool skip MDM miễn phí, bảo hành trọn đời máy.",
    ],
  },
  {
    id: "mdm-vay",
    term: "MDM vay",
    category: "Loại máy",
    definition:
      "Dạng MDM mới xuất hiện từ tháng 4/2026 — KHÔNG thể dùng tool để skip.",
    detail: [
      "Khi khách hỏi cần skip MDM, phải hỏi rõ khách có phải MDM vay hay không.",
    ],
  },
  {
    id: "eid",
    term: "Độ EID",
    category: "Kỹ thuật SIM",
    definition:
      "Chế độ sử dụng SIM mới trên iPhone Lock: dùng không cần kèm SIM ghép, xài full 100% tính năng như iPhone Quốc tế.",
    detail: [
      "Kể cả CNC SIM vật lý hay độ eSIM thì cũng là chế độ EID.",
      "12/12Pro/12ProMax: 1 SIM · 13: 2 SIM · 13Pro/13ProMax: chưa độ được.",
      "Chi phí độ EID cơ bản: 500k (16 Pro/Pro Max: 800k).",
    ],
  },
  {
    id: "tmsi",
    term: "Chế độ ghép TMSI",
    category: "Kỹ thuật SIM",
    definition:
      "Chế độ ghép khác EID: máy dùng được SIM vật lý không cần kèm SIM ghép rời, nhưng bản chất vẫn là ghép — không phải EID.",
    detail: [
      "16E / 17E: dùng 2 SIM vật lý chế độ ghép TMSI.",
      "17 Air: độ được 1 SIM vật lý ghép chế độ TMSI (chưa độ được EID).",
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
    detail: ["1 SIM Pronew 5.7: 150k (tất cả dòng Lock)."],
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

// Video quan trọng về sản phẩm (Thông tin, kiến thức về iPhone Lock)
export const videoLinks = [
  "https://vt.tiktok.com/ZGdarKKf8/",
  "https://vt.tiktok.com/ZGHGj1RNJC14K-HCqB5/",
  "https://vt.tiktok.com/ZGHGj1RNJC1qo-KPg62/",
  "https://vt.tiktok.com/ZGdarcEmK/",
  "https://vt.tiktok.com/ZGdahrfgt/",
];

// Tổng hợp về MDM & Lock — TODO: chờ bổ sung URL từ quản lý
export const mdmVideoLinks: { title: string; url: string | null }[] = [
  { title: "Thiết bị MDM là gì?", url: null },
  { title: "Video MDM là gì?", url: null },
];
