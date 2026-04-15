---
name: build-and-check
description: Run tsc + lint + build and report results in one pass.
---

# Build & Check Skill

Runs the full validation sequence and reports a single pass/fail summary.

## Steps

```bash
cd D:\ScaryMoovies\brand-system\web

echo "=== TypeScript ===" && npx tsc --noEmit
echo "=== ESLint ===" && npm run lint
echo "=== Build ===" && npm run build
echo "=== Output check ===" && ls out/ | grep -E "index\.html|brand-foundation|logo|color-system|typography|components|interactions|voice-and-tone|motion|usage-examples"
```

## Expected Output

All four sections should complete without errors. Any error in any section is a blocker — report the exact error message and which step failed.
