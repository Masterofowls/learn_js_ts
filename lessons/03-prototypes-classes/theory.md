# Lesson 03 — Prototypes + classes

## Goal

See that **classes are sugar** over **constructor functions + prototypes**, and connect that to what you already know about `this`.

## 1. Every object has a prototype link

Objects can inherit properties by looking up a chain:

```js
const animal = { eat() { return 'nom'; } };
const dog = Object.create(animal);
dog.bark = () => 'woof';

dog.bark(); // "woof"  — own property
dog.eat();  // "nom"   — found on animal (prototype)
dog.toString(); // from Object.prototype further up the chain
```

- **Own property** — on the object itself (`dog.bark`)
- **Inherited** — found by walking `[[Prototype]]` (`dog` → `animal` → `Object.prototype` → `null`)

Check with:
- `Object.getPrototypeOf(dog) === animal`
- `'bark' in dog` (own or inherited) vs `Object.hasOwn(dog, 'bark')` (own only)

## 2. Constructor + `.prototype`

Before `class`, the common pattern was:

```js
function Person(name) {
  this.name = name; // own data on each instance
}

Person.prototype.hello = function () {
  return 'Hi, ' + this.name; // shared method; this = instance when called as p.hello()
};

const p = new Person('Ada');
p.hello(); // "Hi, Ada"
Object.getPrototypeOf(p) === Person.prototype; // true
```

What `new Person('Ada')` does (simplified):

1. Create a new empty object.
2. Set its `[[Prototype]]` to `Person.prototype`.
3. Call `Person` with `this` = that object.
4. Return the object (unless the constructor returns another object).

Methods on `Person.prototype` are **shared** (one function, many instances). Data like `name` stays **per instance**.

## 3. `class` is the same idea, clearer syntax

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return 'Hi, ' + this.name;
  }
}

const p = new Person('Ada');
p.hello(); // "Hi, Ada"
typeof Person; // "function"
Person.prototype.hello; // the method lives here
```

So: `class` methods → still on `.prototype`. `constructor` → still the function that runs with `new`.

## 4. Link back to Lesson 02 (`this`)

```js
const p = new Person('Ada');
p.hello(); // this === p

const f = p.hello;
f(); // this lost — same stolen-method problem as before
```

Prototypes answer **where the method lives**. `this` answers **which instance is active when it runs**.

## 5. What you will build (3 small tasks)

1. **`createDog(name)`** — instance via `Object.create` + own `name`.  
2. **`Person` constructor** — `new Person(name)` + shared `hello` on prototype.  
3. **`Animal` class** — `speak()` using `this.name`.

## Before you code

- [ ] You know own vs inherited properties.
- [ ] You know `new` wires `[[Prototype]]` to `Fn.prototype`.
- [ ] You know `class` methods sit on `.prototype`, not as own copies per instance.

## Next

Open `task.js`, implement all **3** exports, then reply: **check lesson 3**.
