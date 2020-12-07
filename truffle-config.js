const fs = require('fs');
const HDWalletProvider = require('truffle-hdwallet-provider');
const secrets = JSON.parse(
  fs.readFileSync('.secrets').toString().trim()
);

module.exports = {
  networks: {
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          secrets.seed,
          `https://ropsten.infura.io/v3/${secrets.projectId}`
        ),
      network_id: 3,
      gas: 5000000
    }
  }
};

// Deploy to MainNet use this:
// module.exports = {
//   networks: {
//     mainnet: {
//       provider: () =>
//         new HDWalletProvider(
//           // Be more careful with seed phrase
//           // Seed phrase you use only on mainnet
//           // Funding the address:
//           //  - Register to an exchange like coinbase
//           //  - Place an order to buy real ether
//           //  - Use the wallet to send to metamask address
//           //  - Recieve ether
//           //  - Use new seed phrase for metamask
//           //  - Use seed phrase to deploy smart contract to mainnet
//           //  - Real ether will be used to pay for deployment
//           secrets.seed,
//           `https://mainnet.infura.io/v3/${secrets.mainNet}`
//         ),
//       network_id: 1
//     }
//   }
// };

// this allows you connect to the ropsten network and is secure
// provider will tell web3 how we can connect to the blockchain of this network
//privat key how web3 will sign transaction
//endpoint so web3 knows where to send the transaction to reach the ropsten network
// Can also use environments to hide seeds and project id
// Network id: Each Ethereum network is identified by a number
