/**
 * Lesson 07 — Iterators & generators (3 small tasks)
 *
 * Read theory.md first. Implement ALL 3 exports below.
 * Do not rename exports.
 *
 * Check: npm run test:07
 * When done, reply: check lesson 7
 */

/**
 * 1) makeCounterIterator(max)
 *    - Return a plain iterator object (has next(), NOT using function*)
 *    - Yields 0, 1, 2, ... up to but NOT including max
 *    - Example:
 *        const it = makeCounterIterator(3);
 *        it.next(); // → { value: 0, done: false }
 *        it.next(); // → { value: 1, done: false }
 *        it.next(); // → { value: 2, done: false }
 *        it.next(); // → { value: undefined, done: true }
 */
export function makeCounterIterator(max) {
  let current = 0;

  return {
    next() {
      if (current < max) {
        return { value: current++, done: false };
      }
      return { value: undefined, done: true };
    },
  };
}

export function makeRangeIterable(start, end) {
  let current = start;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (current < end) {
            return { value: current++, done: false };
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
}

export function* rangeGen(start, end) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}