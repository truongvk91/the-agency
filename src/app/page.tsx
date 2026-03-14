import { getDivisions, getTotalAgentCount } from "@/lib/agents";
import Link from "next/link";

export default function HomePage() {
  const divisions = getDivisions();
  const totalAgents = getTotalAgentCount();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-glow" />
        <h1 className="hero-title">
          Welcome to <span className="hero-accent">The Agency</span>
        </h1>
        <p className="hero-subtitle">
          Thư viện Prompt AI nội bộ. Duyệt qua {totalAgents}+ chuyên gia AI
          trong {divisions.length} phòng ban.
        </p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🤖</div>
          <div className="stat-value">{totalAgents}+</div>
          <div className="stat-label">Total Agents</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏢</div>
          <div className="stat-value">{divisions.length}</div>
          <div className="stat-label">Divisions</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <div className="stat-value">1-Click</div>
          <div className="stat-label">Copy Prompt</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🇻🇳</div>
          <div className="stat-value">Việt Hoá</div>
          <div className="stat-label">Bản dịch Tiếng Việt</div>
        </div>
      </div>

      {/* Division Grid */}
      <div className="section-header">
        <h2>Phòng ban</h2>
      </div>
      <div className="division-grid">
        {divisions.map((div) => (
          <Link key={div.id} href={`/${div.id}`} className="division-card">
            <div className="division-card-icon">{div.icon}</div>
            <div className="division-card-info">
              <h3>{div.label}</h3>
              <span className="division-card-count">
                {div.agentCount} agents
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
