import type { StoreInfo, PhoneType } from "@/types";

export const store: StoreInfo = {
  name: "DEV PỒ",
  tagline: "Cẩm nang sản phẩm & quy trình kinh doanh",
  focus: [
    "Sản phẩm chủ yếu là máy Lock Mỹ.",
    "Thân máy (body) không kèm hộp — thỉnh thoảng có một số máy có hộp.",
  ],
  notes: [
    "Tài liệu nội bộ dành cho nhân viên: học sản phẩm, tra cứu nhanh và làm bài kiểm tra kiến thức.",
    "Mọi chính sách giá, phí, bảo hành bám sát cẩm nang gốc của cửa hàng.",
  ],
};

export const phoneTypes: PhoneType[] = [
  {
    id: "quoc-te",
    name: "Quốc tế",
    short: "Dùng mọi SIM toàn thế giới",
    esim: "Hỗ trợ eSIM (với dòng máy hỗ trợ)",
    waterproof: "Áp zin (máy nguyên bản, chưa tháo mở)",
    badge: "green",
    details: [
      "Sử dụng được tất cả các loại SIM của mọi nhà mạng trên toàn thế giới.",
      "Sử dụng được eSIM cho các dòng máy hỗ trợ.",
    ],
  },
  {
    id: "quoc-te-nua-mua",
    name: "Quốc tế nửa mùa",
    short: "Mọi SIM trừ nhà mạng Mỹ",
    esim: "Hỗ trợ eSIM (với dòng máy hỗ trợ)",
    waterproof: "Áp zin (máy nguyên bản, chưa tháo mở)",
    badge: "blue",
    details: [
      "Dùng được tất cả SIM của mọi nhà mạng trên thế giới NGOẠI TRỪ các nhà mạng của Mỹ.",
      "Sử dụng được eSIM cho các dòng máy hỗ trợ.",
    ],
  },
  {
    id: "lock",
    name: "Lock",
    short: "Máy nhà mạng nước ngoài, bị khóa mạng",
    esim: "Không dùng được eSIM",
    waterproof: "iP < 14 (không độ EID): áp zin · CNC + độ EID: mất áp zin",
    badge: "amber",
    details: [
      "Là máy của nhà mạng nước ngoài, bị khóa mạng.",
      "Dòng máy < iP14: chỉ dùng được 1 SIM vật lý thông qua SIM ghép / độ EID.",
      "Dòng máy > iP14: vỏ máy đã được can thiệp vật lý (CNC độ EID) để thêm khay SIM, dùng được 2 SIM. Riêng 16E đang phải CNC dùng SIM ghép.",
      "12 / 12 Pro / 12 Pro Max: độ được EID 1 SIM vật lý.",
      "13: độ được EID 2 SIM vật lý.",
      "13 Pro / 13 Pro Max: chưa độ được EID, dùng 1 SIM vật lý kèm SIM ghép.",
      "17 Air: chưa độ được EID.",
    ],
  },
  {
    id: "mdm",
    name: "MDM",
    short: "Máy doanh nghiệp đã skip MDM",
    esim: "Như máy Quốc tế hoặc Lock (tùy nguồn gốc máy)",
    waterproof: "Như máy Quốc tế hoặc Lock (tùy nguồn gốc máy)",
    badge: "slate",
    details: [
      "Ban đầu thuộc sở hữu doanh nghiệp, quản lý từ xa qua phần mềm (Mobile Device Management).",
      "Khi bán ra, máy đã được skip MDM — dùng như máy bình thường.",
      "KHÔNG được reset dòng 2 (Xóa tất cả nội dung và cài đặt). Nếu reset, máy bị khóa lại và yêu cầu tài khoản MDM để kích hoạt.",
      "Tặng kèm tool skip MDM miễn phí cho khách, bảo hành skip MDM trọn đời máy.",
    ],
  },
];
