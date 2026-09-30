# Curriculum — mid → high (JS then TS)

## Preferences

- Lesson format: `theory.md` + `task.js` (clear PASS criteria)
- Reviews: **code-only** until Phase C
- Focus: backend + both; frontend without writing CSS yourself

## Progress

| # | Topic | Status |
|---|--------|--------|
| 01 | Closures (from scratch) | **done** |
| 02 | `this` binding (call / apply / bind / arrows) | **done** |
| 03 | Prototypes + classes (linked to closures/`this`) | **done** |
| 04 | Event loop deep dive | **done** |
| 05 | Promise API fluency (`.then`, all / race / any) | **done** |
| 06 | Tiny custom Promise | **done** |
| 07 | Iterators & generators | **done** |
| 08 | Proxy, Reflect, Symbols | **done** |
| 09 | Module design & composition | **in progress** |
| 10 | Resilient async (AbortController, errors) | pending |
| 11 | Jest deeper | pending |
| 12 | Light performance | pending |
| 13+ | Phase C — TypeScript senior layer | pending |

## Lesson folder layout

```text
lessons/01-closures/
  theory.md
  task.js
tests/unit/
  01-closures.test.js   # used for "check lesson N"
```

Checks run via `npm run test:NN` (Node built-in test runner), not ad-hoc terminal one-liners.
