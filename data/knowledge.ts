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

// 5.2 Thư viện hướng dẫn — link chính thức của shop
export const officialLinks: { title: string; url: string }[] = [
  { title: "Website", url: "https://devpo.vn" },
  { title: "Beacons (tổng hợp link)", url: "https://beacons.ai/devpo" },
];

export interface VideoTopic {
  /** Tên chủ đề video */
  topic: string;
  /** Một chủ đề có thể gồm nhiều video */
  urls: string[];
}

export interface VideoSection {
  id: string;
  title: string;
  topics: VideoTopic[];
}

/**
 * Tổng hợp video iPhone Lock / Quốc tế / iPad / MDM 2026.
 * Nguồn: danh sách chính thức của shop (cập nhật 12/10/2026).
 */
export const videoLibrary: VideoSection[] = [
  {
    id: "kien-thuc-lock",
    title: "Kiến thức iPhone Lock",
    topics: [
      {
        topic: "Thông tin về iPhone Lock năm 2026",
        urls: [
          "https://vt.tiktok.com/ZSx8QKxxh/",
          "https://vt.tiktok.com/ZGdx2CTKv/",
        ],
      },
      {
        topic: "Tin mới về iPhone Lock",
        urls: [
          "https://vt.tiktok.com/ZGdx66bQV/",
          "https://vt.tiktok.com/ZSx8Qbyqr/",
        ],
      },
      {
        topic: "Thông tin, kiến thức về iPhone Lock",
        urls: [
          "https://vt.tiktok.com/ZGduqTv8t/",
          "https://vt.tiktok.com/ZGduq3uor/",
          "https://vt.tiktok.com/ZGduqoDpU/",
          "https://vt.tiktok.com/ZGduqT4QG/",
          "https://vt.tiktok.com/ZGdubj3rG/",
        ],
      },
      {
        topic: "Giải đáp 999 câu hỏi",
        urls: [
          "https://vt.tiktok.com/ZGdx2uxjR/",
          "https://vt.tiktok.com/ZGduqE1jj/",
        ],
      },
      {
        topic: "Quốc tế nửa mùa là gì?",
        urls: ["https://vt.tiktok.com/ZGdx2pJTW/"],
      },
    ],
  },
  {
    id: "mdm",
    title: "MDM",
    topics: [
      {
        topic: "Thiết bị MDM là gì",
        urls: [
          "https://vt.tiktok.com/ZGdx2ChPb/",
          "https://vt.tiktok.com/ZGdx29qgn/",
          "https://vt.tiktok.com/ZGdQvnYTg/",
        ],
      },
      {
        topic: "Tool MDM",
        urls: ["https://vt.tiktok.com/ZGdx2mQm2/"],
      },
    ],
  },
  {
    id: "huong-dan-sim",
    title: "Hướng dẫn SIM & eSIM",
    topics: [
      {
        topic: "eSIM iPhone Lock",
        urls: ["https://vt.tiktok.com/ZSQ6aofaG/"],
      },
      {
        topic: "Cách lắp SIM EID 1 SIM",
        urls: ["https://vt.tiktok.com/ZGdx2PvEG/"],
      },
      {
        topic: "Cách lắp SIM EID 2 SIM",
        urls: ["https://vt.tiktok.com/ZGdub2hmF/"],
      },
      {
        topic: "Cách lắp SIM ghép 2 mảnh đúng cách",
        urls: ["https://vt.tiktok.com/ZGdx2fHfE/"],
      },
      {
        topic: "Tái sử dụng SIM ghép khi hỏng 1 mặt",
        urls: ["https://vt.tiktok.com/ZGdx2ArmK/"],
      },
    ],
  },
  {
    id: "fix-loi",
    title: "Fix lỗi",
    topics: [
      {
        topic: "Fix lỗi iPhone Lock EID mới",
        urls: ["https://vt.tiktok.com/ZGdx2C2L5/"],
      },
      {
        topic: "Fix lỗi không update iOS được",
        urls: ["https://vt.tiktok.com/ZGdx2pGs4/"],
      },
      {
        topic: "Fix lỗi nút mở nhanh camera không hoạt động",
        urls: ["https://vt.tiktok.com/ZGdx69Uph/"],
      },
      {
        topic: "Fix lỗi danh bạ khi ghép SIM TMSI/QPE",
        urls: ["https://vt.tiktok.com/ZGdx29mja/"],
      },
      {
        topic: "Fix lỗi điểm truy cập cá nhân",
        urls: ["https://vt.tiktok.com/ZGdx25x3v/"],
      },
    ],
  },
  {
    id: "meo-thu-thuat",
    title: "Mẹo & thủ thuật",
    topics: [
      {
        topic: "Mẹo hay trên iPhone 2026",
        urls: ["https://vt.tiktok.com/ZSx8QE1pP/"],
      },
      {
        topic: "Respring iOS 26",
        urls: ["https://vt.tiktok.com/ZGdub1XJC/"],
      },
    ],
  },
  {
    id: "ipad",
    title: "iPad",
    topics: [
      {
        topic: "Chọn iPad theo mệnh",
        urls: ["https://vt.tiktok.com/ZGdQwkwTK/"],
      },
      {
        topic: "iPad Gen 7 - 8 - 9",
        urls: ["https://vt.tiktok.com/ZGdQwhdwD/"],
      },
      {
        topic: "Game hay trên iPad (P1)",
        urls: ["https://vt.tiktok.com/ZGdQwxL8A/"],
      },
    ],
  },
];
