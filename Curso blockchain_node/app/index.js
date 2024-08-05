const express = require('express');
const blockchain = require('../blockchain');
const Blockchain = require('../blockchain');
const HTTP_PORT = process.env.HTTP_PORT || 3001;
const P2pServer = require('./p2p-server');

// $ HTTP_PORT = 3002 npm run dev
const app = express();
const bc = new Blockchain;
const p2pServer = new P2pServer(bc);

app.use(express.json());

app.get('/blocks', (req,res) => {
  res.json(bc.chain);
});

app.post('/mine', (req,res) => {
  const block = bc.addBlock(req.body.data);
  console.log(`New Block added: ${block.toString()}`);

  res.redirect('/blocks');
});

app.listen(HTTP_PORT,() =>console.log(`Listening os port${ HTTP_PORT }`));
p2pServer.listen();
