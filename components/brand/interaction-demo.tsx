"use client";

import { useState } from "react";

interface InteractionDemoProps {
  variant: "genre-filter" | "mood-filter";
  label?: string;
}

const GENRES: { id: string; label: string; films: string[] }[] = [
  {
    id: "slasher",
    label: "Slasher",
    films: ["Halloween (1978)", "Scream (1996)", "Friday the 13th (1980)"],
  },
  {
    id: "supernatural",
    label: "Supernatural",
    films: ["The Shining (1980)", "Hereditary (2018)", "The Conjuring (2013)"],
  },
  {
    id: "psychological",
    label: "Psychological",
    films: ["Black Swan (2010)", "Get Out (2017)", "Midsommar (2019)"],
  },
  {
    id: "cosmic-horror",
    label: "Cosmic Horror",
    films: ["The Thing (1982)", "Annihilation (2018)", "Color Out of Space (2019)"],
  },
];

const MOODS: { id: string; label: string }[] = [
  { id: "terrified", label: "Terrified" },
  { id: "unsettled", label: "Unsettled" },
  { id: "disturbed", label: "Disturbed" },
  { id: "tense", label: "Tense" },
  { id: "dread", label: "Dread" },
  { id: "suspense", label: "Suspense" },
];

// Arbitrary pairing: clicking a mood "matches" only a subset of the 6 cards
const MOOD_MATCHES: Record<string, string[]> = {
  terrified: ["terrified", "dread"],
  unsettled: ["unsettled", "suspense"],
  disturbed: ["disturbed", "psychological"],
  tense: ["tense", "suspense"],
  dread: ["dread", "terrified"],
  suspense: ["suspense", "tense"],
};

function GenreFilterDemo() {
  const [activeGenre, setActiveGenre] = useState<string | null>(null);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  };

  const genreButtonStyle = (isActive: boolean): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 16px",
    backgroundColor: isActive ? "var(--accent-primary)" : "var(--bg-surface)",
    border: `1px solid ${isActive ? "var(--accent-primary)" : "var(--border-subtle)"}`,
    borderRadius: "6px",
    color: "var(--text-primary)",
    fontFamily: "var(--font-body)",
    fontSize: "0.9375rem",
    fontWeight: isActive ? 600 : 400,
    cursor: "pointer",
    textAlign: "left",
    width: "100%",
    transition: "background-color 200ms ease, border-color 200ms ease",
    outline: "none",
  });

  const filmListStyle = (isActive: boolean): React.CSSProperties => ({
    maxHeight: isActive ? "200px" : "0",
    opacity: isActive ? 1 : 0,
    overflow: "hidden",
    transition: "max-height 300ms ease, opacity 200ms ease",
  });

  const filmListInnerStyle: React.CSSProperties = {
    padding: "8px 16px 12px 16px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  };

  const filmItemStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: "0.8125rem",
    color: "var(--text-secondary)",
    paddingLeft: "12px",
    borderLeft: "2px solid var(--accent-primary)",
  };

  return (
    <div style={containerStyle}>
      {GENRES.map((genre) => {
        const isActive = activeGenre === genre.id;
        return (
          <div key={genre.id}>
            <button
              style={genreButtonStyle(isActive)}
              onClick={() => setActiveGenre(isActive ? null : genre.id)}
              onFocus={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 0 2px var(--accent-hover)";
              }}
              onBlur={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
              aria-expanded={isActive}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: isActive
                    ? "var(--text-primary)"
                    : "var(--text-muted)",
                  flexShrink: 0,
                  transition: "background-color 200ms ease",
                }}
              />
              {genre.label}
            </button>
            <div style={filmListStyle(isActive)} aria-hidden={!isActive}>
              <div style={filmListInnerStyle}>
                {genre.films.map((film) => (
                  <div key={film} style={filmItemStyle}>
                    {film}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MoodFilterDemo() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  };

  const matches = selectedMood ? MOOD_MATCHES[selectedMood] ?? [] : null;

  const cardStyle = (moodId: string): React.CSSProperties => {
    const isSelected = selectedMood === moodId;
    const isMatch = matches === null || matches.includes(moodId);

    return {
      padding: "20px 12px",
      backgroundColor: isSelected ? "var(--accent-primary)" : "var(--bg-surface)",
      border: `1px solid ${isSelected ? "var(--accent-hover)" : "var(--border-subtle)"}`,
      borderRadius: "8px",
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      fontSize: "0.8125rem",
      fontWeight: isSelected ? 600 : 400,
      cursor: "pointer",
      textAlign: "center",
      opacity: isMatch ? 1 : 0.15,
      transition: "opacity 200ms ease, background-color 200ms ease, border-color 200ms ease",
      outline: "none",
    };
  };

  return (
    <div>
      <div style={gridStyle}>
        {MOODS.map((mood) => (
          <button
            key={mood.id}
            style={cardStyle(mood.id)}
            onClick={() =>
              setSelectedMood(selectedMood === mood.id ? null : mood.id)
            }
            onFocus={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 0 2px var(--accent-hover)";
            }}
            onBlur={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
            aria-pressed={selectedMood === mood.id}
          >
            {mood.label}
          </button>
        ))}
      </div>
      {selectedMood && (
        <p
          style={{
            marginTop: "12px",
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
          }}
        >
          Showing films that match <strong style={{ color: "var(--text-secondary)" }}>{selectedMood}</strong>. Non-matching cards dim in place — no layout shift.
        </p>
      )}
    </div>
  );
}

export function InteractionDemo({ variant, label }: InteractionDemoProps) {
  const wrapperStyle: React.CSSProperties = {
    backgroundColor: "var(--bg-surface)",
    border: "1px solid var(--border-subtle)",
    borderRadius: "10px",
    padding: "24px",
    margin: "24px 0",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: "0.6875rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    marginBottom: "16px",
  };

  return (
    <div style={wrapperStyle}>
      {label && <div style={labelStyle}>{label}</div>}
      {variant === "genre-filter" ? <GenreFilterDemo /> : <MoodFilterDemo />}
    </div>
  );
}
