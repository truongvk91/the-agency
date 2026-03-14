"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FileText, Languages } from "lucide-react";

interface ContentTabsProps {
  originalContent: string;
  vietnameseContent: string | null;
}

export default function ContentTabs({
  originalContent,
  vietnameseContent,
}: ContentTabsProps) {
  const [activeTab, setActiveTab] = useState<"original" | "vietnamese">(
    "original"
  );

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
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "original" ? (
          <div className="markdown-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {originalContent}
            </ReactMarkdown>
          </div>
        ) : vietnameseContent ? (
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
        )}
      </div>
    </div>
  );
}
