const Generator = require("yeoman-generator");

module.exports = class extends Generator {

  writing() {
    this.fs.copy(this.templatePath("./"), this.destinationPath("./src"));
  }
  
  installDependencies() {
    this.addDependencies({"express": '^4.17.2'})
    this.addDependencies({"connect-flash": '^0.1.1'})
    this.addDependencies({"express-handlebars":'^6.0.2'})
    this.addDependencies({"bcryptjs":'^2.4.3'})
    this.addDependencies({"express-session":'^1.17.2'})
    this.addDependencies({"method-override":'^3.0.0'})
    this.addDependencies({"mongoose":'^6.1.6'})
    this.addDependencies({"passport":'^0.5.2'})
    this.addDependencies({"passport-local":'^1.0.0'})
    this.addDependencies({"dotenv":'^11.0.0'})
    this.addDevDependencies({"nodemon":'^2.0.15'})
  }
};