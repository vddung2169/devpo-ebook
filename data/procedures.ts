import type { Procedure } from "@/types";

export const procedures: Procedure[] = [
  {
    id: "offline",
    name: "Quy trình OFFLINE",
    channel: "Bán hàng tại cửa hàng",
    sections: [
      {
        title: "4.1.1 Chốt đơn",
        steps: [
          {
            code: "B1",
            title: "Tiếp nhận & tư vấn khách hàng",
            points: [
              "Hỏi nhu cầu (model, dung lượng, màu, ngân sách).",
              "Giới thiệu sản phẩm phù hợp + gói bảo hành (Plus, Pro).",
              "Cho khách kiểm tra máy, test chức năng cơ bản.",
              "Xác nhận đồng ý mua và chốt giá cuối cùng.",
            ],
          },
          {
            code: "B2",
            title: "Chuẩn bị hàng",
            points: [
              "Lấy máy + phụ kiện theo đúng mã.",
              "Dán cường lực, tem bảo hành (đúng vị trí quy định).",
            ],
          },
          {
            code: "B3",
            title: "Ghi hóa đơn / bill",
            points: [
              "Ghi 2 bill: tên khách, SĐT, gói bảo hành, sản phẩm, phụ kiện, giá.",
              "Xác nhận lại thông tin trước khi khách ký bill (shop giữ bill ký, gửi lại bill đóng dấu cho khách).",
              "Thu tiền (tiền mặt / chuyển khoản / quẹt thẻ / trả góp).",
            ],
          },
          {
            code: "B4",
            title: "Xuất đơn trên web / hệ thống",
            points: [
              "Tạo đơn hàng trên website quản lý bán hàng.",
              "Đính kèm hình ảnh hóa đơn (nếu có upload).",
            ],
          },
          {
            code: "B5",
            title: "Bàn giao",
            points: [
              "Giao máy, phụ kiện, hóa đơn (hỗ trợ chuyển dữ liệu nếu khách cần).",
              "Mời khách check-in / feedback / tham gia nhóm khách hàng thân thiết.",
            ],
          },
        ],
      },
      {
        title: "4.1.2 Gửi đơn",
        steps: [
          { code: "B1", title: "Chụp tổng sản phẩm trước khi gói", points: ["Ảnh IMEI máy, phụ kiện."] },
          { code: "B2", title: "Chụp ảnh đơn sau khi gói", points: [] },
          { code: "B3", title: "Gửi ảnh vào Telegram", points: ["Kèm ảnh mã đơn hàng / phiếu gửi hàng (nếu có)."] },
        ],
      },
      {
        title: "4.1.3 Nhận đơn",
        steps: [
          { code: "B1", title: "Chụp ảnh đơn hàng", points: [] },
          { code: "B2", title: "Quay video bóc đơn hàng", points: [] },
          { code: "B3", title: "Chụp lại ảnh các sản phẩm của đơn", points: [] },
        ],
      },
      {
        title: "4.1.4 Báo cáo cuối ca",
        steps: [
          {
            code: "ĐS",
            title: "Đối soát kho",
            points: [
              "Kho ngoài & kho trong: tồn trên Web vs tồn thực tế.",
              "Trạng thái KHỚP / LỆCH (nếu lệch, bắt buộc giải trình lý do).",
            ],
          },
          {
            code: "TK",
            title: "Chi tiết tồn kho",
            points: ["Theo series: 17 / 16 / 15 / iPad / Khác (14/13/12/Lẻ) cho cả 2 kho."],
          },
          {
            code: "TC",
            title: "Tài chính & đơn hàng",
            points: ["Bán ra, thu vào, tiền mặt bàn giao (số tiền két).", "Ghi chú ca sau: khách hẹn, máy lỗi..."],
          },
        ],
      },
    ],
  },
  {
    id: "online",
    name: "Quy trình ONLINE",
    channel: "Bán hàng từ xa",
    sections: [
      {
        title: "4.2.1 Chốt đơn",
        steps: [
          {
            code: "B1",
            title: "Tư vấn & xác nhận đơn hàng",
            points: [
              "Hỏi nhu cầu (model, dung lượng, màu, ngân sách).",
              "Gửi hình ảnh, video sản phẩm thực tế (nếu có).",
              "Giải thích gói bảo hành và chính sách sau bán hàng.",
              "Xin thông tin: họ tên, SĐT, khu vực.",
              "Khách chọn: Book Grab (nhắn nhóm coi có book được không) / Ship COD / CK trước 100% hoặc cọc giữ máy.",
              "Báo giá cuối cùng (đã gồm mọi chi phí phát sinh).",
              "Nếu đồng ý: xác nhận model + màu + dung lượng + giá + phương thức thanh toán.",
            ],
          },
          {
            code: "B2",
            title: "Kiểm tra tồn kho & giữ hàng",
            points: [
              "Kiểm tra tồn thực tế trên hệ thống hoặc nhắn nhóm xác nhận.",
              "Hết hàng: gợi ý model tương đương hoặc đặt trước.",
            ],
          },
          {
            code: "B3",
            title: "Xác nhận thông tin thanh toán",
            points: [
              "Gửi thông tin tài khoản (nếu CK).",
              'Khi nhận tiền xác nhận: "Shop đã nhận tiền / cọc của anh/chị [Tên] cho đơn [Tên máy]."',
            ],
          },
          { code: "B4", title: "Tạo đơn trên hệ thống / web", points: [] },
        ],
      },
      {
        title: "4.2.2 Check máy khách (form gửi vào Telegram)",
        steps: [
          {
            code: "F",
            title: "Thông tin cần xin",
            points: [
              "Tên khách.",
              "Tên máy + (Lock/QTE) + màu + IMEI.",
              "Dung lượng + pin + tình trạng máy + CNC (EID / SIM ghép).",
              "Kèm ảnh máy nếu có.",
            ],
          },
        ],
      },
      {
        title: "4.2.3 Tiếp nhận bảo hành / độ SIM (form)",
        steps: [
          {
            code: "F",
            title: "Thông tin cần xin",
            points: [
              "Quay thêm 1 video ~20–30s tổng quan máy về tình trạng ngoại hình.",
              "Tên + SĐT · Dòng máy + IMEI · Lỗi khách báo · Tình trạng ngoại hình.",
              "Pass · Phụ kiện gửi kèm · Dự kiến chi phí · Hẹn trả.",
            ],
          },
        ],
      },
    ],
  },
];
