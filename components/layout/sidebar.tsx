"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sections } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return sections;
    const q = query.toLowerCase();
    return sections.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.keywords.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileOpen(true)}
        aria-label="Open navigation"
        aria-expanded={mobileOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile overlay */}
      <div
        className={cn("sidebar-overlay", mobileOpen && "is-open")}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar shell */}
      <aside
        className="fixed top-0 left-0 bottom-0 z-40 flex flex-col overflow-y-auto"
        style={{
          width: "240px",
          backgroundColor: "var(--bg-primary)",
          borderRight: "1px solid var(--border-subtle)",
        }}
        data-open={mobileOpen}
      >
        {/* Wordmark */}
        <div
          className="px-5 pt-6 pb-4"
          style={{ borderBottom: "1px solid var(--border-subtle)" }}
        >
          <Link
            href="/"
            className="no-underline"
            aria-label="ScaryMoovies Brand System Home"
          >
            <span
              className="block font-extrabold uppercase tracking-widest leading-tight"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "var(--white-50)",
              }}
            >
              Scary Moovies
            </span>
          </Link>
          <p
            className="mt-1 uppercase tracking-widest"
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.15em",
              color: "var(--text-muted)",
              fontFamily: "var(--font-body)",
              margin: "5px 0 0",
            }}
          >
            Brand System
          </p>
        </div>

        {/* Search */}
        <div
          className="px-4 py-3"
          style={{ borderBottom: "1px solid var(--border-subtle)" }}
        >
          <div style={{ position: "relative" }}>
            <svg
              aria-hidden="true"
              width="13"
              height="13"
              viewBox="0 0 16 16"
              fill="none"
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                color: "var(--text-muted)",
              }}
            >
              <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" />
              <line x1="10.5" y1="10.5" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sections…"
              aria-label="Search sections"
              style={{
                width: "100%",
                height: "32px",
                paddingLeft: "30px",
                paddingRight: "8px",
                backgroundColor: "var(--bg-elevated)",
                border: "1px solid var(--border-default)",
                borderRadius: "6px",
                color: "var(--text-primary)",
                fontSize: "0.75rem",
                fontFamily: "var(--font-body)",
                outline: "none",
                appearance: "none",
                WebkitAppearance: "none",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-hover)";
                e.currentTarget.style.boxShadow = "0 0 0 2px rgba(120,84,146,0.20)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--border-default)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>
        </div>

        {/* Nav */}
        <nav aria-label="Brand System sections" className="flex-1 py-2">
          <ul className="m-0 p-0 list-none">
            {filtered.length === 0 && (
              <li
                className="px-5 py-3 italic"
                style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
              >
                No sections found
              </li>
            )}
            {filtered.map((section) => {
              const isActive =
                section.href === "/"
                  ? pathname === "/"
                  : pathname === section.href ||
                    pathname.startsWith(section.href + "/");
              return (
                <li key={section.href} data-nav-item>
                  <Link
                    href={section.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-2.5 px-5 py-2.5 no-underline transition-colors duration-150",
                      isActive
                        ? "text-white-50 bg-[rgba(93,51,125,0.10)] border-l-2 border-[var(--accent-hover)]"
                        : "text-text-secondary border-l-2 border-transparent hover:text-white-50 hover:bg-[rgba(93,51,125,0.06)]"
                    )}
                    style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem" }}
                  >
                    <span
                      className="tabular-nums shrink-0"
                      style={{
                        fontSize: "0.68rem",
                        minWidth: "18px",
                        color: isActive ? "var(--accent-hover)" : "var(--text-muted)",
                      }}
                    >
                      {section.num}
                    </span>
                    {section.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div
          className="flex items-center justify-between px-5 py-3.5"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <span
            className="tracking-wider"
            style={{
              fontSize: "0.63rem",
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.08em",
            }}
          >
            v1.0 · Brand System
          </span>
          <span style={{ fontSize: "0.63rem", color: "var(--text-muted)" }}>
            © 2025
          </span>
        </div>
      </aside>
    </>
  );
}
