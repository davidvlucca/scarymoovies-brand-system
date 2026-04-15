interface Annotation {
  x: number; // percentage 0-100 from left
  y: number; // percentage 0-100 from top
  number: number;
  label: string;
}

interface ScreenAnnotationProps {
  src: string;
  alt: string;
  annotations?: Annotation[];
  caption?: string;
}

export function ScreenAnnotation({
  src,
  alt,
  annotations = [],
  caption,
}: ScreenAnnotationProps) {
  const containerStyle: React.CSSProperties = {
    margin: "24px 0",
  };

  const imageWrapperStyle: React.CSSProperties = {
    position: "relative",
    display: "block",
    borderRadius: "8px",
    overflow: "hidden",
    border: "1px solid var(--border-subtle)",
  };

  const imgStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    height: "auto",
  };

  const badgeStyle = (x: number, y: number): React.CSSProperties => ({
    position: "absolute",
    left: `${x}%`,
    top: `${y}%`,
    transform: "translate(-50%, -50%)",
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: "var(--accent-primary)",
    border: "2px solid var(--accent-hover)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-body)",
    fontSize: "0.6875rem",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "default",
    userSelect: "none",
    boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
    zIndex: 10,
  });

  const captionStyle: React.CSSProperties = {
    marginTop: "10px",
    fontFamily: "var(--font-body)",
    fontSize: "0.8125rem",
    color: "var(--text-muted)",
    fontStyle: "italic",
  };

  const listStyle: React.CSSProperties = {
    marginTop: "16px",
    paddingLeft: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const listItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    fontFamily: "var(--font-body)",
    fontSize: "0.875rem",
    color: "var(--text-secondary)",
  };

  const listBadgeStyle: React.CSSProperties = {
    flexShrink: 0,
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "var(--accent-primary)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-body)",
    fontSize: "0.625rem",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1px",
  };

  const sortedAnnotations = [...annotations].sort((a, b) => a.number - b.number);

  return (
    <div style={containerStyle}>
      <div style={imageWrapperStyle}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} style={imgStyle} />
        {sortedAnnotations.map((annotation) => (
          <div
            key={annotation.number}
            style={badgeStyle(annotation.x, annotation.y)}
            title={annotation.label}
            aria-label={`Annotation ${annotation.number}: ${annotation.label}`}
          >
            {annotation.number}
          </div>
        ))}
      </div>

      {caption && <p style={captionStyle}>{caption}</p>}

      {sortedAnnotations.length > 0 && (
        <ol style={listStyle} aria-label="Annotation key">
          {sortedAnnotations.map((annotation) => (
            <li key={annotation.number} style={listItemStyle}>
              <span style={listBadgeStyle} aria-hidden="true">
                {annotation.number}
              </span>
              <span>{annotation.label}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
