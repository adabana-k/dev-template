import './check-node.mjs';
import { copyFileSync, constants } from 'node:fs';

try {
  copyFileSync(new URL('../.env.example', import.meta.url), new URL('../.env', import.meta.url), constants.COPYFILE_EXCL);
  console.log('.env を作成しました。');
} catch (error) {
  if (error.code !== 'EEXIST') throw error;
  console.log('既存の .env を使用します。');
}
