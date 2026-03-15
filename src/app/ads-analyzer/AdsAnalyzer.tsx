"use client";

import { useState } from "react";
import { Copy, Check, ExternalLink, ArrowRight, ArrowLeft, Search, Zap, TrendingUp } from "lucide-react";

const STEPS = [
  { id: 1, label: "Thu Thập", icon: "📥" },
  { id: 2, label: "Phân Tích", icon: "🔍" },
  { id: 3, label: "Tối Ưu", icon: "🚀" },
];

export default function AdsAnalyzer() {
  const [step, setStep] = useState(1);
  const [competitorName, setCompetitorName] = useState("");
  const [adCopy, setAdCopy] = useState("");
  const [visualDesc, setVisualDesc] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [analysisResult, setAnalysisResult] = useState("");
  const [copied, setCopied] = useState(false);

  const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleCopy = async (text: string) => {
    try { await navigator.clipboard.writeText(text); }
    catch { const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta); }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLaunchAI = async (url: string, text: string) => {
    await handleCopy(text);
    setTimeout(() => {
      if (isMobile()) window.location.href = url;
      else window.open(url, "_blank");
    }, 500);
  };

  const generateAnalysisPrompt = (): string => {
    return `# 🔍 Phân Tích Ads Đối Thủ

## Thông tin quảng cáo
- **Đối thủ:** ${competitorName || "[Chưa nhập]"}
- **Nội dung quảng cáo (Copy):**
${adCopy || "[Chưa nhập]"}

- **Mô tả hình ảnh/video:**
${visualDesc || "[Chưa nhập]"}

${extraInfo ? `- **Thông tin bổ sung:** ${extraInfo}` : ""}

## Yêu cầu phân tích
Hãy phân tích quảng cáo trên theo 7 khía cạnh:

1. **🎨 Chiến lược Visual** — Đánh giá thiết kế, composition, color psychology
2. **✍️ Phân tích Copy** — Hook, body, CTA, emotional triggers, power words
3. **👥 Customer Insight** — Target audience, pain points, desires được khai thác
4. **💰 Phân tích Offer** — Giá trị đề xuất, urgency, scarcity elements
5. **💪 Điểm mạnh** — Top 3 yếu tố hiệu quả nhất
6. **⚠️ Điểm yếu** — Top 3 yếu tố cần cải thiện
7. **📊 Chấm điểm tổng quan** — Đánh giá /50 điểm theo 5 tiêu chí (Visual 10đ, Copy 10đ, Targeting 10đ, Offer 10đ, Overall 10đ)

Format output đẹp, dễ đọc, có emoji và headers rõ ràng.`;
  };

  const generateOptimizePrompt = (): string => {
    return `# 🚀 Tối Ưu Ads — Tạo Phiên Bản Vượt Trội

## Kết quả phân tích đối thủ (${competitorName}):
${analysisResult || "[Paste kết quả phân tích vào đây]"}

## Yêu cầu
Dựa trên phân tích trên, hãy tạo **3 phiên bản quảng cáo mới** vượt trội hơn đối thủ:

### Phiên bản 1: "Safe" — Cải thiện trực tiếp
- Giữ format tương tự nhưng fix các điểm yếu
- Tối ưu copy và CTA

### Phiên bản 2: "Bold" — Khác biệt hóa
- Approach hoàn toàn mới
- Hook mạnh hơn, angle độc đáo

### Phiên bản 3: "Viral" — Tối đa tương tác
- Focus engagement và shareability
- Format trending (meme, UGC style, storytelling)

**Cho mỗi phiên bản, cung cấp:**
1. Headline
2. Primary text (150-300 ký tự)
3. CTA button text
4. Gợi ý visual/creative direction
5. Estimated performance vs đối thủ`;
  };

  const analysisPrompt = generateAnalysisPrompt();
  const optimizePrompt = generateOptimizePrompt();

  return (
    <div className="tool-page">
      <div className="tool-page-header">
        <div>
          <h1 className="tool-page-title">
            <Search size={28} />
            <span>Ads Analyzer</span>
          </h1>
          <p className="tool-page-subtitle">Thu thập → Phân tích → Tối ưu ads đối thủ</p>
        </div>
      </div>

      {/* Steps Progress */}
      <div className="aa-steps">
        {STEPS.map((s, i) => (
          <div key={s.id} className="aa-step-wrapper">
            <button
              className={`aa-step ${step === s.id ? "active" : ""} ${step > s.id ? "completed" : ""}`}
              onClick={() => setStep(s.id)}
            >
              <div className="aa-step-circle">
                {step > s.id ? <Check size={16} /> : s.id}
              </div>
              <span className="aa-step-label">{s.label}</span>
            </button>
            {i < STEPS.length - 1 && <div className="aa-step-connector" />}
          </div>
        ))}
      </div>

      {/* Step 1: Collect */}
      {step === 1 && (
        <div className="aa-panel">
          <div className="aa-panel-info">
            <h2>📥 Bước 1: Thu thập thông tin ads đối thủ</h2>
            <p>Cào ads từ Facebook Ad Library hoặc các nguồn khác, paste vào đây.</p>
          </div>

          <div className="tool-form-group">
            <label className="tool-form-label">Tên đối thủ</label>
            <input className="tool-form-input" placeholder="VD: Nike Vietnam" value={competitorName} onChange={(e) => setCompetitorName(e.target.value)} />
          </div>

          <div className="tool-form-group">
            <label className="tool-form-label">Nội dung quảng cáo (Copy)</label>
            <textarea className="tool-form-textarea" placeholder="Paste toàn bộ text copy của ads đối thủ..." rows={6} value={adCopy} onChange={(e) => setAdCopy(e.target.value)} />
          </div>

          <div className="tool-form-group">
            <label className="tool-form-label">Mô tả hình ảnh / video</label>
            <textarea className="tool-form-textarea" placeholder="Mô tả visual: bố cục, màu sắc, sản phẩm, model..." rows={4} value={visualDesc} onChange={(e) => setVisualDesc(e.target.value)} />
          </div>

          <div className="tool-form-group">
            <label className="tool-form-label">Thông tin bổ sung (tuỳ chọn)</label>
            <input className="tool-form-input" placeholder="URL, industry, target audience..." value={extraInfo} onChange={(e) => setExtraInfo(e.target.value)} />
          </div>

          <div className="aa-panel-actions">
            <button className="tool-btn-primary" onClick={() => setStep(2)} disabled={!adCopy.trim()}>
              <span>Phân Tích</span> <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Analyze */}
      {step === 2 && (
        <div className="aa-panel">
          <div className="aa-panel-info">
            <h2>🔍 Bước 2: Phân tích chi tiết</h2>
            <p>Copy prompt bên dưới → Paste vào Gemini/ChatGPT → Paste kết quả vào bước 3</p>
          </div>

          <div className="aa-prompt-box">
            <div className="aa-prompt-header">
              <h3>Prompt Phân Tích</h3>
              <span className="aa-prompt-chars">{analysisPrompt.length.toLocaleString()} ký tự</span>
            </div>
            <pre className="aa-prompt-content">{analysisPrompt}</pre>
          </div>

          <div className="aa-launch-actions">
            <button className={`tool-btn-primary ${copied ? "copied" : ""}`} onClick={() => handleCopy(analysisPrompt)}>
              {copied ? <><Check size={16} /><span>Đã copy!</span></> : <><Copy size={16} /><span>Copy Prompt</span></>}
            </button>
            <button className="tool-btn-gemini" onClick={() => handleLaunchAI("https://gemini.google.com/app", analysisPrompt)}>
              <ExternalLink size={16} /> Gemini
            </button>
            <button className="tool-btn-chatgpt" onClick={() => handleLaunchAI("https://chatgpt.com", analysisPrompt)}>
              <ExternalLink size={16} /> ChatGPT
            </button>
          </div>

          <div className="aa-panel-actions" style={{ marginTop: "24px" }}>
            <button className="tool-btn-ghost" onClick={() => setStep(1)}>
              <ArrowLeft size={16} /> Quay lại
            </button>
            <button className="tool-btn-primary" onClick={() => setStep(3)}>
              <span>Tối Ưu</span> <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Optimize */}
      {step === 3 && (
        <div className="aa-panel">
          <div className="aa-panel-info">
            <h2>🚀 Bước 3: Tạo phiên bản tối ưu</h2>
            <p>Paste kết quả phân tích từ AI → Generate prompt tối ưu</p>
          </div>

          <div className="tool-form-group">
            <label className="tool-form-label">Kết quả phân tích (paste từ Gemini/ChatGPT)</label>
            <textarea
              className="tool-form-textarea"
              placeholder="Paste kết quả phân tích mà AI đã trả về ở bước 2..."
              rows={8}
              value={analysisResult}
              onChange={(e) => setAnalysisResult(e.target.value)}
            />
          </div>

          <div className="aa-prompt-box">
            <div className="aa-prompt-header">
              <h3>Prompt Tối Ưu</h3>
              <span className="aa-prompt-chars">{optimizePrompt.length.toLocaleString()} ký tự</span>
            </div>
            <pre className="aa-prompt-content">{optimizePrompt}</pre>
          </div>

          <div className="aa-launch-actions">
            <button className={`tool-btn-primary ${copied ? "copied" : ""}`} onClick={() => handleCopy(optimizePrompt)}>
              {copied ? <><Check size={16} /><span>Đã copy!</span></> : <><Copy size={16} /><span>Copy Prompt</span></>}
            </button>
            <button className="tool-btn-gemini" onClick={() => handleLaunchAI("https://gemini.google.com/app", optimizePrompt)}>
              <ExternalLink size={16} /> Gemini
            </button>
            <button className="tool-btn-chatgpt" onClick={() => handleLaunchAI("https://chatgpt.com", optimizePrompt)}>
              <ExternalLink size={16} /> ChatGPT
            </button>
          </div>

          <div className="aa-panel-actions" style={{ marginTop: "24px" }}>
            <button className="tool-btn-ghost" onClick={() => setStep(2)}>
              <ArrowLeft size={16} /> Quay lại
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
