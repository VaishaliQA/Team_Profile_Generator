// Importing Employee class
const Employee = require("./Employee");

//Inheriting employee class with the help of extends keyword.
class Engineer extends Employee{
    //constructor
    constructor(empId, empName, empEmail, gitHub)
    {
        // Calling parent constructor
        super(empId, empName, empEmail);
        this.gitHub = gitHub;
    }

    // return github profile link from input
    getGitHub(){
        return this.gitHub;
    }

    //override method from employee class
    getRole(){
        return "Engineer";
    }
}

module.exports =Engineer;

