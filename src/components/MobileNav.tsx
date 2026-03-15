"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { Division } from "@/lib/agents";

interface MobileNavProps {
  divisions: Division[];
  totalAgents: number;
}

export default function MobileNav({ divisions, totalAgents }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Header */}
      <header className="mobile-header">
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <Link href="/" className="mobile-logo">
          <Image src="/cm-media-logo.jpg" alt="CM Media" width={28} height={28} className="logo-img" />
          <span>CM MEDIA</span>
        </Link>
        <div className="mobile-agent-count">{totalAgents} agents</div>
      </header>

      {/* Overlay */}
      {isOpen && <div className="mobile-overlay" onClick={() => setIsOpen(false)} />}

      {/* Slide Menu */}
      <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <Image src="/cm-media-logo.jpg" alt="CM Media" width={32} height={32} className="logo-img" />
          <h2>CM MEDIA AGENCY</h2>
        </div>

        <div className="mobile-menu-label">PHÒNG BAN</div>
        <div className="mobile-menu-items">
          {divisions.map((div) => (
            <Link
              key={div.id}
              href={`/${div.id}`}
              className={`mobile-menu-item ${pathname.startsWith(`/${div.id}`) ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              <span className="mobile-menu-icon">{div.icon}</span>
              <span className="mobile-menu-name">{div.label}</span>
              <span className="mobile-menu-count">{div.agentCount}</span>
            </Link>
          ))}
        </div>

        <div className="mobile-menu-label">MARKETING TOOLS</div>
        <div className="mobile-menu-items">
          <Link href="/command" className={`mobile-menu-item ${pathname === "/command" ? "active" : ""}`} onClick={() => setIsOpen(false)}>
            <span className="mobile-menu-icon">🎯</span>
            <span className="mobile-menu-name">Command Center</span>
          </Link>
          <Link href="/content-workshop" className={`mobile-menu-item ${pathname === "/content-workshop" ? "active" : ""}`} onClick={() => setIsOpen(false)}>
            <span className="mobile-menu-icon">✍️</span>
            <span className="mobile-menu-name">Content Workshop</span>
          </Link>
          <Link href="/ads-analyzer" className={`mobile-menu-item ${pathname === "/ads-analyzer" ? "active" : ""}`} onClick={() => setIsOpen(false)}>
            <span className="mobile-menu-icon">🔍</span>
            <span className="mobile-menu-name">Ads Analyzer</span>
          </Link>
          <Link href="/strategy" className={`mobile-menu-item ${pathname === "/strategy" ? "active" : ""}`} onClick={() => setIsOpen(false)}>
            <span className="mobile-menu-icon">📈</span>
            <span className="mobile-menu-name">Strategy & Reports</span>
          </Link>
        </div>

        <div className="mobile-menu-footer">
          <Link
            href="/combine"
            className={`mobile-combine-link ${pathname === "/combine" ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            🔗 Combine Prompts
          </Link>
        </div>
      </nav>
    </>
  );
}
