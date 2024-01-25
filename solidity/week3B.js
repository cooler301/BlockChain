
/*onst Web3 = require('web3');

const web3 = new Web3('https://mainnet.infura.io/v3/e75f54df001949d29656951622707f33');

// Sender account information
const senderAddress = '0x88E46DB8CBde6ca32C1f52843492A77676B1a9A88';
const senderPrivateKey = '3973d1b6554c30c51a83ed49d4ae0ed47895b4db5c22eb9d6eab9c1884c6d878';

// Recipient account information
const recipientAddress = '0x8710f6d77C385caec72755a306652B5C95717453'; // Replace with the recipient's Ethereum address

// Transfer Ether function
async function transferEther() {
  const gasPrice = await web3.eth.getGasPrice();
  const gasEstimate = await web3.eth.estimateGas({
    from: senderAddress,
    to: recipientAddress,
    value: web3.utils.toWei('0.1', 'ether'),
  });

  const rawTx = {
    from: senderAddress,
    to: recipientAddress,
    value: web3.utils.toWei('0.1', 'ether'),
    gasPrice: gasPrice,
    gasLimit: gasEstimate,
  };

  const signedTx = await web3.eth.accounts.signTransaction(rawTx, senderPrivateKey);
  const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

  console.log('Transaction successful. Transaction hash:', txReceipt.transactionHash);
}

transferEther();

*/

const Web3 = require('web3');

// Infura API URL
const infuraUrl = 'https://mainnet.infura.io/v3/e75f54df001949d29656951622707f33';
const web3 = new Web3(infuraUrl);

// Sender account information
const senderAddress = '00x88E46DB8CBde6ca32C1f52843492A77676B1a9A88';
const senderPrivateKey = '3973d1b6554c30c51a83ed49d4ae0ed47895b4db5c22eb9d6eab9c1884c6d878';

// Recipient account information
const recipientAddress = '0x8710f6d77C385caec72755a306652B5C95717453';

// Transfer Ether function
async function transferEther() {
  const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPrivateKey);

  const gasPrice = await web3.eth.getGasPrice();
  const gasEstimate = await web3.eth.estimateGas({
    from: senderAccount.address,
    to: recipientAddress,
    value: web3.utils.toWei('0.1', 'ether'),
  });

  const rawTx = {
    from: senderAccount.address,
    to: recipientAddress,
    value: web3.utils.toWei('0.1', 'ether'),
    gasPrice: gasPrice,
    gasLimit: gasEstimate,
  };

  const signedTx = await senderAccount.signTransaction(rawTx);
  const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

  console.log('Transaction successful. Transaction hash:', txReceipt.transactionHash);
}

transferEther();