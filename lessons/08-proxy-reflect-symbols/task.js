/**
 * Lesson 08 — Symbols, Proxy, Reflect (3 small tasks)
 *
 * Read theory.md first. Implement ALL 3 exports below.
 * Do not rename exports.
 *
 * Check: npm run test:08
 * When done, reply: check lesson 8
 */

/**
 * 1) makeIdKey()
 *    - Return a new Symbol (description optional, e.g. 'id')
 *    - Two calls must return different Symbols
 *    - Example:
 *        const a = makeIdKey();
 *        const b = makeIdKey();
 *        a === b; // → false
 *        const obj = { [a]: 1 };
 *        obj[a]; // → 1
 */
export function makeIdKey() {
  return Symbol('id');
}

/**
 * 2) withDefaults(obj, defaults)
 *    - Return a Proxy around obj
 *    - Reading a missing prop should return defaults[prop] if present
 *    - Reading an own prop on obj should return obj's value
 *    - Use Reflect.get for the default path when the prop exists on obj
 *    - Example:
 *        const p = withDefaults({ a: 1 }, { a: 0, b: 2 });
 *        p.a; // → 1
 *        p.b; // → 2
 *        p.c; // → undefined
 */
export function withDefaults(obj, defaults) {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      if (Reflect.has(target, prop)) {
        return Reflect.get(target, prop, receiver);
      }
      return defaults[prop];
    },
  });
}

/**
 * 3) readonly(obj)
 *    - Return a Proxy around obj
 *    - get works normally (Reflect.get)
 *    - set must throw TypeError (do not change the target)
 *    - Example:
 *        const p = readonly({ x: 1 });
 *        p.x; // → 1
 *        p.x = 2; // throws TypeError
 */
export function readonly(obj) {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    set() {
      throw new TypeError('Cannot assign to read only property');
    },
  });
}