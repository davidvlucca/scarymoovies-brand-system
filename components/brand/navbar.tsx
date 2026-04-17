"use client";

import { Search, Bell, Menu } from "lucide-react";
import { UserAvatar } from "./user-avatar";

interface NavbarUser {
  name: string;
  avatarSrc?: string;
}

interface NavbarProps {
  user?: NavbarUser;
  transparent?: boolean;
}

export function Navbar({ user, transparent = false }: NavbarProps) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        height: "64px",
        backgroundColor: transparent ? "transparent" : "var(--bg-surface)",
        borderBottom: "1px solid var(--border-subtle)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        gap: "16px",
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <a
        href="/"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 800,
            fontSize: "1rem",
            color: "var(--white-50)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          ScaryMoovies
        </span>
      </a>

      {/* Center Nav Links */}
      <nav
        aria-label="Primary navigation"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          flex: 1,
          justifyContent: "center",
        }}
      >
        {["Explore", "Collections"].map((link) => (
          <a
            key={link}
            href={`/${link.toLowerCase()}`}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--text-secondary)",
              textDecoration: "none",
              transition: "color 100ms ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--white-50)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Action Group */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexShrink: 0,
        }}
      >
        {/* Search */}
        <button
          aria-label="Search"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-secondary)",
            padding: "4px",
            display: "flex",
            alignItems: "center",
            transition: "color 100ms ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--white-50)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-secondary)")
          }
        >
          <Search size={20} strokeWidth={1.5} />
        </button>

        {/* PYF Button */}
        <button
          style={{
            backgroundColor: "var(--accent-primary)",
            color: "var(--white-50)",
            border: "none",
            borderRadius: "9999px",
            padding: "8px 16px",
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
            whiteSpace: "nowrap",
            transition: "background-color 150ms ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--accent-hover)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--accent-primary)")
          }
        >
          Pick Your Fear
        </button>

        {/* Bell */}
        <button
          aria-label="Notifications"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-secondary)",
            padding: "4px",
            display: "flex",
            alignItems: "center",
            transition: "color 100ms ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--white-50)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-secondary)")
          }
        >
          <Bell size={20} strokeWidth={1.5} />
        </button>

        {/* Avatar */}
        <UserAvatar
          name={user?.name ?? "Guest"}
          src={user?.avatarSrc}
          size="md"
          ring={!!user}
        />
      </div>
    </header>
  );
}

export function NavbarShowcase() {
  return (
    <div
      style={{
        border: "1px solid var(--border-subtle)",
        borderRadius: "8px",
        overflow: "hidden",
        margin: "24px 0",
      }}
    >
      {/* Label */}
      <div
        style={{
          padding: "10px 16px",
          backgroundColor: "var(--bg-surface)",
          borderBottom: "1px solid var(--border-subtle)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
          }}
        >
          Navbar — logged-in state
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--text-muted)",
          }}
        >
          height: 64px
        </span>
      </div>

      {/* Logged-in preview */}
      <div style={{ backgroundColor: "var(--bg-primary)" }}>
        <Navbar user={{ name: "DarkStar" }} />
      </div>

      {/* Divider + label */}
      <div
        style={{
          padding: "10px 16px",
          backgroundColor: "var(--bg-surface)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
          }}
        >
          Navbar — logged-out state
        </span>
      </div>

      {/* Logged-out preview */}
      <div style={{ backgroundColor: "var(--bg-primary)" }}>
        <Navbar />
      </div>
    </div>
  );
}
