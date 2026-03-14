# 📋 Mẫu bàn giao của NEXUS 

> Các mẫu được chuẩn hóa cho mọi loại chuyển giao giữa các đại lý trong quy trình NEXUS. Chuyển giao nhất quán ngăn ngừa mất ngữ cảnh — nguyên nhân số 1 gây ra lỗi phối hợp đa tác nhân. 

--- 

## 1. Mẫu bàn giao chuẩn 

Sử dụng cho bất kỳ sự chuyển giao công việc từ đại lý này sang đại lý khác. 

``` đánh dấu 
# Tài liệu bàn giao NEXUS 

##Siêu dữ liệu 
| Lĩnh vực | Giá trị | 
|-------|-------| 
| **Từ** | [Tên Đại lý] ([Bộ phận]) | 
| **Tới** | [Tên Đại lý] ([Bộ phận]) | 
| **Giai đoạn** | Giai đoạn [N] — [Tên giai đoạn] | 
| **Tham khảo nhiệm vụ** | [ID nhiệm vụ từ tồn đọng của Sprint Prioritizer] | 
| **Ưu tiên** | [Quan trọng / Cao / Trung bình / Thấp] | 
| **Dấu thời gian** | [YYYY-MM-DDTHH:MM:SSZ] | 

## Bối cảnh 
**Dự án**: [Tên dự án] 
**Trạng thái hiện tại**: [Những gì đã được hoàn thành cho đến nay - hãy nêu cụ thể] 
**Các tệp liên quan**: 
- [file/path/1] — [nó chứa gì] 
- [file/path/2] — [nó chứa gì] 
**Phụ thuộc**: [Công việc này phụ thuộc vào việc hoàn thành] 
**Ràng buộc**: [Ràng buộc về kỹ thuật, dòng thời gian hoặc nguồn lực] 

## Yêu cầu có thể gửi được 
**Điều cần thiết**: [Mô tả cụ thể, có thể đo lường được về khả năng phân phối] 
**Tiêu chí chấp nhận**: 
- [ ] [Tiêu chí 1 — có thể đo lường được] 
- [ ] [Tiêu chí 2 — có thể đo lường được] 
- [ ] [Tiêu chí 3 — có thể đo lường được] 
**Tài liệu tham khảo**: [Liên kết đến thông số kỹ thuật, thiết kế, tác phẩm trước đó] 

## Kỳ vọng về chất lượng 
**Phải vượt qua**: [Tiêu chí chất lượng cụ thể cho sản phẩm này] 
**Yêu cầu bằng chứng**: [Bằng chứng hoàn thành trông như thế nào] 
**Chuyển tiếp sang phần tiếp theo**: [Ai nhận được kết quả đầu ra và họ cần định dạng gì] 
``` 

--- 

## 2. Vòng phản hồi QA - PASS 

Sử dụng khi Người thu thập bằng chứng hoặc nhân viên QA khác phê duyệt một nhiệm vụ. 

``` đánh dấu 
# NEXUS QA Phán quyết: ĐẠT ✅ 

## Nhiệm vụ 
| Lĩnh vực | Giá trị | 
|-------|-------| 
| **ID nhiệm vụ** | [ID] | 
| **Mô tả nhiệm vụ** | [Mô tả] | 
| **Đại lý nhà phát triển** | [Tên đại lý] | 
| **Đại lý QA** | [Tên đại lý] | 
| **Cố gắng** | [N] trên 3 | 
| **Dấu thời gian** | [YYYY-MM-DDTHH:MM:SSZ] | 

## Phán quyết: ĐẠT 

## Bằng chứng 
**Ảnh chụp màn hình**: 
- Máy tính để bàn (1920x1080): [tên tệp/đường dẫn] 
- Máy tính bảng (768x1024): [tên file/đường dẫn] 
- Di động (375x667): [tên file/đường dẫn] 

**Xác minh chức năng**: 
- [x] [Tiêu chí chấp nhận 1] — đã xác minh 
- [x] [Tiêu chí chấp nhận 2] — đã xác minh 
- [x] [Tiêu chí chấp nhận 3] — đã xác minh 

**Tính nhất quán của thương hiệu**: Đã được xác minh — màu sắc, kiểu chữ, hệ thống thiết kế khớp khoảng cách 
**Khả năng truy cập**: Đã xác minh — điều hướng bằng bàn phím, tỷ lệ tương phản, HTML ngữ nghĩa 
**Hiệu suất**: [Đo được thời gian tải] — trong phạm vi chấp nhận được 

## Ghi chú 
[Mọi quan sát, đề xuất nhỏ để cải thiện trong tương lai hoặc chú thích tích cực] 

## Hành động tiếp theo 
→ Agents Orchestrator: Đánh dấu nhiệm vụ đã hoàn thành, chuyển sang nhiệm vụ tiếp theo trong hồ sơ tồn đọng 
``` 

--- 

## 3. Vòng phản hồi QA - THẤT BẠI 

Sử dụng khi Người thu thập bằng chứng hoặc nhân viên QA khác từ chối một nhiệm vụ. 

``` đánh dấu 
# NEXUS QA Nhận định: THẤT BẠI ❌ 

## Nhiệm vụ 
| Lĩnh vực | Giá trị | 
|-------|-------| 
| **ID nhiệm vụ** | [ID] | 
| **Mô tả nhiệm vụ** | [Mô tả] | 
| **Đại lý nhà phát triển** | [Tên đại lý] | 
| **Đại lý QA** | [Tên đại lý] | 
| **Cố gắng** | [N] trên 3 | 
| **Dấu thời gian** | [YYYY-MM-DDTHH:MM:SSZ] | 

## Phán quyết: THẤT BẠI 

## Đã tìm thấy vấn đề 

### Vấn đề 1: [Danh mục] — [Mức độ nghiêm trọng: Quan trọng/Cao/Trung bình/Thấp] 
**Mô tả**: [Mô tả chính xác vấn đề] 
**Dự kiến**: [Điều gì sẽ xảy ra theo tiêu chí chấp nhận] 
**Thực tế**: [Điều gì thực sự xảy ra] 
**Bằng chứng**: [Tên tệp ảnh chụp màn hình hoặc kết quả kiểm tra] 
**Hướng dẫn khắc phục**: [Hướng dẫn cụ thể, khả thi để giải quyết] 
**(Các) tệp cần sửa đổi**: [Đường dẫn tệp chính xác] 

### Vấn đề 2: [Danh mục] — [Mức độ nghiêm trọng] 
**Mô tả**: […] 
**Dự kiến**: […] 
**Thực tế**: […] 
**Bằng chứng**: […] 
**Hướng dẫn sửa lỗi**: […] 
**(Các) tệp cần sửa đổi**: […] 

[Tiếp tục cho tất cả các vấn đề được tìm thấy] 

## Trạng thái tiêu chí chấp nhận 
- [x] [Tiêu chí 1] — đã đạt 
- [ ] [Tiêu chí 2] — THẤT BẠI (xem Vấn đề 1) 
- [ ] [Tiêu chí 3] — THẤT BẠI (xem Vấn đề 2) 

## Hướng dẫn thử lại 
**Dành cho đại lý nhà phát triển**: 
1. CHỈ khắc phục các sự cố được liệt kê ở trên 
2. KHÔNG giới thiệu các tính năng hoặc thay đổi mới 
3. Gửi lại yêu cầu QA khi mọi vấn đề đã được giải quyết 
4. Đây là lần thử [N] tối đa 3 lần
**Nếu lần thử thứ 3 không thành công**: Nhiệm vụ sẽ được chuyển lên Người điều phối đại lý 
``` 

--- 

## 4. Báo cáo leo thang 

Sử dụng khi một tác vụ vượt quá 3 lần thử lại. 

``` đánh dấu 
# Báo cáo leo thang của NEXUS 🚨 

## Nhiệm vụ 
| Lĩnh vực | Giá trị | 
|-------|-------| 
| **ID nhiệm vụ** | [ID] | 
| **Mô tả nhiệm vụ** | [Mô tả] | 
| **Đại lý nhà phát triển** | [Tên đại lý] | 
| **Đại lý QA** | [Tên đại lý] | 
| **Cố gắng đã cạn kiệt** | 3/3 | 
| **Chuyển lên** | [Người soạn nhạc đại lý / Nhà sản xuất phòng thu] | 
| **Dấu thời gian** | [YYYY-MM-DDTHH:MM:SSZ] | 

## Lịch sử thất bại 

### Thử lần 1 
- **Đã tìm thấy vấn đề**: [Tóm tắt] 
- **Đã áp dụng các bản sửa lỗi**: [Những gì nhà phát triển đã thay đổi] 
- **Kết quả**: THẤT BẠI — [Tại sao nó vẫn thất bại] 

### Lần thử 2 
- **Đã tìm thấy vấn đề**: [Tóm tắt] 
- **Đã áp dụng các bản sửa lỗi**: [Những gì nhà phát triển đã thay đổi] 
- **Kết quả**: THẤT BẠI — [Tại sao nó vẫn thất bại] 

### Thử lần 3 
- **Đã tìm thấy vấn đề**: [Tóm tắt] 
- **Đã áp dụng các bản sửa lỗi**: [Những gì nhà phát triển đã thay đổi] 
- **Kết quả**: THẤT BẠI — [Tại sao nó vẫn thất bại] 

## Phân tích nguyên nhân gốc rễ 
**Tại sao nhiệm vụ liên tục thất bại**: [Phân tích vấn đề cơ bản] 
**Vấn đề mang tính hệ thống**: [Đây là sự cố xảy ra một lần hay theo kiểu mẫu?] 
**Đánh giá mức độ phức tạp**: [Nhiệm vụ có được xác định phạm vi phù hợp không?] 

## Độ phân giải được đề xuất 
- [ ] **Chỉ định lại** cho tác nhân phát triển khác ([tác nhân được đề xuất]) 
- [ ] **Phân tách** thành các nhiệm vụ phụ nhỏ hơn ([phân tích đề xuất]) 
- [ ] **Sửa đổi cách tiếp cận** — cần thay đổi kiến trúc/thiết kế 
- [ ] **Chấp nhận** trạng thái hiện tại với các giới hạn được ghi lại 
- [ ] **Trì hoãn** cho lần chạy nước rút trong tương lai 

##Đánh giá tác động 
**Chặn**: [Những tác vụ nào khác bị chặn bởi điều này] 
**Tác động đến dòng thời gian**: [Điều này ảnh hưởng như thế nào đến lịch trình chung] 
**Tác động đến chất lượng**: [Có những tổn hại nào về chất lượng nếu chúng tôi chấp nhận trạng thái hiện tại] 

## Cần có quyết định 
**Người ra quyết định**: [Người điều phối đại lý / Nhà sản xuất phòng thu] 
**Thời hạn**: [Khi cần đưa ra quyết định để tránh bị chậm trễ thêm] 
``` 

--- 

## 5. Chuyển giao cổng pha 

Sử dụng khi chuyển đổi giữa các giai đoạn NEXUS. 

``` đánh dấu 
# Chuyển giao cổng pha NEXUS 

## Chuyển tiếp 
| Lĩnh vực | Giá trị | 
|-------|-------| 
| **Từ giai đoạn** | Giai đoạn [N] — [Tên] | 
| **Đến giai đoạn** | Giai đoạn [N+1] — [Tên] | 
| **Người giữ cổng** | [(Các) tên đại lý] | 
| **Kết quả cổng** | [ĐƯỢC / THẤT BẠI] | 
| **Dấu thời gian** | [YYYY-MM-DDTHH:MM:SSZ] | 

## Kết quả tiêu chí cổng 
| # | Tiêu chí | Ngưỡng | Kết quả | Bằng chứng | 
|---|----------|-------------|--------|----------| 
| 1 | [Tiêu chí] | [Ngưỡng] | ✅ ĐẠT / ❌ THẤT | [Bằng chứng tham khảo] | 
| 2 | [Tiêu chí] | [Ngưỡng] | ✅ ĐẠT / ❌ THẤT | [Bằng chứng tham khảo] | 
| 3 | [Tiêu chí] | [Ngưỡng] | ✅ ĐẠT / ❌ THẤT | [Bằng chứng tham khảo] | 

## Tài liệu được chuyển tiếp 
1. [Tên tài liệu] — [Mục đích cho giai đoạn tiếp theo] 
2. [Tên tài liệu] — [Mục đích cho giai đoạn tiếp theo] 
3. [Tên tài liệu] — [Mục đích cho giai đoạn tiếp theo] 

## Những ràng buộc chính cho giai đoạn tiếp theo 
- [Ràng buộc 1 từ những phát hiện của giai đoạn này] 
- [Ràng buộc 2 từ những phát hiện của giai đoạn này] 

## Kích hoạt đại lý cho giai đoạn tiếp theo 
| Đại lý | Vai trò | Ưu tiên | 
|-------|------|----------| 
| [Đặc vụ 1] | [Vai trò trong giai đoạn tiếp theo] | [Ngay lập tức / Ngày 2 / Khi cần thiết] | 
| [Đặc vụ 2] | [Vai trò trong giai đoạn tiếp theo] | [Ngay lập tức / Ngày 2 / Khi cần thiết] | 

## Rủi ro được chuyển tiếp 
| Rủi ro | Mức độ nghiêm trọng | Giảm nhẹ | Chủ sở hữu | 
|------|----------|-------------|-------| 
| [Rủi ro] | [P0-P3] | [Kế hoạch giảm thiểu] | [Đại lý] | 
``` 

--- 

## 6. Chuyển giao nước rút 

Sử dụng ở ranh giới chạy nước rút. 

``` đánh dấu 
# NEXUS Sprint Handoff 

## Tóm tắt nước rút 
| Lĩnh vực | Giá trị | 
|-------|-------| 
| **Chạy nước rút** | [Số] | 
| **Thời lượng** | [Ngày bắt đầu] → [Ngày kết thúc] | 
| **Mục tiêu chạy nước rút** | [Tuyên bố mục tiêu] | 
| **Vận tốc** | [Kế hoạch] / [Thực tế] điểm câu chuyện | 

## Trạng thái hoàn thành 
| ID nhiệm vụ | Mô tả | Trạng thái | Nỗ lực đảm bảo chất lượng | Ghi chú | 
|----------|-------------|--------|-------------|-------| 
| [ID] | [Mô tả] | ✅ Hoàn thành | [N] | [Ghi chú] | 
| [ID] | [Mô tả] | ✅ Hoàn thành | [N] | [Ghi chú] | 
| [ID] | [Mô tả] | ⚠️ Chuyển tiếp | [N] | [Lý do] | 

## Số liệu chất lượng 
- **Tỷ lệ QA đạt lần đầu**: [X]% 
- **Số lần thử lại trung bình**: [N] 
- **Nhiệm vụ đã hoàn thành**: [X/Y] 
- **Điểm câu chuyện đã được cung cấp**: [N]
## Được chuyển sang Sprint tiếp theo 
| ID nhiệm vụ | Mô tả | Lý do | Ưu tiên | 
|----------|-------------|--------|----------| 
| [ID] | [Mô tả] | [Tại sao chưa hoàn thành] | [Điểm GẠO] | 

## Những hiểu biết hồi tưởng 
**Điều gì đã diễn ra tốt đẹp**: [Những thành công chính] 
**Nội dung cần cải thiện**: [Những cải tiến chính] 
**Các mục hành động**: [Những thay đổi cụ thể cho lần chạy nước rút tiếp theo] 

## Xem trước Sprint tiếp theo 
**Mục tiêu chạy nước rút**: [Mục tiêu đề xuất] 
**Nhiệm vụ chính**: [Các mục ưu tiên hàng đầu] 
**Phần phụ thuộc**: [Phần phụ thuộc giữa các nhóm] 
``` 

--- 

## 7. Chuyển giao sự cố 

Sử dụng trong quá trình ứng phó sự cố. 

``` đánh dấu 
# Xử lý sự cố NEXUS 

## Sự cố 
| Lĩnh vực | Giá trị | 
|-------|-------| 
| **Mức độ nghiêm trọng** | [P0/P1/P2/P3] | 
| **Được phát hiện bởi** | [Đại lý hoặc hệ thống] | 
| **Thời gian phát hiện** | [Dấu thời gian] | 
| **Đã giao cho** | [Tên đại lý] | 
| **Trạng thái** | [Điều tra / Giảm nhẹ / Đã giải quyết / Khám nghiệm tử thi] | 

## Mô tả 
**Chuyện gì đã xảy ra**: [Mô tả rõ ràng về vụ việc] 
**Tác động**: [Ai/cái gì bị ảnh hưởng và mức độ nghiêm trọng] 
**Dòng thời gian**: 
- [HH:MM] — [Sự kiện] 
- [HH:MM] — [Sự kiện] 
- [HH:MM] — [Sự kiện] 

## Trạng thái hiện tại 
**Các hệ thống bị ảnh hưởng**: [Danh sách] 
**Có giải pháp thay thế**: [Có/Không — mô tả nếu có] 
**Độ phân giải ước tính**: [Ước tính thời gian] 

## Hành động đã thực hiện 
1. [Hành động đã thực hiện và kết quả] 
2. [Hành động đã thực hiện và kết quả] 

## Bối cảnh chuyển giao 
**Dành cho người trả lời tiếp theo**: 
- [Những gì đã được thử] 
- [Những gì chưa được thử] 
- [Nghi ngờ nguyên nhân gốc rễ] 
- [Nhật ký/số liệu liên quan cần kiểm tra] 

## Truyền thông với các bên liên quan 
**Đã gửi bản cập nhật lần cuối**: [Dấu thời gian] 
**Ngày cập nhật tiếp theo**: [Dấu thời gian] 
**Kênh liên lạc**: [Nơi đăng thông tin cập nhật] 
``` 

--- 

## Hướng dẫn sử dụng 

| Tình huống | Mẫu để sử dụng | 
|----------|----------------| 
| Phân công công việc cho đại lý khác | Bàn giao tiêu chuẩn (#1) | 
| QA phê duyệt một nhiệm vụ | ĐẠT QA (#2) | 
| QA từ chối một nhiệm vụ | THẤT ​​BẠI QA (#3) | 
| Nhiệm vụ vượt quá 3 lần thử lại | Báo cáo leo thang (#4) | 
| Di chuyển giữa các giai đoạn | Chuyển giao cổng pha (#5) | 
| Kết thúc nước rút | Chuyển tiếp nước rút (#6) | 
| Sự cố hệ thống | Chuyển giao sự cố (#7) |

---

> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.
