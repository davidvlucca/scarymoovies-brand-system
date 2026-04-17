"use client";

type SkeletonVariant = "poster" | "text" | "circle" | "card" | "row";

interface SkeletonProps {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
}

export function Skeleton({
  width,
  height = "16px",
  borderRadius = "4px",
}: Omit<SkeletonProps, "variant">) {
  return (
    <div
      className="skeleton"
      style={{
        width: width ?? "100%",
        height,
        borderRadius,
      }}
    />
  );
}

export function SkeletonPoster({ width = "80px" }: { width?: string }) {
  return (
    <div
      className="skeleton"
      style={{
        width,
        aspectRatio: "2 / 3",
        borderRadius: "8px",
        flexShrink: 0,
      }}
    />
  );
}

export function SkeletonCard() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <SkeletonPoster width="100%" />
      <Skeleton height="14px" width="80%" />
      <Skeleton height="12px" width="50%" />
    </div>
  );
}

export function SkeletonTextBlock({ lines = 3 }: { lines?: number }) {
  const widths = ["100%", "85%", "70%", "90%", "60%"];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} height="14px" width={widths[i % widths.length]} />
      ))}
    </div>
  );
}

export function SkeletonShowcase() {
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
        gap: "32px",
      }}
    >
      {/* Poster grid */}
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
          Poster grid — movie card loading state
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>

      {/* Text block */}
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
          Text lines — description / metadata loading state
        </p>
        <SkeletonTextBlock lines={4} />
      </div>

      {/* Row */}
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
          Horizontal row — poster strip loading state
        </p>
        <div style={{ display: "flex", gap: "12px", overflow: "hidden" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonPoster key={i} width="72px" />
          ))}
        </div>
      </div>
    </div>
  );
}
