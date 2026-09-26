/**
 * Lesson 02 — `this` binding (3 small tasks)
 *
 * Read theory.md first. Implement ALL 3 exports below.
 * Do not rename exports.
 *
 * PASS criteria:
 *
 * 1) getName(obj)
 *    - obj has a method: sayName() { return this.name; }
 *    - You must return the result of calling that method with this === obj
 *    - Do NOT hardcode obj.name (call the method properly)
 *    - Example:
 *        getName({ name: "Ada", sayName() { return this.name; } })
 *        // → "Ada"
 *
 * 2) bindHello(obj)
 *    - Returns a NEW function
 *    - When that function is called with no args, it returns:
 *        "Hello, " + obj.name
 *    - Use Function.prototype.bind (or equivalent bind behavior)
 *    - Example:
 *        function hello() { return "Hello, " + this.name; }
 *        // your bindHello should work like: hello.bind(obj)
 *        const fn = bindHello({ name: "Ada" });
 *        fn(); // → "Hello, Ada"
 *        const stolen = fn;
 *        stolen(); // still → "Hello, Ada"  (this stays bound)
 *
 * 3) makeCounterObj()
 *    - Returns an object: { count: 0, inc, value }
 *    - inc() adds 1 to this.count and returns this.count
 *    - value() returns this.count
 *    - Methods must use `this` (not a closed-over let) so that
 *      makeCounterObj().inc() works via this
 *    - Example:
 *        const c = makeCounterObj();
 *        c.value(); // → 0
 *        c.inc();   // → 1
 *        c.inc();   // → 2
 *        c.value(); // → 2
 *
 * When done, reply: check lesson 2
 */

export function getName(obj) {
  return obj.sayName();
}

export function bindHello(obj) {
  function hello(){
    return "Hello, "  + this.name
  }
  return hello.bind(obj);
}

export function makeCounterObj() {
  return { count: 0, inc(){
    this.count+=1
    return this.count
  }, value(){
    return this.count
  } }
}

// When finished, reply: check lesson 2
