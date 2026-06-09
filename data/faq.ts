import type { FaqItem } from "@/types";

export const faqs: FaqItem[] = [
  {
    id: "lock-dung-duoc-khong",
    question: "Máy Lock có dùng được bình thường không?",
    answer:
      "Có. Máy Lock là máy nhà mạng nước ngoài bị khóa mạng, nhưng qua SIM ghép hoặc độ EID/CNC vẫn dùng SIM Việt Nam bình thường. Dòng < iP14 dùng 1 SIM vật lý; dòng > iP14 sau khi CNC độ EID dùng được 2 SIM.",
    category: "Loại máy",
  },
  {
    id: "lock-my-nuoc-khac",
    question: "Máy Lock Mỹ mang sang nước khác có dùng được không?",
    answer:
      'Vẫn dùng bình thường. Về bản chất Việt Nam cũng đã là "nước ngoài" so với Mỹ, nên việc mang sang nước khác không tạo khác biệt.',
    category: "Loại máy",
  },
  {
    id: "may-cnc-chong-nuoc",
    question: "Máy đã CNC/độ EID còn chống nước không?",
    answer:
      "Không còn kháng nước tiêu chuẩn (mất áp zin) do đã can thiệp phần cứng để độ khay SIM. Tuy nhiên máy vẫn đi mưa và sử dụng bình thường. Máy Quốc tế và Lock chưa độ vẫn giữ áp zin.",
    category: "Kỹ thuật",
  },
  {
    id: "lock-dung-may-sim",
    question: "Máy Lock dùng được mấy SIM?",
    answer:
      "Tùy dòng: 12/12Pro/12ProMax độ EID 1 SIM; 13 độ EID 2 SIM; 13Pro/13ProMax & 17 Air chưa độ được EID (dùng 1 SIM + SIM ghép); dòng > iP14 CNC độ EID dùng 2 SIM. 16E hiện phải CNC dùng SIM ghép.",
    category: "SIM & Sóng",
  },
  {
    id: "phu-kien-kem",
    question: "Giá máy đã bao gồm phụ kiện gì?",
    answer:
      'Giá niêm yết đã gồm gói "Full phụ kiện": bộ sạc, ốp lưng, cường lực. Khách bỏ sạc được giảm 100k; bỏ ốp + cường lực giảm 50k; máy SALE bỏ phụ kiện chỉ trừ 100k.',
    category: "Giá & Phụ kiện",
  },
  {
    id: "mdm-an-toan",
    question: "Máy MDM là gì, có an toàn để dùng không?",
    answer:
      "Là máy doanh nghiệp đã được skip MDM, dùng như máy thường và tặng kèm tool skip miễn phí, bảo hành trọn đời. Lưu ý quan trọng: không được reset dòng 2 (Xóa tất cả nội dung và cài đặt), nếu reset máy sẽ khóa lại.",
    category: "Loại máy",
  },
  {
    id: "tra-gop-can-gi",
    question: "Trả góp cần điều kiện gì?",
    answer:
      "Qua iCloud: trả trước 60%, cần chứng minh công việc + thu nhập + CCCD gốc, lãi ~8%/tháng. Qua CCCD (MIRA): chỉ offline, đủ 18 tuổi, trả trước 20–40%. Qua thẻ tín dụng: theo biểu phí ngân hàng.",
    category: "Thanh toán",
  },
  {
    id: "ship-cod-phi",
    question: "Mua online ship COD mất những phí gì?",
    answer:
      "Khách cọc trước tối thiểu 1–2tr (máy > 10tr cọc tối thiểu 2tr), sau đó chịu phí COD 1.5% trên số tiền thu hộ còn lại + tiền ship theo đơn vị vận chuyển (GHTK). Trả thẳng 100% thì freeship + free phí COD.",
    category: "Thanh toán",
  },
  {
    id: "phi-quet-the",
    question: "Quẹt thẻ tín dụng tính phí bao nhiêu?",
    answer:
      "Offline: Visa 1%, Mastercard 1.5%. Online: Visa/Mastercard 2.5%.",
    category: "Thanh toán",
  },
  {
    id: "bao-hanh-goi-nao",
    question: "Có những gói bảo hành nào?",
    answer:
      "Mặc định (free): 1 đổi 1 7 ngày, phần cứng 7 ngày, độ SIM/CNC 3 tháng. Plus (489k): 30 ngày / 3 tháng / 6 tháng. Pro (989k): 60 ngày / 6 tháng / 2 năm.",
    category: "Bảo hành",
  },
  {
    id: "tu-choi-bao-hanh",
    question: "Trường hợp nào bị từ chối bảo hành?",
    answer:
      "Mất/rách tem bảo hành; rơi vỡ, móp méo, cấn; vào nước, ẩm mốc; máy không lên nguồn không rõ nguyên nhân; phụ kiện đứt gãy/vào nước. Điều kiện: còn nguyên tem và không can thiệp vật lý.",
    category: "Bảo hành",
  },
  {
    id: "sim-khong-ho-tro",
    question: 'Khách báo hiện "SIM không được hỗ trợ" sau khi update, xử lý sao?',
    answer:
      "Nguyên nhân thường do không tháo SIM khi update hoặc reset dòng 2. Yêu cầu khách tháo SIM ra, active vào, rồi lắp SIM lại.",
    category: "Sự cố",
  },
];

export const faqCategories = [
  "Loại máy",
  "SIM & Sóng",
  "Kỹ thuật",
  "Giá & Phụ kiện",
  "Thanh toán",
  "Bảo hành",
  "Sự cố",
];
