import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  doubleThen,
  sumAll,
  firstValue,
} from '../../lessons/05-promise-api/task.js';

describe('Lesson 05 — Promise API', () => {
  it('doubleThen doubles via .then', async () => {
    assert.equal(await doubleThen(Promise.resolve(21)), 42);
    assert.equal(await doubleThen(Promise.resolve(0)), 0);
  });

  it('sumAll waits for all and sums', async () => {
    const sum = await sumAll([
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ]);
    assert.equal(sum, 6);
  });

  it('firstValue returns the first settled value', async () => {
    const value = await firstValue([
      new Promise((resolve) => setTimeout(() => resolve('slow'), 30)),
      Promise.resolve('fast'),
    ]);
    assert.equal(value, 'fast');
  });
});
