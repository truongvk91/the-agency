# 🔨 Playbook Giai đoạn 3 — Xây dựng & Lặp lại 

> **Thời lượng**: 2-12 tuần (thay đổi tùy theo phạm vi) | **Đại lý**: 15-30+ | **Người giữ cổng**: Người điều phối đặc vụ 

--- 

## Mục tiêu 

Triển khai tất cả các tính năng thông qua các vòng lặp Dev↔QA liên tục. Mọi nhiệm vụ đều được xác nhận trước khi bắt đầu nhiệm vụ tiếp theo. Đây là nơi diễn ra phần lớn công việc — và là nơi sự phối hợp của NEXUS mang lại giá trị cao nhất. 

## Điều kiện trước 

- [ ] Cổng chất lượng giai đoạn 2 đã thông qua (đã xác minh nền tảng) 
- [] tồn đọng Sprint Prioritizer có sẵn với điểm RICE 
- [ ] Đường ống CI/CD đang vận hành 
- [] Thiết kế hệ thống và thư viện thành phần sẵn sàng 
- [] Giàn giáo API với hệ thống xác thực đã sẵn sàng 

## Vòng lặp Dev↔QA — Cơ chế cốt lõi 

Người điều phối đại lý quản lý mọi nhiệm vụ thông qua chu trình này: 

``` 
CHO MỖI nhiệm vụ TRONG sprint_backlog (sắp xếp theo điểm RICE): 

1. GIAO nhiệm vụ cho Nhà phát triển thích hợp (xem ma trận phân công) 
2. Nhiệm vụ NHÀ PHÁT TRIỂN 
3. Nhiệm vụ KIỂM TRA Người thu thập chứng cứ 
- Ảnh chụp màn hình trực quan (máy tính để bàn, máy tính bảng, thiết bị di động) 
- Xác minh chức năng theo tiêu chí chấp nhận 
- Kiểm tra tính nhất quán của thương hiệu 
4. NẾU phán quyết == ĐẠT: 
Đánh dấu nhiệm vụ hoàn thành 
Chuyển sang nhiệm vụ tiếp theo 
Phán quyết ELIF == THẤT BẠI VÀ số lần thử < 3: 
Gửi phản hồi QA cho Nhà phát triển 
Nhà phát triển CỐ ĐỊNH các vấn đề cụ thể 
Quay lại bước 3 
ELIF lần thử >= 3: 
LÊN TIẾNG tới Người điều phối đại lý 
Người điều phối quyết định: phân công lại, phân tách, trì hoãn hoặc chấp nhận 
5. CẬP NHẬT báo cáo trạng thái đường ống 
``` 

## Ma trận phân công đại lý 

### Nhiệm vụ của nhà phát triển chính 

| Hạng mục nhiệm vụ | Đại lý chính | Đại lý dự phòng | Đại lý QA | 
|--------------|--------------|-------------|----------| 
| **Giao diện người dùng React/Vue/Angular** | Nhà phát triển giao diện người dùng | Nguyên mẫu nhanh | Người thu thập bằng chứng | 
| **API REST/GraphQL** | Kiến trúc sư phụ trợ | Nhà phát triển cấp cao | Trình kiểm tra API | 
| **Hoạt động cơ sở dữ liệu** | Kiến trúc sư phụ trợ | — | Trình kiểm tra API | 
| **Di động (iOS/Android)** | Trình tạo ứng dụng di động | — | Người thu thập bằng chứng | 
| **Mô hình/đường dẫn ML** | Kỹ sư AI | — | Trình phân tích kết quả kiểm tra | 
| **CI/CD/Cơ sở hạ tầng** | Máy tự động DevOps | Người bảo trì cơ sở hạ tầng | Điểm chuẩn hiệu suất | 
| **Tính năng cao cấp/phức tạp** | Nhà phát triển cấp cao | Kiến trúc sư phụ trợ | Người thu thập bằng chứng | 
| **Nguyên mẫu nhanh/POC** | Nguyên mẫu nhanh | Nhà phát triển giao diện người dùng | Người thu thập bằng chứng | 
| **WebXR/đắm chìm** | Nhà phát triển nhập vai XR | — | Người thu thập bằng chứng | 
| **visionOS** | Kỹ sư không gian VisionOS | Kỹ sư không gian/kim loại macOS | Người thu thập bằng chứng | 
| **Điều khiển buồng lái** | Chuyên gia tương tác buồng lái XR | Kiến trúc sư giao diện XR | Người thu thập bằng chứng | 
| **CLI/công cụ đầu cuối** | Chuyên gia tích hợp thiết bị đầu cuối | — | Trình kiểm tra API | 
| **Mã thông minh** | Kỹ sư LSP/Chỉ số | — | Trình phân tích kết quả kiểm tra | 
| **Tối ưu hóa hiệu suất** | Điểm chuẩn hiệu suất | Người bảo trì cơ sở hạ tầng | Điểm chuẩn hiệu suất | 

### Hỗ trợ Chuyên gia (kích hoạt khi cần thiết) 

| Chuyên gia | Khi nào nên kích hoạt | Kích hoạt | 
|----------|-----------------|----------| 
| Nhà thiết kế giao diện người dùng | Thành phần cần sàng lọc trực quan | Nhà phát triển yêu cầu hướng dẫn thiết kế | 
| Đầu phun kỳ quái | Tính năng cần sự thú vị/cá tính | Đánh giá UX xác định cơ hội | 
| Người kể chuyện bằng hình ảnh | Nội dung tường thuật trực quan cần thiết | Nội dung yêu cầu nội dung trực quan | 
| Người bảo vệ thương hiệu | Mối quan tâm về tính nhất quán của thương hiệu | QA phát hiện sai lệch thương hiệu | 
| Kiến trúc sư giao diện XR | Cần thiết kế tương tác không gian | Tính năng XR yêu cầu hướng dẫn UX | 
| Phóng viên phân tích dữ liệu | Cần phân tích dữ liệu sâu | Tính năng yêu cầu tích hợp phân tích | 

## Bản dựng song song 

Đối với triển khai NEXUS-Full, bốn bản nhạc chạy đồng thời: 

### Phần A: Phát triển sản phẩm cốt lõi 
``` 
Được quản lý bởi: Agents Orchestrator (vòng Dev↔QA) 
Đại lý: Nhà phát triển Frontend, Kiến trúc sư phụ trợ, Kỹ sư AI, 
Người xây dựng ứng dụng di động, Nhà phát triển cấp cao 
QA: Người thu thập bằng chứng, Người kiểm tra API, Người phân tích kết quả kiểm tra 

Nhịp chạy nước rút: chạy nước rút 2 tuần 
Hàng ngày: Thực hiện nhiệm vụ + xác thực QA 
Kết thúc sprint: Đánh giá Sprint + hồi tưởng 
```
### Phần B: Chuẩn bị tăng trưởng và tiếp thị 
``` 
Được quản lý bởi: Project Shepherd 
Đại lý: Hacker tăng trưởng, Người sáng tạo nội dung, Nhà chiến lược truyền thông xã hội, 
Trình tối ưu hóa cửa hàng ứng dụng 

Nhịp chạy nước rút: Phù hợp với các mốc quan trọng của Track A 
Hoạt động: 
- Growth Hacker → Thiết kế các vòng lan truyền và cơ chế giới thiệu 
- Người tạo nội dung → Xây dựng quy trình nội dung ra mắt 
- Nhà chiến lược truyền thông xã hội → Lập kế hoạch chiến dịch đa nền tảng 
- Trình tối ưu hóa App Store → Chuẩn bị danh sách cửa hàng (nếu di động) 
``` 

### Phần C: Chất lượng & Hoạt động 
``` 
Được quản lý bởi: Agents Orchestrator 
Đại lý: Người thu thập bằng chứng, Người kiểm tra API, Người đánh giá hiệu suất, 
Trình tối ưu hóa quy trình làm việc, Trình theo dõi thử nghiệm 

Hoạt động liên tục: 
- Người thu thập bằng chứng → Ảnh chụp màn hình QA cho mọi nhiệm vụ 
- Trình kiểm tra API → Xác thực điểm cuối cho mọi tác vụ API 
- Điểm chuẩn hiệu suất → Kiểm tra tải định kỳ 
- Trình tối ưu hóa quy trình làm việc → Xác định cải tiến quy trình 
- Trình theo dõi thử nghiệm → Thiết lập thử nghiệm A/B cho các tính năng đã được xác thực 
``` 

### Phần D: Thương hiệu & Trải nghiệm tiếng Ba Lan 
``` 
Được quản lý bởi: Brand Guardian 
Đại lý: Nhà thiết kế giao diện người dùng, Người bảo vệ thương hiệu, Người kể chuyện bằng hình ảnh, 
Kim phun kỳ quái 

Hoạt động kích hoạt: 
- UI Designer → Tinh chỉnh thành phần khi QA xác định các vấn đề về hình ảnh 
- Người bảo vệ thương hiệu → Kiểm tra tính nhất quán thương hiệu định kỳ 
- Người kể chuyện bằng hình ảnh → Nội dung tường thuật bằng hình ảnh khi các tính năng hoàn thiện 
- Whimsy Injector → Tương tác vi mô và những khoảnh khắc thú vị 
``` 

## Mẫu thực thi Sprint 

### Lập kế hoạch Sprint (Ngày 1) 

``` 
Công cụ Ưu tiên Sprint được kích hoạt: 
1. Xem xét tồn đọng với điểm RICE được cập nhật 
2. Chọn nhiệm vụ chạy nước rút dựa trên vận tốc của nhóm 
3. Phân công nhiệm vụ cho đại lý nhà phát triển 
4. Xác định sự phụ thuộc và thứ tự 
5. Đặt mục tiêu chạy nước rút và tiêu chí thành công 

Đầu ra: Kế hoạch Sprint với các nhiệm vụ được phân công 
``` 

### Thực thi hàng ngày (Ngày 2 đến Ngày N-1) 

``` 
Người điều phối đại lý quản lý: 
1. Kiểm tra trạng thái nhiệm vụ hiện tại 
2. Thực thi vòng lặp Dev↔QA 
3. Nhận dạng và giải quyết trình chặn 
4. Theo dõi và báo cáo tiến độ 

Định dạng báo cáo trạng thái: 
- Nhiệm vụ đã hoàn thành hôm nay: [danh sách] 
- Nhiệm vụ trong QA: [danh sách] 
- Nhiệm vụ đang phát triển: [danh sách] 
- Nhiệm vụ bị chặn: [danh sách có lý do] 
- Tỷ lệ đậu QA: [X/Y] 
``` 

### Sprint Review (Ngày N) 

``` 
Dự án Shepherd tạo điều kiện cho: 
1. Demo tính năng hoàn thiện 
2. Xem xét bằng chứng QA cho từng nhiệm vụ 
3. Thu thập phản hồi của các bên liên quan 
4. Cập nhật tồn đọng dựa trên bài học 

Thành phần tham gia: Tất cả các đại lý đang hoạt động + các bên liên quan 
Đầu ra: Tóm tắt đánh giá Sprint 
``` 

### Hồi tưởng nước rút 

``` 
Trình tối ưu hóa quy trình làm việc tạo điều kiện: 
1. Điều gì đã diễn ra tốt đẹp? 
2. Điều gì có thể cải thiện? 
3. Chúng ta sẽ thay đổi điều gì trong sprint tiếp theo? 
4. Chỉ số hiệu quả quy trình 

Đầu ra: Các mục hành động hồi tưởng 
``` 

## Logic quyết định của người điều phối 

### Xử lý lỗi nhiệm vụ 

``` 
KHI nhiệm vụ thất bại QA: 
NẾU cố gắng == 1: 
→ Gửi phản hồi QA cụ thể cho nhà phát triển 
→ Nhà phát triển CHỈ khắc phục các sự cố đã xác định 
→ Gửi lại để kiểm tra chất lượng 

NẾU cố gắng == 2: 
→ Gửi phản hồi QA tích lũy 
→ Hãy cân nhắc: Nhà phát triển có phù hợp không? 
→ Bản sửa lỗi của nhà phát triển với ngữ cảnh bổ sung 
→ Gửi lại để kiểm tra chất lượng 

NẾU cố gắng == 3: 
→ LÊN TIẾNG 
→ Tùy chọn: 
a) Chỉ định lại cho tác nhân phát triển khác 
b) Phân tách nhiệm vụ thành các nhiệm vụ phụ nhỏ hơn 
c) Sửa đổi cách tiếp cận/kiến trúc 
d) Chấp nhận với những hạn chế đã biết (tài liệu) 
e) Trì hoãn việc chạy nước rút trong tương lai 
→ Ghi lại quyết định và lý do 
``` 

### Quản lý tác vụ song song 

``` 
KHI nhiều nhiệm vụ không có sự phụ thuộc: 
→ Chỉ định đồng thời cho các đại lý nhà phát triển khác nhau 
→ Mỗi vòng chạy Dev↔QA độc lập 
→ Trình soạn nhạc theo dõi đồng thời tất cả các vòng lặp 
→ Hợp nhất các nhiệm vụ đã hoàn thành theo thứ tự phụ thuộc 

KHI nhiệm vụ có phụ thuộc: 
→ Đợi người phụ thuộc vượt qua QA 
→ Sau đó giao nhiệm vụ phụ thuộc 
→ Bao gồm bối cảnh phụ thuộc trong chuyển giao 
``` 

## Danh sách kiểm tra cổng chất lượng 

| # | Tiêu chí | Nguồn bằng chứng | Trạng thái | 
|---|--------------|----------------|--------| 
| 1 | Tất cả nhiệm vụ chạy nước rút đều vượt qua QA (hoàn thành 100%) | Ảnh chụp màn hình của Người thu thập bằng chứng cho mỗi nhiệm vụ | ☐ | 
| 2 | Tất cả các điểm cuối API đã được xác thực | Báo cáo hồi quy của Trình kiểm tra API | ☐ |
| 3 | Đã đáp ứng các đường cơ sở về hiệu suất (P95 < 200ms) | Báo cáo Điểm chuẩn hiệu suất | ☐ | 
| 4 | Đã xác minh tính nhất quán của thương hiệu (tuân thủ trên 95%) | Kiểm toán Người giám hộ thương hiệu | ☐ | 
| 5 | Không có lỗi nghiêm trọng (không mở P0/P1) | Tóm tắt Trình phân tích kết quả kiểm tra | ☐ | 
| 6 | Đã đáp ứng tất cả các tiêu chí chấp nhận | Xác minh theo từng nhiệm vụ | ☐ | 
| 7 | Đã hoàn tất việc xem xét mã cho tất cả các PR | Bằng chứng lịch sử Git | ☐ | 

## Quyết định cổng 

**Người giữ cổng**: Người điều phối đặc vụ 

- **Vượt qua**: Ứng dụng hoàn chỉnh tính năng → Kích hoạt Giai đoạn 4 
- **TIẾP TỤC**: Cần nhiều lần chạy nước rút hơn → Tiếp tục Giai đoạn 3 
- **TĂNG CƯỜNG**: Sự cố mang tính hệ thống → Sự can thiệp của Nhà sản xuất Studio 

## Chuyển sang Giai đoạn 4 

``` đánh dấu 
## Giai đoạn 3 → Gói chuyển giao giai đoạn 4 

### Dành cho người kiểm tra thực tế: 
- Ứng dụng hoàn chỉnh (tất cả các tính năng được triển khai) 
- Tất cả bằng chứng QA từ vòng Dev↔QA 
- Kết quả hồi quy của API Tester 
- Dữ liệu cơ bản của Điểm chuẩn hiệu suất 
- Kiểm tra tính nhất quán của Brand Guardian 
- Danh sách các vấn đề đã biết (nếu có giới hạn được chấp nhận) 

### Dành cho Người kiểm tra tuân thủ pháp luật: 
- Chi tiết triển khai xử lý dữ liệu 
- Thực hiện chính sách bảo mật 
- Thực hiện quản lý sự đồng ý 
- Các biện pháp an ninh được thực hiện 

### Đối với điểm chuẩn hiệu suất: 
- URL ứng dụng để kiểm tra tải 
- Mô hình lưu lượng dự kiến 
- Ngân sách hiệu suất từ kiến trúc 

### Dành cho Người bảo trì cơ sở hạ tầng: 
- Yêu cầu về môi trường sản xuất 
- Mở rộng nhu cầu cấu hình 
- Giám sát ngưỡng cảnh báo 
``` 

--- 

*Giai đoạn 3 hoàn tất khi tất cả nhiệm vụ chạy nước rút đều vượt qua QA, tất cả điểm cuối API đều được xác thực, đường cơ sở về hiệu suất được đáp ứng và không còn lỗi nghiêm trọng nào còn tồn tại.*

---

> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.
