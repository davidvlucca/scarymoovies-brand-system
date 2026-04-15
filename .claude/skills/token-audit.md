---
name: token-audit
description: Grep the codebase for hardcoded hex values and dark: Tailwind classes. Reports violations.
---

# Token Audit Skill

Scans `*.tsx` and `*.css` files for design token violations.

## Checks

### 1. Hardcoded hex values in JSX/TSX
```bash
grep -rn "#[0-9a-fA-F]\{3,6\}" --include="*.tsx" app/ components/
```
Expected: zero matches (all colors must use CSS variables or Tailwind tokens)

### 2. dark: Tailwind variants
```bash
grep -rn "dark:" --include="*.tsx" --include="*.css" app/ components/
```
Expected: zero matches (site is unconditionally dark)

### 3. outline: none without replacement
```bash
grep -rn "outline.*none\|outline: 0" --include="*.tsx" --include="*.css" app/ components/
```
Expected: zero matches (focus rings must always be visible)

## Output Format

```
TOKEN AUDIT — [date]

Hardcoded hex: [count] violations
  - [file]:[line] — [value]

dark: classes: [count] violations
  - [file]:[line]

outline:none: [count] violations
  - [file]:[line]

VERDICT: PASS (0 violations) / FAIL ([N] violations)
```
