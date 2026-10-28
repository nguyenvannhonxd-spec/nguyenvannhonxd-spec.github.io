# Toán 6 – Tự học (bản thử nghiệm)

Phần mềm học Toán lớp 6 theo sách Toán 6 – Kết nối tri thức với cuộc sống (NXB Giáo dục Việt Nam). Nội dung bài giảng và đề do tác giả phần mềm tự soạn, chưa được giáo viên rà soát.

## Chạy
Mở tệp `index.html` bằng trình duyệt (nhấp đúp). Không cần cài đặt hay máy chủ. Cần mạng để tải phông chữ; không có mạng vẫn dùng được với phông dự phòng.

## Tiến độ học tập
Lưu trong trình duyệt của thiết bị đang dùng (localStorage). Đổi trình duyệt hoặc thiết bị sẽ không thấy tiến độ cũ. Góc phụ huynh chưa có mật khẩu.

## Kiểm thử
Cần Node.js. Chạy: `node kiem-thu.js` (đặt cạnh `index.html`). Tệp này sinh hàng chục nghìn đề ngẫu nhiên, kiểm tra cấu trúc, và tính lại độc lập đáp án của một số bài. Kiểm thử không thay thế việc dùng thử giao diện trên trình duyệt.

## Thêm hoặc sửa bài (trong thẻ <script> của tệp HTML)
- `LESSONS`: nội dung một bài (khởi động, kiến thức, ví dụ, ghi nhớ) và tên bộ sinh đề `gen`.
- `GEN`: mỗi bộ sinh đề gồm đúng 4 hàm theo 4 mức khó. Mỗi hàm trả về đề, đáp án do chương trình tính, lời giải từng bước, lỗi sai thường gặp kèm lời giải thích.
- Dạng câu hỏi: `mk` (nhập số hoặc phân số), `MCQ` (chọn đáp án), `TF` (đúng/sai), `ORD` (sắp xếp), `MAT` (nối cặp).
- `MAP` nối số bài trong sách với bài học. `CURR` là danh mục chương và bài hiển thị ở trang chủ.

## Chưa có
Bài kiểm tra theo chương và cuối kỳ, trợ lý AI, trò chơi, ôn tập giãn cách, đăng nhập và phân quyền, đồng bộ nhiều thiết bị.
