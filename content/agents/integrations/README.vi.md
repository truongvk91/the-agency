---
name: Agent
---

# 🔌 Tích hợp 

Thư mục này chứa các phần tích hợp của Cơ quan và các định dạng được chuyển đổi cho 
các công cụ mã hóa tác nhân được hỗ trợ. 

## Công cụ được hỗ trợ 

- **[Claude Code](#claude-code)** — Đại lý `.md`, sử dụng repo trực tiếp 
- **[GitHub Copilot](#github-copilot)** — Đại lý `.md`, sử dụng repo trực tiếp 
- **[Phản trọng lực](#chống hấp dẫn)** — `SKILL.md` cho mỗi tác nhân trong `phản trọng lực/` 
- **[Gemini CLI](#gemini-cli)** — phần mở rộng + tệp `SKILL.md` trong `gemini-cli/` 
- **[OpenCode](#opencode)** — Tệp tác nhân `.md` trong `opencode/` 
- **[OpenClaw](#openclaw)** — `SOUL.md` + `AGENTS.md` + `IDENTITY.md` không gian làm việc 
- **[Cursor](#cursor)** — Các tệp quy tắc `.mdc` trong `cursor/` 
- **[Aider](#aider)** — `CONVENTIONS.md` trong `aider/` 
- **[Lướt ván buồm](#windsurf)** — `.windsurfrules` trong `lướt ván/` 

## Cài đặt nhanh 

``` bash 
# Tự động cài đặt cho tất cả các công cụ được phát hiện 
./scripts/install.sh 

# Cài đặt một công cụ cụ thể dành cho phạm vi gia đình 
./scripts/install.sh --tool phản trọng lực 
./scripts/install.sh --tool phi công phụ 
./scripts/install.sh --tool openclaw 
./scripts/install.sh --tool claude-code 

# Gemini CLI cần các tệp tích hợp được tạo trên một bản sao mới 
./scripts/convert.sh --tool gemini-cli 
./scripts/install.sh --tool gemini-cli 
``` 

Đối với các công cụ dành cho phạm vi dự án như OpenCode, Cursor, Aider và Windsurf, hãy chạy 
trình cài đặt từ thư mục gốc của dự án mục tiêu của bạn như được hiển thị trong phần dành riêng cho công cụ 
phần dưới đây. 

## Tạo lại tập tin tích hợp 

Nếu bạn thêm hoặc sửa đổi tác nhân, hãy tạo lại tất cả các tệp tích hợp: 

``` bash 
./scripts/convert.sh 
``` 

--- 

## Mã Claude 

Cơ quan ban đầu được thiết kế cho Mã Claude. Đại lý làm việc tự nhiên 
không có chuyển đổi. 

``` bash 
cp -r <category>/*.md ~/.claude/agents/ 
# hoặc cài đặt mọi thứ cùng một lúc: 
./scripts/install.sh --tool claude-code 
``` 

Xem [claude-code/README.md](claude-code/README.md) để biết chi tiết. 

--- 

## Phi công phụ GitHub 

Cơ quan cũng hoạt động tự nhiên với GitHub Copilot. Đại lý có thể được sao chép 
trực tiếp vào `~/.github/agents/` mà không cần chuyển đổi. 

``` bash 
./scripts/install.sh --tool phi công phụ 
``` 

Xem [github-copilot/README.md](github-copilot/README.md) để biết chi tiết. 

--- 

## Phản trọng lực 

Các kỹ năng được cài đặt vào `~/.gemini/antiGravity/skills/`. Mỗi đại lý trở thành 
một kỹ năng riêng biệt có tiền tố là `đại lý-` để tránh xung đột tên. 

``` bash 
./scripts/install.sh --tool phản trọng lực 
``` 

Xem [antiGravity/README.md](antiGravity/README.md) để biết chi tiết. 

--- 

## Song Tử CLI 

Đại lý được đóng gói dưới dạng tiện ích mở rộng Gemini CLI với các tệp kỹ năng riêng lẻ. 
Tiện ích mở rộng được cài đặt vào `~/.gemini/extensions/agency-agents/`. 
Bởi vì các thư mục kỹ năng và bảng kê khai Gemini là các tạo phẩm được tạo ra, hãy chạy 
`./scripts/convert.sh --tool gemini-cli` trước khi cài đặt từ bản sao mới. 

``` bash 
./scripts/convert.sh --tool gemini-cli 
./scripts/install.sh --tool gemini-cli 
``` 

Xem [gemini-cli/README.md](gemini-cli/README.md) để biết chi tiết. 

--- 

## Mã mở 

Mỗi tác nhân trở thành một tệp `.md` trong phạm vi dự án trong `.opencode/agents/`. 

``` bash 
cd /your/project && /path/to/agency-agents/scripts/install.sh --mã mở công cụ 
``` 

Xem [opencode/README.md](opencode/README.md) để biết chi tiết. 

--- 

## OpenClaw 

Mỗi tác nhân trở thành một không gian làm việc OpenClaw chứa `SOUL.md`, `AGENTS.md`, 
và `IDENTITY.md`. 

Trước khi cài đặt, hãy tạo không gian làm việc OpenClaw: 

``` bash 
./scripts/convert.sh --tool openclaw 
``` 

Sau đó cài đặt chúng: 

``` bash 
./scripts/install.sh --tool openclaw 
``` 

Xem [openclaw/README.md](openclaw/README.md) để biết chi tiết. 

--- 

## Con trỏ 

Mỗi tác nhân trở thành một tệp quy tắc `.mdc`. Các quy tắc nằm trong phạm vi dự án - hãy chạy 
trình cài đặt từ gốc dự án của bạn. 

``` bash 
cd /your/project && /path/to/agency-agents/scripts/install.sh --con trỏ công cụ 
``` 

Xem [cursor/README.md](cursor/README.md) để biết chi tiết. 

--- 

## Người trợ giúp 

Tất cả các tác nhân được hợp nhất thành một tệp `CONVENTIONS.md` duy nhất mà Aider 
đọc tự động khi có trong thư mục gốc dự án của bạn. 

``` bash 
cd /your/project && /path/to/agency-agents/scripts/install.sh --tool aider 
``` 

Xem [aider/README.md](aider/README.md) để biết chi tiết. 

--- 

## Lướt ván buồm
Tất cả các tác nhân được hợp nhất thành một tệp `.windsurfrules` duy nhất cho bạn 
gốc dự án. 

``` bash 
cd /your/project && /path/to/agency-agents/scripts/install.sh --tool windsurf 
``` 

Xem [windsurf/README.md](windsurf/README.md) để biết chi tiết.

---

> 💡 Nút **Copy Prompt** ở tab "Original Prompt" luôn copy bản tiếng Anh gốc để sử dụng trực tiếp với AI.
