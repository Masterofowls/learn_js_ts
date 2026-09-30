# Lesson 06 — Tiny custom Promise

## Goal

Build a **minimal** Promise so `.then` / `resolve` stop feeling magical.  
This is for **intuition**, not a full spec (no `reject`, no thenable absorption, no edge cases).

## 1. Three states

| State | Meaning |
|--------|---------|
| `pending` | not settled yet |
| `fulfilled` | success, has a `value` |
| `rejected` | failure (we skip this lesson) |

Once fulfilled, stay fulfilled. Calling `resolve` again is a no-op.

## 2. The executor runs now

```js
new MiniPromise((resolve) => {
  // this function runs synchronously
  resolve(42);
});
```

You pass `resolve` into the executor. When something calls `resolve(value)`:

1. If still `pending` → set state to `fulfilled`, store `value`
2. Run any `.then` callbacks that were waiting (as **microtasks**)

## 3. `.then` does two jobs

```js
mini.then((value) => value * 2);
```

1. **Register** what to do with the value  
2. **Return a new** `MiniPromise` for the callback’s result (so you can chain)

If the MiniPromise is **already fulfilled**, still run the callback on a **microtask** (same idea as real Promises — not sync on the call stack).

If it is still **pending**, push the callback into a list; flush that list when `resolve` happens.

```text
pending + then(cb)  → store cb
resolve(v)          → fulfilled, queueMicrotask each stored cb
fulfilled + then(cb)→ queueMicrotask(cb) immediately (still async)
```

## 4. `queueMicrotask`

```js
queueMicrotask(() => {
  // runs after sync code, before setTimeout
});
```

Use it when invoking `onFulfilled` so order matches Lesson 04.

## 5. What you will build (3 small tasks on one class)

1. **constructor** — run executor, implement `resolve`  
2. **then** — queue or run `onFulfilled`, return a new `MiniPromise`  
3. **static resolve** — shortcut for an already-known value

## Before you code

- [ ] `resolve` only settles from `pending` once.
- [ ] `.then` always returns a **new** MiniPromise.
- [ ] Callbacks run via `queueMicrotask`, not synchronously inside `then`/`resolve`.

## Next

Open `task.js`, implement all **3** parts, run `npm run test:06`, then reply: **check lesson 6**.
