# Tích hợp CLI của Gemini 

Đóng gói tất cả 61 đại lý Đại lý dưới dạng tiện ích mở rộng Gemini CLI. Phần mở rộng 
cài đặt vào `~/.gemini/extensions/agency-agents/`. 

## Cài đặt 

``` bash 
# Trước tiên hãy tạo tệp tích hợp Gemini CLI 
./scripts/convert.sh --tool gemini-cli 

# Sau đó cài đặt tiện ích mở rộng 
./scripts/install.sh --tool gemini-cli 
``` 

## Kích hoạt kỹ năng 

Trong Gemini CLI, hãy tham chiếu một tác nhân theo tên: 

``` 
Sử dụng kỹ năng của nhà phát triển giao diện người dùng để giúp tôi xây dựng giao diện người dùng này. 
``` 

## Cấu trúc mở rộng 

``` 
~/.gemini/extensions/agency-agent/ 
gemini-extension.json 
kỹ năng/ 
frontend-developer/SKILL.md 
kiến trúc sư phụ trợ/SKILL.md 
người kiểm tra thực tế/SKILL.md 
... 
``` 

## Tái tạo 

``` bash 
./scripts/convert.sh --tool gemini-cli 
```

---

> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.
