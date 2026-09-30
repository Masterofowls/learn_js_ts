import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  pipe,
  pick,
  createIdModule,
} from '../../lessons/09-module-composition/task.js';

describe('Lesson 09 — module design & composition', () => {
  it('pipe runs left to right', () => {
    const inc = (n) => n + 1;
    const double = (n) => n * 2;
    assert.equal(pipe(inc, double)(3), 8);
    assert.equal(pipe()(5), 5);
  });

  it('pick returns a pure picker', () => {
    const src = { id: 1, name: 'Ada', age: 30 };
    const result = pick(['id', 'name'])(src);
    assert.deepEqual(result, { id: 1, name: 'Ada' });
    assert.equal(src.age, 30);
    assert.deepEqual(pick(['missing'])(src), {});
  });

  it('createIdModule hides private counter', () => {
    const ids = createIdModule(10);
    assert.equal(ids.peek(), 10);
    assert.equal(ids.nextId(), 10);
    assert.equal(ids.nextId(), 11);
    assert.equal(ids.peek(), 12);
    assert.equal('current' in ids, false);
    assert.equal('id' in ids, false);
    assert.equal('start' in ids, false);
  });
});
