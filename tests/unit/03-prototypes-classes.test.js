import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  animalProto,
  createDog,
  Person,
  Animal,
} from '../../lessons/03-prototypes-classes/task.js';

describe('Lesson 03 — prototypes + classes', () => {
  it('createDog uses animalProto and own name', () => {
    const d = createDog('Rex');
    assert.equal(d.name, 'Rex');
    assert.equal(d.eat(), 'nom');
    assert.equal(Object.getPrototypeOf(d), animalProto);
    assert.equal(Object.hasOwn(d, 'name'), true);
  });

  it('Person puts hello on the prototype', () => {
    const p = new Person('Ada');
    assert.equal(p.name, 'Ada');
    assert.equal(p.hello(), 'Hi, Ada');
    assert.equal(Object.hasOwn(p, 'hello'), false);
    assert.equal(Object.hasOwn(Person.prototype, 'hello'), true);
  });

  it('Animal.speak returns a string', () => {
    const a = new Animal('cat');
    assert.equal(a.name, 'cat');
    assert.equal(a.speak(), 'I am cat');
  });
});
