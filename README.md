# learn-js-ts

Interactive path from mid-level to high-level **JavaScript → TypeScript**.

## How it works

1. Open `lessons/NN-topic/theory.md` — read it fully.
2. Implement stubs in `lessons/NN-topic/task.js` (later `task.ts`).
3. Run tests: `npm run test:NN` (or `npm test` for all).
4. Reply in chat: **check lesson N** — review uses the test file, not ad-hoc terminal asserts.
5. Pass → next lesson. Fail → targeted fixes (no full spoilers).

Preferences locked for this track:
- Format: `theory.md` + `task.js` (PASS notes above each task)
- Tests: `tests/unit/NN-*.test.js` via Node built-in test runner
- Code-only reviews until Phase C (TypeScript)
- JS depth first, then TS type-level

## Tests

```bash
npm test          # all lessons
npm run test:04   # one lesson
```

## Lesson 01

```bash
# read
lessons/01-closures/theory.md

# implement, then ask: check lesson 1
```

## Lesson 02

```bash
lessons/02-this-binding/theory.md
lessons/02-this-binding/task.js
# then ask: check lesson 2
```

## Lesson 03

```bash
lessons/03-prototypes-classes/theory.md
lessons/03-prototypes-classes/task.js
# then ask: check lesson 3
```

## Lesson 04

```bash
lessons/04-event-loop/theory.md
lessons/04-event-loop/task.js
npm run test:04
```

## Lesson 05

```bash
lessons/05-promise-api/theory.md
lessons/05-promise-api/task.js
npm run test:05
```

## Lesson 06

```bash
lessons/06-mini-promise/theory.md
lessons/06-mini-promise/task.js
npm run test:06
```

## Lesson 07

```bash
lessons/07-iterators-generators/theory.md
lessons/07-iterators-generators/task.js
npm run test:07
```

## Lesson 08

```bash
lessons/08-proxy-reflect-symbols/theory.md
lessons/08-proxy-reflect-symbols/task.js
npm run test:08
```

## Lesson 09

```bash
lessons/09-module-composition/theory.md
lessons/09-module-composition/task.js
npm run test:09
```

## Curriculum

See [docs/CURRICULUM.md](docs/CURRICULUM.md).
