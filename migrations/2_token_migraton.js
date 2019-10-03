const OurToken = artifacts.require("OurToken");

module.exports = function(deployer , networks) {
  deployer.deploy(OurToken);
};
