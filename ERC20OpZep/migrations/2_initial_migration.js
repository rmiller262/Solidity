var SampleToken = artifacts.require("samplekoken");

module.exports = function(deployer) {
  deployer.deploy(SampleToken, "UdacityExampleToken", "UET", 18, 1000);


};