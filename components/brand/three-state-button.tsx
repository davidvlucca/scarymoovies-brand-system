"use client";

import { useState } from "react";
import { Eye, Clock, Heart } from "lucide-react";

type WatchState = {
  watched: boolean;
  watchlist: boolean;
  liked: boolean;
};

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  activeColor?: string;
  onToggle: () => void;
}

function FilmActionButton({
  icon,
  label,
  active,
  activeColor = "var(--accent-primary)",
  onToggle,
}: ActionButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={label}
      aria-pressed={active}
      title={label}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        padding: "8px 12px",
        background: "none",
        border: "1px solid",
        borderColor: active
          ? activeColor
          : hovered
          ? "var(--border-default)"
          : "var(--border-subtle)",
        borderRadius: "8px",
        cursor: "pointer",
        color: active
          ? activeColor
          : hovered
          ? "var(--text-primary)"
          : "var(--text-secondary)",
        transition:
          "color 150ms ease, border-color 150ms ease, background-color 150ms ease",
        backgroundColor: active
          ? `color-mix(in srgb, ${activeColor} 12%, transparent)`
          : "transparent",
        minWidth: "64px",
      }}
    >
      {icon}
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.7rem",
          fontWeight: 500,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          lineHeight: 1,
        }}
      >
        {label}
      </span>
    </button>
  );
}

interface ThreeStateButtonProps {
  initialState?: Partial<WatchState>;
}

export function ThreeStateButton({
  initialState = {},
}: ThreeStateButtonProps) {
  const [state, setState] = useState<WatchState>({
    watched: false,
    watchlist: false,
    liked: false,
    ...initialState,
  });

  const toggle = (key: keyof WatchState) =>
    setState((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <FilmActionButton
        icon={<Eye size={18} strokeWidth={1.5} />}
        label="Watched"
        active={state.watched}
        activeColor="var(--accent-hover)"
        onToggle={() => toggle("watched")}
      />
      <FilmActionButton
        icon={<Clock size={18} strokeWidth={1.5} />}
        label="Watchlist"
        active={state.watchlist}
        activeColor="var(--accent-hover)"
        onToggle={() => toggle("watchlist")}
      />
      <FilmActionButton
        icon={<Heart size={18} strokeWidth={1.5} />}
        label="Liked"
        active={state.liked}
        activeColor="var(--accent-danger)"
        onToggle={() => toggle("liked")}
      />
    </div>
  );
}

export function ThreeStateShowcase() {
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
        gap: "28px",
      }}
    >
      {/* Default state */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "16px",
          }}
        >
          Default — no state active (click to toggle)
        </p>
        <ThreeStateButton />
      </div>

      {/* Watched + liked */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "16px",
          }}
        >
          Watched + liked — common post-viewing state
        </p>
        <ThreeStateButton initialState={{ watched: true, liked: true }} />
      </div>

      {/* Watchlist only */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "16px",
          }}
        >
          Watchlist — queued but not yet watched
        </p>
        <ThreeStateButton initialState={{ watchlist: true }} />
      </div>
    </div>
  );
}
