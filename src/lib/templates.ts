// Marketing Content Templates
export interface ContentTemplate {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string;
  prompt: string;
}

export const contentTemplates: ContentTemplate[] = [
  {
    id: "facebook-ads",
    name: "Bài Quảng Cáo Facebook",
    icon: "📘",
    category: "ads",
    description: "Tạo copy quảng cáo Facebook thu hút, tối ưu CTR và conversion",
    prompt: `Bạn là chuyên gia viết Facebook Ads Copy. Hãy tạo bài quảng cáo Facebook cho sản phẩm/dịch vụ sau:

**Sản phẩm/Dịch vụ:** [Tên sản phẩm]
**Đối tượng mục tiêu:** [Mô tả khách hàng]
**Mục tiêu quảng cáo:** [Awareness/Traffic/Conversion]
**Tone of voice:** [Professional/Casual/Urgent]

Yêu cầu output:
1. **3 phiên bản headline** (mỗi cái dưới 40 ký tự)
2. **Primary text** (150-300 ký tự, có hook mạnh)
3. **Description** (dưới 30 ký tự)
4. **CTA phù hợp**
5. **Gợi ý hình ảnh/video**`,
  },
  {
    id: "tiktok-script",
    name: "Kịch Bản TikTok",
    icon: "🎵",
    category: "video",
    description: "Viết kịch bản video TikTok viral với hook mạnh",
    prompt: `Bạn là chuyên gia sáng tạo nội dung TikTok. Hãy viết kịch bản video TikTok:

**Chủ đề:** [Chủ đề video]
**Thời lượng:** [15s / 30s / 60s]
**Phong cách:** [Hài hước / Giáo dục / Storytelling / Review]
**Sản phẩm/Thương hiệu:** [Tên]

Yêu cầu output:
1. **Hook (3 giây đầu)** — câu mở đầu giữ chân người xem
2. **Nội dung chính** — script từng giây
3. **CTA cuối video**
4. **Gợi ý âm nhạc/trend**
5. **Hashtags đề xuất**
6. **Caption cho bài đăng**`,
  },
  {
    id: "email-sequence",
    name: "Chuỗi Email Marketing",
    icon: "📧",
    category: "email",
    description: "Tạo chuỗi email nurture chuyển đổi leads thành khách hàng",
    prompt: `Bạn là chuyên gia Email Marketing. Hãy tạo chuỗi email:

**Mục đích:** [Welcome / Nurture / Re-engagement / Sales]
**Sản phẩm/Dịch vụ:** [Tên]
**Đối tượng:** [Mô tả]
**Số lượng email:** [3-7 emails]

Yêu cầu cho MỖI email:
1. **Subject line** (dưới 50 ký tự, tối ưu open rate)
2. **Preview text**
3. **Body content** (ngắn gọn, scannable)
4. **CTA chính**
5. **Thời gian gửi** (ngày thứ mấy trong sequence)`,
  },
  {
    id: "blog-seo",
    name: "Bài Viết Blog SEO",
    icon: "📝",
    category: "content",
    description: "Viết bài blog chuẩn SEO, tối ưu cho top Google",
    prompt: `Bạn là chuyên gia Content SEO. Hãy viết bài blog tối ưu SEO:

**Từ khóa chính:** [Keyword]
**Từ khóa phụ:** [Secondary keywords]
**Độ dài:** [1500-3000 từ]
**Đối tượng đọc:** [Mô tả]

Yêu cầu output:
1. **Title tag** (55-60 ký tự, chứa keyword)
2. **Meta description** (150-160 ký tự)
3. **Outline** (H2, H3 headers)
4. **Bài viết đầy đủ** với internal linking suggestions
5. **Schema markup đề xuất**`,
  },
  {
    id: "competitor-report",
    name: "Báo Cáo Phân Tích Đối Thủ",
    icon: "🔍",
    category: "analysis",
    description: "Phân tích chiến lược marketing của đối thủ cạnh tranh",
    prompt: `Bạn là chuyên gia phân tích cạnh tranh. Hãy phân tích đối thủ:

**Đối thủ:** [Tên + URL]
**Ngành nghề:** [Industry]
**Thương hiệu của tôi:** [Tên]

Phân tích các khía cạnh:
1. **Positioning & Messaging** — USP, tone, target audience
2. **Content Strategy** — channels, frequency, content types
3. **Paid Media** — ad platforms, ad formats, estimated spend
4. **SEO** — top keywords, domain authority, content gaps
5. **Social Media** — platforms, engagement rate, follower growth
6. **Strengths & Weaknesses**
7. **Cơ hội cho thương hiệu của tôi**`,
  },
  {
    id: "weekly-report",
    name: "Báo Cáo Tuần",
    icon: "📊",
    category: "report",
    description: "Tạo template báo cáo marketing hàng tuần cho client/team",
    prompt: `Bạn là Marketing Manager. Hãy tạo báo cáo tuần:

**Thương hiệu:** [Tên]
**Tuần:** [Ngày bắt đầu - Ngày kết thúc]
**Channels đang chạy:** [Facebook, Google, TikTok...]

Template báo cáo gồm:
1. **Executive Summary** (3-5 dòng tóm tắt)
2. **KPIs Overview** — Reach, Impressions, Clicks, CTR, CPC, Conversions, ROAS
3. **Channel Performance** — breakdown từng kênh
4. **Top Performing Content/Ads**
5. **Budget Utilization** — spent vs. planned
6. **Insights & Learnings**
7. **Action Items cho tuần sau**
8. **Recommendations**`,
  },
  {
    id: "customer-persona",
    name: "Customer Persona",
    icon: "👤",
    category: "strategy",
    description: "Xây dựng chân dung khách hàng mục tiêu chi tiết",
    prompt: `Bạn là Customer Research Specialist. Hãy xây dựng Customer Persona:

**Sản phẩm/Dịch vụ:** [Tên]
**Ngành nghề:** [Industry]
**Thị trường:** [Việt Nam / Global]

Tạo persona gồm:
1. **Demographics** — tên, tuổi, giới tính, thu nhập, vị trí
2. **Psychographics** — giá trị, sở thích, lifestyle
3. **Pain Points** — 5 vấn đề chính
4. **Goals & Motivations**
5. **Buying Behavior** — research habits, decision factors
6. **Media Consumption** — platforms, content types
7. **Brand Affinity** — thương hiệu yêu thích
8. **Marketing Message** — thông điệp phù hợp`,
  },
  {
    id: "landing-page",
    name: "Landing Page Copy",
    icon: "🌐",
    category: "content",
    description: "Viết copy landing page chuyển đổi cao",
    prompt: `Bạn là Conversion Copywriter. Hãy viết landing page copy:

**Sản phẩm/Dịch vụ:** [Tên]
**Mục tiêu:** [Lead gen / Sales / Signup]
**Đối tượng:** [Mô tả]

Yêu cầu sections:
1. **Hero Section** — Headline + Sub-headline + CTA
2. **Problem/Pain Points** (3-5 pain points)
3. **Solution** — Cách sản phẩm giải quyết
4. **Features & Benefits** (icon + text format)
5. **Social Proof** — testimonials, số liệu
6. **Pricing/Offer**
7. **FAQ** (5-7 câu hỏi)
8. **Final CTA** — urgency + scarcity`,
  },
];

// Strategy Templates
export interface StrategyTemplate {
  id: string;
  name: string;
  icon: string;
  description: string;
  agentNames: string[];
  fields: { label: string; placeholder: string; type: "input" | "textarea" | "select" }[];
}

export const strategyTemplates: StrategyTemplate[] = [
  {
    id: "marketing-plan",
    name: "Marketing Plan",
    icon: "📋",
    description: "Kế hoạch marketing tổng thể cho quý/năm",
    agentNames: ["Growth Hacker", "Content Creator", "SEO Specialist"],
    fields: [
      { label: "Thương hiệu", placeholder: "Tên thương hiệu", type: "input" },
      { label: "Mục tiêu", placeholder: "VD: Tăng 30% doanh thu Q2", type: "input" },
      { label: "Đối tượng", placeholder: "Mô tả khách hàng mục tiêu", type: "input" },
      { label: "Ngân sách", placeholder: "VD: 50 triệu/tháng", type: "input" },
      { label: "Chi tiết bổ sung", placeholder: "Thông tin thêm...", type: "textarea" },
    ],
  },
  {
    id: "gtm-strategy",
    name: "Go-To-Market Strategy",
    icon: "🚀",
    description: "Chiến lược ra mắt sản phẩm/dịch vụ mới",
    agentNames: ["Growth Hacker", "PPC Strategist", "Content Creator"],
    fields: [
      { label: "Sản phẩm mới", placeholder: "Tên sản phẩm", type: "input" },
      { label: "USP", placeholder: "Điểm khác biệt chính", type: "input" },
      { label: "Thị trường mục tiêu", placeholder: "VD: Gen Z Việt Nam", type: "input" },
      { label: "Timeline", placeholder: "VD: 3 tháng", type: "input" },
      { label: "Chi tiết", placeholder: "Mô tả chi tiết...", type: "textarea" },
    ],
  },
  {
    id: "social-audit",
    name: "Social Media Audit",
    icon: "📱",
    description: "Đánh giá toàn diện hiệu quả social media",
    agentNames: ["Social Media Strategist", "Instagram Curator", "TikTok Strategist"],
    fields: [
      { label: "Thương hiệu", placeholder: "Tên thương hiệu", type: "input" },
      { label: "Platforms", placeholder: "Facebook, Instagram, TikTok...", type: "input" },
      { label: "Followers hiện tại", placeholder: "VD: FB 10K, IG 5K", type: "input" },
      { label: "Mục tiêu", placeholder: "VD: Tăng engagement 20%", type: "input" },
    ],
  },
  {
    id: "weekly-report",
    name: "Weekly Report",
    icon: "📊",
    description: "Báo cáo hiệu quả marketing tuần",
    agentNames: ["Data Analyst", "PPC Strategist"],
    fields: [
      { label: "Thương hiệu", placeholder: "Tên thương hiệu", type: "input" },
      { label: "Tuần", placeholder: "VD: 10-16/03/2026", type: "input" },
      { label: "Channels", placeholder: "Facebook Ads, Google Ads...", type: "input" },
      { label: "KPIs chính", placeholder: "Spend, ROAS, CPA...", type: "textarea" },
    ],
  },
  {
    id: "paid-media-plan",
    name: "Paid Media Plan",
    icon: "💰",
    description: "Kế hoạch quảng cáo trả phí chi tiết",
    agentNames: ["PPC Strategist", "Growth Hacker"],
    fields: [
      { label: "Thương hiệu", placeholder: "Tên thương hiệu", type: "input" },
      { label: "Ngân sách", placeholder: "VD: 100 triệu/tháng", type: "input" },
      { label: "Platforms", placeholder: "Facebook, Google, TikTok...", type: "input" },
      { label: "Mục tiêu", placeholder: "VD: 500 leads/tháng, CPA < 50K", type: "input" },
      { label: "Chi tiết", placeholder: "Thông tin bổ sung...", type: "textarea" },
    ],
  },
  {
    id: "competitor-intel",
    name: "Competitor Intelligence",
    icon: "🕵️",
    description: "Phân tích đối thủ cạnh tranh toàn diện",
    agentNames: ["Growth Hacker", "SEO Specialist", "Content Creator"],
    fields: [
      { label: "Đối thủ chính", placeholder: "Tên + URL đối thủ", type: "input" },
      { label: "Ngành nghề", placeholder: "VD: E-commerce thời trang", type: "input" },
      { label: "Thương hiệu của tôi", placeholder: "Tên thương hiệu", type: "input" },
      { label: "Điểm muốn phân tích", placeholder: "SEO, ads, content...", type: "textarea" },
    ],
  },
  {
    id: "content-calendar",
    name: "Content Calendar",
    icon: "📅",
    description: "Lịch nội dung marketing tháng/quý",
    agentNames: ["Content Creator", "Social Media Strategist", "TikTok Strategist"],
    fields: [
      { label: "Thương hiệu", placeholder: "Tên thương hiệu", type: "input" },
      { label: "Thời gian", placeholder: "VD: Tháng 4/2026", type: "input" },
      { label: "Platforms", placeholder: "Facebook, Instagram, TikTok, Blog...", type: "input" },
      { label: "Chủ đề/Events", placeholder: "VD: Easter, Women's Day...", type: "textarea" },
    ],
  },
  {
    id: "brand-guidelines",
    name: "Brand Guidelines",
    icon: "🎨",
    description: "Quy chuẩn thương hiệu và tone of voice",
    agentNames: ["Content Creator", "Brand Strategist"],
    fields: [
      { label: "Thương hiệu", placeholder: "Tên thương hiệu", type: "input" },
      { label: "Ngành nghề", placeholder: "VD: F&B, Tech, Fashion...", type: "input" },
      { label: "Giá trị cốt lõi", placeholder: "VD: Innovation, Trust, Fun", type: "input" },
      { label: "Đối tượng", placeholder: "Mô tả khách hàng", type: "input" },
    ],
  },
];

// Category labels
export const contentCategories = [
  { id: "all", label: "Tất cả", icon: "📦" },
  { id: "ads", label: "Ads", icon: "📢" },
  { id: "video", label: "Video", icon: "🎬" },
  { id: "email", label: "Email", icon: "📧" },
  { id: "content", label: "Content", icon: "✍️" },
  { id: "analysis", label: "Analysis", icon: "🔍" },
  { id: "report", label: "Report", icon: "📊" },
  { id: "strategy", label: "Strategy", icon: "🎯" },
];
