"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FileText, Languages, Bot, Copy, ExternalLink, Check, Sparkles } from "lucide-react";

interface ContentTabsProps {
  originalContent: string;
  vietnameseContent: string | null;
  rawContent: string;
  agentName: string;
}

export default function ContentTabs({
  originalContent,
  vietnameseContent,
  rawContent,
  agentName,
}: ContentTabsProps) {
  const [activeTab, setActiveTab] = useState<"original" | "vietnamese" | "aichat">(
    "original"
  );
  const [copied, setCopied] = useState(false);

  const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleLaunchAI = async (url: string, name: string) => {
    try {
      await navigator.clipboard.writeText(rawContent);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = rawContent;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => {
      if (isMobile()) {
        // Use location.href to trigger universal links (opens native app)
        window.location.href = url;
      } else {
        window.open(url, "_blank");
      }
      setTimeout(() => setCopied(false), 2000);
    }, 600);
  };

  return (
    <div className="content-tabs">
      {/* Tab Bar */}
      <div className="tab-bar">
        <button
          onClick={() => setActiveTab("original")}
          className={`tab-button ${activeTab === "original" ? "active" : ""}`}
        >
          <FileText size={15} />
          <span>Original Prompt</span>
        </button>
        <button
          onClick={() => setActiveTab("vietnamese")}
          className={`tab-button ${activeTab === "vietnamese" ? "active" : ""}`}
        >
          <Languages size={15} />
          <span>Việt Hoá</span>
        </button>
        <button
          onClick={() => setActiveTab("aichat")}
          className={`tab-button ai-tab ${activeTab === "aichat" ? "active" : ""}`}
        >
          <Bot size={15} />
          <span>AI Chat</span>
          <span className="tab-badge">AI</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "original" ? (
          <div className="markdown-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {originalContent}
            </ReactMarkdown>
          </div>
        ) : activeTab === "vietnamese" ? (
          vietnameseContent ? (
            <div className="markdown-body vietnamese">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {vietnameseContent}
              </ReactMarkdown>
              <div className="vi-note">
                💡 Nút Copy Prompt luôn copy bản tiếng Anh gốc
              </div>
            </div>
          ) : (
            <div className="no-translation">
              <Languages size={40} className="no-translation-icon" />
              <p>Chưa có bản Việt Hoá cho Agent này.</p>
              <span className="no-translation-sub">
                Thêm file <code>.vi.md</code> tương ứng để hiển thị bản dịch
                tiếng Việt.
              </span>
            </div>
          )
        ) : (
          /* AI Chat Tab */
          <div className="ai-chat-panel">
            <div className="ai-chat-hero">
              <div className="ai-chat-icon-wrap">
                <Sparkles size={32} />
              </div>
              <h3>Chat với {agentName}</h3>
              <p className="ai-chat-desc">
                Mở AI và chat trực tiếp với agent này.
                Prompt sẽ được <strong>tự động copy</strong> — chỉ cần paste (Ctrl+V) vào AI chat.
              </p>
            </div>

            <div className="ai-chat-steps">
              <div className="ai-step">
                <div className="ai-step-num">1</div>
                <div className="ai-step-text">Bấm nút bên dưới — prompt tự động copy</div>
              </div>
              <div className="ai-step">
                <div className="ai-step-num">2</div>
                <div className="ai-step-text">AI mở tab mới — paste prompt (Ctrl+V / ⌘+V)</div>
              </div>
              <div className="ai-step">
                <div className="ai-step-num">3</div>
                <div className="ai-step-text">Bắt đầu chat với AI agent!</div>
              </div>
            </div>

            <div className="ai-launch-buttons">
              <button
                className={`ai-launch-btn gemini ${copied ? "copied" : ""}`}
                onClick={() => handleLaunchAI("https://gemini.google.com/app", "Gemini")}
              >
                {copied ? (
                  <>
                    <Check size={18} />
                    <span>Đã copy! Đang mở...</span>
                  </>
                ) : (
                  <>
                    <ExternalLink size={18} />
                    <span>Gemini Pro</span>
                  </>
                )}
              </button>
              <button
                className={`ai-launch-btn chatgpt ${copied ? "copied" : ""}`}
                onClick={() => handleLaunchAI("https://chatgpt.com", "ChatGPT")}
              >
                {copied ? (
                  <>
                    <Check size={18} />
                    <span>Đã copy! Đang mở...</span>
                  </>
                ) : (
                  <>
                    <ExternalLink size={18} />
                    <span>ChatGPT Pro</span>
                  </>
                )}
              </button>
            </div>

            <div className="ai-chat-note">
              <Copy size={14} />
              <span>Prompt gốc ({rawContent.length.toLocaleString()} ký tự) sẽ được copy vào clipboard</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
