const {expect} = require('chai');
const {ethers} = require('truffle');
describe('Counter', ()=> {

it('stores the count', async () => {
  const Counter = await ethers.getContractFactory('Counter')
  const counter = await Counter.deploy('My Counter', 1)
  const count = await counter.count()
  expect(count).to.equal(1)
})

})
