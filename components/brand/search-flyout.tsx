"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

interface SearchResult {
  title: string;
  year: number;
  posterColor: string;
}

const DEMO_RESULTS: SearchResult[] = [
  { title: "Hereditary", year: 2018, posterColor: "#2a1f0f" },
  { title: "The House of the Devil", year: 2009, posterColor: "#1a1a1f" },
  { title: "Hellraiser", year: 1987, posterColor: "#1f0a0a" },
  { title: "His House", year: 2020, posterColor: "#0d1a1f" },
  { title: "Halloween", year: 1978, posterColor: "#0f1a0d" },
];

function PosterThumbnail({ color, title }: { color: string; title: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: "28px",
        height: "42px",
        borderRadius: "3px",
        backgroundColor: color,
        border: "1px solid var(--border-subtle)",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "8px",
          color: "rgba(255,255,255,0.3)",
          textAlign: "center",
          lineHeight: 1,
          padding: "2px",
        }}
      >
        {title.charAt(0)}
      </span>
    </div>
  );
}

export function SearchFlyout() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = query.length >= 1
    ? DEMO_RESULTS.filter((r) => r.title.toLowerCase().startsWith(query.toLowerCase()))
    : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleOpen() {
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  function handleClear() {
    setQuery("");
    inputRef.current?.focus();
  }

  return (
    <div
      style={{
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "8px",
        padding: "24px 20px",
        margin: "24px 0",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          margin: 0,
        }}
      >
        Search flyout — type "h" to see results
      </p>

      <div ref={containerRef} style={{ position: "relative", maxWidth: "400px" }}>
        {/* Trigger / Input */}
        {!open ? (
          <button
            onClick={handleOpen}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 14px",
              backgroundColor: "var(--bg-elevated)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "8px",
              cursor: "pointer",
              color: "var(--text-muted)",
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              transition: "border-color 150ms ease",
              width: "220px",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-default)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-subtle)"; }}
          >
            <Search size={14} strokeWidth={1.5} />
            Search films…
          </button>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 14px",
              backgroundColor: "var(--bg-elevated)",
              border: "1px solid var(--border-default)",
              borderRadius: "8px",
              width: "320px",
            }}
          >
            <Search size={14} strokeWidth={1.5} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search films…"
              onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
              style={{
                flex: 1,
                background: "none",
                border: "none",
                outline: "none",
                color: "var(--text-primary)",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                minWidth: 0,
              }}
            />
            {query && (
              <button
                onClick={handleClear}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}
                aria-label="Clear search"
              >
                <X size={13} strokeWidth={1.5} style={{ color: "var(--text-muted)" }} />
              </button>
            )}
          </div>
        )}

        {/* Results flyout */}
        {open && results.length > 0 && (
          <ul
            role="listbox"
            aria-label="Search results"
            style={{
              position: "absolute",
              top: "calc(100% + 6px)",
              left: 0,
              right: 0,
              width: "320px",
              zIndex: 20,
              margin: 0,
              padding: "6px",
              listStyle: "none",
              backgroundColor: "var(--bg-elevated)",
              border: "1px solid var(--border-default)",
              borderRadius: "8px",
              boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
            }}
          >
            {results.map((r) => (
              <li
                key={r.title}
                role="option"
                aria-selected="false"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "8px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 100ms ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLLIElement).style.backgroundColor = "rgba(255,255,255,0.05)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLLIElement).style.backgroundColor = "transparent"; }}
              >
                <PosterThumbnail color={r.posterColor} title={r.title} />
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--text-primary)",
                      fontWeight: 500,
                    }}
                  >
                    {r.title}
                  </p>
                  <p
                    style={{
                      margin: "2px 0 0",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {r.year}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {open && query.length >= 2 && results.length === 0 && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 6px)",
              left: 0,
              width: "320px",
              zIndex: 20,
              padding: "20px 16px",
              backgroundColor: "var(--bg-elevated)",
              border: "1px solid var(--border-default)",
              borderRadius: "8px",
              boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                textAlign: "center",
              }}
            >
              Nothing found for &ldquo;{query}&rdquo;.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
