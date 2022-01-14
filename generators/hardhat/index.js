const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  writing() {
    this.fs.copy(this.templatePath("./"), this.destinationPath("./client"));
  }

  install() {
    this.addDependencies({"hardhat": '^2.8.2'})
    this.addDependencies({"@nomiclabs/hardhat-waffle": '^2.0.1'})
    this.addDependencies({"chai":'^4.3.4'})
    this.addDependencies({"ethereum-waffle":'^3.4.0'})
    this.addDependencies({"@nomiclabs/hardhat-ethers":'^2.0.4'})
    this.addDependencies({"ethers":'^5.5.3'})
    this.addDependencies({"lite-server": "^2.6.1"})
    this.addDependencies({"bootstrap": "^5.1.3"})
    this.addDependencies({"browserify": "^17.0.0"})
    this.addDependencies({"eth-sig-util": "^3.0.1"})
    this.addDependencies({"ethereumjs-util": "^7.0.9"})
  }
};