"use client";

import { useState, useMemo } from "react";
import { Search, X, Check, Plus, Copy, ExternalLink, Sparkles, Target, Users } from "lucide-react";
import { Division } from "@/lib/agents";

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

interface CommandCenterProps {
  agents: AgentData[];
  divisions: Division[];
}

const MISSION_TYPES = [
  { id: "audit", label: "Audit Website", icon: "🔍" },
  { id: "competitor", label: "Phân Tích Đối Thủ", icon: "⚔️" },
  { id: "campaign", label: "Lên Chiến Dịch", icon: "🚀" },
  { id: "content", label: "Tạo Content", icon: "✍️" },
  { id: "custom", label: "Tuỳ Chỉnh", icon: "🔧" },
];

export default function CommandCenter({ agents, divisions }: CommandCenterProps) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [missionType, setMissionType] = useState("audit");
  const [targetUrl, setTargetUrl] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [missionDetail, setMissionDetail] = useState("");
  const [copied, setCopied] = useState(false);
  const [showPlan, setShowPlan] = useState(false);

  // Group agents by division
  const grouped = useMemo(() => {
    const q = search.toLowerCase();
    const filtered = search
      ? agents.filter((a) => a.name.toLowerCase().includes(q) || a.description.toLowerCase().includes(q))
      : agents;

    const map = new Map<string, AgentData[]>();
    for (const a of filtered) {
      const group = map.get(a.divisionLabel) || [];
      group.push(a);
      map.set(a.divisionLabel, group);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [agents, search]);

  const toggleAgent = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };

  const selectAll = () => setSelected(new Set(agents.map((a) => a.id)));
  const clearAll = () => { setSelected(new Set()); setShowPlan(false); };

  const selectedAgents = agents.filter((a) => selected.has(a.id));
  const missionLabel = MISSION_TYPES.find((m) => m.id === missionType)?.label || "";

  const generatePrompt = (): string => {
    let prompt = `# 🎯 Mission: ${missionLabel}\n\n`;
    if (targetUrl) prompt += `**URL mục tiêu:** ${targetUrl}\n`;
    if (businessType) prompt += `**Loại hình kinh doanh:** ${businessType}\n`;
    if (missionDetail) prompt += `**Chi tiết nhiệm vụ:** ${missionDetail}\n`;
    prompt += `\n---\n\n`;
    prompt += `## Đội ngũ triển khai (${selectedAgents.length} agents)\n\n`;

    selectedAgents.forEach((agent, i) => {
      prompt += `### ${i + 1}. ${agent.icon} ${agent.name}\n`;
      const content = agent.rawContent.replace(/^---[\s\S]*?---\n*/, "");
      prompt += content.trim() + "\n\n---\n\n";
    });

    prompt += `## Hướng dẫn thực hiện\n\n`;
    prompt += `1. Kết hợp chuyên môn của ${selectedAgents.length} agents trên\n`;
    prompt += `2. Phân tích theo góc nhìn của từng chuyên gia\n`;
    prompt += `3. Đưa ra kế hoạch hành động cụ thể, có timeline\n`;
    prompt += `4. Output phải actionable và có thể triển khai ngay\n`;

    return prompt;
  };

  const handleGenerate = () => {
    if (selected.size === 0) return;
    setShowPlan(true);
  };

  const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleCopy = async () => {
    const prompt = generatePrompt();
    try { await navigator.clipboard.writeText(prompt); }
    catch { const ta = document.createElement("textarea"); ta.value = prompt; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta); }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLaunchAI = async (url: string) => {
    const prompt = generatePrompt();
    try { await navigator.clipboard.writeText(prompt); }
    catch { const ta = document.createElement("textarea"); ta.value = prompt; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta); }
    setCopied(true);
    setTimeout(() => {
      if (isMobile()) window.location.href = url;
      else window.open(url, "_blank");
      setTimeout(() => setCopied(false), 2000);
    }, 500);
  };

  return (
    <div className="tool-page">
      <div className="tool-page-header">
        <div>
          <h1 className="tool-page-title">
            <Target size={28} />
            <span>Command Center</span>
          </h1>
          <p className="tool-page-subtitle">Chọn agents → Nhập mục tiêu → Nhận kế hoạch hành động chi tiết</p>
        </div>
      </div>

      <div className="command-layout">
        {/* Left: Agent Picker */}
        <div className="command-picker">
          <div className="command-picker-header">
            <h2><Users size={18} /> <span>Chọn đội ngũ</span></h2>
            <div className="command-header-actions">
              <button className="tool-btn-sm" onClick={selectAll}>Chọn tất cả</button>
              <button className="tool-btn-sm ghost" onClick={clearAll}>Bỏ chọn</button>
            </div>
          </div>

          {/* Search */}
          <div className="command-search">
            <Search size={16} />
            <input type="text" placeholder="Tìm agent..." value={search} onChange={(e) => setSearch(e.target.value)} />
            {search && <button className="command-search-clear" onClick={() => setSearch("")}><X size={14} /></button>}
          </div>

          {/* Agent Groups */}
          <div className="command-agent-list">
            {grouped.map(([divLabel, divAgents]) => (
              <div key={divLabel} className="command-division">
                <div className="command-div-label">
                  <span>{divLabel}</span>
                  <span className="command-div-count">{divAgents.length}</span>
                </div>
                {divAgents.map((agent) => (
                  <button
                    key={agent.id}
                    className={`command-agent-card ${selected.has(agent.id) ? "selected" : ""}`}
                    onClick={() => toggleAgent(agent.id)}
                  >
                    <div className="command-agent-check">
                      {selected.has(agent.id) ? <Check size={14} /> : <Plus size={14} />}
                    </div>
                    <span className="command-agent-icon">{agent.icon}</span>
                    <div className="command-agent-info">
                      <span className="command-agent-name">{agent.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>

          {/* Selected Summary */}
          <div className="command-selected-summary">
            <span className="command-selected-count">{selected.size}</span>
            <span> agents đã chọn</span>
          </div>
        </div>

        {/* Right: Mission Brief */}
        <div className="command-mission">
          <h2><Sparkles size={18} /> <span>Mission Brief</span></h2>

          <div className="tool-form-group">
            <label className="tool-form-label">Loại nhiệm vụ</label>
            <div className="mission-types">
              {MISSION_TYPES.map((m) => (
                <button
                  key={m.id}
                  className={`mission-type-btn ${missionType === m.id ? "active" : ""}`}
                  onClick={() => setMissionType(m.id)}
                >
                  <span>{m.icon}</span> {m.label}
                </button>
              ))}
            </div>
          </div>

          <div className="tool-form-group">
            <label className="tool-form-label">URL mục tiêu</label>
            <input
              type="url"
              className="tool-form-input"
              placeholder="https://example.com"
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
            />
          </div>

          <div className="tool-form-group">
            <label className="tool-form-label">Loại hình kinh doanh</label>
            <select className="tool-form-select" value={businessType} onChange={(e) => setBusinessType(e.target.value)}>
              <option value="">Chọn loại hình...</option>
              <option value="ecommerce">E-Commerce</option>
              <option value="saas">SaaS</option>
              <option value="fnb">F&B</option>
              <option value="education">Giáo dục</option>
              <option value="healthcare">Healthcare</option>
              <option value="fashion">Thời trang</option>
              <option value="realestate">Bất động sản</option>
              <option value="service">Dịch vụ</option>
              <option value="other">Khác</option>
            </select>
          </div>

          <div className="tool-form-group">
            <label className="tool-form-label">Mô tả chi tiết</label>
            <textarea
              className="tool-form-textarea"
              placeholder="Mô tả mục tiêu, đối tượng khách hàng, yêu cầu đặc biệt..."
              rows={4}
              value={missionDetail}
              onChange={(e) => setMissionDetail(e.target.value)}
            />
          </div>

          <div className="command-generate">
            <button
              className={`tool-btn-primary ${selected.size === 0 ? "disabled" : ""}`}
              onClick={handleGenerate}
              disabled={selected.size === 0}
            >
              <Sparkles size={16} />
              <span>Tạo Kế Hoạch Hành Động</span>
            </button>
            <p className="command-hint">Chọn ít nhất 1 agent và điền thông tin để bắt đầu</p>
          </div>

          {/* Generated Plan */}
          {showPlan && selected.size > 0 && (
            <div className="command-output">
              <div className="command-output-header">
                <h3>📋 Kế hoạch đã tạo</h3>
              </div>
              <div className="command-output-agents">
                {selectedAgents.map((a) => (
                  <span key={a.id} className="command-output-pill">{a.icon} {a.name}</span>
                ))}
              </div>
              <div className="command-output-stats">
                <span>{selectedAgents.length} agents</span>
                <span>•</span>
                <span>{generatePrompt().length.toLocaleString()} ký tự</span>
                <span>•</span>
                <span>{new Set(selectedAgents.map(a => a.division)).size} divisions</span>
              </div>
              <div className="command-output-actions">
                <button className={`tool-btn-primary ${copied ? "copied" : ""}`} onClick={handleCopy}>
                  {copied ? <><Check size={16} /><span>Đã copy!</span></> : <><Copy size={16} /><span>Copy Prompt</span></>}
                </button>
                <button className="tool-btn-gemini" onClick={() => handleLaunchAI("https://gemini.google.com/app")}>
                  <ExternalLink size={16} /> <span>Gemini</span>
                </button>
                <button className="tool-btn-chatgpt" onClick={() => handleLaunchAI("https://chatgpt.com")}>
                  <ExternalLink size={16} /> <span>ChatGPT</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
