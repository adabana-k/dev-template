export function createGreeting(name = '') {
  if (typeof name !== 'string') throw new TypeError('名前は文字列で入力してください。');
  const normalized = name.trim();
  if (normalized.length > 40) throw new RangeError('名前は40文字以内で入力してください。');
  return normalized ? `こんにちは、${normalized}さん！` : 'こんにちは！';
}
