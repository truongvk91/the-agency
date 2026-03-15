import { getAllAgentsWithContent, getDivisions } from "@/lib/agents";
import CommandCenter from "./CommandCenter";

export const metadata = {
  title: "Command Center — CM Media Agency",
  description: "Điều phối đội ngũ AI agents, tạo kế hoạch hành động marketing.",
};

export default function CommandPage() {
  const allAgents = getAllAgentsWithContent();
  const divisions = getDivisions();

  const agentData = allAgents.map((a) => ({
    id: `${a.division}/${a.id}`,
    name: a.name,
    description: a.description,
    icon: a.icon,
    color: a.color,
    division: a.division,
    divisionLabel: a.divisionLabel,
    rawContent: a.rawContent,
  }));

  return <CommandCenter agents={agentData} divisions={divisions} />;
}
