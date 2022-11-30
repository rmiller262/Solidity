const Token = artifacts.require("Token");
const dBank = artifacts.require("dBank");

module.exports = async function(deployer) {
	//deploy Token
	await deployer.deploy(Token)

	//assign token into variable to get it's address
	const token = await Token.deloyed()
	//pass token address for dBank contract(for future minting)
    await deployer.deploy(dBank, token.address)
	//assign dBank contract into variable to get it's address
    const dbank= await dbank.deployed()
	//change token's owner/minter from deployer to dBank
	await token.passMinterRole(dbank.address)
};