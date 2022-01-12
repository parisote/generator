const Generator = require("yeoman-generator");

module.exports = class extends Generator {

  installDependencies() {
    this.npmInstall(["express", "connect-flash", "express-handlebars", "bcryptjs", "express-session", "method-override", "mongoose", "passport", "passport-local", "dotenv", "nodemon"]);
  }
};