const { assert } = require("chai");

const SimpleSmartContract = artifacts.require('SimpleSmartContract');

contracts('SimpleSmartContract', () => {
    it('Should deploy smart contract properly', async () => {
        const simpleSmartContract = await SimpleSmartContract.deployed();
        console.log(simpleSmartContract.address);
        assert(simpleSmartContract.address != '');
    });
});
