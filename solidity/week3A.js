const{Web3} = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/e75f54df001949d29656951622707f33');


web3.eth.getBlockNumber()
  .then(console.log)
  .catch(console.error);
