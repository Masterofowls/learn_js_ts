import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  collectOrder,
  nestedMicros,
  twoMicrosThenMacro,
} from '../../lessons/04-event-loop/task.js';

describe('Lesson 04 — event loop', () => {
  it('collectOrder: sync → micro → macro', async () => {
    const order = await collectOrder();
    assert.deepEqual(order, ['sync', 'micro', 'macro']);
  });

  it('nestedMicros: a → b → c', async () => {
    const order = await nestedMicros();
    assert.deepEqual(order, ['a', 'b', 'c']);
  });

  it('twoMicrosThenMacro: micro1 → micro2 → macro', async () => {
    const order = await twoMicrosThenMacro();
    assert.deepEqual(order, ['micro1', 'micro2', 'macro']);
  });
});
