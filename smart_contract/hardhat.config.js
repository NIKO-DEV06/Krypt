require("@nomiclabs/hardhat-waffle");

const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;
const PRIVATE_URL = import.meta.env.VITE_PRIVATE_URL;

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: PRIVATE_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
