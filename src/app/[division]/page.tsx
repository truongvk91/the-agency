import { getAgentsByDivision, getDivisions } from "@/lib/agents";
import AgentList from "@/components/AgentList";
import { notFound } from "next/navigation";

interface DivisionPageProps {
  params: Promise<{ division: string }>;
}

export async function generateStaticParams() {
  const divisions = getDivisions();
  return divisions.map((d) => ({ division: d.id }));
}

export default async function DivisionPage({ params }: DivisionPageProps) {
  const { division } = await params;
  const divisions = getDivisions();
  const divMeta = divisions.find((d) => d.id === division);
  if (!divMeta) notFound();

  const agents = getAgentsByDivision(division);

  return (
    <div className="division-page">
      <AgentList
        agents={agents}
        divisionLabel={divMeta.label}
        divisionId={division}
      />
      <div className="detail-placeholder">
        <div className="placeholder-icon">👈</div>
        <p>Chọn một Agent để xem chi tiết</p>
      </div>
    </div>
  );
}
