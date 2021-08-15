const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      this.email = email;
      this.id = id;
      this.officeNumber = officeNumber;
    }
  
    getGithub () {
        return this.officeNumber;
    }
    
    getRole () {
      return "Manager";
    }
  
  };
  
  module.exports = Manager;