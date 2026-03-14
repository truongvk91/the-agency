# Tích hợp OpenClaw 

Các tác nhân OpenClaw được cài đặt dưới dạng không gian làm việc chứa `SOUL.md`, `AGENTS.md`, 
và các tệp `IDENTITY.md`. Trình cài đặt sao chép từng không gian làm việc vào 
`~/.openclaw/agency-agents/` và đăng ký nó khi CLI `openclaw` được kích hoạt 
có sẵn. 

Trước khi cài đặt, hãy tạo không gian làm việc OpenClaw: 

``` bash 
./scripts/convert.sh --tool openclaw 
``` 

## Cài đặt 

``` bash 
./scripts/install.sh --tool openclaw 
``` 

## Kích hoạt Đại lý 

Sau khi cài đặt, các tác nhân có sẵn bởi `agentId` trong các phiên OpenClaw. 

Nếu cổng OpenClaw đang chạy, hãy khởi động lại nó sau khi cài đặt: 

``` bash 
khởi động lại cổng openclaw 
``` 

## Tái tạo 

``` bash 
./scripts/convert.sh --tool openclaw 
```

---

> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.
