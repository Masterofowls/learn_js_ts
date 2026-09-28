/**
 * Lesson 03 — Prototypes + classes (3 small tasks)
 *
 * Read theory.md first. Implement ALL 3 exports below.
 * Do not rename exports.
 *
 * PASS criteria:
 *
 * 1) createDog(name)
 *    - animalProto is provided below (do not change it)
 *    - Return a new object whose prototype IS animalProto
 *    - That object must have its own property: name
 *    - Example:
 *        const d = createDog("Rex");
 *        d.name;           // → "Rex"   (own)
 *        d.eat();          // → "nom"   (from animalProto)
 *        Object.getPrototypeOf(d) === animalProto; // → true
 *
 * 2) Person (constructor function — NOT a class)
 *    - new Person("Ada") → instance with .name === "Ada"
 *    - Person.prototype.hello is a function
 *    - (new Person("Ada")).hello() → "Hi, Ada"
 *    - hello must live on the prototype (shared), not reinvented
 *      as a new own function inside the constructor body
 *    - Example:
 *        const p = new Person("Ada");
 *        p.hello(); // → "Hi, Ada"
 *        Object.hasOwn(p, "hello"); // → false
 *        Object.hasOwn(Person.prototype, "hello"); // → true
 *
 * 3) class Animal
 *    - new Animal("cat") → instance with .name === "cat"
 *    - .speak() → "I am cat"
 *    - Example:
 *        const a = new Animal("cat");
 *        a.speak(); // → "I am cat"
 *
 * When done, reply: check lesson 3
 */

export const animalProto = {
  eat() {
    return 'nom';
  },
};


export function createDog(name) {
  const dog = Object.create(animalProto);
  dog.name = name;
  dog.eat();
  Object.getPrototypeOf(dog);
  return dog
}

export function Person(name) {
  this.name = name; 
};
Person.prototype.hello = function () {
  return 'Hi, ' + this.name; 
};
const p = new Person("Ada");
p.hello(); 
Object.hasOwn(p, "hello"); 
Object.hasOwn(Person.prototype, "hello"); 


// TODO: add Person.prototype.hello = function () { ... }

export class Animal {
  constructor(name){
    this.name = name
  }
  speak(){
    return `I am ${this.name}`
  }
}

const a = new Animal("cat");
a.speak(); 


// When finished, reply: check lesson 3
