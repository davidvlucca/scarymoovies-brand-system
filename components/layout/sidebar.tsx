"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sections } from "@/lib/navigation";

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger button */}
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
        className={`sidebar-overlay${mobileOpen ? " is-open" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        style={{
          width: "240px",
          minHeight: "100vh",
          backgroundColor: "var(--bg-primary)",
          borderRight: "1px solid var(--border-subtle)",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          overflowY: "auto",
          zIndex: 40,
        }}
        data-open={mobileOpen}
      >
        {/* Logo */}
        <div
          style={{
            padding: "24px 20px 20px",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <Link
            href="/"
            style={{ textDecoration: "none" }}
            aria-label="ScaryMoovies Brand System Home"
          >
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-body)",
                fontWeight: 800,
                fontSize: "1.4rem",
                color: "var(--white-50)",
                letterSpacing: "0.05em",
                lineHeight: 1.2,
              }}
            >
              SCARY MOOVIES
            </span>
          </Link>
          <p
            style={{
              margin: "6px 0 0",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              fontFamily: "var(--font-body)",
            }}
          >
            Brand System
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Brand System sections" style={{ flex: 1, padding: "12px 0" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {sections.map((section) => {
              const isActive =
                section.href === "/"
                  ? pathname === "/"
                  : pathname === section.href || pathname.startsWith(section.href + "/");
              return (
                <li key={section.href}>
                  <Link
                    href={section.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "10px 20px",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color 150ms ease, background-color 150ms ease",
                      borderLeft: isActive
                        ? "3px solid var(--accent-hover)"
                        : "3px solid transparent",
                      backgroundColor: isActive
                        ? "rgba(93, 51, 125, 0.12)"
                        : "transparent",
                      color: isActive
                        ? "var(--white-50)"
                        : "var(--text-secondary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: isActive ? "var(--accent-strong)" : "var(--text-muted)",
                        fontVariantNumeric: "tabular-nums",
                        minWidth: "20px",
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
      </aside>
    </>
  );
}
