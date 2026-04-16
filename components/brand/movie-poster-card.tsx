"use client";

import { useState } from "react";

type TierLabel = "S" | "A" | "B" | "C" | "D" | "E" | "F";

const TIER_COLORS: Record<TierLabel, string> = {
  S: "var(--purple-300)",
  A: "var(--purple-400)",
  B: "var(--purple-500)",
  C: "var(--black-400)",
  D: "var(--black-300)",
  E: "var(--accent-danger)",
  F: "var(--red-700)",
};

// ─── MoviePosterCard ───────────────────────────────

export interface MoviePosterCardProps {
  src: string;
  title: string;
  year: number;
  genre: string;
  tier?: TierLabel;
  href?: string;
}

export function MoviePosterCard({
  src,
  title,
  year,
  genre,
  tier,
  href,
}: MoviePosterCardProps) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const Wrapper = href ? "a" : "div";
  const wrapperProps = href ? { href } : {};

  const containerStyle: React.CSSProperties = {
    position: "relative",
    display: "block",
    borderRadius: "6px",
    overflow: "hidden",
    aspectRatio: "2 / 3",
    cursor: href ? "pointer" : "default",
    boxShadow:
      hovered || focused
        ? "0 0 0 2px var(--accent-hover), 0 12px 40px rgba(93,51,125,0.35)"
        : "0 0 0 1px var(--border-subtle)",
    transition: "box-shadow 200ms ease",
    outline: "none",
  };

  const imageStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top",
    transform: hovered ? "scale(1.04)" : "scale(1)",
    transition: "transform 300ms ease",
  };

  const metadataOverlayStyle: React.CSSProperties = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "32px 12px 12px",
    background:
      "linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%)",
  };

  const titleStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-body)",
    fontSize: "0.9375rem",
    fontWeight: 600,
    color: "var(--white-50)",
    lineHeight: 1.3,
    marginBottom: "2px",
  };

  const metaStyle: React.CSSProperties = {
    fontSize: "0.75rem",
    color: "var(--text-muted)",
    fontFamily: "var(--font-body)",
  };

  const tierBadgeStyle: React.CSSProperties = {
    position: "absolute",
    top: "8px",
    left: "8px",
    width: "32px",
    height: "32px",
    borderRadius: "4px",
    backgroundColor: tier ? TIER_COLORS[tier] : "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-display)",
    fontSize: "0.875rem",
    fontWeight: 700,
    color: "var(--white-50)",
    userSelect: "none",
  };

  return (
    <Wrapper
      {...wrapperProps}
      style={containerStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      aria-label={`${title} (${year}) — ${genre}${tier ? `, Tier ${tier}` : ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={`${title} movie poster`} style={imageStyle} loading="lazy" />

      {tier && (
        <div style={tierBadgeStyle} aria-hidden="true">
          {tier}
        </div>
      )}

      <div style={metadataOverlayStyle}>
        <span style={titleStyle}>{title}</span>
        <span style={metaStyle}>
          {year} · {genre}
        </span>
      </div>
    </Wrapper>
  );
}

// ─── MoviePosterGrid ───────────────────────────────

export interface MoviePosterGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
}

export function MoviePosterGrid({
  children,
  columns = 3,
}: MoviePosterGridProps) {
  return (
    <div
      className={`movie-poster-grid movie-poster-grid-${columns}`}
      role="list"
    >
      {children}
    </div>
  );
}
