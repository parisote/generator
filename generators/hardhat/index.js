const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  install() {
    this.addDependencies({"hardhat": '^2.8.2'})
    this.addDependencies({"@nomiclabs/hardhat-waffle": '^2.0.1'})
    this.addDependencies({"chai":'^4.3.4'})
    this.addDependencies({"ethereum-waffle":'^3.4.0'})
    this.addDependencies({"@nomiclabs/hardhat-ethers":'^2.0.4'})
    this.addDependencies({"ethers":'^5.5.3'})
  }
};