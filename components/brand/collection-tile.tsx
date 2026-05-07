"use client";

import { useState } from "react";

export interface CollectionTileProps {
  title: string;
  blurb: string;
  src: string;
  align?: "left" | "right";
  href?: string;
}

export function CollectionTile({
  title,
  blurb,
  src,
  align = "left",
  href,
}: CollectionTileProps) {
  const [hovered, setHovered] = useState(false);

  const gradientDir = align === "right" ? "270deg" : "90deg";

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    background:
      align === "left"
        ? `linear-gradient(90deg, rgba(12,10,14,0.95) 0%, rgba(12,10,14,0.5) 50%, rgba(12,10,14,0.2) 100%)`
        : `linear-gradient(270deg, rgba(12,10,14,0.95) 0%, rgba(12,10,14,0.5) 50%, rgba(12,10,14,0.2) 100%)`,
  };

  const bodyStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 2,
    padding: "28px 32px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignItems: align === "right" ? "flex-end" : "flex-start",
    textAlign: align === "right" ? "right" : "left",
  };

  const Wrapper = href ? "a" : "article";
  const wrapperProps = href
    ? { href, style: { textDecoration: "none" } }
    : {};

  return (
    <Wrapper
      {...(wrapperProps as React.AnchorHTMLAttributes<HTMLElement>)}
      style={{
        position: "relative",
        borderRadius: "var(--radius)",
        overflow: "hidden",
        minHeight: "280px",
        display: "flex",
        alignItems: "flex-end",
        isolation: "isolate",
        backgroundColor: "var(--bg-surface)",
        cursor: href ? "pointer" : "default",
        transform: hovered && href ? "translateY(-2px)" : "translateY(0)",
        transition: "transform 150ms ease-out",
        ...(wrapperProps as React.CSSProperties),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          filter: hovered
            ? "brightness(0.65) saturate(0.85)"
            : "brightness(0.55) saturate(0.8)",
          transition: "filter 200ms ease-out",
        }}
        loading="lazy"
      />

      <div style={overlayStyle} />

      <div style={bodyStyle}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            letterSpacing: "-0.01em",
            lineHeight: 1,
            textTransform: "uppercase",
            color: "var(--text-primary)",
            margin: 0,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "13px",
            lineHeight: 1.5,
            color: "var(--text-secondary)",
            margin: 0,
            maxWidth: "360px",
          }}
        >
          {blurb}
        </p>
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 20px",
            borderRadius: "9999px",
            backgroundColor: "var(--accent-primary)",
            color: "#fefefe",
            border: "none",
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "background-color 150ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--accent-hover)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--accent-primary)";
          }}
        >
          View Collection
        </button>
      </div>
    </Wrapper>
  );
}

const SAMPLE_COLLECTIONS: CollectionTileProps[] = [
  {
    title: "Warren Family",
    blurb:
      "Cases and hauntings investigated by Ed and Lorraine Warren — the paranormal couple whose case files spawned a cinematic universe of dread.",
    src: "/assets/horror-cinematic-02.jpg",
    align: "right",
  },
  {
    title: "The Lost Tapes",
    blurb:
      "Disturbing recordings, missing archives and stories captured by accident.",
    src: "/assets/horror-ghostface-01.jpg",
    align: "left",
  },
];

export function CollectionTileShowcase() {
  return (
    <div style={{ margin: "24px 0" }}>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "12px",
        }}
      >
        Collection tile — left align · right align
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {SAMPLE_COLLECTIONS.map((c) => (
          <CollectionTile key={c.title} {...c} />
        ))}
      </div>
    </div>
  );
}
