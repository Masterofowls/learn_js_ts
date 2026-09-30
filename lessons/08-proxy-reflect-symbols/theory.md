# Lesson 08 — Symbols, Proxy, Reflect

## Goal

Use **Symbols** for unique keys, and **Proxy** (+ **Reflect**) to intercept property access — patterns you’ll see in ORMs, Vue/reactivity, validation wrappers, and logging.

## 1. Symbols

A `Symbol` is a unique primitive, often used as an object key that won’t clash with string keys.

```js
const ID = Symbol('id');
const user = { name: 'Ada', [ID]: 1 };

user[ID]; // 1
Object.keys(user); // ['name'] — Symbol keys are skipped here
```

Well-known symbols hook into language features, e.g. `Symbol.iterator` (Lesson 07).

## 2. Proxy

`new Proxy(target, handler)` wraps `target`. The handler traps operations:

```js
const target = { x: 1 };
const proxy = new Proxy(target, {
  get(obj, prop, receiver) {
    return Reflect.get(obj, prop, receiver);
  },
  set(obj, prop, value, receiver) {
    return Reflect.set(obj, prop, value, receiver);
  },
});
```

Common traps: `get`, `set`, `has`, `deleteProperty`, `ownKeys`, …

## 3. Reflect

`Reflect.*` methods mirror the default behavior of those operations and return useful booleans/values. Prefer them inside traps so you don’t reimplement the language defaults incorrectly.

```js
Reflect.get(obj, 'x');
Reflect.set(obj, 'x', 2); // → true/false
```

## 4. Typical use cases

- Default values / virtual properties on `get`
- Validation or readonly on `set`
- Hidden metadata via Symbol keys
- Logging / metrics around property access

## 5. What you will build (3 small tasks)

1. **`makeIdKey()`** — create a Symbol key helper  
2. **`withDefaults(obj, defaults)`** — Proxy `get` fallback  
3. **`readonly(obj)`** — Proxy that blocks `set`

## Before you code

- [ ] Symbol keys are unique and often “hidden” from `Object.keys`.
- [ ] Proxy traps intercept operations on the wrapper, not by mutating the target API.
- [ ] Use `Reflect.get` / `Reflect.set` inside traps when you want default behavior.

## Next

Open `task.js`, implement all **3** exports, run `npm run test:08`, then reply: **check lesson 8**.
