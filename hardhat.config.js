require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const API_URL = 'https://eth-rinkeby.alchemyapi.io/v2/Inq5DwDI1oEAn9FdO1Ic7ASpPnkL0hnC'
const PRIVATE_KEY = '9daa64fd83f272494e2131cae006a4e6eceb7b316e182624ec97f544d53cba1a'
module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {},
    rinkeby: {
      url: API_URL,
      accounts: [PRIVATE_KEY]
    }
 },
};