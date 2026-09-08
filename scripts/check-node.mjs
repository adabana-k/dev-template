if (Number(process.versions.node.split('.')[0]) !== 24) {
  console.error('Node.js 24.x を使用してください（.nvmrc を参照）。');
  process.exit(1);
}
