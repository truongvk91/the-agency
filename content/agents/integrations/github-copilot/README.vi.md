# Tích hợp phi công phụ GitHub 

Cơ quan làm việc ngay với GitHub Copilot. Không cần chuyển đổi - 
các tác nhân sử dụng định dạng frontmatter `.md` + YAML hiện có. 

## Cài đặt 

``` bash 
# Sao chép tất cả các tác nhân vào thư mục tác nhân GitHub Copilot của bạn 
./scripts/install.sh --tool phi công phụ 

# Hoặc sao chép thủ công một danh mục 
cp Engineering/*.md ~/.github/agents/ 
``` 

## Kích hoạt Đại lý 

Trong bất kỳ phiên GitHub Copilot nào, hãy tham chiếu tác nhân theo tên: 

``` 
Kích hoạt Frontend Developer và giúp tôi xây dựng thành phần React. 
``` 

``` 
Sử dụng tác nhân Trình kiểm tra thực tế để xác minh tính năng này đã sẵn sàng để sản xuất. 
``` 

## Danh mục đại lý 

Các đại lý được tổ chức thành các bộ phận. Xem [README chính](../../README.md) để biết 
danh sách đầy đủ hiện tại.

---

> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.
