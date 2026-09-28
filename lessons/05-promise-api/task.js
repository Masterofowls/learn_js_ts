/**
 * Lesson 05 — Promise API (3 small tasks)
 *
 * Read theory.md first. Implement ALL 3 exports below.
 * Do not rename exports.
 *
 * Check: npm run test:05
 * When done, reply: check lesson 5
 */

/**
 * 1) doubleThen(promise)
 *    - promise fulfills with a number
 *    - Return a Promise that fulfills with that number * 2
 *    - Use .then (not async/await for this task)
 *    - Example:
 *        await doubleThen(Promise.resolve(21)) // → 42
 */
export function doubleThen(promise) {
  const p = Promise.resolve(promise);
  return p.then((n) => n * 2);
}

/**
 * 2) sumAll(promises)
 *    - promises is an array of Promises that each fulfill with a number
 *    - Wait for all of them (Promise.all)
 *    - Return a Promise that fulfills with the sum of those numbers
 *    - Example:
 *        await sumAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
 *        // → 6
 */
export function sumAll(promises) {
    return Promise.all(promises).then((numbers) => {
      return numbers.reduce((sum, n) => sum + n, 0);
    });
}

/**
 * 3) firstValue(promises)
 *    - promises is an array of Promises
 *    - Return Promise.race(promises) — first to settle wins
 *    - Example:
 *        await firstValue([
 *          new Promise((r) => setTimeout(() => r('slow'), 30)),
 *          Promise.resolve('fast'),
 *        ])
 *        // → 'fast'
 */
export function firstValue(promises) {
  return Promise.race(promises);
}
