import test from 'node:test';
import assert from 'node:assert/strict';
import { createGreeting } from '../src/greeting.js';

test('日本語の名前にあいさつを返す', () => {
  assert.equal(createGreeting('太郎'), 'こんにちは、太郎さん！');
});
test('空欄・空白・省略時も利用できる', () => {
  for (const input of ['', '  ', undefined]) assert.equal(createGreeting(input), 'こんにちは！');
});
test('前後の空白を除去する', () => {
  assert.equal(createGreeting('  花子  '), 'こんにちは、花子さん！');
});
test('40文字を許可し41文字を日本語エラーにする', () => {
  assert.equal(createGreeting('あ'.repeat(40)), `こんにちは、${'あ'.repeat(40)}さん！`);
  assert.throws(() => createGreeting('あ'.repeat(41)), /40文字以内/);
});
test('文字列以外の入力を拒否する', () => {
  for (const input of [null, 42, {}, []]) assert.throws(() => createGreeting(input), TypeError);
});
