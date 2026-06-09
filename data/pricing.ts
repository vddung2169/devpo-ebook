import type { PriceRow, PaymentMethod, InstallmentPlan } from "@/types";

// 2.1 Chính sách giá & phụ kiện
export const accessoryPolicy = {
  fullKit: ["Bộ sạc", "Ốp lưng", "Cường lực"],
  note: 'Giá niêm yết trên WEB (cập nhật theo ngày) đã bao gồm gói "Full phụ kiện".',
  deductions: [
    { label: "Không lấy bộ sạc", value: "-100k" },
    { label: "Không lấy ốp lưng + cường lực", value: "-50k" },
    { label: "MÁY SALE — không lấy phụ kiện", value: "Chỉ trừ 100k" },
  ] as PriceRow[],
};

// 2.2 Phương thức thanh toán
export const paymentMethods: PaymentMethod[] = [
  {
    id: "tra-thang",
    name: "Trả thẳng (CK & COD)",
    summary: "Chuyển khoản đủ 100% giá trị máy trước khi giao hàng.",
    steps: [
      "Khách chuyển khoản đầy đủ 100% giá trị máy trước khi giao.",
      "Freeship + free phí COD (book Grab nội thành hỗ trợ 50k ship).",
    ],
    fees: [
      { label: "Phí ship", value: "Miễn phí" },
      { label: "Phí COD", value: "Miễn phí" },
      { label: "Hỗ trợ Grab nội thành", value: "50k" },
    ],
    notes: [
      "Tài khoản thụ hưởng: VU DUC DUNG — STK 19036185756012 — Techcombank.",
    ],
  },
  {
    id: "ship-cod",
    name: "Giao hàng thu tiền (Ship COD)",
    summary: "Khách cọc trước, thanh toán phần còn lại khi nhận hàng.",
    steps: [
      "Khách thanh toán trước tối thiểu 1tr – 2tr (máy > 10tr: tối thiểu 2tr).",
      "Cửa hàng gửi máy qua đơn vị vận chuyển GHTK.",
      "Khách thanh toán số tiền còn lại + phí cho bưu tá.",
    ],
    fees: [
      { label: "Phí COD", value: "1.5%", hint: "Trên số tiền thu hộ (phần còn lại sau cọc)" },
      { label: "Tiền ship", value: "Tùy ĐVVC" },
    ],
    notes: [
      "Ví dụ: máy 11tr, cọc 2tr → thu hộ 9tr → phí = (1.5% × 9tr) + phí ship.",
    ],
  },
];

// 2.3 Phí quẹt thẻ
export const cardFees: PriceRow[] = [
  { label: "Offline — Visa", value: "1%" },
  { label: "Offline — Mastercard", value: "1.5%" },
  { label: "Online — Visa / Mastercard", value: "2.5%" },
];

// 2.4 Chính sách trả góp
export const installments: InstallmentPlan[] = [
  {
    id: "icloud-tc-apple",
    name: "Trả góp qua iCloud — TC APPLE",
    channel: "Online & Offline",
    rows: [
      { label: "Thời gian vay", value: "Tối đa 6 tháng (QTE) · 3 tháng (LOCK)" },
      { label: "Trả trước", value: "60% giá trị máy" },
      { label: "Lãi suất", value: "~8%/tháng trên nợ gốc" },
      {
        label: "Phí tất toán sớm (7 ngày đầu)",
        value: "Vay 2–8tr: 500k · 8–15tr: 10% khoản vay",
      },
    ],
    notes: [
      "Đối tượng: khách có chứng minh công việc + thu nhập + CCCD gốc.",
      "Liên hệ khi có khách nhắn vào nhóm ZALO góp để được hỗ trợ.",
    ],
  },
  {
    id: "icloud-a-tam",
    name: "Trả góp qua iCloud — A TÂM",
    channel: "Online & Offline",
    rows: [
      { label: "Thời gian vay", value: "Tối đa 6 tháng cho mọi loại máy" },
      { label: "Trả trước", value: "Tối thiểu 60% giá trị máy" },
      { label: "Phí lên hồ sơ", value: "10% khoản vay (trả ngay lúc mua)" },
      { label: "Lãi suất", value: "8%/tháng trên nợ gốc" },
      {
        label: "Ưu đãi tất toán sớm",
        value: "Góp 5 tháng giảm lãi 1 tháng · góp 6 tháng giảm lãi 2 tháng",
      },
    ],
    notes: ["Máy phải update iOS cao nhất."],
  },
  {
    id: "cccd-mira",
    name: "Trả góp qua CCCD — Công ty tài chính MIRA",
    channel: "Chỉ Offline (tại cửa hàng)",
    rows: [
      { label: "Đối tượng", value: "Nam / Nữ từ đủ 18 tuổi" },
      { label: "Trả trước", value: "20% – 40% (trả 40% để có lãi ưu đãi hơn)" },
      { label: "Lãi suất", value: "Theo bảng tính riêng của công ty tài chính" },
    ],
    notes: [
      "Nhân viên nhắn nhóm nội bộ, nhân viên công ty tài chính qua cửa hàng hỗ trợ khách làm hồ sơ.",
    ],
  },
  {
    id: "the-tin-dung",
    name: "Trả góp qua thẻ tín dụng",
    channel: "Online & Offline",
    rows: [
      { label: "Quy trình & lãi suất", value: "Theo biểu phí chuyển đổi của ngân hàng phát hành thẻ" },
    ],
    notes: [],
  },
];
