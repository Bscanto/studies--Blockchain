const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol')
const sourse = fs.readdirSync(inboxPath, 'utf8');

module.exports = solc.compile(sourse, 1).contracts[':Inbox'];

