const Block = require("../blockchain/block");

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }
  /* O código abaixo define um método chamado "addBlock" dentro da classe "Blockchain". O método recebe um parâmetro chamado "data" que representa os dados que serão adicionados ao novo bloco. */
  addBlock(data) {
    const block = Block.mineBlock(this.chain[this.chain.length - 1], data);
    this.chain.push(block);
    return block;
  }

  isValidChain(chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;
    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];
      const lastBlock = chain[i-1];
      if (
        block.lastHash !== lastBlock.hash ||
        block.hash !== Block.blockHash(block)){
        return false;
      }
    }
    return true;
  }

  replaceChain(newChain) {
    if (newChain.length <= this.chain.length) {
      console.log('Received chain is not longer than the current chain.');
      return;
    } else if (!this.isValidChain(newChain)) {
      console.log('The received chain is not valid.');
      return;
    }
  
    console.log('Replacing blockchain with the new chain.');
    this.chain = newChain;
  }
}

module.exports = Blockchain;
