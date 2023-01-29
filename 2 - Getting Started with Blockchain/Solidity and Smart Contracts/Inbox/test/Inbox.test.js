const assert = require('assert');
const ganache = requere('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

beforeEach(() => {
    // Get a list of all accounts
    web3.eth.getAccounts().then((fetchedAccounts) => {
      console.log(fetchedAccounts);
    });
  });
  
  describe("Inbox", () => {
    it("deploys a contract", () => {});
  });
  