# Hướng dẫn kết nối bài Test với Google Sheet

Kết quả bài test nhân viên (họ tên, SĐT, điểm, thời gian, số lần refresh…)
được ghi tự động vào Google Sheet:
<https://docs.google.com/spreadsheets/d/1LA7xtpnMaZIxIFBPZD8OZiSWR9cc7-QeqXZ49hnKBMQ/edit>

Cần cài đặt **1 lần duy nhất** theo 2 bước dưới đây (khoảng 5 phút).

## Bước 1 — Cài Apps Script vào Google Sheet

1. Mở Google Sheet ở link trên (bằng tài khoản có quyền chỉnh sửa).
2. Menu **Tiện ích mở rộng (Extensions) → Apps Script**.
3. Xóa nội dung mẫu, dán toàn bộ nội dung file [`docs/google-apps-script.gs`](./google-apps-script.gs) vào, bấm **Lưu** (Ctrl/Cmd+S).
4. Bấm **Triển khai (Deploy) → Tùy chọn triển khai mới (New deployment)**.
5. Bấm biểu tượng bánh răng → chọn loại **Ứng dụng web (Web app)**:
   - **Mô tả**: `devpo quiz webhook`
   - **Thực thi bằng (Execute as)**: `Tôi (Me)`
   - **Ai có quyền truy cập (Who has access)**: `Bất kỳ ai (Anyone)` ⚠️ bắt buộc chọn đúng mục này
6. Bấm **Triển khai (Deploy)** → cấp quyền cho script khi được hỏi
   (Advanced → Go to … (unsafe) → Allow — đây là script của chính mình nên an toàn).
7. Copy **URL Ứng dụng web** dạng:
   `https://script.google.com/macros/s/AKfycb.../exec`

> Kiểm tra nhanh: mở URL đó trên trình duyệt — thấy chữ `DEV PO quiz webhook OK` là đúng.

## Bước 2 — Khai báo URL cho website

### Chạy local
Tạo file `.env.local` ở gốc project:

```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
```

Sau đó chạy lại `pnpm dev`.

### Trên Vercel (production)
```
vercel env add GOOGLE_SCRIPT_URL production
# dán URL /exec vào khi được hỏi, rồi deploy lại
```
(Hoặc vào Vercel Dashboard → Project → Settings → Environment Variables.)

## Dữ liệu ghi vào sheet

Sheet tab **"Kết quả test"** được tự tạo với các cột:

| Cột | Ý nghĩa |
|---|---|
| Thời gian bắt đầu / Thời gian nộp | Thời điểm vào bài và nộp bài |
| Họ tên / SĐT | Thông tin nhân viên bắt buộc nhập trước khi làm |
| Trạng thái | `Đang làm` → `Hoàn thành`, hoặc `Bỏ dở (làm lại)` |
| Điểm / Tổng câu / % đúng | Kết quả bài làm |
| Thời gian làm | Ví dụ: `12 phút 34 giây` |
| Đã làm (câu) | Số câu đã trả lời — cập nhật trực tiếp trong lúc làm |
| Số lần refresh | Số lần thoát / tải lại trang giữa chừng |
| Session ID | Mã phiên làm bài (để đối chiếu) |

## Cách phát hiện nhân viên "reset để làm lại"

- **Refresh / tải lại trang KHÔNG giúp làm lại**: bài làm được khôi phục đúng
  câu đang làm, và cột **Số lần refresh** tăng lên.
- Nếu nhân viên cố tình làm lại từ đầu (xóa dữ liệu trình duyệt / dùng tab ẩn
  danh), phiên cũ của cùng SĐT sẽ bị đánh dấu **`Bỏ dở (làm lại)`** kèm số câu
  đã làm (ví dụ bỏ ở câu 28/30) — quản lý nhìn sheet là biết ngay.
- Nhiều dòng cùng SĐT trong một ngày = làm lại nhiều lần.
