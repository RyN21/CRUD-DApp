const fs = require('fs');
const HDWalletProvider = require('truffle-hdwallet-provider');

const secrets = JSON.parse(
  fs.readFileSync('.secrets').toString().trim()
);

module.export = {
  networks: {
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          secrets.seed,
          `https://ropsten.infura.io/v3/${secrets.projectId}`
        ),
      network_id: 3
    }
  }
};

// this allows you connect to the ropsten network and is secure
// provider will tell web3 how we can connect to the blockchain of this network
//privat key how web3 will sign transaction
//endpoint so web3 knows where to send the transaction to reach the ropsten network
// Can also use environments to hide seeds and project id
// Network id: Each Ethereum network is identified by a number
