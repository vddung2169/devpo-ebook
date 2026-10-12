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
      "Tùy dòng: 12/12Pro/12ProMax độ EID 1 SIM; 13 độ EID 2 SIM; 13Pro/13ProMax chưa độ được EID (dùng 1 SIM + SIM ghép); dòng > iP14 CNC độ EID dùng 2 SIM. 16E/17E dùng 2 SIM vật lý không cần SIM ghép (chế độ ghép TMSI, không phải EID); 17 Air độ được 1 SIM vật lý ghép TMSI.",
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
      "Là máy doanh nghiệp đã được skip MDM, dùng như máy thường và tặng kèm tool skip miễn phí, bảo hành trọn đời. Lưu ý quan trọng: không được reset dòng 2 (Xóa tất cả nội dung và cài đặt), nếu reset máy sẽ khóa lại. Từ 4/2026 có dạng MDM VAY không skip được bằng tool — phải hỏi rõ khách trước khi nhận skip.",
    category: "Loại máy",
  },
  {
    id: "tra-gop-can-gi",
    question: "Trả góp cần điều kiện gì?",
    answer:
      "Qua iCloud (A Tâm): trả trước tối thiểu 60%, phí lên hồ sơ 10% khoản vay, lãi 8%/tháng, tối đa 6 tháng (máy update iOS cao nhất). Qua CCCD (MIRA/HD Saison): chỉ offline, đủ 18 tuổi, trả trước 10–20%. Qua thẻ tín dụng: theo biểu phí ngân hàng.",
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
      "Offline: Visa 1.5%, Mastercard 1.5%. Online: Visa/Mastercard 2.5%.",
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
  {
    id: "quoc-te-vs-nua-mua",
    question: "Máy Quốc tế và Quốc tế nửa mùa khác nhau thế nào?",
    answer:
      "Quốc tế dùng được SIM của mọi nhà mạng trên toàn thế giới. Quốc tế nửa mùa giống hệt nhưng KHÔNG dùng được SIM của các nhà mạng Mỹ; vẫn dùng SIM Việt Nam và các nước khác bình thường. Cả hai đều hỗ trợ eSIM (với dòng máy hỗ trợ) và giữ áp zin chống nước.",
    category: "Loại máy",
  },
  {
    id: "quoc-te-may-sim",
    question: "Máy Quốc tế dùng được mấy SIM?",
    answer:
      "Từ Xr đến 13 series: 1 SIM vật lý + 1 eSIM. Từ 14 series: bản Quốc tế Mỹ dùng 2 eSIM; bản VNA/KHA/ZPA dùng 1 SIM vật lý + 1 eSIM. Tất cả các dòng bản ZA/A dùng 2 SIM vật lý.",
    category: "SIM & Sóng",
  },
  {
    id: "may-co-kem-hop",
    question: "Mua máy có kèm hộp không?",
    answer:
      "Sản phẩm chủ yếu là thân máy (body) không kèm hộp. Thỉnh thoảng có một số máy có hộp — nhân viên kiểm tra thực tế trước khi báo khách.",
    category: "Loại máy",
  },
  {
    id: "lock-co-esim",
    question: "Máy Lock có dùng được eSIM không?",
    answer:
      "Mặc định máy Lock không dùng được eSIM theo cách thông thường. Tuy nhiên 15 Pro/15 Pro Max và 17 Pro/17 Pro Max có thể độ 2 eSIM mà không cần CNC (giữ được áp zin chống nước). Các dòng còn lại dùng SIM vật lý qua độ EID hoặc SIM ghép.",
    category: "SIM & Sóng",
  },
  {
    id: "sim-ghep-loai-gia",
    question: "SIM ghép giá bao nhiêu?",
    answer:
      "SIM ghép 1 SIM Pronew 5.7 giá 150k, dùng cho tất cả dòng Lock. Cửa hàng có video hướng dẫn cách lắp và kích hoạt gửi cho khách.",
    category: "SIM & Sóng",
  },
  {
    id: "chi-phi-do-eid-cnc",
    question: "Độ EID / CNC độ SIM giá bao nhiêu?",
    answer:
      "Độ EID dòng iP < 14: 500k. Độ lại EID (máy đã CNC): 500k, riêng 16 Pro/Pro Max 800k. Giá CNC tùy dòng, phân biệt khách cửa hàng / khách ngoài: 14/15/15 Plus 800k–1tr; dòng 16 1tr2–1tr5; 15 Pro/Pro Max đồng giá 1tr5; 17 (CNC 2 SIM / 2 eSIM) 1tr2–1tr5; 17 Pro/Pro Max độ 2 eSIM 1tr5–2tr (không cần CNC) hoặc CNC 2 SIM 2tr–2tr5.",
    category: "SIM & Sóng",
  },
  {
    id: "cnc-chi-nhan-1-sim",
    question: "Máy CNC lắp 2 SIM nhưng chỉ nhận 1 SIM, xử lý sao?",
    answer:
      "Hướng dẫn khách vào Cài đặt → Di động → ở cột SIM đang tắt thì bật lên.",
    category: "Sự cố",
  },
  {
    id: "khong-nhan-sim-khong-song",
    question: "Máy không nhận SIM, không có sóng thì làm gì?",
    answer:
      "Thử lần lượt: (1) Tắt/bật chế độ máy bay; (2) Tắt nguồn rồi mở lại (khoảng 4–5 lần với eSIM); (3) Cài đặt → Cài đặt chung → Chuyển/Đặt lại iPhone → Đặt lại → Đặt lại cài đặt mạng. Nếu cả 3 cách không được, yêu cầu khách gửi máy để kiểm tra (bảo hành).",
    category: "Sự cố",
  },
  {
    id: "loi-hotspot-danh-ba-song",
    question: "Máy bị lỗi hotspot, danh bạ hiện +84 hoặc mất sóng, có cách khắc phục không?",
    answer:
      "Có. Cửa hàng có sẵn các video hướng dẫn fix: điểm truy cập cá nhân (hotspot), lỗi danh bạ hiện +84, và lỗi mất sóng/chậm thông báo/không xoay ngang màn hình (máy độ IC). Gửi link video tương ứng cho khách tự thao tác.",
    category: "Sự cố",
  },
  {
    id: "tra-thang-phi-ship",
    question: "Trả thẳng 100% có mất phí ship và phí COD không?",
    answer:
      "Không. Khách chuyển khoản đủ 100% giá trị máy trước khi giao thì được freeship + free phí COD. Book Grab nội thành cửa hàng hỗ trợ tối đa 75k tiền ship. STK nhận tiền: VU DUC DUNG — 19036185756012 — Techcombank.",
    category: "Thanh toán",
  },
  {
    id: "tra-gop-cccd-cong-ty",
    question: "Trả góp qua CCCD có những công ty nào, trả trước bao nhiêu?",
    answer:
      "Có 2 công ty tài chính MIRA và HD Saison, chỉ làm offline tại cửa hàng cho khách từ đủ 18 tuổi. Trả trước tối thiểu 10–20% giá trị máy — trả trước càng nhiều hồ sơ càng dễ duyệt. Lãi suất theo bảng tính riêng của công ty tài chính. Nhân viên nhắn nhóm nội bộ để công ty tài chính qua hỗ trợ làm hồ sơ.",
    category: "Thanh toán",
  },
  {
    id: "bao-hanh-khach-ngoai-o-dau",
    question: "Khách ngoài cần bảo hành / độ SIM thì mang đến đâu?",
    answer:
      "Báo khách qua 1 trong 2 địa chỉ: Tâm Táo — 135 Lê Lợi, P. Hạnh Thông, TP HCM (Nguyễn Đức Tâm 0786789636); Exshop — 95 Thành Mỹ, P8, Tân Bình (A Vương 0869178178).",
    category: "Bảo hành",
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
