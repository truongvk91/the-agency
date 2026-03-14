# ⚙️ Playbook Giai đoạn 2 — Móng & Giàn giáo 

> **Thời lượng**: 3-5 ngày | **Đại lý**: 6 | **Người giữ cổng**: Trình tự động DevOps + Trình thu thập bằng chứng 

--- 

## Mục tiêu 

Xây dựng nền tảng kỹ thuật và vận hành mà tất cả các công việc tiếp theo đều phụ thuộc vào. Để bộ xương đứng vững trước khi thêm cơ bắp. Sau giai đoạn này, mọi nhà phát triển đều có môi trường làm việc, quy trình có thể triển khai và hệ thống thiết kế để xây dựng. 

## Điều kiện trước 

- [ ] Cổng chất lượng giai đoạn 1 đã thông qua (Gói kiến trúc đã được phê duyệt) 
- [ ] Đã nhận được Gói chuyển giao giai đoạn 1 
- [ ] Tất cả tài liệu kiến trúc đã được hoàn thiện 

## Trình tự kích hoạt tác nhân 

### Workstream A: Cơ sở hạ tầng (Ngày 1-3, Song song) 

#### 🚀 DevOps Automator — Đường dẫn CI/CD + Cơ sở hạ tầng 
``` 
Kích hoạt DevOps Automator để thiết lập cơ sở hạ tầng trên [DỰ ÁN]. 

Đầu vào: Kiến trúc hệ thống Backend Architect + yêu cầu triển khai 
Yêu cầu về sản phẩm bàn giao: 
1. Đường dẫn CI/CD (Hành động GitHub / GitLab CI) 
- Giai đoạn quét an ninh 
- Giai đoạn thử nghiệm tự động 
- Giai đoạn xây dựng và container hóa 
- Giai đoạn triển khai (xanh lam hoặc hoàng yến) 
- Khả năng rollback tự động 
2. Cơ sở hạ tầng dưới dạng mã 
- Cung cấp môi trường (dev, staging, production) 
- Thiết lập điều phối container 
- Cấu hình mạng và bảo mật 
3. Cấu hình môi trường 
- Quản lý bí mật 
- Quản lý biến môi trường 
- Tính chẵn lẻ đa môi trường 

Các tập tin cần tạo: 
- .github/workflows/ci-cd.yml (hoặc tương đương) 
- cơ sở hạ tầng/(mẫu Terraform/CDK) 
- docker-compose.yml 
- (Các) tệp Docker 

Định dạng: Quy trình CI/CD đang hoạt động với các mẫu IaC 
Thời gian: 3 ngày 
``` 

#### 🏗️ Người bảo trì cơ sở hạ tầng - Cơ sở hạ tầng đám mây + Giám sát 
``` 
Kích hoạt Trình bảo trì cơ sở hạ tầng để thiết lập giám sát trên [DỰ ÁN]. 

Đầu vào: Cơ sở hạ tầng DevOps Automator + Kiến trúc Backend Architect 
Yêu cầu về sản phẩm bàn giao: 
1. Cung cấp tài nguyên đám mây 
- Tính toán, lưu trữ, tài nguyên mạng 
- Cấu hình tự động mở rộng quy mô 
- Thiết lập cân bằng tải 
2. Ngăn xếp giám sát 
- Số liệu ứng dụng (Prometheus/DataDog) 
- Chỉ số cơ sở hạ tầng 
- Bảng điều khiển tùy chỉnh (Grafana) 
3. Ghi nhật ký và cảnh báo 
- Tổng hợp nhật ký tập trung 
- Quy tắc cảnh báo cho các ngưỡng quan trọng 
- Thiết lập thông báo khi có cuộc gọi 
4. Tăng cường bảo mật 
- Quy tắc tường lửa 
- Cấu hình SSL/TLS 
- Chính sách kiểm soát truy cập 

Định dạng: Báo cáo mức độ sẵn sàng của cơ sở hạ tầng với quyền truy cập bảng điều khiển 
Thời gian: 3 ngày 
``` 

#### ⚙️ Studio Operations — Thiết lập quy trình 
``` 
Kích hoạt Studio Operations để thiết lập quy trình trên [DỰ ÁN]. 

Đầu vào: Kế hoạch ưu tiên Sprint + Nhu cầu điều phối Project Shepherd 
Yêu cầu về sản phẩm bàn giao: 
1. Quy trình làm việc Git 
- Chiến lược chi nhánh (GitFlow / dựa trên thân cây) 
- Quy trình xét duyệt PR 
- Hợp nhất chính sách 
2. Kênh liên lạc 
- Thiết lập kênh nhóm 
- Định tuyến thông báo 
- Nhịp độ cập nhật trạng thái 
3. Mẫu tài liệu 
- Mẫu PR 
- Mẫu phát hành 
- Mẫu nhật ký quyết định 
4. Công cụ cộng tác 
- Thiết lập bảng dự án 
- Cấu hình theo dõi Sprint 

Định dạng: Playbook hoạt động 
Thời gian: 2 ngày 
``` 

### Workstream B: Nền tảng ứng dụng (Ngày 1-4, Song song) 

#### 🎨 Frontend Developer — Giàn giáo dự án + Thư viện thành phần 
``` 
Kích hoạt Frontend Developer để xây dựng dự án trên [DỰ ÁN]. 

Đầu vào: Hệ thống thiết kế CSS UX Architect + Bản sắc người bảo vệ thương hiệu 
Yêu cầu về sản phẩm bàn giao: 
1. Giàn giáo công trình 
- Thiết lập khung (React/Vue/Angular theo kiến trúc) 
- Cấu hình TypeScript 
- Xây dựng công cụ (Vite/Webpack/Next.js) 
- Khung kiểm tra (Jest/Vitest + Thư viện kiểm tra) 
2. Thiết kế triển khai hệ thống 
- Mã thông báo thiết kế CSS từ UX Architect 
- Thư viện thành phần cơ sở (Nút, Đầu vào, Thẻ, Bố cục) 
- Hệ thống chủ đề (sáng/tối/chuyển đổi hệ thống) 
- Tiện ích đáp ứng 
3. Vỏ ứng dụng 
- Thiết lập định tuyến 
- Các thành phần bố cục (Header, Footer, Sidebar) 
- Lỗi thực hiện ranh giới 
- Đang tải trạng thái 

Các tập tin cần tạo: 
- src/ (nguồn ứng dụng) 
- src/thành phần/(thư viện thành phần)
- src/styles/ (mã thông báo thiết kế) 
- src/layouts/ (thành phần bố cục) 

Định dạng: Khung ứng dụng hoạt động với thư viện thành phần 
Thời gian: 3 ngày 
``` 

#### 🏗️ Kiến trúc sư phụ trợ — Nền tảng cơ sở dữ liệu + API 
``` 
Kích hoạt Backend Architect cho nền tảng API trên [DỰ ÁN]. 

Đầu vào: Đặc tả kiến trúc hệ thống + Thiết kế lược đồ cơ sở dữ liệu 
Yêu cầu về sản phẩm bàn giao: 
1. Thiết lập cơ sở dữ liệu 
- Triển khai lược đồ (di chuyển) 
- Tạo chỉ mục 
- Dữ liệu hạt giống cho sự phát triển 
- Cấu hình tổng hợp kết nối 
2. Giàn giáo API 
- Thiết lập khung (Express/FastAPI/v.v.) 
- Cấu trúc tuyến đường phù hợp với kiến trúc 
- Ngăn xếp phần mềm trung gian (xác thực, xác thực, xử lý lỗi, CORS) 
- Điểm cuối kiểm tra sức khỏe 
3. Hệ thống xác thực 
- Tích hợp nhà cung cấp xác thực 
- JWT/quản lý phiên 
- Giàn giáo kiểm soát truy cập dựa trên vai trò 
4. Truyền thông dịch vụ 
- Thiết lập phiên bản API 
- Tuần tự hóa yêu cầu/phản hồi 
- Chuẩn hóa phản hồi lỗi 

Các tập tin cần tạo: 
- api/ hoặc server/ (nguồn phụ trợ) 
- di chuyển/ (di chuyển cơ sở dữ liệu) 
- docs/api-spec.yaml (Đặc tả OpenAPI) 

Định dạng: Giàn giáo API hoạt động với cơ sở dữ liệu và xác thực 
Thời gian: 4 ngày 
``` 

#### 🏛️ UX Architect — Triển khai hệ thống CSS 
``` 
Kích hoạt UX Architect để triển khai hệ thống CSS trên [DỰ ÁN]. 

Đầu vào: Bản sắc của Người giám hộ thương hiệu + Thông số kỹ thuật của Hệ thống thiết kế CSS Giai đoạn 1 của riêng bạn 
Yêu cầu về sản phẩm bàn giao: 
1. Triển khai mã thông báo thiết kế 
- Thuộc tính tùy chỉnh CSS (màu sắc, kiểu chữ, khoảng cách) 
- Bảng màu thương hiệu với cách đặt tên theo ngữ nghĩa 
- Tỷ lệ kiểu chữ với các điều chỉnh đáp ứng 
2. Hệ thống bố cục 
- Hệ thống container (điểm dừng đáp ứng) 
- Mẫu lưới (2-col, 3-col, sidebar) 
- Tiện ích Flexbox 
3. Hệ thống chủ đề 
- Biến chủ đề ánh sáng 
- Biến chủ đề tối 
- Phát hiện ưu tiên hệ thống 
- Thành phần chuyển đổi chủ đề 
- Chuyển tiếp mượt mà giữa các chủ đề 

Các tập tin cần tạo/cập nhật: 
- css/design-system.css (hoặc tương đương trong framework) 
- css/layout.css 
- css/thành phần.css 
- js/theme-manager.js 

Định dạng: Đã triển khai hệ thống thiết kế CSS với tính năng chuyển đổi chủ đề 
Thời gian: 2 ngày 
``` 

## Điểm kiểm tra xác minh (Ngày 4-5) 

### Xác minh của người thu thập bằng chứng 
``` 
Kích hoạt Trình thu thập bằng chứng để xác minh nền tảng Giai đoạn 2. 

Xác minh những điều sau bằng bằng chứng ảnh chụp màn hình: 
1. Đường ống CI/CD thực thi thành công (hiển thị nhật ký đường ống) 
2. Tải khung ứng dụng trong trình duyệt (ảnh chụp màn hình máy tính để bàn) 
3. Tải khung ứng dụng trên thiết bị di động (ảnh chụp màn hình thiết bị di động) 
4. Chuyển đổi chủ đề hoạt động (ảnh chụp màn hình sáng + tối) 
5. Phản hồi kiểm tra tình trạng API (đầu ra cuộn tròn) 
6. Cơ sở dữ liệu có thể truy cập được (trạng thái di chuyển) 
7. Bảng thông tin giám sát đang hoạt động (ảnh chụp màn hình bảng thông tin) 
8. Kết xuất thư viện thành phần (trang demo thành phần) 

Định dạng: Gói bằng chứng có ảnh chụp màn hình 
Nhận định: ĐẠT / THẤT BẠI với các vấn đề cụ thể 
``` 

## Danh sách kiểm tra cổng chất lượng 

| # | Tiêu chí | Nguồn bằng chứng | Trạng thái | 
|---|--------------|----------------|--------| 
| 1 | Xây dựng, thử nghiệm và triển khai quy trình CI/CD | Nhật ký thực hiện đường ống | ☐ | 
| 2 | Lược đồ cơ sở dữ liệu được triển khai với tất cả các bảng/chỉ mục | Kết quả di chuyển thành công | ☐ | 
| 3 | Giàn giáo API phản hồi về kiểm tra sức khỏe | bằng chứng phản ứng cong | ☐ | 
| 4 | Bộ xương giao diện người dùng hiển thị trong trình duyệt | Ảnh chụp màn hình của Người thu thập bằng chứng | ☐ | 
| 5 | Giám sát bảng điều khiển hiển thị số liệu | Ảnh chụp màn hình bảng điều khiển | ☐ | 
| 6 | Thiết kế mã thông báo hệ thống được triển khai | Bản demo thư viện thành phần | ☐ | 
| 7 | Chức năng chuyển đổi chủ đề (sáng/tối/hệ thống) | Ảnh chụp màn hình trước/sau | ☐ | 
| 8 | Quy trình làm việc và quy trình Git được ghi lại | Sách hướng dẫn vận hành Studio | ☐ | 

## Quyết định cổng 

**Yêu cầu xác thực kép**: DevOps Automator (cơ sở hạ tầng) + Trình thu thập bằng chứng (hình ảnh) 

- **PASS**: Khung hoạt động với quy trình DevOps đầy đủ → Kích hoạt Giai đoạn 3 
- **THẤT BẠI**: Sự cố cụ thể về cơ sở hạ tầng hoặc ứng dụng → Khắc phục và xác minh lại 

## Chuyển sang Giai đoạn 3 

``` đánh dấu 
## Giai đoạn 2 → Gói chuyển giao giai đoạn 3 

### Dành cho tất cả Đại lý nhà phát triển: 
- Đường dẫn CI/CD đang hoạt động (tự động triển khai khi hợp nhất) 
- Thiết kế token hệ thống và thư viện thành phần
- Giàn giáo API có tính năng xác thực và kiểm tra tình trạng 
- Cơ sở dữ liệu với lược đồ và dữ liệu hạt giống 
- Quy trình làm việc Git và quy trình PR 

### Dành cho Người thu thập bằng chứng (QA liên tục): 
- URL ứng dụng (dev, staging) 
- Phương pháp chụp ảnh màn hình 
- Tham khảo thư viện thành phần 
- Nguyên tắc thương hiệu để xác minh trực quan 

### Dành cho Agents Orchestrator (Quản lý vòng lặp Dev↔QA): 
- Tồn đọng Sprint Prioritizer (từ Giai đoạn 1) 
- Danh sách nhiệm vụ với tiêu chí chấp nhận (từ Giai đoạn 1) 
- Ma trận phân công tác nhân (từ chiến lược NEXUS) 
- Ngưỡng chất lượng cho từng loại nhiệm vụ 

### Truy cập môi trường: 
- Môi trường phát triển: [URL] 
- Môi trường dàn dựng: [URL] 
- Bảng điều khiển giám sát: [URL] 
- Đường dẫn CI/CD: [URL] 
- Tài liệu API: [URL] 
``` 

--- 

*Giai đoạn 2 hoàn tất khi ứng dụng khung đang chạy, quy trình CI/CD đang hoạt động và Người thu thập bằng chứng đã xác minh tất cả các thành phần nền tảng bằng ảnh chụp màn hình.*

---

> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.
