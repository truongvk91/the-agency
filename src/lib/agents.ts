import fs from "fs";
import path from "path";
import matter from "gray-matter";

const AGENTS_DIR = path.join(process.cwd(), "content", "agents");

// Map color names to hex values
const COLOR_MAP: Record<string, string> = {
  red: "#ef4444",
  orange: "#f97316",
  amber: "#f59e0b",
  yellow: "#eab308",
  lime: "#84cc16",
  green: "#22c55e",
  emerald: "#10b981",
  teal: "#14b8a6",
  cyan: "#06b6d4",
  sky: "#0ea5e9",
  blue: "#3b82f6",
  indigo: "#6366f1",
  violet: "#8b5cf6",
  purple: "#a855f7",
  fuchsia: "#d946ef",
  pink: "#ec4899",
  rose: "#f43f5e",
  slate: "#64748b",
  gray: "#6b7280",
  zinc: "#71717a",
  neutral: "#737373",
  stone: "#78716c",
};

function resolveColor(color: string | undefined): string {
  if (!color) return "#6366f1";
  if (color.startsWith("#")) return color;
  return COLOR_MAP[color.toLowerCase()] || "#6366f1";
}

// Division display names and icons
const DIVISION_META: Record<string, { label: string; icon: string }> = {
  marketing: { label: "Marketing Division", icon: "📣" },
  "paid-media": { label: "Paid Media Division", icon: "💰" },
  design: { label: "Design Division", icon: "🎨" },
  engineering: { label: "Engineering Division", icon: "⚙️" },
  "game-development": { label: "Game Development Division", icon: "🎮" },
  integrations: { label: "Integrations Division", icon: "🔗" },
  product: { label: "Product Division", icon: "📦" },
  "project-management": { label: "Project Management Division", icon: "📋" },
  sales: { label: "Sales Division", icon: "🤝" },
  "spatial-computing": { label: "Spatial Computing Division", icon: "🥽" },
  specialized: { label: "Specialized Division", icon: "⭐" },
  strategy: { label: "Strategy Division", icon: "♟️" },
  support: { label: "Support Division", icon: "🛟" },
  testing: { label: "Testing Division", icon: "🧪" },
};

export interface Agent {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  vibe: string;
  division: string;
}

export interface AgentDetail extends Agent {
  rawContent: string;
  content: string;
  vietnameseContent: string | null;
}

export interface Division {
  id: string;
  label: string;
  icon: string;
  agentCount: number;
}

/**
 * Get all divisions with agent counts
 */
export function getDivisions(): Division[] {
  if (!fs.existsSync(AGENTS_DIR)) return [];

  const dirs = fs.readdirSync(AGENTS_DIR, { withFileTypes: true });
  return dirs
    .filter((d) => d.isDirectory())
    .map((d) => {
      const meta = DIVISION_META[d.name] || {
        label:
          d.name
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase()) + " Division",
        icon: "📁",
      };
      const agentFiles = fs
        .readdirSync(path.join(AGENTS_DIR, d.name))
        .filter((f) => f.endsWith(".md") && !f.endsWith(".vi.md"));
      return {
        id: d.name,
        label: meta.label,
        icon: meta.icon,
        agentCount: agentFiles.length,
      };
    })
    .sort((a, b) => a.label.localeCompare(b.label));
}

/**
 * Get all agents in a specific division
 */
export function getAgentsByDivision(divisionName: string): Agent[] {
  const divPath = path.join(AGENTS_DIR, divisionName);
  if (!fs.existsSync(divPath)) return [];

  const files = fs
    .readdirSync(divPath)
    .filter((f) => f.endsWith(".md") && !f.endsWith(".vi.md"));

  return files.map((f) => {
    const raw = fs.readFileSync(path.join(divPath, f), "utf-8");
    try {
      const { data } = matter(raw);
      return {
        id: f.replace(".md", ""),
        name: data.name || f.replace(".md", "").replace(/-/g, " "),
        description: data.description || "",
        color: resolveColor(data.color),
        icon: data.emoji || data.icon || "🤖",
        vibe: data.vibe || "",
        division: divisionName,
      };
    } catch {
      // Fallback for files with malformed YAML frontmatter
      const nameFromFile = f.replace(".md", "").replace(/^[a-z]+-/, "").replace(/-/g, " ");
      return {
        id: f.replace(".md", ""),
        name: nameFromFile.replace(/\b\w/g, (c) => c.toUpperCase()),
        description: "",
        color: "#6366f1",
        icon: "🤖",
        vibe: "",
        division: divisionName,
      };
    }
  });
}

/**
 * Get detailed content of a single agent
 */
export function getAgentContent(
  divisionName: string,
  agentId: string
): AgentDetail | null {
  const filePath = path.join(AGENTS_DIR, divisionName, `${agentId}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const viContent = getVietnameseContent(divisionName, agentId);

  try {
    const { data, content } = matter(raw);
    return {
      id: agentId,
      name: data.name || agentId.replace(/-/g, " "),
      description: data.description || "",
      color: resolveColor(data.color),
      icon: data.emoji || data.icon || "🤖",
      vibe: data.vibe || "",
      division: divisionName,
      rawContent: raw,
      content,
      vietnameseContent: viContent,
    };
  } catch {
    // Fallback: treat entire file as content if YAML parsing fails
    return {
      id: agentId,
      name: agentId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      description: "",
      color: "#6366f1",
      icon: "🤖",
      vibe: "",
      division: divisionName,
      rawContent: raw,
      content: raw,
      vietnameseContent: viContent,
    };
  }
}

/**
 * Get Vietnamese translation content for an agent
 */
export function getVietnameseContent(
  divisionName: string,
  agentId: string
): string | null {
  const viPath = path.join(AGENTS_DIR, divisionName, `${agentId}.vi.md`);
  if (!fs.existsSync(viPath)) return null;

  const raw = fs.readFileSync(viPath, "utf-8");
  const { content } = matter(raw);
  return content;
}

/**
 * Get all agents across all divisions (for search)
 */
export function getAllAgents(): Agent[] {
  const divisions = getDivisions();
  return divisions.flatMap((d) => getAgentsByDivision(d.id));
}

/**
 * Get total agent count
 */
export function getTotalAgentCount(): number {
  return getDivisions().reduce((sum, d) => sum + d.agentCount, 0);
}
