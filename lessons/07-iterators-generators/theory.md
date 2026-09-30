# Lesson 07 — Iterators & generators

## Goal

Know how `for...of` works under the hood: **iterables** expose an **iterator** whose `.next()` returns `{ value, done }`. Generators are the easy way to build that.

## 1. Iterator protocol

An **iterator** is an object with a `next()` method:

```js
iterator.next(); // → { value: any, done: boolean }
```

- `done: false` — here is a `value`
- `done: true` — iteration finished (`value` is often `undefined`)

## 2. Iterable protocol

An **iterable** is an object with a method keyed by `Symbol.iterator` that returns an iterator:

```js
const iterable = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        if (i < 3) return { value: i++, done: false };
        return { value: undefined, done: true };
      },
    };
  },
};

for (const n of iterable) {
  // 0, 1, 2
}
```

`for...of`, spread (`[...iterable]`), and `Array.from` all call `obj[Symbol.iterator]()`.

## 3. Generators

A **generator function** (`function*`) returns a generator object that is **both** iterable and an iterator.

```js
function* range(start, end) {
  for (let i = start; i < end; i++) {
    yield i; // pause here; resume on next()
  }
}

const g = range(0, 3);
g.next(); // { value: 0, done: false }
g.next(); // { value: 1, done: false }
[...range(0, 3)]; // [0, 1, 2]
```

`yield` pauses the function and sends a value out. The next `.next()` resumes until the next `yield` or the end.

## 4. Why it matters (backend too)

- Streaming / lazy sequences without building huge arrays
- Custom `for...of` over pages, lines, tree nodes
- Later: `async function*` + `for await...of` (async iteration)

## 5. What you will build (3 small tasks)

1. **`makeCounterIterator(max)`** — plain iterator (no generator)  
2. **`makeRangeIterable(start, end)`** — iterable via `Symbol.iterator`  
3. **`rangeGen(start, end)`** — `function*` that yields the same numbers

## Before you code

- [ ] Iterator = object with `next()` → `{ value, done }`
- [ ] Iterable = `[Symbol.iterator]()` returns an iterator
- [ ] `function*` + `yield` builds both for you

## Next

Open `task.js`, implement all **3** exports, run `npm run test:07`, then reply: **check lesson 7**.
