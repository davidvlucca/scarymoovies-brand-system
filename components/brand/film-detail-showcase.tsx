"use client";

const CAST = [
  { name: "Toni Collette", director: false },
  { name: "Alex Wolff", director: false },
  { name: "Milly Shapiro", director: false },
  { name: "Gabriel Byrne", director: false },
  { name: "Ari Aster", director: true },
];

const CREDITS: [string, string][] = [
  ["Director", "Ari Aster"],
  ["Writer", "Ari Aster"],
  ["Studio", "A24 / Palm Star"],
  ["Runtime", "127 min"],
  ["Language", "English"],
];

const VIBES = ["Slow Burn", "Grief Horror", "Supernatural", "Psychological", "Atmospheric"];

const GALLERY = [
  "/assets/horror-title-card-01.jpg",
  "/assets/horror-cinematic-02.jpg",
  "/assets/horror-ghostface-02.jpg",
];

const STAT_PILLS = ["★  S", "2018", "127 min", "Supernatural", "4.8 / 5.0"];

function CastPortrait({ name, director }: { name: string; director: boolean }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        width: "72px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "72px",
          height: "72px",
          borderRadius: "9999px",
          background: "linear-gradient(160deg, var(--purple-700), var(--bg-elevated))",
          border: "1px solid var(--border-strong)",
          display: "grid",
          placeItems: "center",
          color: "var(--purple-200)",
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "20px",
          letterSpacing: "0.04em",
        }}
      >
        {initials}
        {director && (
          <div
            style={{
              position: "absolute",
              bottom: "-2px",
              right: "-6px",
              width: "22px",
              height: "22px",
              borderRadius: "9999px",
              background: "var(--accent-primary)",
              border: "2px solid var(--bg-primary)",
              display: "grid",
              placeItems: "center",
              color: "#fefefe",
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "9px",
              zIndex: 2,
            }}
          >
            D
          </div>
        )}
      </div>
      <span
        style={{
          fontSize: "11px",
          color: "var(--text-secondary)",
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        {name}
      </span>
    </div>
  );
}

export function FilmDetailShowcase() {
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
        Film detail — backdrop hero · two-column hero · stats pills · cast strip · vibe chips · credits · crime scene gallery
      </p>

      <div
        style={{
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius)",
          overflow: "hidden",
          backgroundColor: "var(--bg-primary)",
        }}
      >
        {/* Backdrop */}
        <div style={{ position: "relative", height: "220px", overflow: "hidden", flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/horror-title-card-01.jpg"
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.65) saturate(0.8)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(12,10,14,0) 0%, rgba(12,10,14,1) 100%)",
            }}
          />
        </div>

        <div
          style={{
            padding: "0 28px 36px",
            marginTop: "-72px",
            position: "relative",
          }}
        >
          {/* Two-column hero: trailer + poster */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 160px",
              gap: "16px",
              alignItems: "end",
            }}
          >
            {/* Trailer placeholder */}
            <div
              style={{
                position: "relative",
                aspectRatio: "16 / 9",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                background: "var(--bg-elevated)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/horror-cinematic-02.jpg"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.5) saturate(0.8)",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "9999px",
                    border: "2px solid var(--purple-300)",
                    background: "rgba(36,16,56,0.6)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--purple-200)",
                    fontSize: "18px",
                    paddingLeft: "4px",
                  }}
                >
                  ▶
                </div>
              </div>
            </div>

            {/* Poster */}
            <div
              style={{
                borderRadius: "var(--radius)",
                overflow: "hidden",
                aspectRatio: "2 / 3",
                background: "var(--bg-elevated)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/poster-hereditary.jpg"
                alt="Hereditary poster"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 160px",
              gap: "16px",
              marginTop: "14px",
              alignItems: "start",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {STAT_PILLS.map((s) => (
                <span
                  key={s}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "var(--purple-900)",
                    border: "1px solid var(--purple-800)",
                    color: "var(--text-primary)",
                    padding: "6px 12px",
                    borderRadius: "9999px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
            <button
              style={{
                width: "100%",
                background: "var(--bg-surface)",
                border: "1px solid var(--border-strong)",
                color: "var(--text-primary)",
                padding: "12px 16px",
                borderRadius: "var(--radius)",
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              + Watchlist
            </button>
          </div>

          {/* Body grid: main + sidebar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 160px",
              gap: "20px",
              marginTop: "28px",
            }}
          >
            {/* Main column */}
            <div>
              {/* Eyebrow + title */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--accent-strong)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                Film
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "1.75rem",
                  color: "var(--text-primary)",
                  margin: "0 0 8px",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                }}
              >
                Hereditary
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                  margin: "0 0 24px",
                  maxWidth: "560px",
                }}
              >
                When the matriarch of the Graham family passes away, her daughter&apos;s family
                begins to unravel cryptic and terrifying secrets about their ancestry.
                As grief triggers increasingly disturbing revelations, they are thrust
                into a nightmare no one could have foreseen.
              </p>

              {/* Cast strip */}
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-primary)",
                    marginBottom: "14px",
                  }}
                >
                  Cast
                </div>
                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                  {CAST.map((c) => (
                    <CastPortrait key={c.name} name={c.name} director={c.director} />
                  ))}
                </div>
              </div>

              {/* Vibe chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                {VIBES.map((v) => (
                  <span
                    key={v}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      background: "var(--purple-800)",
                      color: "var(--purple-200)",
                      border: "1px solid var(--purple-700)",
                      padding: "5px 10px",
                      borderRadius: "9999px",
                    }}
                  >
                    {v}
                  </span>
                ))}
              </div>

              {/* Credits dl */}
              <dl
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  rowGap: "10px",
                  columnGap: "18px",
                  margin: 0,
                }}
              >
                {CREDITS.map(([label, value]) => (
                  <>
                    <dt
                      key={`dt-${label}`}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        margin: 0,
                      }}
                    >
                      {label}
                    </dt>
                    <dd
                      key={`dd-${label}`}
                      style={{ margin: 0, fontSize: "14px", color: "var(--text-primary)" }}
                    >
                      {value}
                    </dd>
                  </>
                ))}
              </dl>
            </div>

            {/* Sidebar: suggestions */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-primary)",
                  marginBottom: "12px",
                }}
              >
                If you liked this
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {["/assets/poster-scream.jpg", "/assets/poster-the-shining.jpg"].map((src) => (
                  <div
                    key={src}
                    style={{
                      borderRadius: "var(--radius)",
                      overflow: "hidden",
                      aspectRatio: "2 / 3",
                      background: "var(--bg-elevated)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt=""
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Crime scene gallery */}
          <div style={{ marginTop: "48px" }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "22px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                marginBottom: "16px",
              }}
            >
              Crime Scene
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
              }}
            >
              {GALLERY.map((src) => (
                <div
                  key={src}
                  style={{
                    position: "relative",
                    aspectRatio: "16 / 10",
                    borderRadius: "var(--radius)",
                    overflow: "hidden",
                    background: "var(--bg-elevated)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "brightness(0.85) saturate(0.85)",
                      display: "block",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
