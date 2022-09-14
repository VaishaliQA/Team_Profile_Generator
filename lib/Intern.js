// Importing Employee class
const Employee = require("./Employee");

//Inheriting employee class with the help of extends keyword.
class Intern extends Employee{
    //constructor
    constructor(empId, empName, empEmail, school)
    {
        // Calling parent constructor
        super(empId, empName, empEmail);
        this.school = school;
    }

    // return school name from input
    getSchool(){
        return this.school;
    }

    //override method from employee class
    getRole(){
        return "Intern";
    }
}

module.exports =Intern;

