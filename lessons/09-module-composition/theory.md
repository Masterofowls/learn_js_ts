# Lesson 09 — Module design & composition

## Goal

Design **small public APIs**, keep internals private, and build behavior by **composing pure functions** — the craft side of senior JS (before Jest / performance).

## 1. A module is a boundary

A good module:
- Exports a **small** surface (`greet`, `createUser`, …)
- Hides private details (helpers, counters, storage) behind closures or non-exported names
- Depends on **inputs** (args / injected deps) instead of hidden globals

```js
// factory module: deps in → API out
export function createUserApi({ save, load }) {
  return {
    async create(data) {
      return save(data);
    },
    async get(id) {
      return load(id);
    },
  };
}
```

Callers never touch `save` / `load` wiring — easy to test and swap.

## 2. Pure functions compose well

A **pure** function: same inputs → same output, no side effects on outside state.

```js
const double = (n) => n * 2;
const inc = (n) => n + 1;
```

**pipe** runs left → right:

```js
pipe(inc, double)(3); // double(inc(3)) → 8
```

**compose** (optional idea) runs right → left: `compose(double, inc)(3)` → `double(inc(3))` same here if order flipped.

Prefer many small pure fns + pipe over one giant function.

## 3. Partial application / helpers that return functions

```js
function pick(keys) {
  return (obj) => {
    const out = {};
    for (const k of keys) {
      if (k in obj) out[k] = obj[k];
    }
    return out;
  };
}

pick(['id', 'name'])({ id: 1, name: 'Ada', age: 30 });
// → { id: 1, name: 'Ada' }
```

## 4. What you will build (3 small tasks)

1. **`pipe(...fns)`** — left-to-right composition  
2. **`pick(keys)`** — returns a pure picker function  
3. **`createIdModule(start?)`** — tiny module factory with private state

## Before you code

- [ ] Factories take deps/config and return a focused API object.
- [ ] `pipe(f, g)(x)` means `g(f(x))`.
- [ ] Private state belongs inside the factory, not on the returned object as editable data (unless intentional).

## Next

Open `task.js`, implement all **3** exports, run `npm run test:09`, then reply: **check lesson 9**.
