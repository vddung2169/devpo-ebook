import type { ServiceItem } from "@/types";

// Dịch vụ được tổng hợp từ các phần thực tế của cẩm nang.
export const services: ServiceItem[] = [
  {
    id: "do-eid-cnc",
    name: "Độ EID / CNC 2 SIM",
    icon: "sim",
    description:
      "Can thiệp phần cứng để máy Lock dùng được 2 SIM (CNC khay SIM) hoặc độ lại EID.",
    process: [
      "Xác định dòng máy để báo đúng khả năng và chi phí.",
      "Phân biệt giá khách cửa hàng và khách ngoài.",
      "Tư vấn: CNC sẽ làm mất khả năng kháng nước tiêu chuẩn (mất áp zin).",
    ],
    notes: [
      "Độ EID iP < 14: 500k. 15 Pro/Pro Max: đồng giá 1tr5. 17 Pro/Pro Max độ 2 eSIM giữ áp.",
      "16E / 17E: 2 SIM vật lý chế độ ghép TMSI (không phải EID). 13 Pro/Pro Max chưa độ được EID; 17 Air độ được 1 SIM TMSI.",
    ],
  },
  {
    id: "sim-ghep",
    name: "SIM ghép",
    icon: "layers",
    description: "Giải pháp dùng SIM cho máy Lock không/chưa độ EID.",
    process: [
      "1 SIM Pronew 5.7: 150k — áp dụng tất cả dòng Lock.",
      "Hướng dẫn khách cách lắp và kích hoạt SIM ghép (có video hỗ trợ).",
    ],
    notes: [
      "Gửi link video 'Cách sử dụng SIM ghép 1 SIM / 2 SIM' khi khách cần.",
    ],
  },
  {
    id: "skip-mdm",
    name: "Skip MDM",
    icon: "shield",
    description:
      "Bỏ qua bước kích hoạt MDM cho máy doanh nghiệp; shop nhận skip free, tặng kèm tool miễn phí.",
    process: [
      "Máy bán ra đã được skip MDM, dùng như máy bình thường.",
      "Tặng kèm tool skip MDM miễn phí, bảo hành skip trọn đời máy.",
      "Hỏi rõ khách có phải MDM VAY không — MDM vay (xuất hiện từ 4/2026) KHÔNG skip được bằng tool.",
    ],
    notes: [
      "Cảnh báo khách KHÔNG reset dòng 2 — nếu reset máy sẽ khóa lại, cần máy tính để skip MDM.",
    ],
  },
  {
    id: "tra-gop",
    name: "Trả góp",
    icon: "credit",
    description:
      "Hỗ trợ trả góp qua iCloud (A Tâm), CCCD (MIRA / HD Saison) hoặc thẻ tín dụng.",
    process: [
      "iCloud (A Tâm): trả trước ≥ 60%, phí hồ sơ 10% khoản vay, lãi 8%/tháng trên nợ gốc.",
      "CCCD (MIRA / HD Saison): chỉ offline, trả trước 10–20%, cần ≥ 18 tuổi.",
      "Thẻ tín dụng: theo biểu phí chuyển đổi của ngân hàng.",
    ],
    notes: ["Khách nhắn nhóm ZALO góp để được hỗ trợ làm hồ sơ."],
  },
  {
    id: "bao-hanh",
    name: "Gói bảo hành",
    icon: "check",
    description: "3 gói: Mặc định (free), Plus (489k), Pro (989k).",
    process: [
      "Tư vấn nâng cấp gói Plus / Pro để kéo dài 1 đổi 1, bảo hành phần cứng và độ SIM/CNC.",
      "Nhắc điều kiện: giữ nguyên tem, không can thiệp vật lý.",
    ],
    notes: ["Xem chi tiết tại trang Bảo hành & Đổi trả."],
  },
  {
    id: "giao-hang",
    name: "Giao hàng & Ship COD",
    icon: "truck",
    description: "Trả thẳng (freeship) hoặc Ship COD qua GHTK.",
    process: [
      "Trả thẳng 100%: freeship + free phí COD (book Grab nội thành hỗ trợ tối đa 75k).",
      "Ship COD: cọc tối thiểu 1–2tr, phí COD 1.5% + tiền ship.",
    ],
    notes: ["Máy > 10tr: cọc tối thiểu 2tr."],
  },
];
