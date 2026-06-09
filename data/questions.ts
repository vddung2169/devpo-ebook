import type { QuizQuestion } from "@/types";

export const questions: QuizQuestion[] = [
  {
    id: "q1",
    question: "Sản phẩm chủ yếu của cửa hàng DEV PỒ là loại máy nào?",
    options: [
      "Máy Quốc tế",
      "Máy Lock Mỹ",
      "Máy MDM doanh nghiệp",
      "Máy Quốc tế nửa mùa",
    ],
    correctAnswer: 1,
    explanation:
      "Cẩm nang nêu rõ sản phẩm chủ yếu là máy Lock Mỹ, thân máy không kèm hộp.",
    category: "Sản phẩm",
    difficulty: "Dễ",
  },
  {
    id: "q2",
    question: "Máy Lock có đặc điểm nào sau đây?",
    options: [
      "Dùng được mọi SIM toàn thế giới",
      "Là máy nhà mạng nước ngoài bị khóa mạng, không dùng eSIM thông thường",
      "Luôn dùng được 2 eSIM mà không cần can thiệp",
      "Không bao giờ dùng được SIM Việt Nam",
    ],
    correctAnswer: 1,
    explanation:
      "Máy Lock là máy nhà mạng nước ngoài bị khóa mạng, không dùng eSIM; cần SIM ghép hoặc độ EID/CNC để dùng SIM.",
    category: "Loại máy",
    difficulty: "Dễ",
  },
  {
    id: "q3",
    question: "iPhone 13 (bản Lock) độ EID được mấy SIM vật lý?",
    options: ["Không độ được", "1 SIM", "2 SIM", "3 SIM"],
    correctAnswer: 2,
    explanation:
      "Theo cẩm nang, iPhone 13 độ được EID 2 SIM vật lý; còn 13 Pro/Pro Max thì chưa độ được.",
    category: "SIM & Sóng",
    difficulty: "Trung bình",
  },
  {
    id: "q4",
    question: "Máy đã CNC độ EID còn khả năng chống nước tiêu chuẩn không?",
    options: [
      "Còn nguyên áp zin",
      "Mất áp zin, nhưng vẫn đi mưa/dùng bình thường",
      "Tốt hơn máy zin",
      "Không dùng được khi trời mưa",
    ],
    correctAnswer: 1,
    explanation:
      "CNC để độ khay SIM làm mất áp zin (mất kháng nước tiêu chuẩn), nhưng máy vẫn đi mưa và dùng bình thường.",
    category: "Kỹ thuật",
    difficulty: "Trung bình",
  },
  {
    id: "q5",
    question:
      'Giá niêm yết trên web đã bao gồm gói "Full phụ kiện" gồm những gì?',
    options: [
      "Sạc + tai nghe + ốp",
      "Bộ sạc + ốp lưng + cường lực",
      "Ốp lưng + cường lực + bao da",
      "Sạc + cáp + củ sạc nhanh",
    ],
    correctAnswer: 1,
    explanation: 'Gói "Full phụ kiện" gồm bộ sạc, ốp lưng và cường lực.',
    category: "Giá & Phụ kiện",
    difficulty: "Dễ",
  },
  {
    id: "q6",
    question: "Khách không lấy bộ sạc thì được giảm bao nhiêu?",
    options: ["-50k", "-100k", "-150k", "Không giảm"],
    correctAnswer: 1,
    explanation:
      "Không lấy bộ sạc giảm 100k; không lấy ốp + cường lực giảm 50k.",
    category: "Giá & Phụ kiện",
    difficulty: "Dễ",
  },
  {
    id: "q7",
    question: "Với Ship COD, phí COD được tính như thế nào?",
    options: [
      "1.5% trên tổng giá máy",
      "1.5% trên số tiền thu hộ (phần còn lại sau cọc)",
      "2.5% trên số tiền thu hộ",
      "Cố định 50k mỗi đơn",
    ],
    correctAnswer: 1,
    explanation:
      "Phí COD là 1.5% trên số tiền thu hộ — tức phần còn lại sau khi trừ cọc; cộng thêm tiền ship.",
    category: "Thanh toán",
    difficulty: "Khó",
  },
  {
    id: "q8",
    question:
      "Phí quẹt thẻ Visa khi thanh toán Offline tại cửa hàng là bao nhiêu?",
    options: ["1%", "1.5%", "2.5%", "Miễn phí"],
    correctAnswer: 1,
    explanation: "Offline: Visa 1.5%, Mastercard 1.5%. Online cả hai đều 2.5%.",
    category: "Thanh toán",
    difficulty: "Trung bình",
  },
  {
    id: "q9",
    question: "Gói bảo hành PRO (989k) có thời hạn 1 đổi 1 là bao lâu?",
    options: ["7 ngày", "30 ngày", "60 ngày", "6 tháng"],
    correctAnswer: 2,
    explanation:
      "Gói PRO: 1 đổi 1 60 ngày, phần cứng 6 tháng, độ SIM/CNC 2 năm.",
    category: "Bảo hành",
    difficulty: "Trung bình",
  },
  {
    id: "q10",
    question: "Trường hợp nào KHÔNG bị từ chối bảo hành?",
    options: [
      "Máy bị vào nước, ẩm mốc",
      "Máy còn nguyên tem, không can thiệp vật lý",
      "Máy bị rách tem bảo hành",
      "Máy bị móp méo, rơi vỡ",
    ],
    correctAnswer: 1,
    explanation:
      "Điều kiện bảo hành: máy còn nguyên tem và không bị can thiệp vật lý. Các trường hợp còn lại đều bị từ chối.",
    category: "Bảo hành",
    difficulty: "Trung bình",
  },
  {
    id: "q11",
    question: "Với máy MDM, nhân viên cần dặn khách điều gì quan trọng nhất?",
    options: [
      "Phải cập nhật iOS mỗi tuần",
      "Không được reset dòng 2 (Xóa tất cả nội dung và cài đặt)",
      "Không được dùng SIM Việt Nam",
      "Phải sạc đủ 100% trước khi dùng",
    ],
    correctAnswer: 1,
    explanation:
      "Máy MDM nếu reset dòng 2 sẽ bị khóa lại và yêu cầu tài khoản MDM để kích hoạt. Tặng kèm tool skip MDM, bảo hành trọn đời.",
    category: "Loại máy",
    difficulty: "Khó",
  },
  {
    id: "q12",
    question:
      'Khách báo "SIM không được hỗ trợ" sau khi update máy. Cách xử lý đúng là gì?',
    options: [
      "Yêu cầu khách mang máy đi sửa ngay",
      "Yêu cầu khách tháo SIM, active vào rồi lắp SIM lại",
      "Hướng dẫn reset dòng 2",
      "Bảo khách đổi nhà mạng",
    ],
    correctAnswer: 1,
    explanation:
      "Lỗi thường do không tháo SIM khi update/reset dòng 2. Xử lý: tháo SIM, active vào, rồi lắp lại SIM.",
    category: "Sự cố",
    difficulty: "Trung bình",
  },
  {
    id: "q13",
    question:
      "Theo trang phân loại của cẩm nang, iPhone 12 / 12 Pro / 12 Pro Max (bản Lock) độ EID được mấy SIM vật lý?",
    options: ["Không độ được", "1 SIM", "2 SIM", "3 SIM"],
    correctAnswer: 1,
    explanation:
      "Trang phân loại ghi 12/12Pro/12ProMax độ EID 1 SIM. Lưu ý: bảng chi phí lại ghi 12/13 độ được 2 SIM — cần xác nhận lại khi tư vấn.",
    category: "SIM & Sóng",
    difficulty: "Khó",
  },
  {
    id: "q14",
    question: "iPhone 16E (bản Lock) hiện đang dùng SIM theo cách nào?",
    options: [
      "Độ EID 2 SIM như dòng 16 thường",
      "Đang phải CNC để dùng SIM ghép",
      "Hỗ trợ 2 eSIM không cần can thiệp",
      "Không dùng được SIM nào",
    ],
    correctAnswer: 1,
    explanation:
      "Khác với dòng 16 thường, 16E hiện đang phải CNC để dùng SIM ghép (ghép đôi DB 250k).",
    category: "SIM & Sóng",
    difficulty: "Khó",
  },
  {
    id: "q15",
    question: "Dòng máy nào sau đây CHƯA độ được EID?",
    options: [
      "iPhone 13",
      "iPhone 13 Pro / 13 Pro Max và 17 Air",
      "iPhone 15 Pro / 15 Pro Max",
      "iPhone 14 / 14 Plus",
    ],
    correctAnswer: 1,
    explanation:
      "Cẩm nang nêu 13 Pro/13 Pro Max và 17 Air chưa độ được EID — dùng 1 SIM vật lý kèm SIM ghép.",
    category: "SIM & Sóng",
    difficulty: "Khó",
  },
  {
    id: "q16",
    question:
      "Chi phí độ EID cơ bản cho dòng iP < 14 là bao nhiêu (riêng 16 Pro/Pro Max khác)?",
    options: ["300k", "500k", "800k", "1tr5"],
    correctAnswer: 1,
    explanation: "Độ EID cơ bản 500k. Riêng 16 Pro/Pro Max độ lại EID là 800k.",
    category: "SIM & Sóng",
    difficulty: "Trung bình",
  },
  {
    id: "q17",
    question: "SIM ghép Pronew 5.7 (1 SIM) có giá bao nhiêu?",
    options: ["100k", "150k", "250k", "500k"],
    correctAnswer: 1,
    explanation:
      "SIM ghép Pronew 5.7 (1 SIM) giá 150k, áp dụng cho mọi dòng Lock. SIM ghép đôi DB là 250k.",
    category: "SIM & Sóng",
    difficulty: "Trung bình",
  },
  {
    id: "q18",
    question: "SIM ghép đôi DB (250k) áp dụng cho dòng máy nào?",
    options: [
      "Mọi dòng Lock",
      "Chỉ dòng 12 và 13",
      "Máy từ iP 14 trở lên",
      "Chỉ dòng Pro Max",
    ],
    correctAnswer: 2,
    explanation:
      "SIM ghép đôi DB (250k) dùng cho máy từ 14 trở lên; còn SIM ghép Pronew 5.7 (150k) dùng cho mọi dòng Lock.",
    category: "SIM & Sóng",
    difficulty: "Trung bình",
  },
  {
    id: "q19",
    question: 'Máy "Quốc tế nửa mùa" khác máy Quốc tế ở điểm nào?',
    options: [
      "Không dùng được eSIM",
      "Không dùng được SIM của các nhà mạng Mỹ",
      "Bị khóa mạng hoàn toàn",
      "Không kháng nước",
    ],
    correctAnswer: 1,
    explanation:
      "Quốc tế nửa mùa dùng được mọi SIM trên thế giới NGOẠI TRỪ các nhà mạng của Mỹ; các điểm khác như máy Quốc tế.",
    category: "Loại máy",
    difficulty: "Trung bình",
  },
  {
    id: "q20",
    question:
      "Với iPhone 17 Pro / 17 Pro Max, nên ưu tiên tư vấn phương án nào để máy giữ được khả năng kháng nước?",
    options: [
      "CNC 2 SIM vật lý",
      "Độ 2 eSIM (không cần CNC)",
      "Dùng SIM ghép đôi",
      "Không độ gì cả",
    ],
    correctAnswer: 1,
    explanation:
      "Độ 2 eSIM không cần CNC nên giữ được kháng nước — ưu tiên tư vấn. CNC 2 SIM vật lý làm mất áp zin và chi phí cao hơn.",
    category: "SIM & Sóng",
    difficulty: "Khó",
  },
  {
    id: "q21",
    question:
      "Máy Quốc tế và máy Lock chưa độ EID có còn giữ áp zin (kháng nước) không?",
    options: [
      "Không, đều mất áp zin",
      "Có, vẫn giữ áp zin vì chưa can thiệp phần cứng",
      "Chỉ máy Quốc tế mới giữ",
      "Tùy màu máy",
    ],
    correctAnswer: 1,
    explanation:
      "Máy Quốc tế và Lock chưa độ EID giữ áp zin. Chỉ khi CNC/độ EID mới mất áp zin (nhưng vẫn đi mưa bình thường).",
    category: "Kỹ thuật",
    difficulty: "Trung bình",
  },
  {
    id: "q22",
    question: "Hình thức Trả thẳng 100% có ưu đãi gì về vận chuyển?",
    options: [
      "Tính phí ship như bình thường",
      "Freeship + free phí COD (Grab nội thành hỗ trợ 50k)",
      "Chỉ freeship nội thành",
      "Giảm 100k tiền máy",
    ],
    correctAnswer: 1,
    explanation:
      "Trả thẳng 100%: freeship + free phí COD; nếu book Grab nội thành thì hỗ trợ 50k tiền ship.",
    category: "Thanh toán",
    difficulty: "Dễ",
  },
  {
    id: "q23",
    question:
      "Với Ship COD, máy trên 10tr thì khách cần cọc tối thiểu bao nhiêu?",
    options: ["1tr", "2tr", "Không cần cọc", "50% giá máy"],
    correctAnswer: 1,
    explanation:
      "Ship COD: cọc tối thiểu 1–2tr; riêng máy > 10tr phải cọc tối thiểu 2tr.",
    category: "Thanh toán",
    difficulty: "Trung bình",
  },
  {
    id: "q24",
    question:
      "Phí quẹt thẻ Visa/Mastercard khi thanh toán Online là bao nhiêu?",
    options: ["1%", "1.5%", "2.5%", "Miễn phí"],
    correctAnswer: 2,
    explanation:
      "Online: Visa và Mastercard đều 2.5%. Offline thì Visa 1.5%, Mastercard 1.5%.",
    category: "Thanh toán",
    difficulty: "Trung bình",
  },
  {
    id: "q25",
    question:
      "Trả góp qua iCloud (TC Apple / A Tâm) yêu cầu khách trả trước bao nhiêu?",
    options: ["20%", "40%", "60% giá trị máy", "100%"],
    correctAnswer: 2,
    explanation:
      "Trả góp qua iCloud yêu cầu trả trước khoảng 60% giá trị máy, lãi ~8%/tháng trên nợ gốc.",
    category: "Thanh toán",
    difficulty: "Trung bình",
  },
  {
    id: "q26",
    question:
      "Trả góp iCloud qua A TÂM: nếu khách góp đủ 6 tháng thì được ưu đãi gì?",
    options: [
      "Giảm lãi 1 tháng",
      "Giảm lãi 2 tháng",
      "Miễn toàn bộ lãi",
      "Tặng phụ kiện",
    ],
    correctAnswer: 1,
    explanation:
      "A TÂM: góp 5 tháng giảm lãi 1 tháng, góp 6 tháng giảm lãi 2 tháng. Có phí lên hồ sơ 10% trả ngay lúc mua.",
    category: "Thanh toán",
    difficulty: "Khó",
  },
  {
    id: "q27",
    question: "Trả góp qua CCCD (công ty tài chính MIRA) có đặc điểm nào?",
    options: [
      "Làm được cả online lẫn offline",
      "Chỉ offline tại cửa hàng, khách từ đủ 18 tuổi, trả trước 20–40%",
      "Không cần trả trước",
      "Chỉ dành cho khách trên 25 tuổi",
    ],
    correctAnswer: 1,
    explanation:
      "MIRA chỉ làm offline tại cửa hàng, khách nam/nữ từ đủ 18 tuổi, trả trước 20–40% (trả 40% lãi ưu đãi hơn).",
    category: "Thanh toán",
    difficulty: "Khó",
  },
  {
    id: "q28",
    question:
      "Gói bảo hành MẶC ĐỊNH (free) bảo hành phần độ SIM/CNC trong bao lâu?",
    options: ["7 ngày", "30 ngày", "3 tháng", "6 tháng"],
    correctAnswer: 2,
    explanation:
      "Gói Mặc định (free): 1 đổi 1 7 ngày, phần cứng 7 ngày, độ SIM/CNC 3 tháng.",
    category: "Bảo hành",
    difficulty: "Trung bình",
  },
  {
    id: "q29",
    question: "Gói bảo hành PLUS có giá bao nhiêu?",
    options: ["Free", "489.000đ", "989.000đ", "1.489.000đ"],
    correctAnswer: 1,
    explanation:
      "Gói PLUS 489k: 1 đổi 1 30 ngày, phần cứng 3 tháng, độ SIM/CNC 6 tháng.",
    category: "Bảo hành",
    difficulty: "Dễ",
  },
  {
    id: "q30",
    question:
      "Máy CNC lắp 2 SIM nhưng chỉ nhận 1 SIM. Hướng dẫn khách xử lý thế nào?",
    options: [
      "Khởi động lại 4–5 lần",
      "Cài đặt → Di động → bật SIM đang bị tắt",
      "Đặt lại cài đặt mạng",
      "Tháo SIM rồi active lại",
    ],
    correctAnswer: 1,
    explanation:
      "Vào Cài đặt → Di động, ở cột SIM đang tắt thì bật lên là máy nhận đủ 2 SIM.",
    category: "Sự cố",
    difficulty: "Trung bình",
  },
];
