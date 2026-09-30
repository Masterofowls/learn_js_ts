import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  makeCounterIterator,
  makeRangeIterable,
  rangeGen,
} from '../../lessons/07-iterators-generators/task.js';

describe('Lesson 07 — iterators & generators', () => {
  it('makeCounterIterator walks 0..max-1', () => {
    const it = makeCounterIterator(3);
    assert.deepEqual(it.next(), { value: 0, done: false });
    assert.deepEqual(it.next(), { value: 1, done: false });
    assert.deepEqual(it.next(), { value: 2, done: false });
    assert.deepEqual(it.next(), { value: undefined, done: true });
  });

  it('makeRangeIterable works with spread / for...of', () => {
    assert.deepEqual([...makeRangeIterable(2, 5)], [2, 3, 4]);
    const got = [];
    for (const n of makeRangeIterable(0, 2)) got.push(n);
    assert.deepEqual(got, [0, 1]);
  });

  it('rangeGen is a generator yielding start..end-1', () => {
    assert.equal(rangeGen.constructor.name, 'GeneratorFunction');
    assert.deepEqual([...rangeGen(1, 4)], [1, 2, 3]);
    const g = rangeGen(0, 2);
    assert.deepEqual(g.next(), { value: 0, done: false });
    assert.deepEqual(g.next(), { value: 1, done: false });
    assert.deepEqual(g.next(), { value: undefined, done: true });
  });
});
