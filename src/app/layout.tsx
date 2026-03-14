import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { getDivisions, getTotalAgentCount, getAllAgents } from "@/lib/agents";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "CM Media Agency — AI Prompt Library",
  description: "CM Media Agency - Thư viện Prompt AI nội bộ. Duyệt qua 172+ chuyên gia AI trong 14 phòng ban.",
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
