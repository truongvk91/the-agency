# Tích hợp con trỏ 

Chuyển đổi tất cả 61 tác nhân Đại lý thành tệp quy tắc Con trỏ `.mdc`. Quy tắc là 
**dự án trong phạm vi** — cài đặt chúng từ thư mục gốc dự án của bạn. 

## Cài đặt 

``` bash 
# Chạy từ gốc dự án của bạn 
cd /của bạn/dự án 
/path/to/agency-agents/scripts/install.sh --con trỏ công cụ 
``` 

Điều này tạo ra các tệp `.cursor/rules/<agent-slug>.mdc` trong dự án của bạn. 

## Kích hoạt quy tắc 

Trong Con trỏ, hãy tham chiếu một nhân viên hỗ trợ trong lời nhắc của bạn: 

``` 
@ frontend-developer Xem lại thành phần React này để biết các vấn đề về hiệu suất. 
``` 

Hoặc bật quy tắc ở chế độ luôn bật bằng cách chỉnh sửa nội dung chính của quy tắc đó: 

```yaml 
--- 
Mô tả: Chuyên gia phát triển giao diện người dùng... 
toàn cầu: "**/*.tsx,**/*.ts" 
luôn luôn Áp dụng: đúng 
--- 
``` 

## Tái tạo 

``` bash 
./scripts/convert.sh --con trỏ công cụ 
```

---

> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.
