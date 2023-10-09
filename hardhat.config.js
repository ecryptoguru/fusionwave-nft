require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config({ path: '.env' });

const { ALCHEMY_HTTP_URL } = process.env;
const { PRIVATE_KEY } = process.env;

module.exports = {
  solidity: '0.8.4',
  networks: {
    mumbai: {
      url: ALCHEMY_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
