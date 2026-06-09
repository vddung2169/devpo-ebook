# Cẩm nang điện tử nội bộ — DEV PỒ

Website nội bộ giúp nhân viên mới học sản phẩm, tra cứu thông tin nhanh và làm bài kiểm tra kiến thức. Xây dựng bằng **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, hoạt động hoàn toàn ở Frontend — không cần Backend, Database hay Authentication.

## Chạy dự án

```bash
npm install
npm run dev
```

Mở http://localhost:3000

Build production:

```bash
npm run build
npm run start
```

## Tính năng

- 🏠 **Trang chủ** — giới thiệu, thống kê, danh mục, gợi ý tra cứu nhanh.
- 📱 **Các dòng iPhone** — lưới máy, lọc theo Series / Phân loại, tìm kiếm, xem chi tiết khả năng SIM/EID, chống nước, chi phí độ SIM.
- 💳 **Giá & Thanh toán** — chính sách phụ kiện, trả thẳng / Ship COD, phí quẹt thẻ, 4 hình thức trả góp.
- 🛠 **Dịch vụ** — độ EID/CNC, SIM ghép, skip MDM, trả góp, bảo hành, giao hàng.
- 🛡 **Bảo hành** — 3 gói (Mặc định/Plus/Pro), điều kiện & từ chối, địa chỉ CNC.
- 📖 **Kiến thức** — bảng thuật ngữ (có tìm kiếm), quy trình OFFLINE/ONLINE, xử lý sự cố, thư viện hướng dẫn & video.
- ❓ **FAQ** — accordion câu hỏi thường gặp, lọc theo nhóm + tìm kiếm.
- 📝 **Test nhân viên** — trắc nghiệm ngẫu nhiên, chấm điểm, hiển thị đáp án đúng + giải thích, % hoàn thành.
- 🔍 **Tìm kiếm toàn cục** — nhấn `⌘K` (hoặc `Ctrl K`), hỗ trợ gõ không dấu.
- 🌙 **Dark mode** + responsive mobile/desktop.

## Cấu trúc thư mục

```
app/          Trang & layout (App Router)
components/   Sidebar, Navbar, Card, Accordion, Quiz, GlobalSearch…
data/         Toàn bộ dữ liệu dạng TypeScript constants
types/        Định nghĩa kiểu dùng chung
hooks/        useTheme (dark mode)
utils/        Tìm kiếm (bỏ dấu tiếng Việt)
```

## Lưu ý về dữ liệu

Toàn bộ nội dung bám sát cẩm nang gốc của cửa hàng. Cẩm nang **không** liệt kê thông số kỹ thuật chi tiết từng máy (màn hình, chip, RAM, camera, pin, giá), nên trang iPhone chỉ thể hiện đúng dữ liệu có thật: khả năng SIM/eSIM, độ EID, chống nước và chi phí độ SIM. Không bịa thêm thông số.
# devpo-ebook
