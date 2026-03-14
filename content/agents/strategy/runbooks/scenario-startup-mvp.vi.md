# 🚀 Runbook: Bản dựng MVP khởi nghiệp 

> **Chế độ**: NEXUS-Sprint | **Thời lượng**: 4-6 tuần | **Đại lý**: 18-22 

--- 

## Kịch bản 

Bạn đang xây dựng MVP khởi nghiệp - một sản phẩm mới cần nhanh chóng xác nhận mức độ phù hợp của sản phẩm với thị trường. Tốc độ quan trọng, nhưng chất lượng cũng vậy. Bạn cần đi từ ý tưởng đến sản phẩm trực tiếp với người dùng thực trong 4-6 tuần. 

## Danh sách đặc vụ 

### Nhóm nòng cốt (Luôn hoạt động) 
| Đại lý | Vai trò | 
|-------|------| 
| Đại lý soạn nhạc | Bộ điều khiển đường ống | 
| Giám đốc dự án cấp cao | Chuyển đổi đặc tả thành nhiệm vụ | 
| Công cụ ưu tiên chạy nước rút | Quản lý tồn đọng | 
| Kiến trúc sư UX | Nền tảng kỹ thuật | 
| Nhà phát triển giao diện người dùng | Triển khai giao diện người dùng | 
| Kiến trúc sư phụ trợ | API và cơ sở dữ liệu | 
| Máy tự động DevOps | CI/CD và triển khai | 
| Người thu thập bằng chứng | QA cho mọi nhiệm vụ | 
| Kiểm tra thực tế | Cổng chất lượng cuối cùng | 

### Nhóm tăng trưởng (Đã kích hoạt Tuần 3+) 
| Đại lý | Vai trò | 
|-------|------| 
| Hacker tăng trưởng | Chiến lược mua lại | 
| Người sáng tạo nội dung | Ra mắt nội dung | 
| Nhà chiến lược truyền thông xã hội | Chiến dịch xã hội | 

### Nhóm hỗ trợ (Khi cần thiết) 
| Đại lý | Vai trò | 
|-------|------| 
| Người bảo vệ thương hiệu | Nhận diện thương hiệu | 
| Phóng viên phân tích | Số liệu và trang tổng quan | 
| Nguyên mẫu nhanh | Thí nghiệm xác nhận nhanh | 
| Kỹ sư AI | Nếu sản phẩm có tính năng AI | 
| Điểm chuẩn hiệu suất | Tải thử nghiệm trước khi ra mắt | 
| Người bảo trì cơ sở hạ tầng | Thiết lập sản xuất | 

## Thực thi hàng tuần 

### Tuần 1: Khám phá + Kiến trúc (Phase 0 + Phase 1 nén) 

``` 
Ngày 1-2: Khám phá nén 
├── Nhà nghiên cứu xu hướng → Quét cạnh tranh nhanh (1 ngày, không báo cáo đầy đủ) 
├── Kiến trúc sư UX → Luồng người dùng khóa wireframe 
└── Quản lý dự án cấp cao → Chuyển thông số kỹ thuật sang danh sách nhiệm vụ 

Ngày 3-4: Kiến trúc 
├── UX Architect → Hệ thống thiết kế CSS + kiến trúc thành phần 
├── Kiến trúc sư phụ trợ → Kiến trúc hệ thống + lược đồ cơ sở dữ liệu 
├── Người bảo vệ thương hiệu → Nền tảng thương hiệu nhanh chóng (màu sắc, kiểu chữ, giọng nói) 
└── Công cụ ưu tiên Sprint → tồn đọng điểm RICE + kế hoạch chạy nước rút 

Ngày 5: Thiết lập nền tảng 
├── DevOps Automator → Quy trình CI/CD + môi trường 
├── Frontend Developer → Giàn giáo dự án 
├── Kiến trúc sư phụ trợ → Cơ sở dữ liệu + giàn giáo API 
└── Cổng chất lượng: Gói kiến trúc đã được phê duyệt 
``` 

### Tuần 2-3: Core Build (Giai đoạn 2 + Giai đoạn 3) 

``` 
Nước rút 1 (Tuần 2): 
├── Agents Orchestrator quản lý vòng lặp Dev↔QA 
├── Nhà phát triển giao diện người dùng → Core UI (xác thực, chế độ xem chính, điều hướng) 
├── Kiến trúc sư phụ trợ → API cốt lõi (auth, CRUD, logic nghiệp vụ) 
├── Người thu thập chứng cứ → Đảm bảo chất lượng cho mọi nhiệm vụ đã hoàn thành 
├── Kỹ sư AI → Tính năng ML nếu có 
└── Sprint Review cuối tuần 

Nước rút 2 (Tuần 3): 
├── Tiếp tục vòng lặp Dev↔QA cho các tính năng còn lại 
├── Growth Hacker → Thiết kế cơ chế lan truyền + hệ thống giới thiệu 
├── Người tạo nội dung → Bắt đầu khởi chạy quá trình tạo nội dung 
├── Trình báo cáo Analytics → Thiết lập theo dõi và trang tổng quan 
└── Sprint Review cuối tuần 
``` 

### Tuần 4: Đánh bóng + Làm cứng (Giai đoạn 4) 

``` 
Ngày 1-2: Chạy nước rút chất lượng 
├── Người thu thập bằng chứng → Bộ ảnh chụp màn hình đầy đủ 
├── Điểm chuẩn hiệu suất → Kiểm tra tải 
├── Frontend Developer → Khắc phục sự cố QA 
├── Kiến trúc sư phụ trợ → Khắc phục sự cố API 
└── Người bảo vệ thương hiệu → Kiểm tra tính nhất quán của thương hiệu 

Ngày 3-4: Kiểm tra thực tế 
├── Kiểm tra thực tế → Thử nghiệm tích hợp cuối cùng 
├── Nhân viên bảo trì cơ sở hạ tầng → Sẵn sàng sản xuất 
└── DevOps Automator → Chuẩn bị triển khai sản xuất 

Ngày 5: Cổng Quyết định 
├── Phán quyết của Người kiểm tra thực tế 
├── NẾU CẦN LÀM VIỆC: Chu kỳ sửa chữa nhanh (2-3 ngày) 
├── NẾU SẴN SÀNG: Tiến hành khởi động 
└── Trình tạo tóm tắt điều hành → Tóm tắt các bên liên quan 
``` 

### Tuần 5-6: Ra mắt + Tăng trưởng (Giai đoạn 5) 

``` 
Tuần 5: Khởi động 
├── DevOps Automator → Triển khai sản xuất 
├── Growth Hacker → Kích hoạt các kênh chuyển đổi 
├── Người sáng tạo nội dung → Xuất bản nội dung ra mắt 
├── Nhà chiến lược truyền thông xã hội → Chiến dịch đa nền tảng 
├── Trình báo cáo phân tích → Giám sát thời gian thực 
└── Hỗ trợ Phản hồi → Hỗ trợ người dùng đang hoạt động 

Tuần 6: Tối ưu hóa 
├── Growth Hacker → Phân tích và tối ưu hóa kênh 
├── Bộ tổng hợp phản hồi → Thu thập phản hồi sớm của người dùng 
├── Trình theo dõi thử nghiệm → Khởi chạy thử nghiệm A/B 
├── Người báo cáo phân tích → Phân tích tuần 1
└── Công cụ ưu tiên chạy nước rút → Lập kế hoạch chạy nước rút lặp lại 
``` 

## Các quyết định quan trọng 

| Điểm quyết định | Khi nào | Ai Quyết Định | 
|--------------|------|-------------| 
| Khái niệm Đi/Không Đi | Kết thúc ngày thứ 2 | Nhà sản xuất Studio | 
| Phê duyệt kiến ​​trúc | Kết thúc Ngày 4 | Giám đốc dự án cấp cao | 
| Phạm vi tính năng cho MVP | Lập kế hoạch chạy nước rút | Công cụ ưu tiên chạy nước rút | 
| Sẵn sàng sản xuất | Tuần 4 Ngày 5 | Kiểm tra thực tế | 
| Thời điểm ra mắt | Sau khi kiểm tra thực tế SẴN SÀNG | Nhà sản xuất Studio | 

## Tiêu chí thành công 

| Số liệu | Mục tiêu | 
|--------|--------| 
| Thời gian tồn tại của sản phẩm | ≤ 6 tuần | 
| Các tính năng cốt lõi đã hoàn thiện | 100% phạm vi MVP | 
| Người dùng đầu tiên tham gia | Trong vòng 48 giờ kể từ khi ra mắt | 
| Thời gian hoạt động của hệ thống | > 99% trong tuần đầu tiên | 
| Phản hồi của người dùng được thu thập | ≥ 50 phản hồi trong 2 tuần đầu | 

## Những cạm bẫy và biện pháp giảm thiểu thường gặp 

| Cạm bẫy | Giảm nhẹ | 
|----------|----------| 
| Phạm vi leo trong quá trình xây dựng | Sprint Prioritizer thực thi MoSCoW — "Sẽ không" có nghĩa là sẽ không | 
| Kỹ thuật quá mức cho quy mô | Tư duy tạo nguyên mẫu nhanh - xác thực trước, mở rộng quy mô sau | 
| Bỏ qua QA vì tốc độ | Trình thu thập bằng chứng chạy trên MỌI nhiệm vụ - không có ngoại lệ | 
| Ra mắt mà không cần giám sát | Người bảo trì cơ sở hạ tầng thiết lập giám sát trong Tuần 1 | 
| Không có cơ chế phản hồi | Bộ sưu tập phân tích + phản hồi được tích hợp trong Sprint 1 |

---

> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.
