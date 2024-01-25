const{Web3} = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/e75f54df001949d29656951622707f33');
 const ganacheUrl = 'HTTP://127.0.0.1:7545';
 web3.eth.net.getId().then((networkId) => {console.log('Connected to network ID:', networkId);}).catch((error) => {console.log('Connected to network ID:', networkId);	  })	  .catch((error) => {
console.error('Error connecting to Ganache:', error);});
const accountAddress = '0x8710f6d77C385caec72755a306652B5C95717453';
	web3.eth.getBalance(accountAddress)
.then((balance) => {
console.log('Account balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
}).catch((error) => {
console.error('Error fetching balance:', error);
});
