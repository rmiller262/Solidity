const { expect} = require('chai');
const { transformAsserterArgs } = require('chai-as-promised');
const {ethers} = require('truffle');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.String(), 'ether')
}

const ether = tokens

describe('RealEstate', () => {
    let RealEatate, escrow
    let deployer, seller
    let nftID = 1
    let purchasePrice = ether(100)
    let escrowAmount = ether(20)

    beforeEach(async () => {
        accounts = await ethers.getSigners()
        deployer = accounts[0]
        seller = deployer
        buyer = accounts[1]
        inspector = accounts[2]
        lender = accounts[3]
        
        
        //Load Contracts 
        const RealEstate = await ethers.getContractFactory('Real Estate'
        const Escrow = await ethers.getContractFactory('Escrow')
        
        //Deploy Contracts
         realEstate = await RealEstate.deploy()
         escrow = await Escrow.deploy(
         realEstate.address,
         nftID,
         purchasePrice,
         escrowAmount,
         seller.address,
         buyer.address,
         inspector.address,
         lender.address

         )

         //Seller Approved NFT
         transaction = await realEstate.connect(seller).approve(escrow.address, nftID)
         await transaction.wait()

    })

    describe('Deployment', async () => {

        it('sends an NFT to the seller / deployer', async () =>{
            expect(Await realEstate.ownerOf(nftID)).to.equal(seller.address))
        })
    })
})

describe('Selling real estate', async () => {

    it('executes a successful transaction', async () =>{
        //Expects seller to be NFT owner before the sale
        expect(await realEstate.ownerOf(nftID)).to.equal(seller.address)


        transaction = await escrow.connect(buyer).depositEarnest({value: escrowAmount })
            
            //Check Escrow Balance 
            balance = await escrow.getBalance()
            console.log("escrow balance:", ethers.utils.formatEther(balance))


   //Inspector updates status
   transaction = await escrow.connect(inspector).updateInspectionStatus(true)
   await tranaction.wait()
   console.log("Inspector updates status")

   transaction = await escrow.connect(buyer).approveSale()
   await transaction.wait()
   console.log("Buyer approves sale")


   transaction = await escrow.connect(seller).approveSale()
   await transaction.wait()
   console.log("Seller approves sale")

   //Lender Funds sale
   transaction = await lender.sendTransaction({ to: escrow.address, value: ether(80)})


   transaction = await escrow.connect(lender).approveSale()
   await transaction.wait()
   console.log("Lender approves sale")



    transaction = await escrow.connect(buyer).finalizeSale()
    await transaction.wait()
    console.log("Buyer Finalizes sale")

     //Expects buyer to be NFT owner after the sale
     expect(await realEstate.ownerOf(nftID)).to.equal(buyer.address)

     //Expect Seller to receive funds
     balance = await ethers.provider.getBalance(seller.address)
     console.log("Seller balance:", ethers.utils.formatEther(balance))
     expect(balance.to.be.above(ether(1099))        
        })
        
    })