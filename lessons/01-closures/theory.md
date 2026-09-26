# Lesson 01 — Closures (from scratch)

## Goal

Understand why a function can “remember” variables after its outer function has finished — and use that for private state and safe factories.

## 1. Scope

A **scope** is the region where a name (variable/function) is visible.

- **Block scope** (`let` / `const`): visible inside `{ ... }`
- **Function scope** (`var`, and function declarations): visible inside the whole function
- **Global scope**: top-level of a file / browser `window`

```js
function outer() {
  const x = 1; // function scope for this binding
  if (true) {
    const y = 2; // block scope
  }
  // y is not visible here
}
```

## 2. Lexical environment

When JS runs a function, it creates a **Lexical Environment**: an object-like structure that holds:

1. **Environment record** — local bindings (`const a = 1`)
2. **Outer reference** — link to the enclosing environment

Name lookup walks **outward** along that chain until it finds the name (or throws `ReferenceError`).

This chain is fixed by **where the function is written in the source**, not by where it is called. That is **lexical scoping**.

## 3. What is a closure?

A **closure** is a function plus its remembered outer lexical environment.

Whenever you create a function inside another function (or block) and that inner function uses outer variables, those variables stay alive as long as the inner function is reachable.

```js
function makeGreeter(name) {
  return function greet() {
    return `Hello, ${name}`;
  };
}

const hi = makeGreeter('Ada');
hi(); // "Hello, Ada" — even though makeGreeter already returned
```

`greet` closed over `name`. The binding is not a copy of the string at call time of `makeGreeter` in a magical separate bag — it is a live reference to that binding in the outer environment.

## 4. Private state (the useful pattern)

Closures give you encapsulation without classes:

```js
function createWallet(initial) {
  let balance = initial; // private

  return {
    deposit(n) {
      balance += n;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

const w = createWallet(100);
w.deposit(20); // 120
// there is no w.balance — callers cannot touch it directly
```

Each call to `createWallet` creates a **new** lexical environment, so two wallets do not share balance.

## 5. The classic loop trap

```js
// Broken with var (function-scoped, one shared binding)
function broken() {
  const fns = [];
  for (var i = 0; i < 3; i++) {
    fns.push(function () {
      return i;
    });
  }
  return fns;
}
// broken()[0]() === 3, broken()[1]() === 3, ... — all see the same i after the loop

// Fixed with let (new binding per iteration)
function fixed() {
  const fns = [];
  for (let i = 0; i < 3; i++) {
    fns.push(function () {
      return i;
    });
  }
  return fns;
}
// fixed()[0]() === 0, fixed()[1]() === 1, fixed()[2]() === 2
```

Another fix (works even with `var`): wrap the body in an IIFE / factory that captures the current value in its own parameter binding.

## 6. `once` — run at most one time

```js
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}
```

The returned function closes over `called` and `result`.

## Before you code

- [ ] You can say in one sentence what a closure is.
- [ ] You know why `let` in a `for` loop fixes the shared-`i` bug.
- [ ] You know how to hide a variable so callers only use returned methods.
- [ ] You will only edit `TODO` sections in `task.js` — keep export names.

## Next

Open `task.js` and implement every export until the PASS criteria are met. Then reply: **check lesson 1**.
