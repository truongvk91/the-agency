"use client";

import { useState, useMemo } from "react";
import { Search, Plus, X, Sparkles, Copy, Check, ExternalLink, Combine } from "lucide-react";

interface AgentData {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  division: string;
  divisionLabel: string;
  rawContent: string;
}

interface PromptCombinerProps {
  agents: AgentData[];
}

export default function PromptCombiner({ agents }: PromptCombinerProps) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<AgentData[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const [copied, setCopied] = useState(false);

  const MAX_AGENTS = 5;

  const filtered = useMemo(() => {
    if (!search.trim()) return agents;
    const q = search.toLowerCase();
    return agents.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.divisionLabel.toLowerCase().includes(q)
    );
  }, [agents, search]);

  // Group by division
  const grouped = useMemo(() => {
    const map = new Map<string, AgentData[]>();
    for (const a of filtered) {
      const group = map.get(a.divisionLabel) || [];
      group.push(a);
      map.set(a.divisionLabel, group);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const isSelected = (id: string) => selected.some((s) => s.id === id);

  const toggleAgent = (agent: AgentData) => {
    if (isSelected(agent.id)) {
      setSelected(selected.filter((s) => s.id !== agent.id));
    } else if (selected.length < MAX_AGENTS) {
      setSelected([...selected, agent]);
    }
  };

  const removeAgent = (id: string) => {
    setSelected(selected.filter((s) => s.id !== id));
    setShowPreview(false);
  };

  const combinedPrompt = useMemo(() => {
    if (selected.length === 0) return "";
    
    const names = selected.map((a) => a.name).join(" + ");
    let prompt = `# Combined Agent: ${names}\n\n`;
    prompt += `> Bạn là sự kết hợp của ${selected.length} chuyên gia AI: ${names}. `;
    prompt += `Hãy sử dụng tất cả kiến thức và kỹ năng từ mỗi agent để giải quyết yêu cầu một cách toàn diện.\n\n`;
    prompt += `---\n\n`;

    selected.forEach((agent, i) => {
      prompt += `## Agent ${i + 1}: ${agent.icon} ${agent.name}\n\n`;
      // Extract just the content without frontmatter
      const content = agent.rawContent.replace(/^---[\s\S]*?---\n*/, "");
      prompt += content.trim();
      prompt += `\n\n---\n\n`;
    });

    prompt += `## Hướng dẫn kết hợp\n\n`;
    prompt += `Khi trả lời, hãy:\n`;
    prompt += `1. Kết hợp chuyên môn của tất cả ${selected.length} agents trên\n`;
    prompt += `2. Ưu tiên sự phối hợp giữa các lĩnh vực\n`;
    prompt += `3. Đảm bảo output bao quát và chuyên sâu\n`;

    return prompt;
  }, [selected]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(combinedPrompt);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = combinedPrompt;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLaunchGemini = async () => {
    try {
      await navigator.clipboard.writeText(combinedPrompt);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = combinedPrompt;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => {
      window.open("https://gemini.google.com/app", "_blank");
      setTimeout(() => setCopied(false), 2000);
    }, 500);
  };

  return (
    <div className="combiner-layout">
      {/* Left: Agent Picker */}
      <div className="combiner-picker">
        <div className="combiner-picker-header">
          <h2>
            <Combine size={20} />
            <span>Chọn Agents</span>
          </h2>
          <span className="combiner-count">
            {selected.length}/{MAX_AGENTS}
          </span>
        </div>

        {/* Search */}
        <div className="combiner-search">
          <Search size={16} />
          <input
            type="text"
            placeholder="Tìm agent..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="combiner-search-clear" onClick={() => setSearch("")}>
              <X size={14} />
            </button>
          )}
        </div>

        {/* Agent Grid */}
        <div className="combiner-agent-list">
          {grouped.map(([divLabel, divAgents]) => (
            <div key={divLabel} className="combiner-division">
              <div className="combiner-div-label">{divLabel}</div>
              {divAgents.map((agent) => (
                <button
                  key={agent.id}
                  className={`combiner-agent-card ${isSelected(agent.id) ? "selected" : ""} ${
                    !isSelected(agent.id) && selected.length >= MAX_AGENTS ? "disabled" : ""
                  }`}
                  onClick={() => toggleAgent(agent)}
                  disabled={!isSelected(agent.id) && selected.length >= MAX_AGENTS}
                >
                  <div className="combiner-agent-check">
                    {isSelected(agent.id) ? (
                      <Check size={14} />
                    ) : (
                      <Plus size={14} />
                    )}
                  </div>
                  <span className="combiner-agent-icon">{agent.icon}</span>
                  <div className="combiner-agent-info">
                    <span className="combiner-agent-name">{agent.name}</span>
                    <span className="combiner-agent-desc">{agent.description}</span>
                  </div>
                </button>
              ))}
            </div>
          ))}
          {grouped.length === 0 && (
            <div className="combiner-empty">
              Không tìm thấy agent nào
            </div>
          )}
        </div>
      </div>

      {/* Right: Preview */}
      <div className="combiner-preview">
        <div className="combiner-preview-header">
          <h2>
            <Sparkles size={20} />
            <span>Super Prompt</span>
          </h2>
        </div>

        {selected.length === 0 ? (
          <div className="combiner-empty-state">
            <Combine size={48} />
            <h3>Chọn agents để kết hợp</h3>
            <p>Chọn 2–5 agents từ danh sách bên trái để tạo super prompt.</p>
          </div>
        ) : (
          <>
            {/* Selected pills */}
            <div className="combiner-selected-list">
              {selected.map((agent) => (
                <div
                  key={agent.id}
                  className="combiner-pill"
                  style={{ borderColor: agent.color + "66" }}
                >
                  <span className="combiner-pill-icon">{agent.icon}</span>
                  <span className="combiner-pill-name">{agent.name}</span>
                  <button
                    className="combiner-pill-remove"
                    onClick={() => removeAgent(agent.id)}
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="combiner-stats">
              <div className="combiner-stat">
                <span className="combiner-stat-val">{selected.length}</span>
                <span className="combiner-stat-label">Agents</span>
              </div>
              <div className="combiner-stat">
                <span className="combiner-stat-val">{combinedPrompt.length.toLocaleString()}</span>
                <span className="combiner-stat-label">Ký tự</span>
              </div>
              <div className="combiner-stat">
                <span className="combiner-stat-val">
                  {new Set(selected.map((a) => a.division)).size}
                </span>
                <span className="combiner-stat-label">Divisions</span>
              </div>
            </div>

            {/* Actions */}
            <div className="combiner-actions">
              <button
                className={`combiner-copy-btn ${copied ? "copied" : ""}`}
                onClick={handleCopy}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? "Đã copy!" : "Copy Prompt"}</span>
              </button>
              <button className="combiner-gemini-btn" onClick={handleLaunchGemini}>
                <ExternalLink size={16} />
                <span>Mở Gemini Pro</span>
              </button>
            </div>

            {/* Toggle Preview */}
            <button
              className="combiner-toggle-preview"
              onClick={() => setShowPreview(!showPreview)}
            >
              {showPreview ? "Ẩn preview" : "Xem preview prompt"}
            </button>

            {showPreview && (
              <div className="combiner-prompt-preview">
                <pre>{combinedPrompt}</pre>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
