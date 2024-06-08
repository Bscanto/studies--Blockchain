const Block = require('./block.js');

const block = new Block('7657', '7538496HFHFDH3', '65647383HFKDKDIE', '100');

console.log(block.toString());
console.log(Block.genesis().toString());
const primeiroBloco = Block.mineBlock(Block.genesis(), '$500');
console.log(primeiroBloco.toString());