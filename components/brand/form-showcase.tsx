"use client";

import { useState } from "react";

// ─── Design tokens (all via CSS variables) ─────────

const t = {
  bgSurface: "var(--bg-surface)",
  bgElevated: "var(--bg-elevated)",
  bgPrimary: "var(--bg-primary)",
  textPrimary: "var(--text-primary)",
  textSecondary: "var(--text-secondary)",
  textMuted: "var(--text-muted)",
  accentPrimary: "var(--accent-primary)",
  accentHover: "var(--accent-hover)",
  accentDanger: "var(--accent-danger)",
  borderSubtle: "var(--border-subtle)",
  borderDefault: "var(--border-default)",
  borderFocus: "var(--border-focus)",
  fontBody: "var(--font-body)",
  fontMono: "var(--font-mono)",
  radius: "6px",
  radiusFull: "9999px",
};

// ─── BrandLabel ────────────────────────────────────

export interface BrandLabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  optional?: boolean;
}

export function BrandLabel({ children, htmlFor, optional }: BrandLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: t.fontBody,
        fontSize: "0.875rem",
        fontWeight: 500,
        color: t.textPrimary,
        marginBottom: "6px",
        userSelect: "none",
      }}
    >
      {children}
      {optional && (
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 400,
            color: t.textMuted,
          }}
        >
          optional
        </span>
      )}
    </label>
  );
}

// ─── BrandInput ────────────────────────────────────

export interface BrandInputProps {
  id?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  type?: string;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function BrandInput({
  id,
  placeholder,
  value,
  defaultValue,
  type = "text",
  disabled = false,
  error,
  helperText,
  onChange,
}: BrandInputProps) {
  const [focused, setFocused] = useState(false);

  const inputStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    height: "40px",
    padding: "0 12px",
    backgroundColor: disabled ? t.bgElevated : t.bgSurface,
    border: `1px solid ${error ? t.accentDanger : focused ? t.borderFocus : t.borderDefault}`,
    borderRadius: t.radius,
    fontFamily: t.fontBody,
    fontSize: "0.875rem",
    color: disabled ? t.textMuted : t.textPrimary,
    outline: "none",
    transition: "border-color 150ms ease, box-shadow 150ms ease",
    boxShadow: focused && !error
      ? `0 0 0 3px rgba(120,84,146,0.15)`
      : focused && error
        ? `0 0 0 3px rgba(117,17,17,0.15)`
        : "none",
    cursor: disabled ? "not-allowed" : "text",
  };

  return (
    <div style={{ width: "100%" }}>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        style={inputStyle}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {(helperText || error) && (
        <p
          style={{
            marginTop: "6px",
            fontSize: "0.8125rem",
            color: error ? t.accentDanger : t.textMuted,
            fontFamily: t.fontBody,
          }}
        >
          {error ?? helperText}
        </p>
      )}
    </div>
  );
}

// ─── BrandTextarea ─────────────────────────────────

export interface BrandTextareaProps {
  id?: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  error?: string;
  helperText?: string;
}

export function BrandTextarea({
  id,
  placeholder,
  rows = 4,
  disabled = false,
  error,
  helperText,
}: BrandTextareaProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      <textarea
        id={id}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        style={{
          display: "block",
          width: "100%",
          boxSizing: "border-box",
          padding: "10px 12px",
          backgroundColor: disabled ? t.bgElevated : t.bgSurface,
          border: `1px solid ${error ? t.accentDanger : focused ? t.borderFocus : t.borderDefault}`,
          borderRadius: t.radius,
          fontFamily: t.fontBody,
          fontSize: "0.875rem",
          color: disabled ? t.textMuted : t.textPrimary,
          outline: "none",
          resize: "vertical",
          lineHeight: 1.6,
          transition: "border-color 150ms ease, box-shadow 150ms ease",
          boxShadow: focused ? "0 0 0 3px rgba(120,84,146,0.15)" : "none",
          cursor: disabled ? "not-allowed" : "text",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {(helperText || error) && (
        <p
          style={{
            marginTop: "6px",
            fontSize: "0.8125rem",
            color: error ? t.accentDanger : t.textMuted,
            fontFamily: t.fontBody,
          }}
        >
          {error ?? helperText}
        </p>
      )}
    </div>
  );
}

// ─── BrandSelect ───────────────────────────────────

export interface BrandSelectProps {
  id?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  disabled?: boolean;
}

export function BrandSelect({
  id,
  options,
  placeholder = "Select…",
  disabled = false,
}: BrandSelectProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <select
        id={id}
        disabled={disabled}
        defaultValue=""
        style={{
          display: "block",
          width: "100%",
          height: "40px",
          padding: "0 36px 0 12px",
          backgroundColor: disabled ? t.bgElevated : t.bgSurface,
          border: `1px solid ${focused ? t.borderFocus : t.borderDefault}`,
          borderRadius: t.radius,
          fontFamily: t.fontBody,
          fontSize: "0.875rem",
          color: t.textPrimary,
          outline: "none",
          appearance: "none" as const,
          cursor: disabled ? "not-allowed" : "pointer",
          transition: "border-color 150ms ease, box-shadow 150ms ease",
          boxShadow: focused ? "0 0 0 3px rgba(120,84,146,0.15)" : "none",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <option value="" disabled style={{ color: t.textMuted, backgroundColor: t.bgElevated }}>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            style={{ backgroundColor: t.bgElevated, color: t.textPrimary }}
          >
            {opt.label}
          </option>
        ))}
      </select>
      {/* Chevron icon */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          color: t.textMuted,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );
}

// ─── BrandCheckbox ─────────────────────────────────

export interface BrandCheckboxProps {
  id?: string;
  label: string;
  description?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}

export function BrandCheckbox({
  id,
  label,
  description,
  defaultChecked = false,
  disabled = false,
}: BrandCheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked);
  const [focused, setFocused] = useState(false);

  return (
    <label
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        userSelect: "none",
      }}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={() => !disabled && setChecked(!checked)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
        aria-checked={checked}
      />
      {/* Custom visual checkbox */}
      <div
        aria-hidden="true"
        style={{
          flexShrink: 0,
          marginTop: "1px",
          width: "16px",
          height: "16px",
          borderRadius: "3px",
          border: `1.5px solid ${checked ? t.accentPrimary : t.borderDefault}`,
          backgroundColor: checked ? t.accentPrimary : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 150ms ease, border-color 150ms ease",
          boxShadow: focused ? `0 0 0 3px rgba(120,84,146,0.2)` : "none",
        }}
      >
        {checked && (
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 4L3.5 6.5L9 1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <div>
        <span
          style={{
            display: "block",
            fontFamily: t.fontBody,
            fontSize: "0.875rem",
            fontWeight: 500,
            color: t.textPrimary,
            lineHeight: 1.4,
          }}
        >
          {label}
        </span>
        {description && (
          <span
            style={{
              display: "block",
              fontFamily: t.fontBody,
              fontSize: "0.8125rem",
              color: t.textMuted,
              marginTop: "2px",
              lineHeight: 1.4,
            }}
          >
            {description}
          </span>
        )}
      </div>
    </label>
  );
}

// ─── BrandRadioGroup ───────────────────────────────

export interface BrandRadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface BrandRadioGroupProps {
  name: string;
  options: BrandRadioOption[];
  defaultValue?: string;
}

export function BrandRadioGroup({
  name,
  options,
  defaultValue,
}: BrandRadioGroupProps) {
  const [selected, setSelected] = useState(defaultValue ?? "");

  return (
    <div role="radiogroup" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {options.map((opt) => {
        const isSelected = selected === opt.value;
        return (
          <label
            key={opt.value}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              padding: "12px 14px",
              border: `1px solid ${isSelected ? t.accentPrimary : t.borderDefault}`,
              borderRadius: t.radius,
              backgroundColor: isSelected ? "rgba(93,51,125,0.08)" : t.bgSurface,
              cursor: opt.disabled ? "not-allowed" : "pointer",
              opacity: opt.disabled ? 0.5 : 1,
              transition: "border-color 150ms ease, background-color 150ms ease",
              userSelect: "none",
            }}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={isSelected}
              disabled={opt.disabled}
              onChange={() => !opt.disabled && setSelected(opt.value)}
              style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
            />
            {/* Custom radio */}
            <div
              aria-hidden="true"
              style={{
                flexShrink: 0,
                marginTop: "1px",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                border: `1.5px solid ${isSelected ? t.accentPrimary : t.borderDefault}`,
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "border-color 150ms ease",
              }}
            >
              {isSelected && (
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: t.accentPrimary,
                  }}
                />
              )}
            </div>
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: t.fontBody,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: t.textPrimary,
                }}
              >
                {opt.label}
              </span>
              {opt.description && (
                <span
                  style={{
                    display: "block",
                    fontFamily: t.fontBody,
                    fontSize: "0.8125rem",
                    color: t.textMuted,
                    marginTop: "2px",
                  }}
                >
                  {opt.description}
                </span>
              )}
            </div>
          </label>
        );
      })}
    </div>
  );
}

// ─── BrandSwitch ───────────────────────────────────

export interface BrandSwitchProps {
  label: string;
  description?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}

export function BrandSwitch({
  label,
  description,
  defaultChecked = false,
  disabled = false,
}: BrandSwitchProps) {
  const [on, setOn] = useState(defaultChecked);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "16px",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <div>
        <span
          style={{
            display: "block",
            fontFamily: t.fontBody,
            fontSize: "0.875rem",
            fontWeight: 500,
            color: t.textPrimary,
          }}
        >
          {label}
        </span>
        {description && (
          <span
            style={{
              display: "block",
              fontFamily: t.fontBody,
              fontSize: "0.8125rem",
              color: t.textMuted,
              marginTop: "2px",
            }}
          >
            {description}
          </span>
        )}
      </div>
      <button
        role="switch"
        aria-checked={on}
        disabled={disabled}
        onClick={() => !disabled && setOn(!on)}
        style={{
          flexShrink: 0,
          position: "relative",
          width: "44px",
          height: "24px",
          borderRadius: t.radiusFull,
          backgroundColor: on ? t.accentPrimary : t.bgElevated,
          border: `1px solid ${on ? t.accentPrimary : t.borderDefault}`,
          cursor: disabled ? "not-allowed" : "pointer",
          transition: "background-color 200ms ease, border-color 200ms ease",
          outline: "none",
          padding: 0,
        }}
        onFocus={(e) => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 0 0 3px rgba(120,84,146,0.25)";
        }}
        onBlur={(e) => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
        }}
        aria-label={label}
      >
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "3px",
            left: on ? "23px" : "3px",
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            backgroundColor: "var(--white-50)",
            transition: "left 200ms ease",
            boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
          }}
        />
      </button>
    </div>
  );
}

// ─── BrandBadge ────────────────────────────────────

export type BadgeVariant =
  | "default"
  | "secondary"
  | "danger"
  | "outline"
  | "watching"
  | "completed"
  | "dropped"
  | "plan";

export interface BrandBadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

const BADGE_STYLES: Record<BadgeVariant, React.CSSProperties> = {
  default: {
    backgroundColor: "var(--accent-primary)",
    color: "var(--white-50)",
    border: "1px solid transparent",
  },
  secondary: {
    backgroundColor: "var(--bg-elevated)",
    color: "var(--text-secondary)",
    border: "1px solid var(--border-default)",
  },
  danger: {
    backgroundColor: "rgba(117,17,17,0.2)",
    color: "var(--red-300)",
    border: "1px solid rgba(117,17,17,0.4)",
  },
  outline: {
    backgroundColor: "transparent",
    color: "var(--text-secondary)",
    border: "1px solid var(--border-default)",
  },
  watching: {
    backgroundColor: "rgba(93,51,125,0.15)",
    color: "var(--accent-strong)",
    border: "1px solid rgba(93,51,125,0.3)",
  },
  completed: {
    backgroundColor: "rgba(16,80,40,0.2)",
    color: "#5db87a",
    border: "1px solid rgba(16,80,40,0.4)",
  },
  dropped: {
    backgroundColor: "rgba(117,17,17,0.15)",
    color: "var(--red-300)",
    border: "1px solid rgba(117,17,17,0.3)",
  },
  plan: {
    backgroundColor: "rgba(60,60,60,0.4)",
    color: "var(--text-muted)",
    border: "1px solid var(--border-subtle)",
  },
};

export function BrandBadge({
  children,
  variant = "default",
}: BrandBadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        borderRadius: t.radiusFull,
        padding: "3px 10px",
        fontFamily: t.fontBody,
        fontSize: "0.75rem",
        fontWeight: 500,
        letterSpacing: "0.02em",
        lineHeight: 1.4,
        whiteSpace: "nowrap" as const,
        ...BADGE_STYLES[variant],
      }}
    >
      {children}
    </span>
  );
}

// ─── ShowcaseSection helper ─────────────────────────

function ShowcaseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        border: `1px solid ${t.borderSubtle}`,
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: t.bgSurface,
      }}
    >
      <div
        style={{
          padding: "10px 16px",
          borderBottom: `1px solid ${t.borderSubtle}`,
        }}
      >
        <span
          style={{
            fontFamily: t.fontMono,
            fontSize: "0.6875rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            color: t.textMuted,
          }}
        >
          {title}
        </span>
      </div>
      <div style={{ padding: "20px 16px" }}>{children}</div>
    </div>
  );
}

// ─── FormShowcase (main export) ─────────────────────

export function FormShowcase() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        margin: "24px 0",
      }}
      className="form-showcase-grid"
    >
      {/* Inputs */}
      <ShowcaseSection title="Input">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <BrandLabel htmlFor="s-film">Film Title</BrandLabel>
            <BrandInput id="s-film" placeholder="Search for a film…" />
          </div>
          <div>
            <BrandLabel htmlFor="s-review">Your Thoughts</BrandLabel>
            <BrandInput
              id="s-review"
              placeholder="e.g. The third act lingers…"
              helperText="Shown publicly on your profile."
            />
          </div>
          <div>
            <BrandLabel htmlFor="s-error">Tier Label</BrandLabel>
            <BrandInput
              id="s-error"
              defaultValue="SSSSS"
              error="Must be a single tier: S, A, B, C, D, E, or F."
            />
          </div>
          <div>
            <BrandLabel htmlFor="s-dis">Username</BrandLabel>
            <BrandInput id="s-dis" placeholder="ghostface_1996" disabled />
          </div>
        </div>
      </ShowcaseSection>

      {/* Textarea + Select */}
      <ShowcaseSection title="Textarea / Select">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <BrandLabel htmlFor="s-ta" optional>
              Review
            </BrandLabel>
            <BrandTextarea
              id="s-ta"
              placeholder="Kubrick's adaptation doesn't haunt the way King's novel does — it's colder, more architectural…"
              rows={4}
            />
          </div>
          <div>
            <BrandLabel htmlFor="s-genre">Genre</BrandLabel>
            <BrandSelect
              id="s-genre"
              placeholder="Select genre…"
              options={[
                { value: "slasher", label: "Slasher" },
                { value: "psychological", label: "Psychological" },
                { value: "folk", label: "Folk Horror" },
                { value: "supernatural", label: "Supernatural" },
                { value: "body", label: "Body Horror" },
                { value: "cosmic", label: "Cosmic Horror" },
              ]}
            />
          </div>
          <div>
            <BrandLabel htmlFor="s-tier">Tier</BrandLabel>
            <BrandSelect
              id="s-tier"
              placeholder="Assign tier…"
              options={[
                { value: "S", label: "S — Masterwork" },
                { value: "A", label: "A — Exceptional" },
                { value: "B", label: "B — Solid" },
                { value: "C", label: "C — Decent" },
                { value: "D", label: "D — Weak" },
                { value: "E", label: "E — Poor" },
                { value: "F", label: "F — Unwatchable" },
              ]}
            />
          </div>
        </div>
      </ShowcaseSection>

      {/* Checkboxes */}
      <ShowcaseSection title="Checkbox">
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <BrandCheckbox
            label="Add to watchlist"
            description="Save this film to watch later."
            defaultChecked
          />
          <BrandCheckbox
            label="Mark as seen"
            description="Log this as a completed watch."
          />
          <BrandCheckbox
            label="Recommend to followers"
            description="Share this to your activity feed."
            defaultChecked
          />
          <BrandCheckbox
            label="Enable spoiler mode"
            description="Blur plot details in reviews."
            disabled
          />
        </div>
      </ShowcaseSection>

      {/* Radio Group */}
      <ShowcaseSection title="Radio Group">
        <BrandRadioGroup
          name="rating-method"
          defaultValue="tier"
          options={[
            {
              value: "tier",
              label: "Tier Rating",
              description: "S / A / B / C / D / E / F — the canonical system.",
            },
            {
              value: "star",
              label: "Star Rating",
              description: "1–5 stars for quick logging.",
            },
            {
              value: "none",
              label: "No Rating",
              description: "Log the watch without scoring.",
            },
          ]}
        />
      </ShowcaseSection>

      {/* Switches */}
      <ShowcaseSection title="Switch">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <BrandSwitch
            label="Horror notifications"
            description="Alert me when new horror titles drop."
            defaultChecked
          />
          <div
            style={{
              height: "1px",
              backgroundColor: t.borderSubtle,
              margin: "0 -16px",
              width: "calc(100% + 32px)",
            }}
          />
          <BrandSwitch
            label="Activity feed"
            description="Show my watches on the public feed."
          />
          <div
            style={{
              height: "1px",
              backgroundColor: t.borderSubtle,
              margin: "0 -16px",
              width: "calc(100% + 32px)",
            }}
          />
          <BrandSwitch
            label="Spoiler protection"
            description="Blur review text before I click to reveal."
            defaultChecked
          />
          <div
            style={{
              height: "1px",
              backgroundColor: t.borderSubtle,
              margin: "0 -16px",
              width: "calc(100% + 32px)",
            }}
          />
          <BrandSwitch
            label="Email digest"
            description="Weekly horror picks to your inbox."
            disabled
          />
        </div>
      </ShowcaseSection>

      {/* Badges */}
      <ShowcaseSection title="Badge">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <p
              style={{
                fontFamily: t.fontBody,
                fontSize: "0.75rem",
                color: t.textMuted,
                marginBottom: "8px",
              }}
            >
              Watch status
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <BrandBadge variant="watching">Watching</BrandBadge>
              <BrandBadge variant="completed">Completed</BrandBadge>
              <BrandBadge variant="dropped">Dropped</BrandBadge>
              <BrandBadge variant="plan">Plan to Watch</BrandBadge>
            </div>
          </div>
          <div>
            <p
              style={{
                fontFamily: t.fontBody,
                fontSize: "0.75rem",
                color: t.textMuted,
                marginBottom: "8px",
              }}
            >
              System status
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <BrandBadge variant="default">New</BrandBadge>
              <BrandBadge variant="secondary">Updated</BrandBadge>
              <BrandBadge variant="danger">Deprecated</BrandBadge>
              <BrandBadge variant="outline">Beta</BrandBadge>
            </div>
          </div>
          <div>
            <p
              style={{
                fontFamily: t.fontBody,
                fontSize: "0.75rem",
                color: t.textMuted,
                marginBottom: "8px",
              }}
            >
              Tier badges
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {(["S", "A", "B", "C", "D", "E", "F"] as const).map((tier) => (
                <BrandBadge key={tier} variant="default">
                  {tier}
                </BrandBadge>
              ))}
            </div>
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}
