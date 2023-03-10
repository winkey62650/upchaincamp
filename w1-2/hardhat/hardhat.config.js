require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
const mnemonic =  process.env.MNEMONIC
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    mumbai:{
    url:"https://matic-mumbai.chainstacklabs.com",
    chainId : 80001,
    accounts: {
        mnemonic: "youth possible chef point actor doll peanut coyote swift march embody blush"
      },
  }
  }
};


