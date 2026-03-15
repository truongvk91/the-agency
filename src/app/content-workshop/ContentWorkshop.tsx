"use client";

import { useState } from "react";
import { Copy, Check, ExternalLink, ArrowLeft, Sparkles, PenTool } from "lucide-react";
import { contentTemplates, contentCategories, ContentTemplate } from "@/lib/templates";

export default function ContentWorkshop() {
  const [category, setCategory] = useState("all");
  const [activeTemplate, setActiveTemplate] = useState<ContentTemplate | null>(null);
  const [editedPrompt, setEditedPrompt] = useState("");
  const [copied, setCopied] = useState(false);

  const filtered = category === "all"
    ? contentTemplates
    : contentTemplates.filter((t) => t.category === category);

  const openWorkspace = (template: ContentTemplate) => {
    setActiveTemplate(template);
    setEditedPrompt(template.prompt);
  };

  const closeWorkspace = () => {
    setActiveTemplate(null);
    setEditedPrompt("");
  };

  const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleCopy = async (text: string) => {
    try { await navigator.clipboard.writeText(text); }
    catch { const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta); }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLaunchAI = async (url: string) => {
    await handleCopy(editedPrompt);
    setTimeout(() => {
      if (isMobile()) window.location.href = url;
      else window.open(url, "_blank");
    }, 500);
  };

  return (
    <div className="tool-page">
      <div className="tool-page-header">
        <div>
          <h1 className="tool-page-title">
            <PenTool size={28} />
            <span>Content Workshop</span>
          </h1>
          <p className="tool-page-subtitle">
            Chọn template → Chỉnh sửa → Copy prompt → Tạo content chất lượng
          </p>
        </div>
      </div>

      {/* Active Workspace */}
      {activeTemplate ? (
        <div className="cw-workspace">
          <button className="cw-back-btn" onClick={closeWorkspace}>
            <ArrowLeft size={16} /> Quay lại templates
          </button>

          <div className="cw-workspace-header">
            <span className="cw-workspace-icon">{activeTemplate.icon}</span>
            <div>
              <h2>{activeTemplate.name}</h2>
              <p>{activeTemplate.description}</p>
            </div>
          </div>

          <div className="cw-workspace-content">
            <div className="cw-editor">
              <label className="tool-form-label">✏️ Chỉnh sửa prompt</label>
              <textarea
                className="tool-form-textarea cw-textarea"
                value={editedPrompt}
                onChange={(e) => setEditedPrompt(e.target.value)}
                rows={16}
              />
              <p className="cw-hint">
                💡 Thay thế các phần [trong ngoặc vuông] bằng thông tin thực tế
              </p>
              <div className="cw-actions">
                <button className={`tool-btn-primary ${copied ? "copied" : ""}`} onClick={() => handleCopy(editedPrompt)}>
                  {copied ? <><Check size={16} /><span>Đã copy!</span></> : <><Copy size={16} /><span>Copy Prompt</span></>}
                </button>
                <button className="tool-btn-gemini" onClick={() => handleLaunchAI("https://gemini.google.com/app")}>
                  <ExternalLink size={16} /> Gemini
                </button>
                <button className="tool-btn-chatgpt" onClick={() => handleLaunchAI("https://chatgpt.com")}>
                  <ExternalLink size={16} /> ChatGPT
                </button>
                <button className="tool-btn-ghost" onClick={() => setEditedPrompt(activeTemplate.prompt)}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Category Tabs */}
          <div className="cw-categories">
            {contentCategories.map((cat) => (
              <button
                key={cat.id}
                className={`cw-category-btn ${category === cat.id ? "active" : ""}`}
                onClick={() => setCategory(cat.id)}
              >
                <span>{cat.icon}</span> {cat.label}
              </button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="cw-grid">
            {filtered.map((template) => (
              <div key={template.id} className="cw-card">
                <div className="cw-card-icon">{template.icon}</div>
                <h3 className="cw-card-title">{template.name}</h3>
                <p className="cw-card-desc">{template.description}</p>
                <button className="tool-btn-primary" onClick={() => openWorkspace(template)}>
                  <Sparkles size={14} /> Sử dụng
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
