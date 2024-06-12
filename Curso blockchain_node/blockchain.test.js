const Blockchain = require("./blockchain");
const Block = require("./block");

describe('Blockchain', () => {
  let bc;
  let bc2;
  beforeEach(() => {
    bc = new Blockchain;
    bc2 = new Blockchain;
  });

  it('starts with the genesis block', () => {
	  expect(bc.chain[0]).toEqual(Block.genesis());
  });

  it('adds a new block', () => {
    const data = 'foo';
    bc.addBlock(data);
    expect(bc.chain[bc.chain.length-1].data).toEqual(data);
  });

  it('validates a valid chan', () => {
    bc2.addBlock('500U$');
    expect(bc2.isValidChain(bc2.chain)).toBe(true);
  });

  it('invalidates a chain with a corrupt genesis block', () => {
    bc2.chain[0].data = '0U$';
    expect(bc.isValidChain(bc2.chain)).toBe(false);
  });
  
});
