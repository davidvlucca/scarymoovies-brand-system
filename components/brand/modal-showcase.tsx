"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { PYFButton } from "./button-showcase";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children, footer }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        backgroundColor: "rgba(12, 10, 14, 0.85)",
        backdropFilter: "blur(4px)",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        style={{
          backgroundColor: "var(--bg-elevated)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "480px",
          boxShadow: "0 24px 64px rgba(0,0,0,0.7)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 24px 16px",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <h2
            id="modal-title"
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              letterSpacing: "0.01em",
            }}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-muted)",
              padding: "4px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 150ms ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; }}
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "20px 24px" }}>{children}</div>

        {/* Footer */}
        {footer && (
          <div
            style={{
              padding: "16px 24px 20px",
              borderTop: "1px solid var(--border-subtle)",
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

export function ModalShowcase() {
  const [addToListOpen, setAddToListOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

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
        gap: "24px",
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
        Modal — add to list · confirm action
      </p>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <button
          onClick={() => setAddToListOpen(true)}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            padding: "8px 16px",
            backgroundColor: "var(--accent-primary)",
            color: "var(--text-primary)",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 150ms ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--accent-hover)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--accent-primary)"; }}
        >
          Add to List
        </button>
        <button
          onClick={() => setConfirmOpen(true)}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            padding: "8px 16px",
            backgroundColor: "transparent",
            color: "var(--text-muted)",
            border: "1px solid var(--border-default)",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "color 150ms ease, border-color 150ms ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "var(--border-subtle)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border-default)"; }}
        >
          Remove from Watchlist
        </button>
      </div>

      <Modal
        isOpen={addToListOpen}
        onClose={() => setAddToListOpen(false)}
        title="Add to Collection"
        footer={
          <>
            <button
              onClick={() => setAddToListOpen(false)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                padding: "8px 16px",
                background: "none",
                color: "var(--text-muted)",
                border: "1px solid var(--border-default)",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => setAddToListOpen(false)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                padding: "8px 16px",
                backgroundColor: "var(--accent-primary)",
                color: "var(--text-primary)",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Save
            </button>
          </>
        }
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            marginTop: 0,
            marginBottom: "16px",
          }}
        >
          Choose a collection for <strong style={{ color: "var(--text-primary)" }}>Hereditary (2018)</strong>.
        </p>
        {["Ari Aster Ranked", "Slow Burn Horror", "Must-Watch 2024"].map((list) => (
          <label
            key={list}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "background-color 150ms ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLLabelElement).style.backgroundColor = "rgba(255,255,255,0.04)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLLabelElement).style.backgroundColor = "transparent"; }}
          >
            <input type="checkbox" style={{ accentColor: "var(--accent-primary)", width: "15px", height: "15px" }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--text-primary)" }}>{list}</span>
          </label>
        ))}
      </Modal>

      <Modal
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title="Remove from Watchlist?"
        footer={
          <>
            <button
              onClick={() => setConfirmOpen(false)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                padding: "8px 16px",
                background: "none",
                color: "var(--text-muted)",
                border: "1px solid var(--border-default)",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Keep it
            </button>
            <button
              onClick={() => setConfirmOpen(false)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                padding: "8px 16px",
                backgroundColor: "var(--accent-danger)",
                color: "var(--text-primary)",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </>
        }
      >
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
          }}
        >
          You&apos;ll lose <strong style={{ color: "var(--text-primary)" }}>Hereditary</strong> from your watchlist. It won&apos;t affect your reviews or ratings.
        </p>
      </Modal>
    </div>
  );
}
