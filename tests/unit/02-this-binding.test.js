import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  getName,
  bindHello,
  makeCounterObj,
} from '../../lessons/02-this-binding/task.js';

describe('Lesson 02 — this binding', () => {
  it('getName calls sayName with this === obj', () => {
    const obj = {
      name: 'Ada',
      sayName() {
        return this.name;
      },
    };
    assert.equal(getName(obj), 'Ada');
  });

  it('bindHello keeps this when stolen', () => {
    const fn = bindHello({ name: 'Ada' });
    assert.equal(fn(), 'Hello, Ada');
    const stolen = fn;
    assert.equal(stolen(), 'Hello, Ada');
  });

  it('makeCounterObj uses this.count', () => {
    const c = makeCounterObj();
    assert.equal(c.value(), 0);
    assert.equal(c.inc(), 1);
    assert.equal(c.inc(), 2);
    assert.equal(c.value(), 2);
    assert.equal(c.count, 2);
  });
});
