/**
 * Lesson 09 — Module design & composition (3 small tasks)
 *
 * Read theory.md first. Implement ALL 3 exports below.
 * Do not rename exports.
 *
 * Check: npm run test:09
 * When done, reply: check lesson 9
 */

/**
 * 1) pipe(...fns)
 *    - Return a function that runs fns left → right
 *    - pipe(f, g, h)(x) === h(g(f(x)))
 *    - pipe() with no fns should return (x) => x
 *    - Example:
 *        const inc = (n) => n + 1;
 *        const double = (n) => n * 2;
 *        pipe(inc, double)(3); // → 8
 */
export function pipe(...fns) {
  // TODO
  throw new Error('TODO: pipe');
}

/**
 * 2) pick(keys)
 *    - keys is an array of strings
 *    - Return a NEW function (obj) => object
 *    - That function returns a new object with only the listed keys
 *      that exist on obj (ignore missing keys)
 *    - Do not mutate obj
 *    - Example:
 *        pick(['id', 'name'])({ id: 1, name: 'Ada', age: 30 })
 *        // → { id: 1, name: 'Ada' }
 */
export function pick(keys) {
  // TODO
  throw new Error('TODO: pick');
}

/**
 * 3) createIdModule(start = 1)
 *    - Return an API object: { nextId, peek }
 *    - Private counter starts at `start`
 *    - nextId() returns current value, then increments by 1
 *    - peek() returns current value without changing it
 *    - Counter must not be a public data field (no .current / .id on the API)
 *    - Example:
 *        const ids = createIdModule(10);
 *        ids.peek();   // → 10
 *        ids.nextId(); // → 10
 *        ids.nextId(); // → 11
 *        ids.peek();   // → 12
 */
export function createIdModule(start = 1) {
  // TODO
  throw new Error('TODO: createIdModule');
}
