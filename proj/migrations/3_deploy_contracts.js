const OurTutoCoin = artifacts.require("./OurTutoCoin.sol");

module.exports = function(deployer) {
    deployer.deploy(OurTutoCoin);
};