const Employee = require('./Employee');
class Intern extends Employee {
    constructor(name, id, email, school) {
      this.name = name;
      this.email = email;
      this.id = id;
      this.school = school;
    }
  
    getGithub () {
        return this.school;
    }
  
  
    getRole () {
      return "Intern";
    }
  
  };
  
  module.exports = Intern;