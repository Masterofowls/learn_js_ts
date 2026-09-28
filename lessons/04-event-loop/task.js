/**
 * Lesson 04 — Event loop (3 small tasks)
 *
 * Read theory.md first. Implement ALL 3 exports below.
 * Do not rename exports.
 * Each function returns a Promise that resolves to label order.
 *
 * When done, reply: check lesson 4
 */

/**
 * 1) collectOrder()
 *    - Push exactly these labels, using the matching mechanism:
 *        'sync'  — synchronously (right away)
 *        'micro' — inside Promise.resolve().then(...)
 *        'macro' — inside setTimeout(..., 0)
 *    - Resolve the returned Promise with the array when 'macro' has run
 *    - Expected: ['sync', 'micro', 'macro']
 *    - Hint: resolve the outer Promise from inside the last callback
 */
export function collectOrder() {
  return new Promise((resolve) => {
    const order = [];
    order.push('sync');
    Promise.resolve().then(() => { order.push('micro'); });
    setTimeout(() => {
      order.push('macro');
      resolve(order);
    }, 0);
  });
}
/**
 * 2) nestedMicros()
 *    - No setTimeout in this task
 *    - Push 'a' synchronously
 *    - In a Promise.then, push 'b', and from inside that then
 *      schedule another Promise.then that pushes 'c'
 *    - Resolve when 'c' has run
 *    - Expected: ['a', 'b', 'c']
 */
export function nestedMicros() {
  return new Promise((resolve) => {
    const result = [];
    result.push('a');
    Promise.resolve().then(() => {
      result.push('b');
      Promise.resolve().then(() => {
        result.push('c');
        resolve(result); 
      });
    });
  });
}
/**
 * 3) twoMicrosThenMacro()
 *    - From the synchronous start, schedule:
 *        Promise.then → push 'micro1'
 *        Promise.then → push 'micro2'
 *        setTimeout(0) → push 'macro'
 *    - Resolve when 'macro' has run
 *    - Expected: ['micro1', 'micro2', 'macro']
 */
export function twoMicrosThenMacro() {
  return new Promise((resolve) => {
    const result = [];
    Promise.resolve().then(() => result.push('micro1'));
    Promise.resolve().then(() => result.push('micro2'));
    setTimeout(() => {
      result.push('macro');
      resolve(result); 
    });
  });
}