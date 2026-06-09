import type { Troubleshoot } from "@/types";

export const troubleshooting: Troubleshoot[] = [
  {
    id: "sim-khong-ho-tro",
    issue: 'Hiện "SIM không được hỗ trợ" khi khách update máy hoặc reset dòng 2',
    cause: "Không tháo SIM khi update máy hoặc reset dòng 2.",
    fix: ["Yêu cầu khách tháo SIM ra, active vào, sau đó lắp SIM lại."],
    category: "SIM & Sóng",
  },
  {
    id: "khong-nhan-sim",
    issue: "Máy không nhận SIM, không có sóng",
    fix: [
      "Cách 1: Tắt/bật chế độ máy bay.",
      "Cách 2: Tắt nguồn rồi mở lại máy (khoảng 4–5 lần đối với eSIM).",
      "Cách 3: Cài đặt → Cài đặt chung → Chuyển/Đặt lại iPhone → Đặt lại → Đặt lại cài đặt mạng.",
      "Nếu cả 3 cách không được: yêu cầu khách gửi máy để kiểm tra (bảo hành).",
    ],
    category: "SIM & Sóng",
  },
  {
    id: "cnc-chi-nhan-1-sim",
    issue: "Lắp 2 SIM (máy CNC) nhưng máy chỉ nhận 1 SIM",
    fix: ["Hướng dẫn khách: Cài đặt → Di động → ở cột SIM đang tắt thì bật lên."],
    category: "SIM & Sóng",
  },
  {
    id: "lock-my-nuoc-khac",
    issue: 'Khách hỏi "Máy Lock Mỹ mang sang nước khác có dùng được không?"',
    fix: [
      'Giải thích: máy Lock mạng Mỹ mang sang nước khác vẫn dùng bình thường. Về bản chất, Việt Nam cũng đã là "nước ngoài" so với Mỹ nên không có gì khác biệt.',
    ],
    category: "Tư vấn",
  },
];
