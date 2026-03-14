# Tích hợp bộ nhớ MCP 

> Cung cấp cho bất kỳ tác nhân bộ nhớ liên tục nào trong các phiên bằng Giao thức bối cảnh mô hình (MCP). 

## Nó làm gì 

Theo mặc định, tổng đài viên trong Đại lý bắt đầu mọi phiên làm việc lại từ đầu. Ngữ cảnh được truyền theo cách thủ công thông qua việc sao chép-dán giữa các tổng đài viên và phiên. Máy chủ bộ nhớ MCP thay đổi điều đó: 

- **Bộ nhớ chéo phiên**: Nhân viên ghi nhớ các quyết định, sản phẩm bàn giao và bối cảnh từ các phiên trước đó 
- **Tính liên tục của quá trình chuyển giao**: Khi một tác nhân chuyển giao cho một tác nhân khác, tác nhân nhận có thể nhớ lại chính xác những gì đã được thực hiện — không cần sao chép-dán 
- **Khôi phục khi thất bại**: Khi kiểm tra QA không thành công hoặc quyết định kiến trúc sai, hãy quay lại trạng thái đã biết thay vì bắt đầu lại 

## Thiết lập 

Bạn cần một máy chủ MCP cung cấp các công cụ bộ nhớ: `remember`, `recall`, `rollback` và `search`. Thêm nó vào cấu hình máy khách MCP của bạn (Mã Claude, Con trỏ, v.v.): 

```json 
{ 
"McpServers": { 
"ký ức": { 
"lệnh": "máy chủ-mcp-bộ nhớ của bạn", 
"args": [] 
} 
} 
} 
``` 

Bất kỳ máy chủ MCP nào hiển thị các công cụ `remember`, `recall`, `rollback` và `search` sẽ hoạt động. Kiểm tra [hệ sinh thái MCP](https://modelcontextprotocol.io) để biết các phương án triển khai có sẵn. 

## Cách thêm bộ nhớ cho bất kỳ tác nhân nào 

Để nâng cao tác nhân hiện có bằng bộ nhớ liên tục, hãy thêm phần **Tích hợp bộ nhớ** vào lời nhắc của tác nhân. Phần này hướng dẫn tác nhân sử dụng các công cụ bộ nhớ MCP vào những thời điểm quan trọng. 

### Mẫu 

``` đánh dấu 
## Tích hợp bộ nhớ 

Khi bạn bắt đầu một phiên: 
- Nhớ lại bối cảnh có liên quan từ các phiên trước bằng cách sử dụng vai trò của bạn và dự án hiện tại làm thuật ngữ tìm kiếm 
- Xem lại bất kỳ kỷ niệm nào được gắn thẻ với tên đại lý của bạn để tiếp tục nơi bạn đã dừng lại 

Khi bạn đưa ra các quyết định quan trọng hoặc hoàn thành các sản phẩm bàn giao: 
- Ghi nhớ quyết định hoặc phân phối bằng thẻ mô tả (tên đại lý của bạn, dự án, chủ đề) 
- Bao gồm đủ ngữ cảnh để phiên trong tương lai — hoặc một tổng đài viên khác — có thể hiểu điều gì đã được thực hiện và tại sao 

Khi bàn giao cho đại lý khác: 
- Ghi nhớ các sản phẩm giao hàng của bạn được gắn thẻ cho đại lý nhận hàng 
- Bao gồm siêu dữ liệu bàn giao: những gì bạn đã hoàn thành, những gì đang chờ xử lý và những gì nhân viên tiếp theo cần biết 

Khi có sự cố và bạn cần khôi phục: 
- Tìm kiếm trạng thái tốt được biết đến cuối cùng 
- Sử dụng rollback để khôi phục về thời điểm đó thay vì phải xây dựng lại từ đầu 
``` 

### Tác nhân làm gì với cái này 

LLM sẽ tự động sử dụng các công cụ bộ nhớ MCP khi được cung cấp các hướng dẫn sau: 

- `remember` — lưu trữ ảnh chụp nhanh về quyết định, kết quả phân phối hoặc bối cảnh bằng thẻ 
- `recall` — tìm kiếm những ký ức liên quan theo từ khóa, thẻ hoặc sự tương đồng về ngữ nghĩa 
- `rollback` — trở lại trạng thái trước đó khi có sự cố 
- `search` — tìm những ký ức cụ thể qua các phiên và tác nhân 

Không có thay đổi mã nào đối với các tập tin tác nhân. Không có lệnh gọi API nào để viết. Các công cụ MCP xử lý mọi thứ. 

## Ví dụ: Nâng cao Kiến trúc sư phụ trợ 

Xem [backend-architect-with-memory.md](backend-architect-with-memory.md) để biết ví dụ hoàn chỉnh — tác nhân Kiến trúc sư phụ trợ tiêu chuẩn có thêm phần Tích hợp bộ nhớ. 

## Ví dụ: Quy trình làm việc dựa trên bộ nhớ 

Xem [../../examples/workflow-with-memory.md](../../examples/workflow-with-memory.md) để biết quy trình làm việc của Startup MVP được cải tiến với bộ nhớ liên tục, cho thấy cách các tác nhân chuyển ngữ cảnh qua bộ nhớ thay vì sao chép-dán. 

## Mẹo 

- **Gắn thẻ nhất quán**: Sử dụng tên tác nhân và tên dự án làm thẻ trên mọi bộ nhớ. Điều này làm cho việc thu hồi trở nên đáng tin cậy. 
- **Hãy để LLM quyết định điều gì quan trọng**: Các hướng dẫn về bộ nhớ là hướng dẫn chứ không phải các quy tắc cứng nhắc. LLM sẽ tìm ra thời điểm cần nhớ và những gì cần nhớ. 
- **Quay ngược là tính năng tuyệt vời**: Khi Trình kiểm tra thực tế không thực hiện được, tác nhân ban đầu có thể quay lại điểm kiểm tra cuối cùng thay vì cố gắng hoàn tác các thay đổi theo cách thủ công.

---

> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.
