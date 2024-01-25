const{Web3} = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/a781ed0cbc254910adde7f777d215126'); // Replace with your Infura Project ID or Ethereum provider URL
// Replace with your Infura Project ID or Ethereum provider URL

// Load the smart contract ABI
// Replace with the actual address of your deployed smart contract

// Create a contract instanceeplace with your Infura Project ID or Ethereum provider URL

// Load the smart contract ABI
const contractABI = [{"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}];

// Set the contract address
const contractAddress = '0xbbc3D5F8E8E1DbF715dD4ABA1FCF2404Ff0e7075'; // Replace with the actual address of your deployed smart contract

// Create a contract instance
const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

// Function to call the "retrieve" function
async function retrieveData() {
  try {
    const result = await contractInstance.methods.retrieve().call();
    console.log('Retrieved Data:', result);
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

// Call the function
retrieveData();