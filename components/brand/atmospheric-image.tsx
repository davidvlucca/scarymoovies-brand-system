export interface AtmosphericImageProps {
  src: string;
  alt: string;
  caption?: string;
  size?: "full" | "wide" | "portrait";
  vignette?: boolean;
}

export function AtmosphericImage({
  src,
  alt,
  caption,
  size = "full",
  vignette = true,
}: AtmosphericImageProps) {
  const aspectRatioMap = {
    full: "16 / 9",
    wide: "21 / 9",
    portrait: "2 / 3",
  };

  const wrapperStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    aspectRatio: aspectRatioMap[size],
    overflow: "hidden",
    borderRadius: "4px",
  };

  const imgStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  };

  const vignetteStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, transparent 40%, var(--bg-primary) 100%)",
    pointerEvents: "none",
  };

  const figureStyle: React.CSSProperties = {
    margin: "48px 0",
  };

  const portraitWrapperStyle: React.CSSProperties =
    size === "portrait"
      ? { maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }
      : {};

  const captionStyle: React.CSSProperties = {
    marginTop: "10px",
    fontFamily: "var(--font-body)",
    fontSize: "0.8125rem",
    color: "var(--text-muted)",
    fontStyle: "italic",
  };

  return (
    <figure style={figureStyle}>
      <div style={portraitWrapperStyle}>
        <div style={wrapperStyle}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} style={imgStyle} loading="lazy" />
          {vignette && <div style={vignetteStyle} aria-hidden="true" />}
        </div>
      </div>
      {caption && <figcaption style={captionStyle}>{caption}</figcaption>}
    </figure>
  );
}
