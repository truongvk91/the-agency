import {
  getAgentContent,
  getAgentsByDivision,
  getDivisions,
} from "@/lib/agents";
import AgentList from "@/components/AgentList";
import ContentTabs from "@/components/ContentTabs";
import CopyButton from "@/components/CopyButton";
import { notFound } from "next/navigation";

interface AgentPageProps {
  params: Promise<{ division: string; agentId: string }>;
}

export async function generateStaticParams() {
  const divisions = getDivisions();
  const params: { division: string; agentId: string }[] = [];
  for (const div of divisions) {
    const agents = getAgentsByDivision(div.id);
    for (const agent of agents) {
      params.push({ division: div.id, agentId: agent.id });
    }
  }
  return params;
}

export default async function AgentPage({ params }: AgentPageProps) {
  const { division, agentId } = await params;
  const divisions = getDivisions();
  const divMeta = divisions.find((d) => d.id === division);
  if (!divMeta) notFound();

  const agents = getAgentsByDivision(division);
  const agent = getAgentContent(division, agentId);
  if (!agent) notFound();

  return (
    <div className="agent-page">
      {/* Column 2: Agent List */}
      <AgentList
        agents={agents}
        divisionLabel={divMeta.label}
        divisionId={division}
      />

      {/* Column 3: Detail View */}
      <div className="detail-view">
        <div className="detail-header">
          <div className="detail-meta">
            <div className="detail-title-row">
              <span className="detail-agent-icon">{agent.icon}</span>
              <h1 className="detail-title">{agent.name}</h1>
            </div>
            <div className="detail-badges">
              <span
                className="badge division-badge"
                style={{ borderColor: agent.color }}
              >
                {divMeta.icon} {divMeta.label}
              </span>
              <span
                className="badge color-badge"
                style={{ backgroundColor: agent.color + "22", color: agent.color }}
              >
                {agent.icon} {agent.name}
              </span>
            </div>
            {agent.description && (
              <p className="detail-description">{agent.description}</p>
            )}
          </div>
          <CopyButton text={agent.rawContent} />
        </div>

        <ContentTabs
          originalContent={agent.content}
          vietnameseContent={agent.vietnameseContent}
        />
      </div>
    </div>
  );
}
