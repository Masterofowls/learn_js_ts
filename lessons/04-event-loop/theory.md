# Lesson 04 — Event loop (deep dive)

## Goal

Predict **when** code runs: synchronous stack → **microtasks** → **macrotasks** (timers, I/O). Connect that to `Promise.then` vs `setTimeout`.

## 1. One thread, one call stack

JS runs one piece of your code at a time on the **call stack**.  
When the stack is empty, the **event loop** decides what to run next.

## 2. Two important queues

| Queue | Typical sources | When drained |
|--------|------------------|--------------|
| **Microtask** | `Promise.then` / `catch` / `finally`, `queueMicrotask`, `MutationObserver` | **Fully** after each turn of sync code / each macrotask — before the next macrotask |
| **Macrotask** (task) | `setTimeout`, `setInterval`, `setImmediate` (Node), I/O, UI events | One macrotask at a time; after it, microtasks drain again |

Simple mental model:

```text
1. Run synchronous code (empty the call stack)
2. Run ALL queued microtasks (and any new ones they add)
3. Take ONE macrotask (e.g. a timer callback)
4. Go back to step 2
```

## 3. Classic order

```js
console.log('sync');

Promise.resolve().then(() => console.log('micro'));

setTimeout(() => console.log('macro'), 0);

// prints: sync → micro → macro
```

Why: sync runs now; `.then` is a microtask; `setTimeout(0)` is a macrotask and waits until microtasks are done.

## 4. Nested microtasks still beat the timer

```js
Promise.resolve().then(() => {
  console.log('micro1');
  Promise.resolve().then(() => console.log('micro2'));
});
setTimeout(() => console.log('macro'), 0);

// prints: micro1 → micro2 → macro
```

`micro2` was queued while draining microtasks, so it still runs **before** the timer.

## 5. What you will build (3 small tasks)

1. **`collectOrder()`** — sync + one micro + one macro → `['sync','micro','macro']`  
2. **`nestedMicros()`** — nested `.then` → `['a','b','c']`  
3. **`twoMicrosThenMacro()`** — two micros then macro → `['micro1','micro2','macro']`

## Before you code

- [ ] Sync always runs before any queued micro/macro from that turn.
- [ ] All microtasks finish before the next `setTimeout` callback.
- [ ] A `.then` inside a `.then` still runs before that timer.

## Next

Open `task.js`, implement all **3** exports, then reply: **check lesson 4**.
