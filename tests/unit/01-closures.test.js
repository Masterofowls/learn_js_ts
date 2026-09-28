import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  makeGreeter,
  createCounter,
  makeThree,
} from '../../lessons/01-closures/task.js';

describe('Lesson 01 — closures', () => {
  it('makeGreeter remembers name', () => {
    const hi = makeGreeter('Ada');
    assert.equal(hi(), 'Hello, Ada');
  });

  it('createCounter keeps private count', () => {
    const c = createCounter();
    assert.equal(c.value(), 0);
    assert.equal(c.inc(), 1);
    assert.equal(c.inc(), 2);
    assert.equal(c.value(), 2);
    assert.equal('amount' in c, false);
    assert.equal('count' in c, false);
  });

  it('makeThree returns independent index functions', () => {
    const fns = makeThree();
    assert.equal(fns.length, 3);
    assert.equal(fns[0](), 0);
    assert.equal(fns[1](), 1);
    assert.equal(fns[2](), 2);
  });
});
