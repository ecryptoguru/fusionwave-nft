require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

module.exports = {
  defaultNetwork: 'sepolia',
  networks: {
    hardhat: {
    },
    sepolia: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: {
    version: '0.8.4',
  },
};
