# Toán lớp 2 cùng Bạn Thỏ

Phần mềm học Toán lớp 2 bằng tiếng Việt, chạy trên trình duyệt (một tệp `index.html`, không cần cài đặt).
Nội dung sắp xếp theo mục lục sách Toán 2, bộ Kết nối tri thức với cuộc sống (NXB Giáo dục Việt Nam).

## Chạy phần mềm
Mở `index.html` bằng trình duyệt. Hoặc bật GitHub Pages: Settings > Pages > Deploy from a branch > main > /(root).

## Tính năng
- Bài học và bài thực hành theo 14 chủ đề, có gợi ý và lời giải khi trả lời sai.
- Câu hỏi sinh bằng chương trình, đáp án tính trực tiếp.
- 5 trò chơi: Đường đua Toán học, Thử thách bảng nhân chia, Giải cứu vương quốc, Siêu thị vui vẻ, Xây dựng thành phố.
- Luyện tập mỗi ngày, bài kiểm tra, thành tích, báo cáo cho phụ huynh (lưu trong trình duyệt).

## Thêm bài hoặc câu hỏi mới
- Câu hỏi: thêm hàm `G.tenbai=()=>({q, o, a, hint, sol})` trong `index.html`, đáp án tính bằng code.
- Bài học: thêm một mục vào mảng `T`, gán chủ đề trong `CHM` và số bài trong `BM`.

## Hạn chế
- Chưa có kiểm thử tự động. Cần giáo viên đối chiếu nội dung với sách (đặc biệt phần tiền Việt Nam, số ngày trong tháng, phạm vi xem đồng hồ).
- Chưa có các bài thực hành, trải nghiệm ngoài đời thực.
- Trợ lý "Bạn Toán thông minh" chỉ hoạt động khi chạy trong Claude. Bản tự lưu trữ cần máy chủ trung gian giữ khóa API.
- Dữ liệu học chỉ lưu trên từng trình duyệt.
