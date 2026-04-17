interface PersonaCardProps {
  archetype: string;
  name: string;
  wants: string[];
  fears: string[];
  platformGives: string[];
  accentColor?: string;
}

export function PersonaCard({ archetype, name, wants, fears, platformGives, accentColor = "var(--accent-primary)" }: PersonaCardProps) {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "20px 24px 16px",
          borderBottom: "1px solid var(--border-subtle)",
          borderLeft: `3px solid ${accentColor}`,
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: 500,
          }}
        >
          {archetype}
        </p>
        <h3
          style={{
            margin: "6px 0 0",
            fontFamily: "var(--font-display)",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "var(--text-primary)",
            letterSpacing: "0.01em",
          }}
        >
          {name}
        </h3>
      </div>

      {/* Body */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 0,
        }}
      >
        <PersonaSection label="Wants" items={wants} />
        <PersonaSection label="Fears" items={fears} borderLeft />
        <PersonaSection label="Platform gives" items={platformGives} borderLeft highlight />
      </div>
    </div>
  );
}

function PersonaSection({
  label,
  items,
  borderLeft,
  highlight,
}: {
  label: string;
  items: string[];
  borderLeft?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        padding: "16px 20px",
        borderLeft: borderLeft ? "1px solid var(--border-subtle)" : undefined,
      }}
    >
      <p
        style={{
          margin: "0 0 10px",
          fontFamily: "var(--font-body)",
          fontSize: "0.68rem",
          color: highlight ? "var(--accent-hover)" : "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          fontWeight: 600,
        }}
      >
        {label}
      </p>
      <ul
        style={{
          margin: 0,
          paddingLeft: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              color: "var(--text-secondary)",
              lineHeight: 1.5,
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PersonaShowcase() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        margin: "24px 0",
      }}
    >
      <PersonaCard
        archetype="Primary User"
        name="The Horror Obsessive"
        accentColor="var(--accent-hover)"
        wants={[
          "A platform that speaks genre fluently",
          "Deep catalog including obscure and international titles",
          "Tools to log, rank, and debate everything",
          "A community that matches their depth of knowledge",
        ]}
        fears={[
          "Being talked down to",
          "Recommendations trained on general audiences",
          "Losing their viewing history or tier data",
          "Mainstream platforms treating horror as a niche",
        ]}
        platformGives={[
          "Tier List system with S–F taxonomy",
          "Sub-genre and mood filtering",
          "Community reviews with real critical depth",
          "Full catalog depth — not just canonical titles",
        ]}
      />

      <PersonaCard
        archetype="Secondary User"
        name="The Casual Watcher"
        accentColor="var(--accent-primary)"
        wants={[
          "Help navigating an overwhelming genre",
          "Guided path from mood to specific film",
          "Quality assurance — avoiding bad experiences",
          "Easy entry points for different horror sub-types",
        ]}
        fears={[
          "Picking something too extreme",
          "Wasting time on a bad film",
          "Feeling excluded by genre-insider language",
          "Overwhelm from unfiltered catalogs",
        ]}
        platformGives={[
          "Pick Your Fear — 8-question mood quiz",
          "Single confident recommendation per session",
          "Content warnings and horror intensity labels",
          "Curated entry-point collections",
        ]}
      />

      <PersonaCard
        archetype="Tertiary User"
        name="The Community Reviewer"
        accentColor="var(--text-muted)"
        wants={[
          "Reviews that find real readers",
          "Visible taste profile and watchlist",
          "Social layer that rewards engagement",
          "Recognition for deep engagement with the genre",
        ]}
        fears={[
          "Writing reviews into a void",
          "A community without standards",
          "Losing social context if they switch platforms",
          "Being drowned out by volume over quality",
        ]}
        platformGives={[
          "Activity feed visible to followers",
          "Helpful count and comment threads on reviews",
          "Achievement system for engagement milestones",
          "Public tier rankings that invite debate",
        ]}
      />
    </div>
  );
}
