type LogoVariant = "black" | "white";
type LogoBackground = "dark" | "light" | "purple";

interface LogoDisplayProps {
  variant: LogoVariant;
  background: LogoBackground;
  caption?: string;
}

const BG_COLORS: Record<LogoBackground, string> = {
  dark:   "var(--bg-primary)",
  light:  "var(--white-500, #f4f2f5)",
  purple: "var(--accent-primary)",
};

export function LogoDisplay({ variant, background, caption }: LogoDisplayProps) {
  const src = variant === "white" ? "/assets/logo-white.png" : "/assets/logo-black.png";
  const bgColor = BG_COLORS[background];

  return (
    <figure style={{ margin: "24px 0" }}>
      <div
        style={{
          backgroundColor: bgColor,
          padding: "40px",
          borderRadius: "8px",
          border: "1px solid var(--border-subtle)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "160px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`ScaryMoovies logo — ${variant} variant`}
          style={{ maxWidth: "240px", maxHeight: "100px", objectFit: "contain" }}
        />
      </div>
      {caption && (
        <figcaption
          style={{
            marginTop: "8px",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-body)",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
