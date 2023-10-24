require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

module.exports = {

  solidity: '0.8.4', // solidity version
  defaultNetwork: 'sepolia', // chosen by default when network isn't specified while running Hardhat
  networks: {
    scrollSepolia: {
      url: 'https://sepolia-rpc.scroll.io' || '',
      accounts:
      process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    sepolia: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    mantleTest: {
      url: 'https://rpc.testnet.mantle.xyz',
      accounts: [process.env.PRIVATE_KEY ?? ''],
    },
    arbitrumSepolia: {
      url: 'https://sepolia-rollup.arbitrum.io/rpc',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
    customChains: [
      {
        network: 'scrollSepolia',
        chainId: 534351,
        urls: {
          apiURL: 'https://sepolia-blockscout.scroll.io/api',
          browserURL: 'https://sepolia-blockscout.scroll.io/',
        },
      },
      {
        network: 'mantleTest',
        chainId: 5001,
        urls: {
          apiURL: 'https://explorer.testnet.mantle.xyz/api',
          browserURL: 'https://explorer.testnet.mantle.xyz',
        },
      },
      {
        network: 'arbitrumSepolia',
        chainId: 421614,
        urls: {
          apiURL: 'https://api-sepolia.arbiscan.io/api',
          browserURL: 'https://sepolia.arbiscan.io/',
        },
      },
    ],
  },
};

