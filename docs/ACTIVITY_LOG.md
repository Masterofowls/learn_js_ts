# Activity log

## 2026-09-26

- Bootstrapped learning repo: `README.md`, `package.json` (ESM), `.gitignore`
- Added `docs/CURRICULUM.md` with mid→high path (JS then TS; code-only until Phase C)
- Started **Lesson 01 — Closures**: `lessons/01-closures/theory.md`, `lessons/01-closures/task.js`
- Simplified Lesson 01 task to **3 smaller tasks** (makeGreeter, createCounter, makeThree); removed stretch
- Review (check lesson 1): makeGreeter PASS, createCounter PASS, makeThree FAIL (invalid array function syntax)
- Re-check: makeThree fixed — **Lesson 01 ALL PASS**
- Started **Lesson 02 — `this` binding**: `lessons/02-this-binding/theory.md`, `task.js` (3 small tasks)
- Review (check lesson 2): ALL FAIL — syntax + wrong patterns on getName / bindHello / makeCounterObj; awaiting fix
- Re-check: getName + makeCounterObj PASS; bindHello FAIL — missing space in `"Hello, "` (got `"Hello,Ada"`)
- Re-check: bindHello fixed — **Lesson 02 ALL PASS**
- Started **Lesson 03 — Prototypes + classes**: `lessons/03-prototypes-classes/{theory.md,task.js}` (3 small tasks)
- Review (check lesson 3): createDog + Person PASS; Animal.speak FAIL — console.log instead of return
- Re-check: Animal.speak fixed — **Lesson 03 ALL PASS**
- Started **Lesson 04 — Event loop**: `lessons/04-event-loop/{theory.md,task.js}` (3 small tasks)
- Reformatted Lesson 04 `task.js`: PASS commentary sits above each export (per-task)
- Review (check lesson 4): ALL FAIL — need return Promise + push labels (not console.log); resolve after last callback
- Re-check: nestedMicros + twoMicrosThenMacro look correct; collectOrder SyntaxError — missing `export function collectOrder()` wrapper
- Re-check: wrapper fixed — **Lesson 04 ALL PASS**
- Added `tests/unit/01..04-*.test.js` + `npm test` / `npm run test:NN`; future checks use test files
- Started **Lesson 05 — Promise API**: `lessons/05-promise-api/{theory.md,task.js}` + `tests/unit/05-promise-api.test.js`
- Review (check lesson 5): sumAll + firstValue PASS; doubleThen FAIL — must return `.then` result and multiply by 2
- Re-check: doubleThen fixed — **Lesson 05 ALL PASS**
