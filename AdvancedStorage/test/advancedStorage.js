//const AdvancedStorage = artifacts.require('AdvancedStorage');

//contract('Advanced Storage', () => {
  //  let advancedStorage = null;
    //before(async () => {
    //advancedStorage = await AdvancedStorage.deployed();

    //});

    // it('Should add an element to ids array', async () => {
        
       // await advancedStorage.add(10);
        //const result = advancedStorage.ids(0);
        //assert(result.toNumber() === 10);
    
   // });

    
     //   it('Should get an element of the  ids array', async () => {
       //     await advancedStorage.add(20);
         //   const result = advancedStorage.get(1);
          //  assert(result.toNumber() === 20);
// });


//it('Should get the  ids array', async () => {
  //  const advancedStorage = await AdvancedStorage.deployed();
    //const rawIds = advancedStorage.getAll();
    //const ids = rawIds.map(id=> id.toNumber());
    //assert.deepEqual(ids, [10,20]);

//});

//it('Should get the length of ids array', async () => {
  //  const advancedStorage = await AdvancedStorage.deployed();
    //const length =  await AdvancedStorage.deployed();
    //assert(length.toNumber () ===2);


// });

const AdvancedStorage = artifacts.require('AdvancedStorage');

contract('AdvancedStorage', () => {
  let advancedStorage = null;
  before(async () => {
    advancedStorage = await AdvancedStorage.deployed();
  });

  it('Should add an id', async () => {
    await advancedStorage.add(10);
    const id = await advancedStorage.ids(0);
    assert(id.toNumber() === 10);
  });

  it('Should get an id', async () => {
    await advancedStorage.add(20);
    const id = await advancedStorage.get(1);
    assert(id.toNumber() === 20);
  });

  it('Should get all ids', async () => {
    const rawIds = await advancedStorage.getAll();
    const ids = rawIds.map(id => id.toNumber());
    assert.deepEqual(ids, [10, 20]);
  });

  it('Should return the length of ids array', async () => {
    const length = await advancedStorage.length();
    assert(length.toNumber() === 2); 
  });
});