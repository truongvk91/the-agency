# 🚨 Runbook: Ứng phó sự cố 

> **Chế độ**: NEXUS-Micro | **Thời lượng**: Phút đến giờ | **Đại lý**: 3-8 

--- 

## Kịch bản 

Có gì đó bị hỏng trong quá trình sản xuất. Người dùng bị ảnh hưởng. Tốc độ phản hồi rất quan trọng nhưng việc thực hiện đúng cũng quan trọng không kém. Sổ tay này bao gồm việc phát hiện thông qua khám nghiệm tử thi. 

## Phân loại mức độ nghiêm trọng 

| Cấp độ | Định nghĩa | Ví dụ | Thời gian đáp ứng | 
|-------|--------------|----------|--------------| 
| **P0 — Nguy cấp** | Dịch vụ ngừng hoạt động hoàn toàn, mất dữ liệu, vi phạm an ninh | Tham nhũng cơ sở dữ liệu, tấn công DDoS, lỗi hệ thống xác thực | Ngay lập tức (tất cả chung tay) | 
| **P1 — Cao** | Tính năng chính bị hỏng, hiệu suất giảm đáng kể | Xử lý thanh toán giảm, tỷ lệ lỗi + 50%, độ trễ gấp 10 lần | < 1 giờ | 
| **P2 — Trung bình** | Tính năng nhỏ bị hỏng, có cách giải quyết | Tìm kiếm không hoạt động, lỗi API không nghiêm trọng | < 4 giờ | 
| **P3 — Thấp** | Vấn đề về thẩm mỹ, bất tiện nhỏ | Lỗi tạo kiểu, lỗi đánh máy, trục trặc giao diện người dùng nhỏ | Chạy nước rút tiếp theo | 

## Nhóm ứng phó theo mức độ nghiêm trọng 

### P0 — Nhóm ứng phó quan trọng 
| Đại lý | Vai trò | Hành động | 
|-------|------|--------| 
| **Người bảo trì cơ sở hạ tầng** | Chỉ huy sự cố | Đánh giá phạm vi, phối hợp ứng phó | 
| **Máy tự động DevOps** | Triển khai/khôi phục | Thực hiện khôi phục nếu cần | 
| **Kiến trúc sư phụ trợ** | Điều tra nguyên nhân gốc rễ | Chẩn đoán sự cố hệ thống | 
| **Nhà phát triển giao diện người dùng** | Điều tra phía UI | Chẩn đoán các vấn đề phía khách hàng | 
| **Người phản hồi hỗ trợ** | Giao tiếp người dùng | Cập nhật trang trạng thái, thông báo người dùng | 
| **Trình tạo Tóm tắt Điều hành** | Truyền thông các bên liên quan | Cập nhật điều hành theo thời gian thực | 

### P1 — Nhóm phản hồi cao 
| Đại lý | Vai trò | 
|-------|------| 
| **Người bảo trì cơ sở hạ tầng** | Chỉ huy sự cố | 
| **Máy tự động DevOps** | Hỗ trợ triển khai | 
| **Đại lý nhà phát triển có liên quan** | Sửa lỗi thực hiện | 
| **Người phản hồi hỗ trợ** | Giao tiếp người dùng | 

### P2 — Phản hồi trung bình 
| Đại lý | Vai trò | 
|-------|------| 
| **Đại lý nhà phát triển có liên quan** | Sửa lỗi thực hiện | 
| **Người thu thập bằng chứng** | Xác minh sửa chữa | 

### P3 — Phản hồi thấp 
| Đại lý | Vai trò | 
|-------|------| 
| **Công cụ ưu tiên chạy nước rút** | Thêm vào tồn đọng | 

## Trình tự ứng phó sự cố 

### Bước 1: Phát hiện & Phân loại (0-5 phút) 

``` 
TRIGGER: Cảnh báo từ giám sát / Báo cáo người dùng / Phát hiện tác nhân 

Nhân viên bảo trì cơ sở hạ tầng: 
1. Xác nhận cảnh báo 
2. Đánh giá phạm vi và tác động 
- Có bao nhiêu người dùng bị ảnh hưởng? 
- Những dịch vụ nào bị ảnh hưởng? 
- Dữ liệu có gặp rủi ro không? 
3. Phân loại mức độ nghiêm trọng (P0/P1/P2/P3) 
4. Kích hoạt đội phản ứng phù hợp 
5. Tạo kênh/luồng sự cố 

Đầu ra: Phân loại sự cố + nhóm ứng phó được kích hoạt 
``` 

### Bước 2: Điều tra (5-30 phút) 

``` 
ĐIỀU TRA SONG SONG: 

Nhân viên bảo trì cơ sở hạ tầng: 
├── Kiểm tra số liệu hệ thống (CPU, bộ nhớ, mạng, đĩa) 
├── Xem lại nhật ký lỗi 
├── Kiểm tra các triển khai gần đây 
└── Xác minh sự phụ thuộc bên ngoài 

Kiến trúc sư phụ trợ (nếu P0/P1): 
├── Kiểm tra tình trạng cơ sở dữ liệu 
├── Đánh giá tỷ lệ lỗi API 
├── Kiểm tra liên lạc dịch vụ 
└── Xác định thành phần bị lỗi 

Công cụ tự động hóa DevOps: 
├── Xem lại lịch sử triển khai gần đây 
├── Kiểm tra trạng thái đường ống CI/CD 
├── Chuẩn bị khôi phục nếu cần 
└── Xác minh trạng thái cơ sở hạ tầng 

Đầu ra: Đã xác định được nguyên nhân gốc rễ (hoặc thu hẹp thành thành phần) 
``` 

### Bước 3: Giảm thiểu (15-60 phút) 

``` 
CÂY QUYẾT ĐỊNH: 

NẾU gây ra bởi việc triển khai gần đây: 
→ DevOps Automator: Thực thi khôi phục 
→ Người bảo trì cơ sở hạ tầng: Xác minh khôi phục 
→ Người thu thập bằng chứng: Xác nhận sửa lỗi 

NẾU do vấn đề cơ sở hạ tầng gây ra: 
→ Người bảo trì cơ sở hạ tầng: Mở rộng quy mô/khởi động lại/chuyển đổi dự phòng 
→ DevOps Automator: Hỗ trợ thay đổi cơ sở hạ tầng 
→ Xác minh phục hồi 

NẾU do lỗi mã: 
→ Tác nhân nhà phát triển có liên quan: Triển khai hotfix 
→ Người thu thập bằng chứng: Xác minh bản sửa lỗi 
→ DevOps Automator: Triển khai hotfix 
→ Người bảo trì cơ sở hạ tầng: Theo dõi quá trình phục hồi 

NẾU gây ra bởi sự phụ thuộc bên ngoài: 
→ Người bảo trì cơ sở hạ tầng: Kích hoạt dự phòng/bộ đệm 
→ Support Reply: Giao tiếp với người dùng 
→ Giám sát phục hồi bên ngoài 

QUA: 
→ Phản hồi hỗ trợ: Cập nhật trang trạng thái 15 phút một lần
→ Trình tạo tóm tắt điều hành: Tóm tắt các bên liên quan (chỉ P0) 
``` 

### Bước 4: Xác minh độ phân giải (Sau sửa) 

``` 
Người thu thập bằng chứng: 
1. Xác minh bản sửa lỗi đã giải quyết được sự cố 
2. Bằng chứng ảnh chụp màn hình về trạng thái làm việc 
3. Xác nhận không có vấn đề mới nào được đưa ra 

Nhân viên bảo trì cơ sở hạ tầng: 
1. Xác minh tất cả các số liệu trở lại bình thường 
2. Xác nhận không có lỗi xếp tầng 
3. Theo dõi trong 30 phút sau khi sửa lỗi 

Trình kiểm tra API (nếu liên quan đến API): 
1. Chạy hồi quy trên các điểm cuối bị ảnh hưởng 
2. Xác minh thời gian phản hồi đã được chuẩn hóa 
3. Xác nhận tỷ lệ lỗi ở mức cơ bản 

Đầu ra: Xác nhận đã giải quyết sự cố 
``` 

### Bước 5: Khám nghiệm tử thi (Trong vòng 48 giờ) 

``` 
Trình tối ưu hóa quy trình làm việc dẫn đến kết quả khám nghiệm tử thi: 

1. Xây dựng lại dòng thời gian 
- Vấn đề được đưa ra khi nào? 
- Nó được phát hiện khi nào? 
- Chuyện đó được giải quyết khi nào? 
- Tổng thời gian tác động của người dùng 

2. Phân tích nguyên nhân gốc rễ 
- Thất bại cái gì? 
- Tại sao lại thất bại? 
- Tại sao nó không bị bắt sớm hơn? 
- Phân tích 5 Tại sao 

3. Đánh giá tác động 
- Người dùng bị ảnh hưởng 
- Tác động đến doanh thu 
- Ảnh hưởng danh tiếng 
- Tác động dữ liệu 

4. Biện pháp phòng ngừa 
- Giám sát nào sẽ phát hiện ra điều này sớm hơn? 
- Thử nghiệm nào có thể ngăn chặn được điều này? 
- Cần thay đổi quy trình gì? 
- Những thay đổi cơ sở hạ tầng nào là cần thiết? 

5. Mục hành động 
- [Hành động] → [Chủ sở hữu] → [Hạn chót] 
- [Hành động] → [Chủ sở hữu] → [Hạn chót] 
- [Hành động] → [Chủ sở hữu] → [Hạn chót] 

Đầu ra: Báo cáo sau giết mổ → Công cụ ưu tiên Sprint bổ sung các nhiệm vụ phòng ngừa cho hồ sơ tồn đọng 
``` 

## Mẫu giao tiếp 

### Cập nhật trang trạng thái (Hỗ trợ phản hồi) 
``` 
[DẤU THỜI GIAN] — [TÊN DỊCH VỤ] Sự cố 

Trạng thái: [Đang điều tra / Đã xác định / Giám sát / Đã giải quyết] 
Tác động: [Mô tả tác động của người dùng] 
Hành động hiện tại: [Chúng tôi đang làm gì với vấn đề này] 
Cập nhật tiếp theo: [Khi nào có bản cập nhật tiếp theo] 
``` 

### Cập nhật điều hành (Trình tạo tóm tắt điều hành - chỉ P0) 
``` 
TÓM TẮT SỰ CỐ — [DẤU THỜI GIAN] 

TÌNH HUỐNG: [Dịch vụ] [không hoạt động/xuống cấp] ảnh hưởng đến [N người dùng/% lưu lượng truy cập] 
NGUYÊN NHÂN: [Đã biết/Đang điều tra] — [Mô tả ngắn gọn nếu biết] 
HÀNH ĐỘNG: [Việc gì đang được thực hiện] — ETA [thời gian ước tính] 
TÁC ĐỘNG: [Tác động kinh doanh - doanh thu, người dùng, danh tiếng] 
CẬP NHẬT TIẾP THEO: [Dấu thời gian] 
``` 

## Ma trận leo thang 

| Tình trạng | Chuyển lên | Hành động | 
|----------|————|--------| 
| P0 không giải quyết được trong 30 phút | Nhà sản xuất Studio | Tài nguyên bổ sung, báo cáo của nhà cung cấp | 
| P1 chưa giải quyết được trong 2 giờ | Dự án Shepherd | Tái phân bổ tài nguyên | 
| Nghi ngờ vi phạm dữ liệu | Công cụ kiểm tra tuân thủ pháp luật | Đánh giá thông báo theo quy định | 
| Dữ liệu người dùng bị ảnh hưởng | Trình kiểm tra tuân thủ pháp luật + Trình tạo tóm tắt điều hành | Thông báo GDPR/CCPA | 
| Tác động đến doanh thu > $X | Công cụ theo dõi tài chính + Nhà sản xuất Studio | Đánh giá tác động kinh doanh |

---

> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.
