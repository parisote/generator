const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  writing() {
    this.fs.copy(this.templatePath("./"), this.destinationPath("./src"));
  }

  installDependencies() {
      this.addDependencies({"redux": '^4.1.2'})
      this.addDependencies({"react-redux": '^7.2.6'})
      this.addDependencies({"async-action-creator":'^2.2.5'})
  }
};