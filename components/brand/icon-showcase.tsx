"use client";

import {
  Search,
  Bell,
  User,
  Heart,
  Eye,
  Clock,
  Bookmark,
  Star,
  Film,
  List,
  ChevronRight,
  ChevronDown,
  X,
  Plus,
  Check,
  AlertTriangle,
  Info,
  Share2,
  Settings,
  LogOut,
  Menu,
  type LucideIcon,
} from "lucide-react";

interface IconEntry {
  name: string;
  icon: LucideIcon;
  usage: string;
}

const CORE_ICONS: IconEntry[] = [
  { name: "Search", icon: Search, usage: "Navbar search trigger, search page" },
  { name: "Bell", icon: Bell, usage: "Notifications in Navbar" },
  { name: "User", icon: User, usage: "Avatar fallback, profile links" },
  { name: "Heart", icon: Heart, usage: "Like / Loved action" },
  { name: "Eye", icon: Eye, usage: "Watched action" },
  { name: "Clock", icon: Clock, usage: "Add to Watchlist action" },
  { name: "Bookmark", icon: Bookmark, usage: "Save to collection" },
  { name: "Star", icon: Star, usage: "Rating context, avg score indicators" },
  { name: "Film", icon: Film, usage: "Film context pill in Review Card" },
  { name: "List", icon: List, usage: "Collections, list views" },
  { name: "ChevronRight", icon: ChevronRight, usage: "Page nav, breadcrumb" },
  { name: "ChevronDown", icon: ChevronDown, usage: "Dropdown trigger, accordions" },
  { name: "X", icon: X, usage: "Close modal, clear input, dismiss toast" },
  { name: "Plus", icon: Plus, usage: "Add to list, new entry" },
  { name: "Check", icon: Check, usage: "Selected state in dropdown, confirm" },
  { name: "AlertTriangle", icon: AlertTriangle, usage: "Callout warning, destructive confirm" },
  { name: "Info", icon: Info, usage: "Callout info, tooltip trigger" },
  { name: "Share2", icon: Share2, usage: "Share film, share list" },
  { name: "Settings", icon: Settings, usage: "User settings menu" },
  { name: "LogOut", icon: LogOut, usage: "Sign out in user dropdown" },
  { name: "Menu", icon: Menu, usage: "Mobile hamburger nav trigger" },
];

export function IconShowcase() {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "8px",
        padding: "24px 20px",
        margin: "24px 0",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginTop: 0,
          marginBottom: "20px",
        }}
      >
        Core icon set — Lucide React · 20px · strokeWidth 1.5
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "4px",
        }}
      >
        {CORE_ICONS.map(({ name, icon: Icon, usage }) => (
          <div
            key={name}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              padding: "12px 10px",
              borderRadius: "6px",
              transition: "background-color 150ms ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(255,255,255,0.04)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent"; }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "6px",
                backgroundColor: "var(--bg-elevated)",
                border: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon size={18} strokeWidth={1.5} style={{ color: "var(--text-secondary)" }} />
            </div>
            <div style={{ minWidth: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-primary)",
                  fontWeight: 500,
                }}
              >
                {name}
              </p>
              <p
                style={{
                  margin: "3px 0 0",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.4,
                }}
              >
                {usage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface IconSizeRowProps {
  label: string;
  size: number;
  context: string;
}

function IconSizeRow({ label, size, context }: IconSizeRowProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "12px 0",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ width: "40px", display: "flex", justifyContent: "center" }}>
        <Film size={size} strokeWidth={1.5} style={{ color: "var(--text-secondary)" }} />
      </div>
      <div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            color: "var(--text-primary)",
          }}
        >
          {size}px
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            marginLeft: "12px",
          }}
        >
          {label} — {context}
        </span>
      </div>
    </div>
  );
}

export function IconSizeShowcase() {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "8px",
        padding: "24px 20px",
        margin: "24px 0",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginTop: 0,
          marginBottom: "16px",
        }}
      >
        Icon sizes
      </p>
      <IconSizeRow label="UI" size={16} context="Inline text icons, badge labels, compact controls" />
      <IconSizeRow label="Actions" size={20} context="Navbar icons, button icons, standard UI actions" />
      <IconSizeRow label="Hero" size={24} context="Empty states, section icons, feature callouts" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "12px 0",
        }}
      >
        <div style={{ width: "40px", display: "flex", justifyContent: "center" }}>
          <Film size={32} strokeWidth={1.5} style={{ color: "var(--text-secondary)" }} />
        </div>
        <div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-primary)" }}>32px+</span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--text-muted)", marginLeft: "12px" }}>
            Display — illustration context only, never in dense UI
          </span>
        </div>
      </div>
    </div>
  );
}
