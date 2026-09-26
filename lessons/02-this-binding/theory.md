# Lesson 02 — `this` binding

## Goal

Know **what `this` is at call time**, how to set it (`call` / `apply` / `bind`), and why **arrow functions** do not get their own `this`.

## 1. `this` is not “the function’s owner”

In JS, `this` is decided mostly by **how the function is called**, not where it was written (except arrows).

| How you call | `this` is usually |
|--------------|-------------------|
| `obj.method()` | `obj` |
| `fn()` (plain call) | `undefined` in modules / strict mode; `globalThis` in sloppy scripts |
| `fn.call(x, ...)` / `fn.apply(x, [...])` | `x` |
| `const g = fn.bind(x); g()` | `x` |
| `new Fn()` | the new instance |
| arrow function | **lexical** `this` from the enclosing scope (not rebound by call/apply/bind the same way) |

## 2. Method call vs stolen method

```js
const user = {
  name: 'Ada',
  hello() {
    return this.name;
  },
};

user.hello(); // "Ada" — this === user

const fn = user.hello;
fn(); // undefined (or error if you read this.name) — this is not user
```

Taking a method off an object breaks the implicit binding.

## 3. `call`, `apply`, `bind`

```js
function greet(greeting) {
  return `${greeting}, ${this.name}`;
}

const person = { name: 'Ada' };

greet.call(person, 'Hi');           // "Hi, Ada"  — args listed
greet.apply(person, ['Hi']);        // "Hi, Ada"  — args as array
const hi = greet.bind(person, 'Hi');
hi();                               // "Hi, Ada"  — new function, this fixed
```

- **`call(thisArg, a, b)`** — invoke now, args one-by-one  
- **`apply(thisArg, [a, b])`** — invoke now, args as array  
- **`bind(thisArg, ...partialArgs)`** — return a **new** function with `this` locked (and optional preset args)

## 4. Arrow functions

Arrows do **not** have their own `this`. They use the `this` of the surrounding scope.

```js
const obj = {
  name: 'Ada',
  // bad as a method if you need this === obj:
  hello: () => this.name, // this is NOT obj (usually undefined / global)
  // good:
  hello2() {
    const inner = () => this.name; // arrow sees this from hello2 → obj
    return inner();
  },
};
```

Rule of thumb: use **regular** `function` / method shorthand when you need dynamic `this`; use **arrows** for callbacks that should keep the outer `this`.

## 5. What you will build (3 small tasks)

1. **`getName(obj)`** — call a method so `this` is `obj`.  
2. **`bindHello(obj)`** — return a bound function.  
3. **`makeCounterObj()`** — object with methods that share state via `this`.

## Before you code

- [ ] You can explain why `const f = obj.method; f()` loses `this`.
- [ ] You know `call` vs `apply` vs `bind` in one line each.
- [ ] You know arrows do not get their own `this`.

## Next

Open `task.js`, implement all **3** exports, then reply: **check lesson 2**.
