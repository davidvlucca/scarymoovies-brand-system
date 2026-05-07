"use client";

import { useState } from "react";

const QUESTION = {
  q: "What are you afraid of?",
  a: [
    "Something in the house.",
    "Something in your head.",
    "Something in your body.",
    "Something that already happened.",
  ],
};

const RESULT = {
  src: "/assets/poster-hereditary.jpg",
  title: "Hereditary",
  year: 2018,
  genre: "Supernatural",
  runtime: "127 min",
  verdict: "Grief-coded supernatural. The slow third act is the whole film.",
  blurb: "The kind of film that stays in the room after it ends.",
};

function QuestionSlide() {
  const [chosen, setChosen] = useState<number | null>(null);

  return (
    <div
      style={{
        backgroundColor: "var(--bg-primary)",
        padding: "48px 32px",
        textAlign: "center",
        borderRadius: "var(--radius) var(--radius) 0 0",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.16em",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}
      >
        Question 4 of 8
      </div>

      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
          margin: "0 0 40px",
        }}
      >
        {QUESTION.q}
      </h2>

      <div style={{ display: "grid", gap: "10px", maxWidth: "520px", margin: "0 auto" }}>
        {QUESTION.a.map((text, i) => (
          <button
            key={i}
            onClick={() => setChosen(i)}
            style={{
              background:
                chosen === i
                  ? "rgba(93, 51, 125, 0.2)"
                  : "var(--bg-surface)",
              border: `1px solid ${
                chosen === i ? "var(--accent-primary)" : "var(--border-subtle)"
              }`,
              color: "var(--text-primary)",
              padding: "16px 20px",
              borderRadius: "var(--radius)",
              fontSize: "15px",
              fontWeight: 500,
              fontFamily: "var(--font-body)",
              textAlign: "left",
              cursor: "pointer",
              transition: "border-color 150ms ease-out, background 150ms ease-out",
            }}
          >
            {text}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: "100%",
          height: "2px",
          background: "var(--border-subtle)",
          marginTop: "40px",
          borderRadius: "1px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "37.5%",
            background: "var(--accent-primary)",
            transition: "width 400ms ease-out",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "var(--text-muted)",
            fontSize: "11px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 600,
            fontFamily: "var(--font-body)",
            cursor: "pointer",
          }}
        >
          ← Back
        </button>
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "var(--text-muted)",
            fontSize: "11px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 600,
            fontFamily: "var(--font-body)",
            cursor: "pointer",
          }}
        >
          Exit
        </button>
      </div>
    </div>
  );
}

function ResultCard() {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-primary)",
        padding: "48px 32px",
        borderRadius: "0 0 var(--radius) var(--radius)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          gap: "40px",
          alignItems: "center",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        {/* Poster */}
        <div
          style={{
            borderRadius: "var(--radius)",
            overflow: "hidden",
            aspectRatio: "2 / 3",
            boxShadow: "0 24px 64px rgba(0,0,0,0.7)",
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={RESULT.src}
            alt={RESULT.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* Result body */}
        <div>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--accent-strong)",
              fontWeight: 600,
              marginBottom: "12px",
            }}
          >
            The Verdict · One film, not fifty
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "var(--text-primary)",
              margin: "0 0 10px",
            }}
          >
            {RESULT.title}
          </h1>

          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--text-muted)",
              letterSpacing: "0.04em",
              marginBottom: "16px",
            }}
          >
            {RESULT.year} · {RESULT.genre} · {RESULT.runtime}
          </div>

          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              margin: "0 0 12px",
            }}
          >
            {RESULT.verdict}
          </p>

          <p
            style={{
              fontSize: "13px",
              lineHeight: 1.55,
              color: "var(--text-muted)",
              margin: "0 0 24px",
            }}
          >
            {RESULT.blurb}
          </p>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button
              style={{
                background: "var(--accent-primary)",
                color: "#fefefe",
                border: "none",
                borderRadius: "var(--radius)",
                padding: "10px 20px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-body)",
                cursor: "pointer",
              }}
            >
              See details
            </button>
            <button
              style={{
                background: "transparent",
                color: "var(--text-secondary)",
                border: "1px solid var(--border-default)",
                borderRadius: "var(--radius)",
                padding: "10px 20px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-body)",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PYFShowcase() {
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
        Pick Your Fear — question slide (interactive) · result card
      </p>

      <div
        style={{
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius)",
          overflow: "hidden",
        }}
      >
        <QuestionSlide />
        <ResultCard />
      </div>
    </div>
  );
}
