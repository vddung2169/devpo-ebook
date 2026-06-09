import type { WarrantyPackage, WarrantyCenter } from "@/types";

// 3.1 Các gói bảo hành
export const warrantyPackages: WarrantyPackage[] = [
  {
    id: "mac-dinh",
    name: "MẶC ĐỊNH",
    price: "Free",
    oneToOne: "7 ngày",
    hardware: "7 ngày",
    simCnc: "3 tháng",
  },
  {
    id: "plus",
    name: "PLUS",
    price: "489.000đ",
    oneToOne: "30 ngày",
    hardware: "3 tháng",
    simCnc: "6 tháng",
    highlight: true,
  },
  {
    id: "pro",
    name: "PRO",
    price: "989.000đ",
    oneToOne: "60 ngày",
    hardware: "6 tháng",
    simCnc: "2 năm",
  },
];

// 3.2 Điều kiện & từ chối bảo hành
export const warrantyConditions = {
  required: [
    "Máy phải còn nguyên tem bảo hành của cửa hàng.",
    "Máy không bị can thiệp vật lý (móp méo, bể vỡ).",
  ],
  rejected: [
    "Máy bị mất tem, rách tem bảo hành.",
    "Máy bị rơi vỡ, móp méo, cấn.",
    "Máy bị vào nước, ẩm mốc.",
    "Máy không lên nguồn (không rõ nguyên nhân, cần kiểm tra).",
    "Phụ kiện (sạc, cáp) bị đứt gãy, vào nước.",
  ],
};

// 3.3 Quy trình tiếp nhận bảo hành
export const warrantyIntake = {
  storeCustomer: [
    "Check được thông tin bên độ SIM: nhắn Zalo cho bên bảo hành báo khách qua, hoặc tiếp nhận máy rồi book qua (hẹn khách thời gian lấy cụ thể).",
    "Không check được thông tin bên độ SIM: tiếp nhận lại máy để check thông tin sau (hẹn 1 ngày sau lấy).",
  ],
  outsideCustomer:
    "Báo khách qua 1 trong 3 địa chỉ bảo hành / CNC dưới đây.",
};

// 3.3 Địa chỉ bảo hành / CNC (cho khách ngoài)
export const warrantyCenters: WarrantyCenter[] = [
  {
    shop: "Tâm Táo",
    address: "9A Đường số 6, KP5, Linh Tây, Thủ Đức",
    contact: "Anh Tâm",
    phone: "0786789636",
  },
  {
    shop: "QH store",
    address: "5 đường Năm Châu, phường 11, Tân Bình",
    contact: "Anh Hậu",
    phone: "0935869679",
  },
  {
    shop: "Exshop",
    address: "95 Thành Mỹ, Phường 8, Tân Bình",
    contact: "Anh Vương",
    phone: "0869178178",
  },
];
