import { getAllAgentsWithContent, getDivisions, getTotalAgentCount } from "@/lib/agents";
import PromptCombiner from "@/components/PromptCombiner";

export const metadata = {
  title: "Prompt Combiner — CM Media Agency",
  description: "Kết hợp nhiều agent prompts thành một super prompt.",
};

export default function CombinePage() {
  const allAgents = getAllAgentsWithContent();

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

  return <PromptCombiner agents={agentData} />;
}
