"use client";

import { CheckCircle, XCircle, Info, X } from "lucide-react";

type ToastVariant = "success" | "error" | "info";

interface ToastItemProps {
  variant: ToastVariant;
  message: string;
  sub?: string;
}

const TOAST_CONFIG: Record<
  ToastVariant,
  { icon: React.ReactNode; accent: string; label: string }
> = {
  success: {
    icon: <CheckCircle size={16} strokeWidth={1.5} />,
    accent: "var(--purple-300)",
    label: "Success",
  },
  error: {
    icon: <XCircle size={16} strokeWidth={1.5} />,
    accent: "var(--accent-danger)",
    label: "Error",
  },
  info: {
    icon: <Info size={16} strokeWidth={1.5} />,
    accent: "var(--text-muted)",
    label: "Info",
  },
};

function ToastItem({ variant, message, sub }: ToastItemProps) {
  const { icon, accent } = TOAST_CONFIG[variant];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        padding: "12px 16px",
        backgroundColor: "var(--bg-elevated)",
        border: "1px solid var(--border-subtle)",
        borderLeft: `3px solid ${accent}`,
        borderRadius: "8px",
        maxWidth: "340px",
        width: "100%",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
      }}
    >
      <span style={{ color: accent, flexShrink: 0, marginTop: "1px" }}>
        {icon}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "var(--text-primary)",
            lineHeight: 1.4,
          }}
        >
          {message}
        </p>
        {sub && (
          <p
            style={{
              margin: "2px 0 0",
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              lineHeight: 1.4,
            }}
          >
            {sub}
          </p>
        )}
      </div>
      <button
        aria-label="Dismiss"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--text-muted)",
          padding: "2px",
          display: "flex",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <X size={14} strokeWidth={1.5} />
      </button>
    </div>
  );
}

export function ToastShowcase() {
  const examples: ToastItemProps[] = [
    {
      variant: "success",
      message: "Added to watchlist.",
      sub: "Hereditary · Your Watchlist",
    },
    {
      variant: "success",
      message: "Review posted.",
      sub: "The Shining · Visible to followers",
    },
    {
      variant: "error",
      message: "Something went wrong in the dark.",
      sub: "Refresh and try again.",
    },
    {
      variant: "info",
      message: "Tier list saved.",
    },
  ];

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
        gap: "12px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "8px",
        }}
      >
        All toast variants — as they appear stacked top-right
      </p>
      {examples.map((ex, i) => (
        <ToastItem key={i} {...ex} />
      ))}
    </div>
  );
}
