"use client";

import Image from "next/image";

type AvatarSize = "sm" | "md" | "lg" | "xl" | "2xl";

const SIZE_MAP: Record<AvatarSize, { px: number; fontSize: string }> = {
  sm:  { px: 24,  fontSize: "0.625rem" },
  md:  { px: 32,  fontSize: "0.75rem"  },
  lg:  { px: 48,  fontSize: "1rem"     },
  xl:  { px: 80,  fontSize: "1.5rem"   },
  "2xl": { px: 120, fontSize: "2.25rem" },
};

interface UserAvatarProps {
  name: string;
  src?: string;
  size?: AvatarSize;
  ring?: boolean;
  className?: string;
}

export function UserAvatar({
  name,
  src,
  size = "md",
  ring = false,
}: UserAvatarProps) {
  const { px, fontSize } = SIZE_MAP[size];
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      style={{
        width: `${px}px`,
        height: `${px}px`,
        borderRadius: "9999px",
        overflow: "hidden",
        flexShrink: 0,
        position: "relative",
        backgroundColor: "var(--bg-elevated)",
        border: ring
          ? "2px solid var(--accent-primary)"
          : "1px solid var(--border-subtle)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          sizes={`${px}px`}
        />
      ) : (
        <span
          style={{
            fontSize,
            fontWeight: 600,
            fontFamily: "var(--font-body)",
            color: "var(--text-secondary)",
            userSelect: "none",
          }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}

export function UserAvatarShowcase() {
  const sizes: AvatarSize[] = ["sm", "md", "lg", "xl", "2xl"];

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
      {/* Size scale */}
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
          Size scale — sm / md / lg / xl / 2xl
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {sizes.map((s) => (
            <div
              key={s}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <UserAvatar name="David Lucca" size={s} />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--text-muted)",
                }}
              >
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Ring variant */}
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
          Ring variant — active / profile context
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <UserAvatar name="David Lucca" size="lg" />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--text-muted)",
              }}
            >
              default
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <UserAvatar name="David Lucca" size="lg" ring />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--text-muted)",
              }}
            >
              ring
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
