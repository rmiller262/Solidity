const {expect} = require('chai');
const {ethers} = require('hardat');

describe('Counter',  async () => {
    let Counter


    beforeEach(async () => {
        const Counter = await ethers.getContractFactoty('Counter')
     counter = await Counter.deploy('My Counter', 1)
    })

    describe('Deployment', () => {

 it('sets the initital count', async () => {
const count = await counter.count()
expect(count).to.equal(1)

})
   
   
it('sets the initital name', async () => {
    const count = await counter.count()
    expect(count).to.equal(1)  
   
})

describe('Counting', () => {
    let transaction 

    it('increments the count', async () => {
        transaction = await counter.increment()
        await transaction.wait()


        expect(await counter.count()).to.equal(2)

        transaction = await counter.increment()
        await transaction.wait()
            
        expect(await counter.count()).to.equal(3)
    })
})

})
