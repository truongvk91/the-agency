# 🛡️ Playbook Giai đoạn 4 — Chất lượng & Độ cứng 

> **Thời lượng**: 3-7 ngày | **Đại lý**: 8 | **Người giữ cổng**: Người kiểm tra thực tế (cơ quan duy nhất) 

--- 

## Mục tiêu 

Găng tay chất lượng cuối cùng. Trình kiểm tra thực tế được mặc định là "CẦN LÀM VIỆC" — bạn phải chứng minh mức độ sẵn sàng sản xuất bằng bằng chứng thuyết phục. Giai đoạn này tồn tại vì những lần triển khai đầu tiên thường cần 2-3 chu kỳ sửa đổi và điều đó là bình thường. 

## Điều kiện trước 

- [ ] Cổng chất lượng giai đoạn 3 đã vượt qua (tất cả nhiệm vụ QA'd) 
- [ ] Đã nhận được Gói chuyển giao giai đoạn 3 
- [ ] Tất cả các tính năng được triển khai và xác minh riêng lẻ 

##Tư duy phản biện 

> **Nhận định mặc định của Trình kiểm tra thực tế là CẦN LÀM VIỆC.** 
> 
> Đây không phải là bi quan - đó là chủ nghĩa hiện thực. Sự sẵn sàng sản xuất yêu cầu: 
> - Hoàn thành hành trình của người dùng từ đầu đến cuối 
> - Tính nhất quán trên nhiều thiết bị (máy tính để bàn, máy tính bảng, thiết bị di động) 
> - Hiệu suất khi tải (không chỉ là đường dẫn hạnh phúc) 
> - Xác thực bảo mật (không chỉ "chúng tôi đã thêm xác thực") 
> - Tuân thủ đặc điểm kỹ thuật (mọi yêu cầu, không phải hầu hết) 
> 
> Xếp hạng B/B+ trong lần vượt qua đầu tiên là bình thường và được mong đợi. 

## Trình tự kích hoạt tác nhân 

### Bước 1: Thu thập chứng cứ (Ngày 1-2, Tất cả song song) 

#### 📸 Người thu thập bằng chứng — Bằng chứng trực quan toàn diện 
``` 
Kích hoạt Trình thu thập bằng chứng để có bằng chứng hệ thống toàn diện về [DỰ ÁN]. 

Yêu cầu về sản phẩm bàn giao: 
1. Bộ ảnh chụp màn hình đầy đủ: 
- Máy tính để bàn (1920x1080) — mọi trang/lượt xem 
- Máy tính bảng (768x1024) — mỗi trang/lượt xem 
- Di động (375x667) — mọi trang/lượt xem 
2. Bằng chứng tương tác: 
- Luồng điều hướng (trước/sau khi nhấp chuột) 
- Tương tác biểu mẫu (trống, điền, gửi, trạng thái lỗi) 
- Tương tác phương thức/hộp thoại 
- Nội dung Accordion / có thể mở rộng 
3. Chứng cứ chủ đề: 
- Chế độ ánh sáng - tất cả các trang 
- Chế độ tối - tất cả các trang 
- Phát hiện ưu tiên hệ thống 
4. Bằng chứng nêu lỗi: 
- 404 trang 
- Lỗi xác thực biểu mẫu 
- Xử lý lỗi mạng 
- Trạng thái trống 

Định dạng: Gói bằng chứng ảnh chụp màn hình với test-results.json 
Thời gian: 2 ngày 
``` 

#### 🔌 Trình kiểm tra API - Hồi quy API đầy đủ 
``` 
Kích hoạt Trình kiểm tra API để hồi quy API hoàn chỉnh trên [DỰ ÁN]. 

Yêu cầu về sản phẩm bàn giao: 
1. Bộ hồi quy điểm cuối: 
- Tất cả các điểm cuối đã được kiểm tra (GET, POST, PUT, DELETE) 
- Xác thực/xác minh ủy quyền 
- Kiểm tra xác nhận đầu vào 
- Xác minh phản hồi lỗi 
2. Kiểm thử tích hợp: 
- Truyền thông đa dịch vụ 
- Xác minh hoạt động cơ sở dữ liệu 
- Tích hợp API bên ngoài 
3. Kiểm tra trường hợp cạnh: 
- Hành vi giới hạn tỷ lệ 
- Xử lý tải trọng lớn 
- Xử lý yêu cầu đồng thời 
- Xử lý đầu vào không đúng định dạng 

Định dạng: Báo cáo kiểm tra API với mức đạt/không đạt trên mỗi điểm cuối 
Thời gian: 2 ngày 
``` 

#### ⚡ Điểm chuẩn hiệu suất — Kiểm tra tải 
``` 
Kích hoạt Điểm chuẩn hiệu suất để kiểm tra tải trên [DỰ ÁN]. 

Yêu cầu về sản phẩm bàn giao: 
1. Kiểm tra tải ở lưu lượng dự kiến gấp 10 lần: 
- Phân bố thời gian đáp ứng (P50, P95, P99) 
- Thông lượng dưới tải 
- Tỷ lệ lỗi khi tải 
- Sử dụng tài nguyên (CPU, bộ nhớ, mạng) 
2. Đo lường các chỉ số quan trọng của trang web: 
- LCP (Sơn có nội dung lớn nhất) < 2,5 giây 
- FID (Độ trễ đầu vào đầu tiên) < 100ms 
- CLS (Thay đổi bố cục tích lũy) < 0,1 
3. Hiệu suất cơ sở dữ liệu: 
- Thời gian thực hiện truy vấn 
- Sử dụng hồ bơi kết nối 
- Hiệu quả chỉ số 
4. Kết quả kiểm tra căng thẳng: 
- Xác định điểm đột phá 
- Hành vi xuống cấp duyên dáng 
- Thời gian phục hồi sau quá tải 

Định dạng: Báo cáo chứng nhận hiệu suất 
Thời gian: 2 ngày 
``` 

#### ⚖️ Công cụ kiểm tra tuân thủ pháp luật — Kiểm tra tuân thủ cuối cùng 
``` 
Kích hoạt Trình kiểm tra tuân thủ pháp luật để kiểm tra tuân thủ lần cuối trên [DỰ ÁN]. 

Yêu cầu về sản phẩm bàn giao: 
1. Xác minh tuân thủ quyền riêng tư: 
- Độ chính xác của chính sách bảo mật 
- Chức năng quản lý sự đồng ý 
- Thực hiện quyền của chủ thể dữ liệu 
- Thực hiện đồng ý cookie 
2. Tuân thủ bảo mật: 
- Mã hóa dữ liệu (ở trạng thái nghỉ và đang chuyển tiếp) 
- Bảo mật xác thực 
- Vệ sinh đầu vào 
- Kiểm tra top 10 của OWASP 
3. Tuân thủ quy định: 
- Yêu cầu GDPR (nếu có) 
- Yêu cầu CCPA (nếu có)
- Yêu cầu cụ thể của ngành 
4. Tuân thủ khả năng tiếp cận: 
- Xác minh WCAG 2.1 AA 
- Khả năng tương thích của trình đọc màn hình 
- Điều hướng bàn phím 

Định dạng: Báo cáo chứng nhận tuân thủ 
Thời gian: 2 ngày 
``` 

### Bước 2: Phân tích (Ngày 3-4, Song song, sau Bước 1) 

#### 📊 Trình phân tích kết quả kiểm tra - Tổng hợp số liệu chất lượng 
``` 
Kích hoạt Trình phân tích kết quả kiểm tra để tổng hợp số liệu chất lượng trên [DỰ ÁN]. 

Đầu vào: TẤT CẢ báo cáo Bước 1 
Yêu cầu về sản phẩm bàn giao: 
1. Bảng thông tin chất lượng tổng hợp: 
- Điểm chất lượng chung 
- Phân tích danh mục (trực quan, chức năng, hiệu suất, bảo mật, tuân thủ) 
- Phân bố mức độ nghiêm trọng của vấn đề 
- Phân tích xu hướng (nếu có nhiều chu kỳ thử nghiệm) 
2. Ưu tiên vấn đề: 
- Các vấn đề nghiêm trọng (phải khắc phục trước khi sản xuất) 
- Các vấn đề cao (cần khắc phục trước khi sản xuất) 
- Các vấn đề trung bình (sửa trong lần chạy nước rút tiếp theo) 
- Vấn đề thấp (tồn đọng) 
3. Đánh giá rủi ro: 
- Xác suất sẵn sàng sản xuất 
- Các khu vực rủi ro còn lại 
- Các biện pháp giảm thiểu được đề xuất 

Định dạng: Bảng điều khiển số liệu chất lượng 
Thời gian: 1 ngày 
``` 

#### 🔄 Trình tối ưu hóa quy trình làm việc - Đánh giá hiệu quả quy trình 
``` 
Kích hoạt Trình tối ưu hóa quy trình làm việc để đánh giá hiệu quả quy trình trên [DỰ ÁN]. 

Đầu vào: Dữ liệu thực hiện Giai đoạn 3 + Kết quả của Bước 1 
Yêu cầu về sản phẩm bàn giao: 
1. Phân tích hiệu quả quy trình: 
- Hiệu suất vòng lặp Dev↔QA (tỷ lệ vượt qua lần đầu, số lần thử lại trung bình) 
- Nhận dạng nút cổ chai 
- Thời gian giải quyết cho các loại vấn đề khác nhau 
2. Khuyến nghị cải tiến: 
- Thay đổi quy trình cho hoạt động Giai đoạn 6 
- Cơ hội tự động hóa 
- Đề xuất cải tiến chất lượng 

Định dạng: Báo cáo Đề xuất Tối ưu hóa 
Thời gian: 1 ngày 
``` 

#### 🏗️ Người bảo trì cơ sở hạ tầng - Kiểm tra mức độ sẵn sàng sản xuất 
``` 
Kích hoạt Trình bảo trì cơ sở hạ tầng để sẵn sàng sản xuất trên [DỰ ÁN]. 

Yêu cầu về sản phẩm bàn giao: 
1. Xác nhận môi trường sản xuất: 
- Tất cả các dịch vụ đều lành mạnh và đáp ứng 
- Tự động mở rộng quy mô được cấu hình và thử nghiệm 
- Đã xác minh cấu hình cân bằng tải 
- Chứng chỉ SSL/TLS hợp lệ 
2. Giám sát xác nhận: 
- Tất cả các số liệu quan trọng đang được thu thập 
- Quy tắc cảnh báo được cấu hình và kiểm tra 
- Đã xác minh quyền truy cập bảng điều khiển 
- Tổng hợp nhật ký làm việc 
3. Xác nhận khôi phục sau thảm họa: 
- Hệ thống dự phòng hoạt động 
- Thủ tục phục hồi được ghi lại và thử nghiệm 
- Cơ chế chuyển đổi dự phòng đã được xác minh 
4. Xác thực bảo mật: 
- Các quy tắc tường lửa được xem xét 
- Kiểm soát truy cập đã được xác minh 
- Quản lý bí mật đã được xác nhận 
- Quét sạch lỗ hổng 

Định dạng: Báo cáo sẵn sàng về cơ sở hạ tầng 
Thời gian: 1 ngày 
``` 

### Bước 3: Phán quyết cuối cùng (Ngày 5-7, Tuần tự) 

#### 🔍 Kiểm tra thực tế — KẾT LUẬN CUỐI CÙNG 
``` 
Kích hoạt Trình kiểm tra thực tế để thử nghiệm tích hợp lần cuối trên [DỰ ÁN]. 

QUY TRÌNH BẮT BUỘC — KHÔNG BỎ QUA: 

Bước 1: Lệnh kiểm tra thực tế 
- Xác minh những gì thực sự được xây dựng (ls, grep cho các tính năng được xác nhận quyền sở hữu) 
- Kiểm tra chéo các tính năng được yêu cầu so với đặc điểm kỹ thuật 
- Chạy chụp ảnh màn hình toàn diện 
- Xem xét tất cả bằng chứng từ Bước 1 và Bước 2 

Bước 2: Xác thực chéo QA 
- Xem xét các phát hiện của Người thu thập chứng cứ 
- Tham khảo chéo với kết quả của Trình kiểm tra API 
- Xác minh dữ liệu Điểm chuẩn hiệu suất 
- Xác nhận kết quả của Người kiểm tra tuân thủ pháp luật 

Bước 3: Xác thực hệ thống từ đầu đến cuối 
- Kiểm tra HOÀN TOÀN hành trình của người dùng (không phải các tính năng riêng lẻ) 
- Xác minh hành vi đáp ứng trên TẤT CẢ các thiết bị 
- Kiểm tra các luồng tương tác từ đầu đến cuối 
- Xem xét dữ liệu hiệu suất thực tế 

Bước 4: Kiểm tra thực tế thông số kỹ thuật 
- Trích dẫn văn bản CHÍNH XÁC từ thông số kỹ thuật ban đầu 
- So sánh với bằng chứng thực hiện THỰC TẾ 
- Ghi lại MỌI khoảng cách giữa thông số kỹ thuật và thực tế 
- Không có giả định - chỉ có bằng chứng 

LỰA CHỌN XÁC ĐỊNH: 
- SẴN SÀNG: Bằng chứng rõ ràng về sự sẵn sàng sản xuất (lần đầu tiên hiếm hoi đạt được) 
- NHU CẦU CÔNG VIỆC: Các vấn đề cụ thể được xác định bằng danh sách sửa chữa (dự kiến) 
- CHƯA SẴN SÀNG: Các vấn đề kiến trúc chính cần xem lại Giai đoạn 1/2 

Định dạng: Báo cáo tích hợp dựa trên thực tế 
Mặc định: CẦN LÀM VIỆC trừ khi được chứng minh khác 
``` 

##Cổng chất lượng — CỔNG CUỐI CÙNG 

| # | Tiêu chí | Ngưỡng | Yêu cầu bằng chứng |
|---|----------|-------------|-------------------| 
| 1 | Hành trình của người dùng đã hoàn tất | Tất cả các đường dẫn quan trọng đều hoạt động từ đầu đến cuối | Ảnh chụp màn hình của Trình kiểm tra thực tế | 
| 2 | Tính nhất quán trên nhiều thiết bị | Máy tính để bàn + Máy tính bảng + Điện thoại di động đều hoạt động | Ảnh chụp màn hình đáp ứng | 
| 3 | Chứng nhận hiệu suất | P95 < 200ms, LCP < 2,5 giây, thời gian hoạt động > 99,9% | Báo cáo Điểm chuẩn hiệu suất | 
| 4 | Đã xác thực bảo mật | Không có lỗ hổng nghiêm trọng | Quét bảo mật + báo cáo tuân thủ | 
| 5 | Chứng nhận tuân thủ | Đã đáp ứng tất cả các yêu cầu quy định | Báo cáo của Bộ kiểm tra tuân thủ pháp luật | 
| 6 | Tuân thủ đặc điểm kỹ thuật | 100% yêu cầu kỹ thuật được thực hiện | Xác minh từng điểm | 
| 7 | Cơ sở hạ tầng đã sẵn sàng | Môi trường sản xuất được xác nhận | Báo cáo của người bảo trì cơ sở hạ tầng | 

## Quyết định cổng 

**Cơ quan độc quyền**: Người kiểm tra thực tế

 ### Nếu SẴN SÀNG (chuyển sang Giai đoạn 5): 
``` đánh dấu 
## Giai đoạn 4 → Gói chuyển giao giai đoạn 5 

### Dành cho nhóm khởi động: 
- Báo cáo chứng nhận Reality Checker 
- Chứng nhận hiệu suất 
- Chứng nhận tuân thủ 
- Báo cáo sẵn sàng về cơ sở hạ tầng 
- Những hạn chế đã biết (nếu có) 

### Dành cho Hacker tăng trưởng: 
- Sản phẩm sẵn sàng cho người sử dụng 
- Danh sách tính năng nhắn tin tiếp thị 
- Dữ liệu hiệu suất cho độ tin cậy 

### Đối với DevOps Automator: 
- Phê duyệt triển khai sản xuất 
- Kế hoạch triển khai xanh-xanh 
- Thủ tục khôi phục được xác nhận 
``` 

### NẾU CẦN LÀM VIỆC (quay lại Giai đoạn 3):
 ``` đánh dấu 
## Giai đoạn 4 → Gói hoàn trả giai đoạn 3 

### Danh sách sửa chữa (từ Trình kiểm tra thực tế): 
1. [Vấn đề nghiêm trọng 1]: [Mô tả + bằng chứng + hướng dẫn khắc phục] 
2. [Vấn đề nghiêm trọng 2]: [Mô tả + bằng chứng + hướng dẫn khắc phục] 
3. [Vấn đề cao 1]: [Mô tả + bằng chứng + hướng dẫn khắc phục] 
... 

###Quy trình: 
- Các vấn đề lọt vào vòng Dev↔QA (Cơ học giai đoạn 3) 
- Mỗi bản sửa lỗi phải vượt qua QA của Người thu thập bằng chứng 
- Khi mọi sửa lỗi hoàn tất → Quay lại Giai đoạn 4 Bước 3 
- Trình kiểm tra thực tế đánh giá lại bằng bằng chứng cập nhật 

### Dự kiến: 2-3 lần ôn tập là bình thường 
``` 

### Nếu CHƯA SẴN SÀNG (quay lại Giai đoạn 1/2): 
``` đánh dấu 
## Giai đoạn 4 → Gói hoàn trả giai đoạn 1/2 

### Các vấn đề về kiến trúc đã được xác định: 
1. [Vấn đề cơ bản]: [Tại sao không thể khắc phục được trong Giai đoạn 3] 
2. [Vấn đề về cấu trúc]: [Những gì cần thay đổi ở cấp độ kiến trúc] 

### Hành động được đề xuất: 
- [ ] Chỉnh sửa kiến trúc hệ thống (Giai đoạn 1) 
- [ ] Xây dựng lại nền móng (Giai đoạn 2) 
- [ ] Mở rộng phạm vi và xác định lại (Giai đoạn 1) 

### Cần có quyết định của nhà sản xuất Studio 
``` 

--- 

*Giai đoạn 4 hoàn tất khi Người kiểm tra thực tế đưa ra phán quyết SẴN SÀNG với bằng chứng thuyết phục. CẦN LÀM VIỆC là kết quả vượt qua đầu tiên được mong đợi — điều đó có nghĩa là hệ thống đang hoạt động nhưng cần được đánh bóng.*

---

> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.
