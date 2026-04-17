import Image from "next/image";

interface ImageGridItem {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGridProps {
  images: ImageGridItem[];
  columns?: 2 | 3;
  caption?: string;
}

export function ImageGrid({ images, columns = 3, caption }: ImageGridProps) {
  return (
    <figure style={{ margin: "24px 0" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "8px",
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              aspectRatio: "16/9",
              borderRadius: "6px",
              overflow: "hidden",
              backgroundColor: "var(--bg-elevated)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes={`(max-width: 768px) 100vw, ${Math.round(100 / columns)}vw`}
              style={{ objectFit: "cover" }}
            />
            {img.caption && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "20px 10px 8px",
                  background: "linear-gradient(to top, rgba(12,10,14,0.85) 0%, transparent 100%)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  {img.caption}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      {caption && (
        <figcaption
          style={{
            marginTop: "8px",
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
