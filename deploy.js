const HDWalletProvider = require('truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider (
    'mnemonic',
    'infura rinkeby link'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    const result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({data: '0x' + bytecode}) // add 0x bytecode
     .send({from: accounts[0]}); // remove 'gas'
};

deploy();

