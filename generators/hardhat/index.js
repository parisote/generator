const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.addDependencies(["hardhat", " @nomiclabs/hardhat-waffle", "ethereum-waffle", "chai", "@nomiclabs/hardhat-ethers", "ethers"]);
  }
};