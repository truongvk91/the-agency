# Tích hợp mã mở 

Tác nhân OpenCode là các tệp `.md` với phần đầu YAML được lưu trữ trong 
`.opencode/đại lý/`. Bộ chuyển đổi ánh xạ các màu được đặt tên thành mã hex và thêm 
`mode: subagent` vì vậy các tác nhân được gọi theo yêu cầu thông qua `@agent-name` thay vì 
hơn là làm lộn xộn bộ chọn tác nhân chính. 

## Cài đặt 

``` bash 
# Chạy từ gốc dự án của bạn 
cd /của bạn/dự án 
/path/to/agency-agents/scripts/install.sh --mã mở công cụ 
``` 

Điều này tạo ra các tệp `.opencode/agents/<slug>.md` trong thư mục dự án của bạn. 

## Kích hoạt Đại lý 

Trong OpenCode, gọi tác nhân phụ có tiền tố `@`: 

``` 
@frontend-developer giúp xây dựng thành phần này. 
``` 

``` 
@reality-checker xem lại PR này. 
``` 

Bạn cũng có thể chọn tác nhân từ bộ chọn tác nhân của Giao diện người dùng OpenCode. 

## Định dạng đại lý 

Mỗi tệp tác nhân được tạo chứa: 

```yaml 
--- 
Tên: Lập trình viên Frontend 
Mô tả: Chuyên gia phát triển giao diện người dùng chuyên về công nghệ web hiện đại... 
chế độ: đại lý phụ 
màu sắc: "#00FFFF" 
--- 
``` 

- **chế độ: đại lý phụ** — đại lý có sẵn theo yêu cầu, không hiển thị trong danh sách chu kỳ tab chính 
- **color** — mã hex (các màu được đặt tên từ tệp nguồn sẽ được chuyển đổi tự động) 

## Dự án vs Toàn cầu 

Các tác nhân trong `.opencode/agents/` thuộc **phạm vi dự án**. Để làm cho chúng có sẵn 
trên toàn cầu trên tất cả các dự án, sao chép chúng vào thư mục cấu hình OpenCode của bạn: 

``` bash 
mkdir -p ~/.config/opencode/agents 
tích hợp cp/opencode/agents/*.md ~/.config/opencode/agents/ 
``` 

## Tái tạo 

``` bash 
./scripts/convert.sh --mã mở công cụ 
```

---

> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.
