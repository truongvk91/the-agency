# 🏗️ Playbook Giai đoạn 1 — Chiến lược & Kiến trúc 

> **Thời gian**: 5-10 ngày | **Đại lý**: 8 | **Người giữ cổng**: Nhà sản xuất Studio + Người kiểm tra thực tế 

--- 

## Mục tiêu 

Xác định nội dung chúng tôi đang xây dựng, cấu trúc của nó và thành công trông như thế nào — trước khi viết một dòng mã. Mọi quyết định kiến ​​trúc đều được ghi lại. Mọi tính năng đều được ưu tiên. Mỗi đô la đều được hạch toán. 

## Điều kiện trước 

- [ ] Cổng chất lượng giai đoạn 0 đã được thông qua (Quyết định GO) 
- [ ] Đã nhận được Gói chuyển giao giai đoạn 0 
- [ ] Sự liên kết của các bên liên quan về phạm vi dự án 

## Trình tự kích hoạt tác nhân 

### Bước 1: Lập khung chiến lược (Ngày 1-3, Song song) 

#### 🎬 Nhà sản xuất Studio — Sắp xếp danh mục đầu tư mang tính chiến lược 
``` 
Kích hoạt Studio Maker để điều chỉnh danh mục đầu tư chiến lược trên [DỰ ÁN]. 

Đầu vào: Tóm tắt điều hành Giai đoạn 0 + Báo cáo phân tích thị trường 
Yêu cầu về sản phẩm bàn giao: 
1. Kế hoạch danh mục đầu tư chiến lược với định vị dự án 
2. Mục tiêu tầm nhìn, mục tiêu và ROI 
3. Chiến lược phân bổ nguồn lực
 4. Đánh giá rủi ro/lợi ích 
5. Tiêu chí thành công và định nghĩa cột mốc quan trọng 

Phù hợp với: Mục tiêu chiến lược của tổ chức 
Định dạng: Mẫu kế hoạch danh mục đầu tư chiến lược 
Thời gian: 3 ngày 
``` 

#### 🎭 Brand Guardian — Hệ thống nhận diện thương hiệu 
``` 
Kích hoạt Người bảo vệ thương hiệu để phát triển nhận diện thương hiệu trên [DỰ ÁN]. 

Đầu vào: Nghiên cứu UX giai đoạn 0 (nhân vật, bản đồ hành trình) 
Yêu cầu về sản phẩm bàn giao: 
1. Nền tảng thương hiệu (mục đích, tầm nhìn, sứ mệnh, giá trị, tính cách) 
2. Hệ thống nhận dạng hình ảnh (màu sắc, kiểu chữ, khoảng cách dưới dạng biến CSS) 
3. Kiến trúc tin nhắn và tiếng nói thương hiệu 
4. Thông số hệ thống logo (nếu là thương hiệu mới) 
5. Nguyên tắc sử dụng thương hiệu 

Định dạng: Tài liệu hệ thống nhận diện thương hiệu 
Thời gian: 3 ngày 
``` 

#### 💰 Công cụ theo dõi tài chính — Lập kế hoạch ngân sách và nguồn lực 
``` 
Kích hoạt Trình theo dõi tài chính để lập kế hoạch tài chính cho [DỰ ÁN]. 

Đầu vào: Kế hoạch chiến lược của Nhà sản xuất Studio + Đánh giá ngăn xếp công nghệ giai đoạn 0 
Yêu cầu về sản phẩm bàn giao: 
1. Ngân sách dự án toàn diện với phân tích danh mục 
2. Dự báo chi phí tài nguyên (đại lý, cơ sở hạ tầng, công cụ) 
3. Mô hình ROI với phân tích hòa vốn 
4. Dòng tiền 
5. Đánh giá rủi ro tài chính bằng dự phòng dự phòng 

Định dạng: Kế hoạch tài chính với dự báo ROI 
Thời gian: 2 ngày 
``` 

### Bước 2: Kiến trúc kỹ thuật (Ngày 3-7, Song song, sau khi có đầu ra của Bước 1) 

#### 🏛️ UX Architect — Kiến trúc kỹ thuật + Nền tảng UX 
``` 
Kích hoạt UX Architect cho kiến trúc kỹ thuật trên [DỰ ÁN]. 

Đầu vào: Nhận dạng hình ảnh của Người giám hộ thương hiệu + Nghiên cứu UX giai đoạn 0 
Yêu cầu về sản phẩm bàn giao: 
1. Hệ thống thiết kế CSS (biến, mã thông báo, tỷ lệ) 
2. Khung bố cục (Mẫu lưới/Flexbox, điểm dừng đáp ứng) 
3. Kiến trúc thành phần (quy ước đặt tên, phân cấp) 
4. Kiến trúc thông tin (luồng trang, phân cấp nội dung) 
5. Hệ thống chủ đề (chuyển đổi sáng/tối/hệ thống) 
6. Nền tảng hỗ trợ tiếp cận (Cơ sở WCAG 2.1 AA) 

Các tập tin cần tạo: 
- css/design-system.css 
- css/layout.css 
- css/thành phần.css 
- docs/ux-architecture.md 

Định dạng: Gói nền tảng sẵn sàng cho nhà phát triển 
Thời gian: 4 ngày 
``` 

#### 🏗️ Kiến trúc sư phụ trợ — Kiến trúc hệ thống 
``` 
Kích hoạt Backend Architect cho kiến trúc hệ thống trên [DỰ ÁN]. 

Đầu vào: Đánh giá ngăn xếp công nghệ giai đoạn 0 + Yêu cầu tuân thủ 
Yêu cầu về sản phẩm bàn giao: 
1. Đặc tả kiến trúc hệ thống 
- Mẫu kiến trúc (microservices/monolith/serverless/hybrid) 
- Mô hình giao tiếp (REST/GraphQL/gRPC/theo sự kiện) 
- Mẫu dữ liệu (CQRS/Tìm nguồn cung ứng sự kiện/CRUD) 
2. Thiết kế lược đồ cơ sở dữ liệu với chiến lược lập chỉ mục 
3. Đặc tả thiết kế API với phiên bản 
4. Kiến trúc xác thực và ủy quyền 
5. Kiến trúc bảo mật (phòng thủ theo chiều sâu) 
6. Kế hoạch mở rộng (chiến lược mở rộng theo chiều ngang) 

Định dạng: Đặc tả kiến trúc hệ thống 
Thời gian: 4 ngày 
``` 

#### 🤖 Kỹ sư AI - Kiến trúc ML (nếu có) 
``` 
Kích hoạt Kỹ sư AI cho kiến trúc hệ thống ML trên [DỰ ÁN]. 

Đầu vào: Kiến trúc hệ thống Backend Architect + Kiểm tra dữ liệu giai đoạn 0 
Yêu cầu về sản phẩm bàn giao: 
1. Thiết kế hệ thống ML 
- Chiến lược lựa chọn và đào tạo mô hình 
- Kiến trúc đường truyền dữ liệu
- Chiến lược suy luận (thời gian thực/lô/cạnh) 
2. Khung đạo đức và an toàn AI 
3. Kế hoạch giám sát và đào tạo lại mô hình 
4. Điểm tích hợp với ứng dụng chính 
5. Dự báo chi phí cho cơ sở hạ tầng ML 

Điều kiện: Chỉ kích hoạt nếu dự án bao gồm các tính năng AI/ML 
Định dạng: Tài liệu thiết kế hệ thống ML 
Thời gian: 3 ngày 
``` 

#### 👔 Quản lý dự án cấp cao — Chuyển đổi từ cụ thể sang nhiệm vụ 
``` 
Kích hoạt Trình quản lý dự án cấp cao để tạo danh sách nhiệm vụ trên [DỰ ÁN]. 

Đầu vào: TẤT CẢ tài liệu Giai đoạn 0 + Thông số kiến trúc (nếu có) 
Yêu cầu về sản phẩm bàn giao: 
1. Danh sách nhiệm vụ toàn diện 
- Trích dẫn yêu cầu CHÍNH XÁC từ thông số kỹ thuật (không có tính năng cao cấp) 
- Mỗi nhiệm vụ đều có tiêu chí chấp nhận rõ ràng 
- Sự phụ thuộc được ánh xạ giữa các nhiệm vụ 
- Ước tính nỗ lực (điểm câu chuyện hoặc giờ) 
2. Cấu trúc phân chia công việc 
3. Xác định đường tới hạn 
4. Đăng ký rủi ro thực hiện 

Quy tắc: 
- KHÔNG thêm các tính năng không có trong thông số kỹ thuật 
- Trích dẫn văn bản chính xác theo yêu cầu 
- Hãy thực tế về ước tính nỗ lực 

Định dạng: Danh sách nhiệm vụ với tiêu chí chấp nhận 
Thời gian: 3 ngày 
``` 

### Bước 3: Sắp xếp thứ tự ưu tiên (Ngày 7-10, Tuần tự, sau Bước 2) 

#### 🎯 Công cụ ưu tiên chạy nước rút — Ưu tiên tính năng 
``` 
Kích hoạt Công cụ ưu tiên Sprint để ưu tiên các hồ sơ tồn đọng trên [DỰ ÁN]. 

đầu vào: 
- Quản lý dự án cấp cao → Danh sách nhiệm vụ 
- Kiến trúc sư phụ trợ → Kiến trúc hệ thống 
- Kiến trúc sư UX → Kiến trúc UX 
- Theo dõi tài chính → Khung ngân sách 
- Nhà sản xuất Studio → Kế hoạch chiến lược 

Yêu cầu về sản phẩm bàn giao: 
1. RICE chấm điểm tồn đọng (Phạm vi tiếp cận, Tác động, Sự tự tin, Nỗ lực) 
2. Bài tập chạy nước rút với ước tính dựa trên vận tốc 
3. Bản đồ phụ thuộc với đường dẫn quan trọng 
4. Phân loại MoSCoW (Phải/Nên/Có thể/Sẽ không) 
5. Kế hoạch phát hành với bản đồ cột mốc 

Xác thực: Nhà sản xuất Studio xác nhận sự liên kết chiến lược 
Định dạng: Kế hoạch Sprint ưu tiên 
Thời gian: 2 ngày 
``` 

## Danh sách kiểm tra cổng chất lượng 

| # | Tiêu chí | Nguồn bằng chứng | Trạng thái | 
|---|--------------|----------------|--------| 
| 1 | Kiến trúc đáp ứng 100% yêu cầu về thông số kỹ thuật | Danh sách nhiệm vụ PM cấp cao được tham chiếu chéo với kiến ​​trúc | ☐ | 
| 2 | Hệ thống thương hiệu hoàn chỉnh (logo, màu sắc, kiểu chữ, giọng nói) | Người giám hộ thương hiệu có thể giao hàng | ☐ | 
| 3 | Tất cả các thành phần kỹ thuật đều có đường dẫn thực hiện | Thông số kỹ thuật của Kiến trúc sư phụ trợ + Kiến trúc sư UX | ☐ | 
| 4 | Ngân sách được phê duyệt và trong giới hạn | Kế hoạch theo dõi tài chính | ☐ | 
| 5 | Kế hoạch chạy nước rút dựa trên vận tốc và thực tế | Công cụ ưu tiên Sprint tồn đọng | ☐ | 
| 6 | Kiến trúc bảo mật được xác định | Thông số bảo mật của Kiến trúc sư phụ trợ | ☐ | 
| 7 | Yêu cầu tuân thủ được tích hợp vào kiến ​​trúc | Yêu cầu pháp lý được ánh xạ tới các quyết định kỹ thuật | ☐ | 

## Quyết định cổng 

**Yêu cầu đăng xuất kép**: Nhà sản xuất Studio (chiến lược) + Người kiểm tra thực tế (kỹ thuật) 

- **ĐÃ PHÊ DUYỆT**: Chuyển sang Giai đoạn 2 với Gói Kiến trúc đầy đủ 
- **REVISE**: Các mục cụ thể cần làm lại (quay lại Bước liên quan) 
- **Tái cấu trúc**: Các vấn đề về kiến trúc cơ bản (khởi động lại Giai đoạn 1) 

## Chuyển sang Giai đoạn 2 

``` đánh dấu 
## Giai đoạn 1 → Gói chuyển giao giai đoạn 2 

###Gói kiến trúc: 
1. Kế hoạch danh mục đầu tư chiến lược (Nhà sản xuất Studio) 
2. Hệ thống nhận diện thương hiệu (Brand Guardian) 
3. Kế hoạch tài chính (Finance Tracker) 
4. Hệ thống thiết kế CSS + Kiến trúc UX (UX Architect) 
5. Đặc tả kiến trúc hệ thống (Backend Architect) 
6. Thiết kế hệ thống ML (Kỹ sư AI - nếu có) 
7. Danh sách nhiệm vụ toàn diện (Quản lý dự án cấp cao) 
8. Kế hoạch Sprint ưu tiên (Sprint Prioritizer) 

### Đối với DevOps Automator: 
- Kiến trúc triển khai từ Backend Architect 
- Yêu cầu về môi trường từ Kiến trúc hệ thống 
- Giám sát các yêu cầu từ nhu cầu Cơ sở hạ tầng 

### Dành cho Nhà phát triển Frontend: 
- Hệ thống thiết kế CSS từ UX Architect 
- Nhận diện thương hiệu từ Brand Guardian 
- Kiến trúc thành phần từ UX Architect 
- Đặc tả API từ Backend Architect 

### Dành cho Kiến trúc sư phụ trợ (tiếp): 
- Lược đồ cơ sở dữ liệu sẵn sàng để triển khai 
- Giàn giáo API sẵn sàng triển khai 
- Kiến trúc hệ thống xác thực được xác định 
``` 

---
*Giai đoạn 1 hoàn tất khi Nhà sản xuất Studio và Người kiểm tra thực tế đều đăng nhập vào Gói Kiến trúc.*

---

> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.
