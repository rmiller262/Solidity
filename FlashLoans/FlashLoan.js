const { expect} = require('chai');
const {ethers} = require('Truffle');
const assert = require('assert');
const ganache = require('ganache-cli');

const tokens = (n) => {

    const tokens = (n) => {
        return ethers.utils.parseUnits(n.toString(), 'ether')
    }

const ether = tokens

describe('FlashLoan', () => {

beforeEach()) => {
    //load accounts
    const FlashLoan = await ethers.getContractFactory('FlashLoan')
    const FlashLoanReceiver = await ethers.getContractFactory('FlashLoanReceiver')
    const Token = await ethers.getContractFactory('Token')
})
    token = await.Token.deploy('Dapp University', 'DAPP', '1000000')

    //Deploy Flash Loan Pool
    flashLoan = await FlashLoan.deploy(token.address)

    //Appprove Tokens before depositing
    let transaction = await token.connect(deployer).approve(flashLoan.address(tokens(1000000))
    await transaction.wait()

// Deposit tokens into the pool

    transaction = await flashLoan.connect(deployer).depositTokens(tokens(1000000))
    await transaction.wait()

})
})

describe('Deployment', () => {

    it('works', () => {
        expect(1+1).to.equal(2)
    })
}

})