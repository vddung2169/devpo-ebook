import type { QuizQuestion } from "@/types";

// Bộ đề số 2 — 30 câu hỏi mới, không trùng với bộ gốc (data/questions.ts).
// Dùng cho route /quiz-new.
export const questionsNew: QuizQuestion[] = [
  {
    id: "nq1",
    question: "Sản phẩm bán ra tại DEV PỒ chủ yếu ở dạng nào?",
    options: [
      "Fullbox nguyên seal",
      "Thân máy (body) không kèm hộp — thỉnh thoảng mới có máy kèm hộp",
      "Luôn kèm hộp và phụ kiện zin theo máy",
      "Chỉ bán máy trưng bày",
    ],
    correctAnswer: 1,
    explanation:
      "Cẩm nang nêu rõ: sản phẩm chủ yếu là thân máy (body) không kèm hộp; thỉnh thoảng có một số máy có hộp — nhân viên kiểm tra thực tế trước khi báo khách.",
    category: "Sản phẩm",
    difficulty: "Dễ",
  },
  {
    id: "nq2",
    question: "Máy Quốc tế nửa mùa có dùng được eSIM không?",
    options: [
      "Không dùng được eSIM nào",
      "Chỉ dùng được eSIM Mỹ",
      "Dùng được eSIM với dòng máy hỗ trợ, NGOẠI TRỪ eSIM của nhà mạng Mỹ",
      "Chỉ dùng được eSIM Việt Nam",
    ],
    correctAnswer: 2,
    explanation:
      "Quốc tế nửa mùa dùng được eSIM cho các dòng máy hỗ trợ, nhưng không dùng được eSIM (và SIM) của các nhà mạng Mỹ.",
    category: "Loại máy",
    difficulty: "Trung bình",
  },
  {
    id: "nq3",
    question:
      "Trong phần Cài đặt của máy Quốc tế nửa mùa, trạng thái SIM hiển thị thế nào?",
    options: [
      "Báo SIM bị khóa — nhưng bản chất vẫn là máy quốc tế",
      "Báo máy Quốc tế bình thường",
      "Không hiển thị gì",
      "Báo lỗi kích hoạt",
    ],
    correctAnswer: 0,
    explanation:
      "Trong Cài đặt máy vẫn báo SIM bị khóa, nhưng bản chất nó là máy quốc tế (chỉ không dùng được SIM nhà mạng Mỹ).",
    category: "Loại máy",
    difficulty: "Khó",
  },
  {
    id: "nq4",
    question:
      'Khách hỏi: "Máy Lock Mỹ mang sang nước khác có dùng được không?" — trả lời đúng là gì?',
    options: [
      "Không dùng được, chỉ dùng ở Việt Nam",
      "Phải độ lại EID mới dùng được ở nước khác",
      'Vẫn dùng bình thường — Việt Nam cũng đã là "nước ngoài" so với Mỹ nên không có gì khác biệt',
      "Chỉ dùng được ở các nước Đông Nam Á",
    ],
    correctAnswer: 2,
    explanation:
      'Máy Lock mạng Mỹ mang sang nước khác vẫn dùng bình thường. Về bản chất, Việt Nam cũng đã là "nước ngoài" so với Mỹ nên không có gì khác biệt.',
    category: "Tư vấn",
    difficulty: "Trung bình",
  },
  {
    id: "nq5",
    question: "Máy Quốc tế bản ZA/A (mọi dòng) dùng SIM theo cách nào?",
    options: [
      "1 SIM vật lý + 1 eSIM",
      "2 eSIM",
      "Chỉ 1 SIM vật lý",
      "2 SIM vật lý",
    ],
    correctAnswer: 3,
    explanation:
      "Tất cả các dòng bản ZA/A dùng 2 SIM vật lý. (Bản Quốc tế Mỹ từ 14 series: 2 eSIM; bản VNA/KHA/ZPA: 1 SIM vật lý + 1 eSIM.)",
    category: "Loại máy",
    difficulty: "Trung bình",
  },
  {
    id: "nq6",
    question:
      "Máy Quốc tế bản VNA / KHA / ZPA từ 14 series trở lên dùng SIM theo cách nào?",
    options: [
      "1 SIM vật lý + 1 eSIM",
      "2 eSIM",
      "2 SIM vật lý",
      "Chỉ 1 eSIM",
    ],
    correctAnswer: 0,
    explanation:
      "Từ 14 series: bản Quốc tế Mỹ dùng 2 eSIM, còn bản VNA / KHA / ZPA dùng 1 SIM vật lý + 1 eSIM.",
    category: "Loại máy",
    difficulty: "Khó",
  },
  {
    id: "nq7",
    question:
      "Máy Quốc tế từ Xr đến 13 series dùng SIM theo cách nào?",
    options: [
      "2 SIM vật lý",
      "1 SIM vật lý + 1 eSIM",
      "2 eSIM",
      "Chỉ 1 SIM vật lý",
    ],
    correctAnswer: 1,
    explanation:
      "Từ Xr đến 13 series, máy Quốc tế dùng 1 SIM vật lý + 1 eSIM.",
    category: "SIM & Sóng",
    difficulty: "Trung bình",
  },
  {
    id: "nq8",
    question: "iPhone 17 Air (bản Lock) hiện độ SIM được đến mức nào?",
    options: [
      "Độ EID 2 SIM vật lý",
      "Độ 2 eSIM không cần CNC",
      "Chưa độ được EID — chỉ độ được 1 SIM vật lý ghép chế độ TMSI",
      "Không dùng được SIM nào",
    ],
    correctAnswer: 2,
    explanation:
      "17 Air chưa độ được EID; chỉ độ được 1 SIM vật lý ghép chế độ TMSI (bản chất vẫn là ghép, không phải EID).",
    category: "SIM & Sóng",
    difficulty: "Khó",
  },
  {
    id: "nq9",
    question:
      "Máy 16 Pro / 16 Pro Max đã CNC nhưng chưa độ EID — chi phí độ lại EID là bao nhiêu?",
    options: ["500k", "800k", "1tr2", "1tr5"],
    correctAnswer: 1,
    explanation:
      "CNC + độ lại EID bình thường là 500k, nhưng riêng 16 Pro / 16 Pro Max là 800k.",
    category: "SIM & Sóng",
    difficulty: "Khó",
  },
  {
    id: "nq10",
    question:
      "CNC độ SIM cho dòng 16 series: giá cho khách cửa hàng / khách ngoài lần lượt là bao nhiêu?",
    options: [
      "800k / 1tr",
      "1tr / 1tr2",
      "1tr2 / 1tr5",
      "1tr5 / 2tr",
    ],
    correctAnswer: 2,
    explanation:
      "Dòng 16 series: khách cửa hàng 1tr2, khách ngoài 1tr5. (14/15/15 Plus là 800k / 1tr.)",
    category: "SIM & Sóng",
    difficulty: "Khó",
  },
  {
    id: "nq11",
    question:
      "CNC độ SIM cho iPhone 14 / 15 / 15 Plus, khách cửa hàng trả bao nhiêu?",
    options: ["500k", "800k", "1tr", "1tr2"],
    correctAnswer: 1,
    explanation:
      "14 / 15 / 15 Plus: khách cửa hàng 800k, khách ngoài 1tr.",
    category: "SIM & Sóng",
    difficulty: "Trung bình",
  },
  {
    id: "nq12",
    question: "Chính sách độ SIM cho 15 Pro / 15 Pro Max có gì đặc biệt?",
    options: [
      "Chỉ độ được 1 SIM vật lý",
      "Đồng giá 1tr5 — chọn CNC 2 SIM vật lý hoặc độ 2 eSIM không cần CNC",
      "Bắt buộc phải CNC mới dùng được SIM",
      "Khách ngoài không được độ",
    ],
    correctAnswer: 1,
    explanation:
      "15 Pro / 15 Pro Max đồng giá 1tr5, khách chọn CNC 2 SIM vật lý hoặc độ 2 eSIM không cần CNC (giữ áp zin).",
    category: "SIM & Sóng",
    difficulty: "Khó",
  },
  {
    id: "nq13",
    question:
      "17 Pro / 17 Pro Max — CNC 2 SIM vật lý cho khách ngoài giá bao nhiêu?",
    options: ["1tr5", "2tr", "2tr5", "3tr"],
    correctAnswer: 2,
    explanation:
      "17 Pro / 17 Pro Max CNC 2 SIM: khách cửa hàng 2tr, khách ngoài 2tr5. (Độ 2 eSIM không cần CNC: 1tr5 / 2tr.)",
    category: "SIM & Sóng",
    difficulty: "Khó",
  },
  {
    id: "nq14",
    question:
      "Những dòng Lock nào độ được 2 eSIM mà KHÔNG cần CNC (giữ được áp zin)?",
    options: [
      "13 Pro / 13 Pro Max",
      "16E / 17E",
      "14 / 15 / 15 Plus",
      "15 Pro / 15 Pro Max và 17 Pro / 17 Pro Max",
    ],
    correctAnswer: 3,
    explanation:
      "15 Pro/15 Pro Max và 17 Pro/17 Pro Max độ được 2 eSIM không cần CNC nên giữ được áp zin chống nước.",
    category: "SIM & Sóng",
    difficulty: "Trung bình",
  },
  {
    id: "nq15",
    question: "Máy SALE nếu khách không lấy phụ kiện thì trừ bao nhiêu?",
    options: ["Chỉ trừ 100k", "Trừ 150k", "Trừ 50k", "Không được trừ"],
    correctAnswer: 0,
    explanation:
      "Máy SALE không lấy phụ kiện chỉ trừ 100k (máy thường: bỏ sạc -100k, bỏ ốp + cường lực -50k).",
    category: "Giá & Phụ kiện",
    difficulty: "Trung bình",
  },
  {
    id: "nq16",
    question:
      "Tài khoản nhận chuyển khoản của cửa hàng là tài khoản nào?",
    options: [
      "VU DUC DUNG — Vietcombank",
      "VU DUC DUNG — 19036185756012 — Techcombank",
      "DEV PO — 19036185756012 — ACB",
      "VU DUC DUNG — 19036185756012 — MB Bank",
    ],
    correctAnswer: 1,
    explanation:
      "Tài khoản thụ hưởng: VU DUC DUNG — STK 19036185756012 — Techcombank.",
    category: "Thanh toán",
    difficulty: "Dễ",
  },
  {
    id: "nq17",
    question: "Ship COD, cửa hàng gửi máy qua đơn vị vận chuyển nào?",
    options: ["Viettel Post", "GHN", "GHTK", "J&T Express"],
    correctAnswer: 2,
    explanation: "Cửa hàng gửi máy Ship COD qua đơn vị vận chuyển GHTK.",
    category: "Thanh toán",
    difficulty: "Dễ",
  },
  {
    id: "nq18",
    question:
      "Máy 11tr, khách cọc 2tr và chọn Ship COD. Phí COD được tính trên số tiền nào?",
    options: [
      "Trên 11tr (tổng giá máy)",
      "Trên 2tr (tiền cọc)",
      "Trên 9tr (số tiền thu hộ còn lại) — phí = 1.5% × 9tr + tiền ship",
      "Không tính phí vì đã cọc",
    ],
    correctAnswer: 2,
    explanation:
      "Phí COD 1.5% tính trên số tiền thu hộ (phần còn lại sau cọc): máy 11tr cọc 2tr → thu hộ 9tr → phí = (1.5% × 9tr) + phí ship.",
    category: "Thanh toán",
    difficulty: "Khó",
  },
  {
    id: "nq19",
    question:
      "Trả góp qua iCloud (A Tâm): thời gian vay tối đa và điều kiện máy là gì?",
    options: [
      "Tối đa 12 tháng, máy nào cũng được",
      "Tối đa 6 tháng cho mọi loại máy — máy phải update iOS cao nhất",
      "Tối đa 3 tháng, chỉ máy Quốc tế",
      "Tối đa 6 tháng, chỉ máy Lock",
    ],
    correctAnswer: 1,
    explanation:
      "Trả góp qua iCloud: thời gian vay tối đa 6 tháng cho mọi loại máy, máy phải update iOS cao nhất.",
    category: "Thanh toán",
    difficulty: "Trung bình",
  },
  {
    id: "nq20",
    question:
      "Trả góp qua iCloud (A Tâm), phí lên hồ sơ được thu như thế nào?",
    options: [
      "10% khoản vay — trả ngay lúc mua",
      "10% giá máy — trừ vào kỳ cuối",
      "5% khoản vay — chia đều các tháng",
      "Miễn phí lên hồ sơ",
    ],
    correctAnswer: 0,
    explanation:
      "Phí lên hồ sơ là 10% khoản vay, khách trả ngay lúc mua. Lãi suất 8%/tháng trên nợ gốc.",
    category: "Thanh toán",
    difficulty: "Khó",
  },
  {
    id: "nq21",
    question:
      "Trả góp qua iCloud: khách tất toán sớm trong tháng đầu, gói góp 6 tháng được ưu đãi gì?",
    options: [
      "Giảm lãi 1 tháng",
      "Giảm lãi 2 tháng",
      "Miễn toàn bộ lãi",
      "Không có ưu đãi",
    ],
    correctAnswer: 1,
    explanation:
      "Tất toán sớm trong tháng đầu: gói góp 5 tháng giảm lãi 1 tháng, gói góp 6 tháng giảm lãi 2 tháng.",
    category: "Thanh toán",
    difficulty: "Khó",
  },
  {
    id: "nq22",
    question: "Trả góp qua thẻ tín dụng áp dụng lãi suất như thế nào?",
    options: [
      "8%/tháng trên nợ gốc",
      "1.5% cố định",
      "Theo quy định và biểu phí chuyển đổi của ngân hàng phát hành thẻ",
      "Miễn lãi 100%",
    ],
    correctAnswer: 2,
    explanation:
      "Trả góp qua thẻ tín dụng (online & offline): quy trình và lãi suất theo quy định, biểu phí chuyển đổi của ngân hàng phát hành thẻ.",
    category: "Thanh toán",
    difficulty: "Dễ",
  },
  {
    id: "nq23",
    question: "Gói bảo hành PLUS (489k) bảo hành phần cứng trong bao lâu?",
    options: ["7 ngày", "30 ngày", "3 tháng", "6 tháng"],
    correctAnswer: 2,
    explanation:
      "Gói PLUS: 1 đổi 1 30 ngày, phần cứng 3 tháng, độ SIM/CNC 6 tháng.",
    category: "Bảo hành",
    difficulty: "Trung bình",
  },
  {
    id: "nq24",
    question:
      "Gói bảo hành PRO (989k) bảo hành phần độ SIM/CNC trong bao lâu?",
    options: ["3 tháng", "6 tháng", "1 năm", "2 năm"],
    correctAnswer: 3,
    explanation:
      "Gói PRO: 1 đổi 1 60 ngày, phần cứng 6 tháng, độ SIM/CNC 2 năm.",
    category: "Bảo hành",
    difficulty: "Trung bình",
  },
  {
    id: "nq25",
    question:
      "Trường hợp nào sau đây CŨNG bị từ chối bảo hành (ngoài rơi vỡ, vào nước, rách tem)?",
    options: [
      "Máy trầy nhẹ vỏ ngoài",
      "Máy không lên nguồn không rõ nguyên nhân; phụ kiện (sạc, cáp) bị đứt gãy, vào nước",
      "Máy hết pin",
      "Máy chưa update iOS",
    ],
    correctAnswer: 1,
    explanation:
      "Danh sách từ chối bảo hành gồm: mất/rách tem; rơi vỡ, móp méo, cấn; vào nước, ẩm mốc; máy không lên nguồn không rõ nguyên nhân (cần kiểm tra); phụ kiện đứt gãy, vào nước.",
    category: "Bảo hành",
    difficulty: "Trung bình",
  },
  {
    id: "nq26",
    question:
      "Khách NGOÀI cần bảo hành / độ SIM, có thể qua địa chỉ nào sau đây?",
    options: [
      "Tâm Táo — 135 Lê Lợi, P. Hạnh Thông, TP HCM (A Tâm)",
      "Bất kỳ trung tâm Apple Store chính hãng nào",
      "Exshop — quận 7",
      "Chỉ được về đúng cửa hàng DEV PỒ",
    ],
    correctAnswer: 0,
    explanation:
      "2 địa chỉ bảo hành/CNC cho khách ngoài: Tâm Táo (135 Lê Lợi, P. Hạnh Thông, TP HCM — Nguyễn Đức Tâm 0786789636), Exshop (95 Thành Mỹ, P8, Tân Bình — A Vương 0869178178).",
    category: "Bảo hành",
    difficulty: "Khó",
  },
  {
    id: "nq27",
    question:
      "Máy không nhận SIM, không có sóng — thứ tự xử lý đúng theo cẩm nang là gì?",
    options: [
      "Đặt lại cài đặt mạng ngay lập tức",
      "Tắt/bật chế độ máy bay → tắt nguồn mở lại (4–5 lần với eSIM) → đặt lại cài đặt mạng → không được thì gửi máy kiểm tra",
      "Reset dòng 2 rồi active lại",
      "Tháo SIM ra lắp máy khác",
    ],
    correctAnswer: 1,
    explanation:
      "Thứ tự: (1) tắt/bật chế độ máy bay; (2) tắt nguồn mở lại — khoảng 4–5 lần với eSIM; (3) Cài đặt → Cài đặt chung → Chuyển/Đặt lại iPhone → Đặt lại → Đặt lại cài đặt mạng. Cả 3 không được thì yêu cầu khách gửi máy kiểm tra (bảo hành).",
    category: "Sự cố",
    difficulty: "Trung bình",
  },
  {
    id: "nq28",
    question:
      "Quy trình OFFLINE — bước ghi hóa đơn (B3) quy định thế nào về bill?",
    options: [
      "Ghi 1 bill duy nhất, khách giữ",
      "Ghi 2 bill: shop giữ bill khách ký, gửi lại bill đóng dấu cho khách",
      "Chỉ cần xuất đơn trên web, không cần bill giấy",
      "Bill chỉ cần với đơn trên 10tr",
    ],
    correctAnswer: 1,
    explanation:
      "Ghi 2 bill (tên khách, SĐT, gói bảo hành, sản phẩm, phụ kiện, giá); xác nhận thông tin trước khi khách ký — shop giữ bill ký, gửi lại bill đóng dấu cho khách.",
    category: "Quy trình",
    difficulty: "Trung bình",
  },
  {
    id: "nq29",
    question:
      "Quy trình gửi đơn (OFFLINE): trước khi gói hàng nhân viên phải làm gì?",
    options: [
      "Gọi điện xác nhận với khách",
      "Chụp tổng sản phẩm: ảnh IMEI máy và phụ kiện — sau khi gói chụp ảnh đơn, gửi vào Telegram",
      "Chỉ cần cân đơn hàng",
      "Quay video bóc đơn hàng",
    ],
    correctAnswer: 1,
    explanation:
      "Gửi đơn: B1 chụp tổng sản phẩm trước khi gói (ảnh IMEI máy, phụ kiện) → B2 chụp ảnh đơn sau khi gói → B3 gửi ảnh vào Telegram kèm mã đơn/phiếu gửi hàng. (Quay video bóc đơn là quy trình NHẬN đơn.)",
    category: "Quy trình",
    difficulty: "Trung bình",
  },
  {
    id: "nq30",
    question:
      "Form check máy khách (bán ONLINE) gửi vào Telegram cần những thông tin nào?",
    options: [
      "Chỉ cần tên máy và giá",
      "Tên khách; tên máy + (Lock/QTE) + màu + IMEI; dung lượng + pin + tình trạng máy + CNC (EID/SIM ghép); kèm ảnh máy nếu có",
      "Chỉ cần IMEI và số điện thoại khách",
      "Họ tên + địa chỉ giao hàng",
    ],
    correctAnswer: 1,
    explanation:
      "Form check máy khách gồm: tên khách; tên máy + (Lock/QTE) + màu + IMEI; dung lượng + pin + tình trạng máy + CNC (EID / SIM ghép); kèm ảnh máy nếu có.",
    category: "Quy trình",
    difficulty: "Khó",
  },
];
