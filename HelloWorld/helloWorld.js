//const HelloWorld = artifacts.require("./HelloWorld.sol");
//const Token = artifacts.require("./Token.sol");
//contract ('HelloWorld', ()  => {
//it('Should return hello world', async () => {
  //  const helloWorld = await HelloWorld.deployed();
    //const result = helloWorld.hello();
    //assert(result === 'Hello World');
//});

//});
const HelloWorld = artifacts.require('HelloWorld');

contract('HelloWorld', () => {
  it('should return Hello World', async () => {
    const helloWorld = await HelloWorld.deployed();
    const result = await helloWorld.hello();
    assert(result === 'Hello World');
  });
});