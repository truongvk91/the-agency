# Tích hợp trợ giúp 

Tất cả 61 đại lý Đại lý được hợp nhất thành một tệp `CONVENTIONS.md` duy nhất. 
Aider tự động đọc tệp này khi nó có trong thư mục gốc dự án của bạn. 

## Cài đặt 

``` bash 
# Chạy từ gốc dự án của bạn 
cd /của bạn/dự án 
/path/to/agency-agents/scripts/install.sh --tool aider 
``` 

## Kích hoạt Đại lý 

Trong phiên Aider của bạn, hãy tham khảo tác nhân theo tên: 

``` 
Sử dụng tác nhân Frontend Developer để cấu trúc lại thành phần này. 
``` 

``` 
Áp dụng tác nhân Trình kiểm tra thực tế để xác minh rằng tác nhân này đã sẵn sàng để sản xuất. 
``` 

## Sử dụng thủ công 

Bạn cũng có thể truyền trực tiếp tệp quy ước: 

``` bash 
trợ giúp --đọc CONVENTIONS.md 
``` 

## Tái tạo 

``` bash 
./scripts/convert.sh --tool trợ giúp 
```

---

> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.
