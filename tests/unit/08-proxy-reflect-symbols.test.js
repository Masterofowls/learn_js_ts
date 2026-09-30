import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  makeIdKey,
  withDefaults,
  readonly,
} from '../../lessons/08-proxy-reflect-symbols/task.js';

describe('Lesson 08 — Proxy, Reflect, Symbols', () => {
  it('makeIdKey returns unique Symbols', () => {
    const a = makeIdKey();
    const b = makeIdKey();
    assert.equal(typeof a, 'symbol');
    assert.notEqual(a, b);
    const obj = { [a]: 1 };
    assert.equal(obj[a], 1);
  });

  it('withDefaults falls back for missing props', () => {
    const p = withDefaults({ a: 1 }, { a: 0, b: 2 });
    assert.equal(p.a, 1);
    assert.equal(p.b, 2);
    assert.equal(p.c, undefined);
  });

  it('readonly allows get and blocks set', () => {
    const p = readonly({ x: 1 });
    assert.equal(p.x, 1);
    assert.throws(() => {
      p.x = 2;
    }, TypeError);
    assert.equal(p.x, 1);
  });
});
