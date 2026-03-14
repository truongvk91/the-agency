"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Agent } from "@/lib/agents";

interface AgentListProps {
  agents: Agent[];
  divisionLabel: string;
  divisionId: string;
}

export default function AgentList({
  agents,
  divisionLabel,
  divisionId,
}: AgentListProps) {
  const pathname = usePathname();

  return (
    <div className="agent-list">
      <div className="agent-list-header">
        <h2 className="agent-list-title">{divisionLabel}</h2>
        <span className="agent-list-count">{agents.length} agents</span>
      </div>
      <div className="agent-list-items">
        {agents.map((agent) => {
          const agentPath = `/${divisionId}/${agent.id}`;
          const isActive = pathname === agentPath;
          return (
            <Link
              key={agent.id}
              href={agentPath}
              className={`agent-card ${isActive ? "active" : ""}`}
            >
              <div className="agent-card-header">
                <span
                  className="agent-dot"
                  style={{ backgroundColor: agent.color }}
                />
                <span className="agent-icon">{agent.icon}</span>
                <span className="agent-name">{agent.name}</span>
              </div>
              {agent.description && (
                <p className="agent-desc">{agent.description}</p>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
