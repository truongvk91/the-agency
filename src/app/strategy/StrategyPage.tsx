"use client";

import { useState } from "react";
import { Copy, Check, ExternalLink, ArrowLeft, Sparkles, BarChart3 } from "lucide-react";
import { strategyTemplates, StrategyTemplate } from "@/lib/templates";

export default function StrategyPage() {
  const [activeTemplate, setActiveTemplate] = useState<StrategyTemplate | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const openTemplate = (template: StrategyTemplate) => {
    setActiveTemplate(template);
    setFormData({});
    setShowPrompt(false);
  };

  const closeTemplate = () => {
    setActiveTemplate(null);
    setFormData({});
    setShowPrompt(false);
  };

  const updateField = (label: string, value: string) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };

  const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const generatePrompt = (): string => {
    if (!activeTemplate) return "";

    let prompt = `# ${activeTemplate.icon} ${activeTemplate.name}\n\n`;
    prompt += `## Thông tin dự án\n`;
    activeTemplate.fields.forEach((field) => {
      const val = formData[field.label] || "[Chưa nhập]";
      prompt += `- **${field.label}:** ${val}\n`;
    });
    prompt += `\n---\n\n`;
    prompt += `## Yêu cầu\n`;
    prompt += `Hãy tạo ${activeTemplate.name} chi tiết và chuyên nghiệp dựa trên thông tin trên.\n\n`;
    prompt += `Yêu cầu output:\n`;
    prompt += `1. **Executive Summary** — Tóm tắt ngắn gọn\n`;
    prompt += `2. **Phân tích hiện trạng** — SWOT hoặc tình hình thị trường\n`;
    prompt += `3. **Chiến lược đề xuất** — Chi tiết từng bước\n`;
    prompt += `4. **Timeline & Milestones** — Lộ trình triển khai\n`;
    prompt += `5. **KPIs & Metrics** — Chỉ số đo lường thành công\n`;
    prompt += `6. **Budget Allocation** — Phân bổ ngân sách (nếu có)\n`;
    prompt += `7. **Risks & Mitigation** — Rủi ro và cách xử lý\n\n`;
    prompt += `Format: Professional, dùng tables và bullet points. Output bằng tiếng Việt.\n`;

    if (activeTemplate.agentNames.length > 0) {
      prompt += `\n## Góc nhìn chuyên gia\n`;
      prompt += `Hãy phân tích từ góc nhìn của: ${activeTemplate.agentNames.join(", ")}.\n`;
    }

    return prompt;
  };

  const handleCopy = async (text: string) => {
    try { await navigator.clipboard.writeText(text); }
    catch { const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta); }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLaunchAI = async (url: string) => {
    const prompt = generatePrompt();
    await handleCopy(prompt);
    setTimeout(() => {
      if (isMobile()) window.location.href = url;
      else window.open(url, "_blank");
    }, 500);
  };

  const prompt = generatePrompt();

  return (
    <div className="tool-page">
      <div className="tool-page-header">
        <div>
          <h1 className="tool-page-title">
            <BarChart3 size={28} />
            <span>Strategy & Reports</span>
          </h1>
          <p className="tool-page-subtitle">
            Xây dựng chiến lược marketing và tạo báo cáo chuyên nghiệp
          </p>
        </div>
      </div>

      {activeTemplate ? (
        <div className="st-workspace">
          <button className="cw-back-btn" onClick={closeTemplate}>
            <ArrowLeft size={16} /> Quay lại templates
          </button>

          <div className="st-workspace-header">
            <span className="st-workspace-icon">{activeTemplate.icon}</span>
            <div>
              <h2>{activeTemplate.name}</h2>
              <p>{activeTemplate.description}</p>
            </div>
          </div>

          {/* Agent suggestions */}
          {activeTemplate.agentNames.length > 0 && (
            <div className="st-agents-suggest">
              <span className="st-agents-label">Agents gợi ý:</span>
              {activeTemplate.agentNames.map((name) => (
                <span key={name} className="st-agent-pill">{name}</span>
              ))}
            </div>
          )}

          {/* Form */}
          <div className="st-form">
            {activeTemplate.fields.map((field) => (
              <div key={field.label} className="tool-form-group">
                <label className="tool-form-label">{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea
                    className="tool-form-textarea"
                    placeholder={field.placeholder}
                    rows={4}
                    value={formData[field.label] || ""}
                    onChange={(e) => updateField(field.label, e.target.value)}
                  />
                ) : (
                  <input
                    className="tool-form-input"
                    placeholder={field.placeholder}
                    value={formData[field.label] || ""}
                    onChange={(e) => updateField(field.label, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="st-generate">
            <button className="tool-btn-primary" onClick={() => setShowPrompt(true)}>
              <Sparkles size={16} /> Tạo Prompt Chiến Lược
            </button>
          </div>

          {showPrompt && (
            <div className="aa-prompt-box" style={{ marginTop: "24px" }}>
              <div className="aa-prompt-header">
                <h3>Prompt Chiến Lược</h3>
                <span className="aa-prompt-chars">{prompt.length.toLocaleString()} ký tự</span>
              </div>
              <pre className="aa-prompt-content">{prompt}</pre>
              <div className="aa-launch-actions">
                <button className={`tool-btn-primary ${copied ? "copied" : ""}`} onClick={() => handleCopy(prompt)}>
                  {copied ? <><Check size={16} /><span>Đã copy!</span></> : <><Copy size={16} /><span>Copy Prompt</span></>}
                </button>
                <button className="tool-btn-gemini" onClick={() => handleLaunchAI("https://gemini.google.com/app")}>
                  <ExternalLink size={16} /> Gemini
                </button>
                <button className="tool-btn-chatgpt" onClick={() => handleLaunchAI("https://chatgpt.com")}>
                  <ExternalLink size={16} /> ChatGPT
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="st-grid">
          {strategyTemplates.map((template) => (
            <div key={template.id} className="st-card" onClick={() => openTemplate(template)}>
              <div className="st-card-icon">{template.icon}</div>
              <h3 className="st-card-title">{template.name}</h3>
              <p className="st-card-desc">{template.description}</p>
              {template.agentNames.length > 0 && (
                <div className="st-card-agents">
                  {template.agentNames.slice(0, 3).map((name) => (
                    <span key={name} className="st-mini-agent">{name}</span>
                  ))}
                </div>
              )}
              <button className="tool-btn-primary" onClick={(e) => { e.stopPropagation(); openTemplate(template); }}>
                <Sparkles size={14} /> Sử dụng
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
