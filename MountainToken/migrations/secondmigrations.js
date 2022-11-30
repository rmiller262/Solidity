const MountainToken = artifacts.require("MountainToken");

module.exports = function(deployer) {
  deployer.deploy(MountainToken);
};