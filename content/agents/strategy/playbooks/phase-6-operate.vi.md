# 🔄 Playbook Giai đoạn 6 — Vận hành & Phát triển 

> **Thời lượng**: Đang diễn ra | **Đại lý**: 12+ (luân phiên) | **Quản trị**: Nhà sản xuất Studio 

--- 

## Mục tiêu 

Hoạt động bền vững với sự cải tiến liên tục. Sản phẩm đang hoạt động - bây giờ hãy làm cho nó phát triển mạnh. Giai đoạn này không có ngày kết thúc; nó chạy miễn là sản phẩm có mặt trên thị trường. 

## Điều kiện trước 

- [ ] Cổng chất lượng giai đoạn 5 đã qua (khởi chạy ổn định) 
- [ ] Đã nhận được Gói chuyển giao giai đoạn 5 
- [ ] Đã thiết lập được nhịp độ hoạt động 
- [ ] Các số liệu cơ bản được ghi lại 

## Nhịp độ hoạt động 

### Liên tục (Luôn hoạt động) 

| Đại lý | Trách nhiệm | SLA | 
|-------|--------------||------| 
| **Người bảo trì cơ sở hạ tầng** | Thời gian hoạt động của hệ thống, hiệu suất, bảo mật | Thời gian hoạt động 99,9%, < 30 phút MTTR | 
| **Người phản hồi hỗ trợ** | Hỗ trợ khách hàng, giải quyết vấn đề | < 4 giờ phản hồi đầu tiên | 
| **Máy tự động DevOps** | Quy trình triển khai, hotfix | Khả năng triển khai nhiều lần/ngày | 

### Hàng ngày 

| Đại lý | Hoạt động | Đầu ra | 
|-------|----------|--------| 
| **Phóng viên phân tích** | Cập nhật bảng điều khiển KPI | Ảnh chụp nhanh số liệu hàng ngày | 
| **Người phản hồi hỗ trợ** | Phân loại và giải quyết vấn đề | Tóm tắt vé hỗ trợ | 
| **Người bảo trì cơ sở hạ tầng** | Kiểm tra sức khỏe hệ thống | Báo cáo tình trạng sức khoẻ | 

### Hàng tuần 

| Đại lý | Hoạt động | Đầu ra | 
|-------|----------|--------| 
| **Phóng viên phân tích** | Phân tích hiệu suất hàng tuần | Báo cáo phân tích hàng tuần | 
| **Bộ tổng hợp phản hồi** | Tổng hợp phản hồi của người dùng | Tóm tắt phản hồi hàng tuần | 
| **Công cụ ưu tiên chạy nước rút** | Dọn dẹp tồn đọng + lập kế hoạch chạy nước rút | Kế hoạch chạy nước rút | 
| **Tin tặc tăng trưởng** | Tối ưu hóa kênh tăng trưởng | Báo cáo số liệu tăng trưởng | 
| **Dự án Shepherd** | Phối hợp liên nhóm | Cập nhật trạng thái hàng tuần | 

### Hai tuần một lần 

| Đại lý | Hoạt động | Đầu ra | 
|-------|----------|--------| 
| **Bộ tổng hợp phản hồi** | Phân tích phản hồi sâu sắc | Báo cáo thông tin chi tiết hai tuần một lần | 
| **Theo dõi thí nghiệm** | Phân tích thử nghiệm A/B | Tóm tắt kết quả thí nghiệm | 
| **Người tạo nội dung** | Thực hiện lịch nội dung | Báo cáo nội dung đã xuất bản | 

### Hàng tháng 

| Đại lý | Hoạt động | Đầu ra | 
|-------|----------|--------| 
| **Trình tạo Tóm tắt Điều hành** | Báo cáo C-Suite | Tóm tắt điều hành hàng tháng | 
| **Theo dõi tài chính** | Đánh giá hiệu quả tài chính | Báo cáo tài chính hàng tháng | 
| **Công cụ kiểm tra tuân thủ pháp luật** | Giám sát quy định | Báo cáo tình trạng tuân thủ | 
| **Nhà nghiên cứu xu hướng** | Cập nhật thông tin thị trường | Tóm tắt thị trường hàng tháng | 
| **Người bảo vệ thương hiệu** | Kiểm tra tính nhất quán của thương hiệu | Báo cáo sức khỏe thương hiệu | 

### Hàng quý 

| Đại lý | Hoạt động | Đầu ra | 
|-------|----------|--------| 
| **Nhà sản xuất Studio** | Đánh giá danh mục đầu tư chiến lược | Đánh giá chiến lược hàng quý | 
| **Trình tối ưu hóa quy trình làm việc** | Kiểm tra hiệu quả quy trình | Báo cáo tối ưu hóa | 
| **Điểm chuẩn hiệu suất** | Kiểm tra hồi quy hiệu suất | Báo cáo hiệu suất hàng quý | 
| **Công cụ đánh giá** | Đánh giá ngăn xếp công nghệ | Đánh giá nợ công nghệ | 

## Vòng cải tiến liên tục 

``` 
ĐO LƯỜNG (Phóng viên phân tích) 
│ 
▼ 
PHÂN TÍCH (Trình tổng hợp phản hồi + Trình báo cáo phân tích dữ liệu) 
│ 
▼ 
KẾ HOẠCH (Ưu tiên Sprint + Nhà sản xuất Studio) 
│ 
▼ 
BUILD (Vòng lặp Dev↔QA Giai đoạn 3 - chu kỳ nhỏ) 
│ 
▼ 
XÁC NHẬN (Người thu thập bằng chứng + Người kiểm tra thực tế) 
│ 
▼ 
TRIỂN KHAI (DevOps Automator) 
│ 
▼ 
ĐO LƯỜNG (trở lại để bắt đầu) 
``` 

### Phát triển tính năng ở Giai đoạn 6 

Các tính năng mới tuân theo chu trình nén của NEXUS: 

``` 
1. Sprint Prioritizer chọn tính năng từ backlog 
2. Triển khai Đại lý nhà phát triển phù hợp 
3. Người thu thập bằng chứng xác thực (vòng Dev↔QA) 
4. Triển khai DevOps Automator (cờ tính năng hoặc trực tiếp) 
5. Màn hình theo dõi thử nghiệm (thử nghiệm A/B nếu có) 
6. Trình báo cáo Analytics đo lường tác động 
7. Bộ tổng hợp phản hồi thu thập phản hồi của người dùng 
``` 

## Quy trình ứng phó sự cố 

### Mức độ nghiêm trọng 

| Cấp độ | Định nghĩa | Thời gian đáp ứng | Cơ quan quyết định | 
|-------|--------------|--------------|-------------------| 
| **P0 — Nguy cấp** | Dịch vụ ngừng hoạt động, mất dữ liệu, vi phạm an ninh | Ngay lập tức | Nhà sản xuất Studio |
| **P1 — Cao** | Tính năng chính bị hỏng, xuống cấp đáng kể | < 1 giờ | Dự án Shepherd | 
| **P2 — Trung bình** | Vấn đề nhỏ về tính năng, có cách giải quyết | < 4 giờ | Đại lý soạn nhạc | 
| **P3 — Thấp** | Vấn đề về thẩm mỹ, bất tiện nhỏ | Chạy nước rút tiếp theo | Công cụ ưu tiên chạy nước rút | 

### Trình tự ứng phó sự cố 

``` 
PHÁT HIỆN (Người bảo trì cơ sở hạ tầng hoặc Người phản hồi hỗ trợ) 
│ 
▼ 
TRIAGE (Người điều phối đại lý) 
├── Phân loại mức độ nghiêm trọng (P0-P3) 
├── Phân công đội phản ứng 
└── Thông báo cho các bên liên quan 
│ 
▼ 
TRẢ LỜI 
├── P0: Người bảo trì cơ sở hạ tầng + DevOps Automator + Kiến trúc sư phụ trợ 
├── P1: Đại lý nhà phát triển có liên quan + DevOps Automator 
├── P2: Đại diện nhà phát triển có liên quan 
└── P3: Đã thêm vào sprint backlog 
│ 
▼ 
GIẢI QUYẾT 
├── Đã triển khai và triển khai bản sửa lỗi 
├── Người thu thập bằng chứng xác minh bản sửa lỗi 
└── Người bảo trì cơ sở hạ tầng xác nhận sự ổn định 
│ 
▼ 
SAU MÁT THIẾT 
├── Trình tối ưu hóa quy trình làm việc dẫn đến hồi cứu 
├── Tài liệu phân tích nguyên nhân gốc rễ 
├── Các biện pháp phòng ngừa được xác định 
└── Thực hiện cải tiến quy trình 
``` 

## Hoạt động tăng trưởng 

### Đánh giá tăng trưởng hàng tháng (Dẫn đầu về tăng trưởng của Hacker) 

``` 
1. Phân tích hiệu suất kênh 
- Mua lại theo kênh (không phải trả tiền, trả phí, giới thiệu, xã hội) 
- CAC theo kênh 
- Tỷ lệ chuyển đổi theo giai đoạn kênh 
- Xu hướng tỷ lệ LTV:CAC 

2. Kết quả thí nghiệm 
- Hoàn thành thử nghiệm A/B và kết quả 
- Xác nhận ý nghĩa thống kê 
- Trạng thái thực hiện của người chiến thắng 
- Đường ống thử nghiệm mới 

3. Phân tích tỷ lệ giữ chân 
- Đường cong duy trì đoàn hệ 
- Xác định rủi ro rời bỏ 
- Kết quả chiến dịch tương tác lại 
- Số liệu áp dụng tính năng 

4. Cập nhật lộ trình tăng trưởng 
- Thí nghiệm tăng trưởng của tháng tới 
- Phân bổ lại ngân sách kênh 
- Thăm dò kênh mới 
- Tối ưu hóa hệ số virus 
``` 

### Hoạt động nội dung (Người tạo nội dung + Nhà chiến lược truyền thông xã hội) 

``` 
hàng tuần: 
- Thực hiện lịch nội dung 
- Tương tác truyền thông xã hội 
- Quản lý cộng đồng 
- Theo dõi hiệu suất 

hàng tháng: 
- Đánh giá hiệu suất nội dung 
- Lập kế hoạch lịch biên tập 
- Cập nhật thuật toán nền tảng 
- Tinh chỉnh chiến lược nội dung 

Nền tảng cụ thể: 
- Twitter Engager → Tương tác hàng ngày, chủ đề hàng tuần 
- Instagram Curator → 3-5 bài/tuần, story hàng ngày 
- Nhà chiến lược TikTok → 3-5 video/tuần 
- Trình tạo cộng đồng Reddit → Tương tác xác thực hàng ngày 
``` 

##Hoạt động tài chính 

### Đánh giá tài chính hàng tháng (Theo dõi tài chính) 

``` 
1. Phân tích doanh thu 
- Theo dõi MRR/ARR 
- Doanh thu theo phân khúc/kế hoạch 
- Doanh thu mở rộng 
- Tác động đến doanh thu từ bỏ 

2. Phân tích chi phí 
- Chi phí cơ sở hạ tầng 
- Chi tiêu marketing theo kênh 
- Chi phí nhóm/nguồn lực 
- Chi phí dụng cụ và dịch vụ 

3. Đơn vị kinh tế 
- Xu hướng CAC 
- Xu hướng LTV 
- Tỷ lệ LTV:CAC 
- Thời gian hoàn vốn 

4. Dự báo 
- Dự báo doanh thu (cuộn 3 tháng) 
- Dự báo chi phí 
- Dự báo dòng tiền 
- Phân tích chênh lệch ngân sách 
``` 

## Hoạt động tuân thủ 

### Kiểm tra tuân thủ hàng tháng (Trình kiểm tra tuân thủ pháp lý) 

``` 
1. Giám sát quy định 
- Quy định mới ảnh hưởng đến sản phẩm 
- Thay đổi quy định hiện hành 
- Biện pháp cưỡng chế trong ngành 
- Theo dõi thời hạn tuân thủ 

2. Tuân thủ quyền riêng tư 
- Xử lý yêu cầu chủ đề dữ liệu 
- Hiệu quả quản lý sự đồng ý 
- Tuân thủ chính sách lưu giữ dữ liệu 
- Tuân thủ chuyển giao xuyên biên giới 

3. Tuân thủ bảo mật 
- Kết quả quét lỗ hổng 
- Trạng thái quản lý bản vá 
- Đánh giá kiểm soát truy cập 
- Xem xét nhật ký sự cố 

4. Sẵn sàng kiểm toán 
- Đồng tiền chứng từ 
- Tình trạng thu thập chứng cứ 
- Tỷ lệ hoàn thành đào tạo 
- Theo dõi xác nhận chính sách 
``` 

## Tiến hóa chiến lược 

### Đánh giá chiến lược hàng quý (Nhà sản xuất Studio) 

``` 
1. Đánh giá vị thế thị trường 
- Thay đổi bối cảnh cạnh tranh (đầu vào của Nhà nghiên cứu xu hướng) 
- Diễn biến thị phần 
- Nhận thức về thương hiệu (đầu vào của Brand Guardian) 
- Xu hướng hài lòng của khách hàng (Đầu vào của Bộ tổng hợp phản hồi) 

2. Chiến lược sản phẩm 
- Đánh giá lộ trình tính năng
- Đánh giá nợ công nghệ (Đầu vào của Tool Evaluator) 
- Cơ hội mở rộng nền tảng 
- Đánh giá quan hệ đối tác 

3. Chiến lược tăng trưởng 
- Đánh giá hiệu quả kênh 
- Cơ hội thị trường mới 
- Đánh giá chiến lược giá 
- Quy hoạch mở rộng 

4. Sức khỏe tổ chức 
- Hiệu quả của quy trình (đầu vào của Trình tối ưu hóa quy trình làm việc) 
- Chỉ số hiệu suất của nhóm 
- Tối ưu hóa phân bổ nguồn lực 
- Nhu cầu phát triển năng lực 

Đầu ra: Đánh giá chiến lược hàng quý → Cập nhật lộ trình và ưu tiên 
``` 

## Các thước đo thành công của Giai đoạn 6 

| Danh mục | Số liệu | Mục tiêu | Chủ sở hữu | 
|----------|--------|--------|-------| 
| **Độ tin cậy** | Thời gian hoạt động của hệ thống | > 99,9% | Người bảo trì cơ sở hạ tầng | 
| **Độ tin cậy** | MTTR | < 30 phút | Người bảo trì cơ sở hạ tầng | 
| **Tăng trưởng** | Tăng trưởng người dùng MoM | > 20% | Hacker tăng trưởng | 
| **Tăng trưởng** | Tỷ lệ kích hoạt | > 60% | Phóng viên phân tích | 
| **Lưu giữ** | Duy trì ngày thứ 7 | > 40% | Phóng viên phân tích | 
| **Lưu giữ** | Duy trì ngày 30 | > 20% | Phóng viên phân tích | 
| **Tài chính** | Tỷ lệ LTV:CAC | > 3:1 | Theo dõi tài chính | 
| **Tài chính** | ROI danh mục đầu tư | > 25% | Nhà sản xuất Studio | 
| **Chất lượng** | Điểm NPS | > 50 | Bộ tổng hợp phản hồi | 
| **Chất lượng** | Hỗ trợ thời gian giải quyết | < 4 giờ | Người phản hồi hỗ trợ | 
| **Tuân thủ** | Tuân thủ quy định | > 98% | Công cụ kiểm tra tuân thủ pháp luật | 
| **Hiệu quả** | Tần suất triển khai | Nhiều/ngày | Máy tự động DevOps | 
| **Hiệu quả** | Cải tiến quy trình | 20%/quý | Trình tối ưu hóa quy trình làm việc | 

--- 

*Giai đoạn 6 chưa có ngày kết thúc. Nó diễn ra trong suốt thời gian sản phẩm có mặt trên thị trường, với các chu kỳ cải tiến liên tục thúc đẩy sản phẩm tiến lên phía trước. Quy trình NEXUS có thể được kích hoạt lại (NEXUS-Sprint hoặc NEXUS-Micro) để có các tính năng hoặc điểm mấu chốt mới.*

---

> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.
