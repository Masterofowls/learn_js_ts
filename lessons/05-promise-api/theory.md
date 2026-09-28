# Lesson 05 — Promise API fluency

## Goal

Use **`.then` chains**, **`Promise.all`**, and **`Promise.race`** confidently (the gaps you flagged after Lesson 04).

## 1. A Promise is a value over time

A Promise is either **pending**, **fulfilled** (has a value), or **rejected** (has a reason).

```js
const p = Promise.resolve(2);
p.then((n) => n * 10); // → Promise that fulfills with 20
```

## 2. `.then` always returns a new Promise

```js
Promise.resolve(1)
  .then((n) => n + 1)      // 2
  .then((n) => n * 3)      // 6
  .then((n) => `v=${n}`);  // "v=6"
```

Rules:
- If the callback **returns a value**, the next `.then` receives that value.
- If it **returns a Promise**, the chain waits for it.
- If it **throws**, the chain rejects (unless a later `.catch` handles it).

```js
Promise.resolve(1)
  .then(() => {
    throw new Error('boom');
  })
  .catch((err) => 'recovered'); // → fulfills with "recovered"
```

## 3. `Promise.all`

Waits for **every** input Promise.

```js
await Promise.all([Promise.resolve(1), Promise.resolve(2)]);
// → [1, 2]  (same order as the input array)
```

If **any** rejects, `all` rejects with that reason (others may still finish in the background).

## 4. `Promise.race`

Settles with whatever finishes **first** (fulfill or reject).

```js
await Promise.race([
  new Promise((r) => setTimeout(() => r('slow'), 50)),
  Promise.resolve('fast'),
]);
// → "fast"
```

(Related later: `allSettled` never short-circuits on reject; `any` waits for first **fulfillment**.)

## 5. What you will build (3 small tasks)

1. **`doubleThen(promise)`** — `.then` to double a number  
2. **`sumAll(promises)`** — `Promise.all` then sum  
3. **`firstValue(promises)`** — `Promise.race`

## Before you code

- [ ] `.then` returns a new Promise (you can chain).
- [ ] `all` keeps input order in the result array.
- [ ] `race` takes the first settlement, not the “best” value.

## Next

Open `task.js`, implement all **3** exports, run `npm run test:05`, then reply: **check lesson 5**.
