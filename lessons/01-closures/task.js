/**
 * Lesson 01 — Closures
 *
 * Read theory.md first. Implement ALL exports below.
 * Do not rename exports. Do not add extra required setup.
 *
 * PASS criteria (all must hold):
 *
 * 1) createCounter(start?)
 *    - Returns an object: { inc, dec, value }
 *    - Internal count is private (not exposed as a data property like .count)
 *    - createCounter() starts at 0 if start omitted
 *    - Examples:
 *        const c = createCounter(5);
 *        c.inc();    // → 6
 *        c.inc();    // → 7
 *        c.dec();    // → 6
 *        c.value();  // → 6
 *    - Two counters must not share state:
 *        const a = createCounter(0);
 *        const b = createCounter(10);
 *        a.inc(); // a.value() === 1, b.value() === 10
 *
 * 2) once(fn)
 *    - Returns a new function
 *    - First call: runs fn with the same this/args, returns that result
 *    - Later calls: do NOT run fn again; return the first result
 *    - Examples:
 *        let n = 0;
 *        const add = once((x) => { n += 1; return x + 1; });
 *        add(1); // → 2, n === 1
 *        add(9); // → 2, n === 1  (fn not called again)
 *
 * 3) makeFuncs(n)
 *    - Returns an array of length n
 *    - The function at index i, when called with no args, returns i
 *    - Must work for n = 0 (empty array) and n = 5, etc.
 *    - Must NOT have the classic shared-loop-variable bug
 *    - Example:
 *        const fns = makeFuncs(3);
 *        fns[0](); // → 0
 *        fns[1](); // → 1
 *        fns[2](); // → 2
 *
 * Optional STRETCH (not required to pass):
 * 4) createCache(fetcher)
 *    - Returns async (key) => value
 *    - First call for a key: await fetcher(key), store, return
 *    - Later calls for same key: return cached value (no second fetch)
 *
 * When done, reply in chat: check lesson 1
 */

export function createCounter(start = 0) {
  // TODO: private count; return { inc, dec, value }
  throw new Error('TODO: createCounter');
}

export function once(fn) {
  // TODO: return a wrapper that runs fn only once
  throw new Error('TODO: once');
}

export function makeFuncs(n) {
  // TODO: return array of n functions; i-th returns i
  throw new Error('TODO: makeFuncs');
}

// --- STRETCH (optional) ---

export function createCache(fetcher) {
  // TODO (optional): memoize async fetcher by key
  throw new Error('TODO: createCache (stretch)');
}

// When finished implementing, reply in chat: check lesson 1
// Optional local smoke: import these functions in a scratch file or REPL.
