/**
 * Lesson 01 — Closures (small start)
 *
 * Read theory.md first. Implement ALL 3 exports below.
 * Do not rename exports.
 *
 * PASS criteria (exactly 3 tasks):
 *
 * 1) makeGreeter(name)
 *    - Returns a function
 *    - That function takes no args and returns: "Hello, " + name
 *    - Example:
 *        const hi = makeGreeter("Ada");
 *        hi(); // → "Hello, Ada"
 *
 * 2) createCounter()
 *    - Starts at 0 (no start argument)
 *    - Returns { inc, value }
 *    - inc() adds 1 and returns the new number
 *    - value() returns the current number without changing it
 *    - Count must be private (no .count on the object)
 *    - Example:
 *        const c = createCounter();
 *        c.value(); // → 0
 *        c.inc();   // → 1
 *        c.inc();   // → 2
 *        c.value(); // → 2
 *
 * 3) makeThree()
 *    - Returns an array of exactly 3 functions
 *    - fns[0]() → 0, fns[1]() → 1, fns[2]() → 2
 *    - Do not use one shared loop variable that all three see after the loop
 *
 * When done, reply in chat: check lesson 1
 */

export function makeGreeter(name) {
  return function greet() {
    return `Hello, ${name}`;
}
}

export function createCounter() {
    let amount = 0;
    return {
      inc(){
        amount+=1
        return amount
      },
      value(){
        return amount
      }
    }
}


export function makeThree() {
  return [
   function(){
    return 0
   },
   function(){
    return 1
   },
   function(){
    return 2
   }
  ]
}

// When finished, reply: check lesson 1
