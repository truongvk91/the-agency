# Tích hợp phản trọng lực 

Cài đặt tất cả 61 đặc vụ của Đại lý làm kỹ năng Chống trọng lực. Mỗi tác nhân đều có tiền tố 
với `agency-` để tránh xung đột với các kỹ năng hiện có. 

## Cài đặt 

``` bash 
./scripts/install.sh --tool phản trọng lực 
``` 

Việc này sao chép các tập tin từ `integrations/antirabity/` sang 
`~/.gemini/anti Gravity/skills/`. 

## Kích hoạt kỹ năng 

Trong AntiGravity, kích hoạt một tác nhân bằng con sên của nó: 

``` 
Sử dụng kỹ năng của nhà phát triển giao diện người dùng đại lý để xem xét thành phần này. 
``` 

Các sên có sẵn tuân theo mẫu `đại lý-<tên tác nhân>`, ví dụ: 
- `đại lý-frontend-nhà phát triển` 
- `đại lý-phụ trợ-kiến trúc sư` 
- `cơ quan-kiểm tra thực tế` 
- `hacker tăng trưởng đại lý` 

## Tái tạo 

Sau khi sửa đổi tác nhân, hãy tạo lại các tệp kỹ năng: 

``` bash 
./scripts/convert.sh --tool phản trọng lực 
``` 

## Định dạng tệp 

Mỗi kỹ năng là một tệp `SKILL.md` với phần đầu tương thích với AntiGravity: 

```yaml 
--- 
Tên: đại lý-frontend-nhà phát triển 
Mô tả: Chuyên gia phát triển giao diện người dùng chuyên về... 
rủi ro: thấp 
nguồn: cộng đồng 
date_add: '2026-03-08' 
--- 
```

---

> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.
