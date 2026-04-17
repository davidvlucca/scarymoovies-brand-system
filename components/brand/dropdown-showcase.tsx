"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export function BrandDropdown({ options, value, onChange, placeholder = "Select…", label }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", width: "220px" }}>
      {label && (
        <p
          style={{
            margin: "0 0 6px",
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          {label}
        </p>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "8px",
          padding: "8px 12px",
          backgroundColor: "var(--bg-elevated)",
          border: `1px solid ${open ? "var(--border-default)" : "var(--border-subtle)"}`,
          borderRadius: "6px",
          cursor: "pointer",
          color: selected ? "var(--text-primary)" : "var(--text-muted)",
          fontFamily: "var(--font-body)",
          fontSize: "0.85rem",
          transition: "border-color 150ms ease",
          textAlign: "left",
        }}
      >
        <span>{selected?.label ?? placeholder}</span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          style={{
            color: "var(--text-muted)",
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 150ms ease",
          }}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            zIndex: 20,
            margin: 0,
            padding: "4px",
            listStyle: "none",
            backgroundColor: "var(--bg-elevated)",
            border: "1px solid var(--border-default)",
            borderRadius: "8px",
            boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
          }}
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              onClick={() => {
                onChange?.(opt.value);
                setOpen(false);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 10px",
                borderRadius: "5px",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: opt.value === value ? "var(--text-primary)" : "var(--text-secondary)",
                backgroundColor: opt.value === value ? "rgba(93,51,125,0.2)" : "transparent",
                transition: "background-color 100ms ease, color 100ms ease",
              }}
              onMouseEnter={(e) => {
                if (opt.value !== value) {
                  (e.currentTarget as HTMLLIElement).style.backgroundColor = "rgba(255,255,255,0.04)";
                }
              }}
              onMouseLeave={(e) => {
                if (opt.value !== value) {
                  (e.currentTarget as HTMLLIElement).style.backgroundColor = "transparent";
                }
              }}
            >
              <span>{opt.label}</span>
              {opt.value === value && (
                <Check size={13} strokeWidth={2} style={{ color: "var(--accent-hover)", flexShrink: 0 }} />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const SORT_OPTIONS: DropdownOption[] = [
  { label: "Date added", value: "date_added" },
  { label: "Release year", value: "release_year" },
  { label: "Your rating", value: "your_rating" },
  { label: "Average rating", value: "avg_rating" },
  { label: "A–Z", value: "alpha" },
];

const DECADE_OPTIONS: DropdownOption[] = [
  { label: "All decades", value: "all" },
  { label: "2020s", value: "2020" },
  { label: "2010s", value: "2010" },
  { label: "2000s", value: "2000" },
  { label: "1990s", value: "1990" },
  { label: "1980s", value: "1980" },
  { label: "Pre-1980", value: "pre1980" },
];

export function DropdownShowcase() {
  const [sort, setSort] = useState("date_added");
  const [decade, setDecade] = useState("all");

  return (
    <div
      style={{
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "8px",
        padding: "24px 20px",
        margin: "24px 0",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          margin: 0,
        }}
      >
        Dropdown — sort · filter
      </p>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <BrandDropdown
          options={SORT_OPTIONS}
          value={sort}
          onChange={setSort}
          label="Sort by"
        />
        <BrandDropdown
          options={DECADE_OPTIONS}
          value={decade}
          onChange={setDecade}
          label="Decade"
        />
      </div>
    </div>
  );
}
