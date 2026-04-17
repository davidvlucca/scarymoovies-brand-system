import { Info, AlertTriangle, Lightbulb } from "lucide-react";

type CalloutVariant = "info" | "warning" | "tip";

interface CalloutBoxProps {
  variant?: CalloutVariant;
  children: React.ReactNode;
}

const CALLOUT_CONFIG: Record<CalloutVariant, {
  icon: React.ReactNode;
  borderColor: string;
  bgColor: string;
  labelColor: string;
  label: string;
}> = {
  info: {
    icon: <Info size={14} strokeWidth={1.5} />,
    borderColor: "var(--border-default)",
    bgColor: "rgba(255,255,255,0.03)",
    labelColor: "var(--text-secondary)",
    label: "Note",
  },
  warning: {
    icon: <AlertTriangle size={14} strokeWidth={1.5} />,
    borderColor: "rgba(117,17,17,0.6)",
    bgColor: "rgba(117,17,17,0.08)",
    labelColor: "var(--accent-danger)",
    label: "Warning",
  },
  tip: {
    icon: <Lightbulb size={14} strokeWidth={1.5} />,
    borderColor: "rgba(93,51,125,0.5)",
    bgColor: "rgba(93,51,125,0.08)",
    labelColor: "var(--accent-hover)",
    label: "Tip",
  },
};

export function CalloutBox({ variant = "info", children }: CalloutBoxProps) {
  const config = CALLOUT_CONFIG[variant];

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        padding: "14px 16px",
        backgroundColor: config.bgColor,
        border: `1px solid ${config.borderColor}`,
        borderRadius: "6px",
        margin: "16px 0",
      }}
    >
      <span
        style={{
          color: config.labelColor,
          flexShrink: 0,
          marginTop: "2px",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {config.icon}
      </span>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.875rem",
          color: "var(--text-secondary)",
          lineHeight: 1.65,
        }}
      >
        <strong
          style={{
            fontWeight: 600,
            color: config.labelColor,
            marginRight: "6px",
          }}
        >
          {config.label}:
        </strong>
        {children}
      </div>
    </div>
  );
}

export function CalloutShowcase() {
  return (
    <div style={{ margin: "24px 0", display: "flex", flexDirection: "column", gap: "0" }}>
      <CalloutBox variant="info">
        This component requires JavaScript. Server-rendered fallback is not available.
      </CalloutBox>
      <CalloutBox variant="warning">
        Do not use <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.8em", color: "var(--accent-danger)", backgroundColor: "rgba(117,17,17,0.15)", padding: "1px 4px", borderRadius: "3px" }}>RatingChip</code> below 20px — the tier letter becomes illegible at smaller sizes.
      </CalloutBox>
      <CalloutBox variant="tip">
        Use <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.8em", color: "var(--accent-hover)", backgroundColor: "rgba(93,51,125,0.15)", padding: "1px 4px", borderRadius: "3px" }}>readOnly</code> when displaying ratings in a list context — interactive stars are only for active rating input.
      </CalloutBox>
    </div>
  );
}
