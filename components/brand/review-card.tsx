"use client";

import { ThumbsUp, Film } from "lucide-react";
import { UserAvatar } from "./user-avatar";
import { StarRating } from "./star-rating";
import { RatingChip, type Tier } from "./rating-chip";

interface ReviewCardRating {
  variant: "star";
  score: number;
}
interface ReviewCardTierRating {
  variant: "tier";
  tier: Tier;
}

interface ReviewCardProps {
  author: {
    name: string;
    handle?: string;
    avatarSrc?: string;
  };
  rating?: ReviewCardRating | ReviewCardTierRating;
  text: string;
  date: string;
  helpfulCount?: number;
  film?: {
    title: string;
    year: number;
  };
}

export function ReviewCard({
  author,
  rating,
  text,
  date,
  helpfulCount,
  film,
}: ReviewCardProps) {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "12px",
          marginBottom: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <UserAvatar name={author.name} src={author.avatarSrc} size="md" />
          <div>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--text-primary)",
              }}
            >
              {author.name}
            </p>
            {author.handle && (
              <p
                style={{
                  margin: "2px 0 0",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                }}
              >
                @{author.handle}
              </p>
            )}
          </div>
        </div>
        {rating && (
          <div style={{ flexShrink: 0, paddingTop: "2px" }}>
            {rating.variant === "star" ? (
              <StarRating value={rating.score} readOnly size="sm" />
            ) : (
              <RatingChip variant="tier" tier={rating.tier} />
            )}
          </div>
        )}
      </div>

      {/* Film context */}
      {film && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "12px",
            padding: "4px 10px",
            backgroundColor: "var(--bg-elevated)",
            borderRadius: "4px",
          }}
        >
          <Film
            size={11}
            strokeWidth={1.5}
            style={{ color: "var(--text-muted)", flexShrink: 0 }}
          />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "var(--text-secondary)",
            }}
          >
            {film.title}
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
            }}
          >
            {film.year}
          </span>
        </div>
      )}

      {/* Review text */}
      <p
        style={{
          margin: 0,
          fontFamily: "var(--font-body)",
          fontSize: "0.9rem",
          lineHeight: 1.65,
          color: "var(--text-secondary)",
        }}
      >
        {text}
      </p>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
          }}
        >
          {date}
        </span>
        {helpfulCount !== undefined && (
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "none",
              border: "1px solid var(--border-subtle)",
              borderRadius: "4px",
              padding: "4px 10px",
              cursor: "pointer",
              color: "var(--text-muted)",
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              transition: "color 150ms ease, border-color 150ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.borderColor = "var(--border-default)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-muted)";
              e.currentTarget.style.borderColor = "var(--border-subtle)";
            }}
          >
            <ThumbsUp size={11} strokeWidth={1.5} />
            {helpfulCount > 0 ? `Helpful (${helpfulCount})` : "Helpful"}
          </button>
        )}
      </div>
    </div>
  );
}

const SAMPLE_REVIEWS: ReviewCardProps[] = [
  {
    author: { name: "DarkStar", handle: "darkstar" },
    rating: { variant: "tier", tier: "S" },
    film: { title: "Hereditary", year: 2018 },
    text: "The grief here is real. Aster doesn't let you enjoy the horror — he makes you feel the family falling apart first, so by the time the third act arrives, you're already broken. Grief as horror. The best kind.",
    date: "3 days ago",
    helpfulCount: 47,
  },
  {
    author: { name: "Bloodhound83", handle: "bloodhound83" },
    rating: { variant: "star", score: 4.5 },
    film: { title: "The Shining", year: 1980 },
    text: "Kubrick's Overlook isn't haunted the way King wrote it. It's architectural dread. The hotel is wrong at a structural level — the impossible geography, the window that shouldn't exist. Patient as a trap.",
    date: "1 week ago",
    helpfulCount: 112,
  },
  {
    author: { name: "GhostFrame" },
    rating: { variant: "star", score: 2.5 },
    film: { title: "Halloween Ends", year: 2022 },
    text: "Messy in ways that feel accidental rather than deliberate. The mid-section belongs to a different film entirely. Not unwatchable — just confused about what it wants to be.",
    date: "2 months ago",
    helpfulCount: 8,
  },
];

export function ReviewCardShowcase() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        margin: "24px 0",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "4px",
        }}
      >
        Review cards — tier rating · star rating · no footer
      </p>
      {SAMPLE_REVIEWS.map((r, i) => (
        <ReviewCard key={i} {...r} />
      ))}
    </div>
  );
}
