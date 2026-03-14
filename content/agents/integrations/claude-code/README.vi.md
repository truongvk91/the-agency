# Tích hợp mã Claude 

Cơ quan được xây dựng cho Mã Claude. Không cần chuyển đổi - đại lý làm việc 
vốn có định dạng frontmatter `.md` + YAML hiện có. 

## Cài đặt 

``` bash 
# Sao chép tất cả các đại lý vào thư mục đại lý Claude Code của bạn 
./scripts/install.sh --tool claude-code 

# Hoặc sao chép thủ công một danh mục 
cp Engineering/*.md ~/.claude/agents/ 
``` 

## Kích hoạt Đại lý 

Trong bất kỳ phiên Mã Claude nào, hãy tham chiếu một đại lý theo tên: 

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
