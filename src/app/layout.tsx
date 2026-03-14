import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { getDivisions, getTotalAgentCount, getAllAgents } from "@/lib/agents";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "The Agency — AI Prompt Library",
  description: "Internal AI prompt library. Browse 112+ expert agents across 11 divisions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const divisions = getDivisions();
  const totalAgents = getTotalAgentCount();
  const allAgents = getAllAgents();

  return (
    <html lang="vi" className="dark">
      <body className={inter.className}>
        <div className="app-layout">
          <div className="sidebar-container">
            <div className="sidebar-search">
              <SearchBar allAgents={allAgents} />
            </div>
            <Sidebar divisions={divisions} totalAgents={totalAgents} />
          </div>
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
