import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { MiniPromise } from '../../lessons/06-mini-promise/task.js';

describe('Lesson 06 — MiniPromise', () => {
  it('constructor resolve + then (sync resolve)', async () => {
    const value = await new MiniPromise((resolve) => {
      resolve(42);
    });
    assert.equal(value, 42);
  });

  it('then waits if resolve happens later', async () => {
    const value = await new MiniPromise((resolve) => {
      setTimeout(() => resolve(1), 0);
    }).then((n) => n + 1);
    assert.equal(value, 2);
  });

  it('then callbacks are not sync (microtask)', async () => {
    const order = [];
    const p = new MiniPromise((resolve) => resolve('x'));
    p.then(() => {
      order.push('then');
    });
    order.push('sync');
    await p;
    assert.deepEqual(order, ['sync', 'then']);
  });

  it('static resolve + chaining', async () => {
    const value = await MiniPromise.resolve(21).then((n) => n * 2);
    assert.equal(value, 42);
  });
});
