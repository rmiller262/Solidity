const MountainToken = artifacts.require("MountainToken");

contract("MountainToken", (accounts) => {
     // before(async () => {
        //instance = await MountainToken.deployed()  
      
    })

    web3.eth.getBalance {
      
    };

 it("Should set the right owner", async() => {
    let owner = await instance.owner.address()
    assert.equal(owner, owner.address, 'The owner of the address is correct');
})

  it("Should assign the total supply of token to the owner", async() => {
     let ownerBalance = await MountainToken.balanceOf(owner.address);
     assert.equal(totalSupply, ownerBalance, 'Total supply equals owner balance');
});

//it("Should set the max capped supply to the argument provided during deployment", async function () {
  //  const cap = await MountainToken.cap();
    //expect(Number(hre.ethers.utils.formatEther(cap))).to.equal(tokenCap);
//});

//it("Should set the blockReward to the argument provided during deployment", async function () {
  //  const blockReward = await MountainToken.blockReward();
    //expect(Number(hre.ethers.utils.formatEther(blockReward))).to.equal(tokenBlockReward);
//});

//});


  //  it("Should transfer tokens between accounts", async function () {
        //Transfer 50 tokens from owner to addr1
    //    await MountainToken.transfer(addr1.address, 50);
      //  const addr1Balance = await mountainToken.balanceOf(addr1.address);
       // expect(addr1Balance).to.equal(50);

        //transfer 50 tokens from addr1 to addr2
        // We use .connect(signer) to send a transaction from another account
        //await MountainToken.connect(addr1).transfer(addr2.address, 50);
        //expect(addr2Balance).to.equal(50);
    //});

    //it("Should fail if sender doesn't have enough tokens", async function () {
      //  const initialOwnerBalance = await MountainToken.balanceOf(owner.address);
        //Try to send 1 token from addr1 (0 tokens) to owner (1000000 tokens).
        // require will evaluate false and revert the transaction
        //await expect(
          //  MountainToken.connect(addr1).transfer(owner.address, 1)
        //).to.be.revertedWith("ERC20: transfer amount exceeds balance");

    //Owner balance shouldn't have changed.
    //expect(await MountainToken.balanceOf(owner.address)).to.equal(
      //  initialOwnerBalance
//    );
//});

    // it("Should update balances after transfers", async function () {
      //  const initialOwnerBalance = await MountainToken.balanceOf(owner.address);

        //transfer 100 tokens from owner to addr1.
        //await MountainToken.transfer(addr1.address, 100);

        //transfer another 50 tokens from owner to addr2.
       // await MountainToken.transfer(addr2.address, 50);

        //check balances
        //const finalOwnerBalance = await MountainToken.balanceOf(owner.address);
        //expect(finalOwnerBalance).to.equal(initialOwnerBalance.sub(150));

        //const addr1Balance = await MountainToken.balanceOf(addr1.address);
        //expect(addr1Balance).to.equal(100);

        //const addr2Balance = await MountainToken.balanceOf(addr2.address);
        //expect(addr2Balance).to.equal(50);
      });

     //});
    
