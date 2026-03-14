# 🏢 Runbook: Phát triển tính năng doanh nghiệp 

> **Chế độ**: NEXUS-Sprint | **Thời lượng**: 6-12 tuần | **Đại lý**: 20-30 

--- 

## Kịch bản 

Bạn đang thêm một tính năng chính vào sản phẩm doanh nghiệp hiện có. Các cổng tuân thủ, bảo mật và chất lượng là không thể thương lượng. Nhiều bên liên quan cần sự liên kết. Tính năng này phải tích hợp liền mạch với các hệ thống hiện có. 

## Danh sách đặc vụ 

### Nhóm nòng cốt 
| Đại lý | Vai trò | 
|-------|------| 
| Đại lý soạn nhạc | Bộ điều khiển đường ống | 
| Dự án Shepherd | Phối hợp đa chức năng | 
| Giám đốc dự án cấp cao | Chuyển đổi đặc tả thành nhiệm vụ | 
| Công cụ ưu tiên chạy nước rút | Quản lý tồn đọng | 
| Kiến trúc sư UX | Nền tảng kỹ thuật | 
| Nhà nghiên cứu UX | Xác thực người dùng | 
| Nhà thiết kế giao diện người dùng | Thiết kế thành phần | 
| Nhà phát triển giao diện người dùng | Triển khai giao diện người dùng | 
| Kiến trúc sư phụ trợ | Tích hợp API và hệ thống | 
| Nhà phát triển cấp cao | Thực hiện phức tạp | 
| Máy tự động DevOps | CI/CD và triển khai | 
| Người thu thập bằng chứng | QA trực quan | 
| Trình kiểm tra API | Xác thực điểm cuối | 
| Kiểm tra thực tế | Cổng chất lượng cuối cùng | 
| Điểm chuẩn hiệu suất | Kiểm tra tải | 

### Tuân thủ & Quản trị 
| Đại lý | Vai trò | 
|-------|------| 
| Công cụ kiểm tra tuân thủ pháp luật | Tuân thủ quy định | 
| Người bảo vệ thương hiệu | Tính nhất quán của thương hiệu | 
| Theo dõi tài chính | Theo dõi ngân sách | 
| Trình tạo tóm tắt điều hành | Báo cáo các bên liên quan | 

###Đảm bảo chất lượng 
| Đại lý | Vai trò | 
|-------|------| 
| Trình phân tích kết quả kiểm tra | Số liệu chất lượng | 
| Trình tối ưu hóa quy trình làm việc | Cải tiến quy trình | 
| Trình theo dõi thí nghiệm | Thử nghiệm A/B | 

## Kế hoạch thực hiện 

### Giai đoạn 1: Yêu cầu & Kiến trúc (Tuần 1-2) 

``` 
Tuần 1: Sự liên kết giữa các bên liên quan 
├── Project Shepherd → Phân tích các bên liên quan + kế hoạch truyền thông 
├── Nhà nghiên cứu UX → Nghiên cứu người dùng về nhu cầu tính năng 
├── Trình kiểm tra tuân thủ pháp luật → Quét các yêu cầu tuân thủ 
├── Quản lý dự án cấp cao → Chuyển đổi từ đặc tả sang nhiệm vụ 
└── Công cụ theo dõi tài chính → Khung ngân sách 

Tuần 2: Kiến trúc kỹ thuật 
├── Kiến trúc sư UX → Nền tảng UX + kiến trúc thành phần 
├── Kiến trúc sư phụ trợ → Kiến trúc hệ thống + kế hoạch tích hợp 
├── UI Designer → Thiết kế thành phần + cập nhật hệ thống thiết kế 
├── Công cụ ưu tiên chạy nước rút → tồn đọng điểm RICE 
├── Người bảo vệ thương hiệu → Đánh giá tác động thương hiệu 
└── Cổng chất lượng: Đánh giá kiến trúc (Project Shepherd + Kiểm tra thực tế) 
``` 

### Giai đoạn 2: Nền tảng (Tuần 3) 

``` 
├── DevOps Automator → Quy trình phân nhánh tính năng + cờ tính năng 
├── Frontend Developer → Giàn giáo linh kiện 
├── Kiến trúc sư phụ trợ → Giàn giáo API + di chuyển cơ sở dữ liệu 
├── Người bảo trì cơ sở hạ tầng → Thiết lập môi trường dàn dựng 
└── Cổng Chất lượng: Đã được xác minh bởi Tổ chức (Người thu thập bằng chứng) 
``` 

### Giai đoạn 3: Build (Tuần 4-9) 

``` 
Chạy nước rút 1-3 (Tuần 4-9): 
├── Người điều phối đại lý → Quản lý vòng lặp Dev↔QA 
├── Frontend Developer → Triển khai UI (từng nhiệm vụ) 
├── Kiến trúc sư phụ trợ → Triển khai API (từng nhiệm vụ) 
├── Nhà phát triển cấp cao → Tính năng phức tạp/cao cấp 
├── Người thu thập chứng cứ → Đảm bảo chất lượng mọi nhiệm vụ (ảnh chụp màn hình) 
├── Trình kiểm tra API → Xác thực điểm cuối mọi tác vụ API 
├── Trình theo dõi thử nghiệm → Thiết lập thử nghiệm A/B cho các tính năng chính 
│ 
├── Hai tuần một lần: 
│ ├── Người hướng dẫn dự án → Cập nhật trạng thái các bên liên quan 
│ ├── Trình tạo tóm tắt điều hành → Tóm tắt điều hành 
│ └── Theo dõi tài chính → Theo dõi ngân sách 
│ 
└── Sprint Review với bản demo của các bên liên quan 
``` 

### Giai đoạn 4: Làm cứng (Tuần 10-11) 

``` 
Tuần 10: Thu thập bằng chứng 
├── Người thu thập bằng chứng → Bộ ảnh chụp màn hình đầy đủ 
├── Trình kiểm tra API → Bộ hồi quy hoàn chỉnh 
├── Điểm chuẩn hiệu suất → Kiểm tra tải ở lưu lượng gấp 10 lần 
├── Công cụ kiểm tra tuân thủ pháp luật → Kiểm tra tuân thủ lần cuối 
├── Trình phân tích kết quả thử nghiệm → Bảng thông tin chỉ số chất lượng 
└── Nhân viên bảo trì cơ sở hạ tầng → Sẵn sàng sản xuất 

Tuần 11: Sự Phán Xét Cuối Cùng 
├── Trình kiểm tra thực tế → Kiểm tra tích hợp (mặc định: CẦN CÔNG VIỆC) 
├── Chu kỳ sửa chữa nếu cần (2-3 ngày) 
├── Xác minh lại 
└── Trình tạo tóm tắt điều hành → Đề xuất Đi/Không đi 
``` 

### Giai đoạn 5: Triển khai (Tuần 12) 

``` 
├── DevOps Automator → Triển khai Canary (5% → 25% → 100%) 
├── Người bảo trì cơ sở hạ tầng → Giám sát thời gian thực
├── Trình báo cáo Analytics → Theo dõi việc áp dụng tính năng 
├── Hỗ trợ Phản hồi → Hỗ trợ người dùng về tính năng mới 
├── Bộ tổng hợp phản hồi → Thu thập phản hồi sớm 
└── Trình tạo tóm tắt điều hành → Báo cáo khởi động 
``` 

## Nhịp độ giao tiếp của các bên liên quan 

| Khán giả | Tần số | Đại lý | Định dạng | 
|----------|-------------|-------|--------| 
| Nhà tài trợ điều hành | Hai tuần một lần | Trình tạo tóm tắt điều hành | Tóm tắt SCQA (<500 từ) | 
| Nhóm sản phẩm | Hàng tuần | Dự án Shepherd | Báo cáo hiện trạng | 
| Đội ngũ kỹ thuật | Hàng ngày | Đại lý soạn nhạc | Tình trạng đường ống | 
| Nhóm tuân thủ | Hàng tháng | Công cụ kiểm tra tuân thủ pháp luật | Tình trạng tuân thủ | 
| Tài chính | Hàng tháng | Theo dõi tài chính | Báo cáo ngân sách | 

## Yêu cầu về chất lượng 

| Yêu cầu | Ngưỡng | Xác minh | 
|-------------|-------------|-------------| 
| Bảo hiểm mã | > 80% | Trình phân tích kết quả kiểm tra | 
| Thời gian phản hồi API | P95 < 200ms | Điểm chuẩn hiệu suất | 
| Khả năng tiếp cận | WCAG 2.1 AA | Người thu thập bằng chứng | 
| An ninh | Không có lỗ hổng nghiêm trọng | Công cụ kiểm tra tuân thủ pháp luật | 
| Tính nhất quán của thương hiệu | Tuân thủ 95%+ | Người bảo vệ thương hiệu | 
| Tuân thủ thông số kỹ thuật | 100% | Kiểm tra thực tế | 
| Xử lý tải | Lưu lượng truy cập hiện tại gấp 10 lần | Điểm chuẩn hiệu suất | 

##Quản lý rủi ro 

| Rủi ro | Xác suất | Tác động | Giảm nhẹ | Chủ sở hữu | 
|------|-------------|--------|----------|-------| 
| Độ phức tạp tích hợp | Cao | Cao | Kiểm thử tích hợp sớm, Kiểm thử API trong mỗi lần chạy nước rút | Kiến trúc sư phụ trợ | 
| Phạm vi leo | Trung bình | Cao | Công cụ ưu tiên Sprint thực thi MoSCoW, Project Shepherd quản lý các thay đổi | Công cụ ưu tiên chạy nước rút | 
| Vấn đề tuân thủ | Trung bình | Quan trọng | Người kiểm tra tuân thủ pháp luật tham gia từ Ngày 1 | Công cụ kiểm tra tuân thủ pháp luật | 
| Hồi quy hiệu suất | Trung bình | Cao | Kiểm tra điểm chuẩn hiệu suất mỗi lần chạy nước rút | Điểm chuẩn hiệu suất | 
| Sự sai lệch của các bên liên quan | Thấp | Cao | Các cuộc họp giao ban điều hành hai tuần một lần, phối hợp Dự án Shepherd | Dự án Shepherd |

---

> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.
