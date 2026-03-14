"use client";

import { useState, useCallback, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Agent } from "@/lib/agents";
import Link from "next/link";

interface SearchBarProps {
  allAgents: Agent[];
}

export default function SearchBar({ allAgents }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Agent[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = useCallback(
    (value: string) => {
      setQuery(value);
      if (value.trim().length === 0) {
        setResults([]);
        setIsOpen(false);
        return;
      }
      const q = value.toLowerCase();
      const filtered = allAgents.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q)
      );
      setResults(filtered);
      setIsOpen(true);
    },
    [allAgents]
  );

  // Close on escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="search-wrapper">
      <div className={`search-bar ${isOpen ? "active" : ""}`}>
        <Search size={16} className="search-icon" />
        <input
          type="text"
          placeholder="Tìm kiếm agent..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setResults([]);
              setIsOpen(false);
            }}
            className="search-clear"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {isOpen && (
        <div className="search-dropdown">
          {results.length > 0 ? (
            <>
              <div className="search-result-count">
                {results.length} kết quả
              </div>
              {results.map((agent) => (
                <Link
                  key={`${agent.division}-${agent.id}`}
                  href={`/${agent.division}/${agent.id}`}
                  className="search-result-item"
                  onClick={() => {
                    setIsOpen(false);
                    setQuery("");
                  }}
                >
                  <span className="search-result-icon">{agent.icon}</span>
                  <div className="search-result-info">
                    <span className="search-result-name">{agent.name}</span>
                    <span className="search-result-division">
                      {agent.division.replace(/-/g, " ")}
                    </span>
                  </div>
                  <span
                    className="search-result-dot"
                    style={{ backgroundColor: agent.color }}
                  />
                </Link>
              ))}
            </>
          ) : (
            <div className="search-no-results">
              Không tìm thấy agent nào cho &quot;{query}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
