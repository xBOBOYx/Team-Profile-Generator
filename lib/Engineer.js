const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, id, email, github) {
      this.name = name;
      this.email = email;
      this.id = id;
      this.github = github;
    }
  
    getGithub () {
        return this.github;
    }
  
  
    getRole () {
      return "Engineer ";
    }
  
  };
  
  module.exports = Engineer;