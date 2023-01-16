const { getNamedAccounts } = require("hardhat")
async function getWeth() {
    const { deployer } = await getNamedAccounts()
    //call the deposit on the weth contract
    //abi, contracts
}
module.exports = { getWeth }
