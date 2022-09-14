// Importing Employee class
const Employee = require("./Employee");

//Inheriting employee class with the help of extends keyword.
class Manager extends Employee{
    //constructor
    constructor(empId, empName, empEmail, officeNo)
    {
        // Calling parent constructor
        super(empId, empName, empEmail);
        this.officeNo = officeNo;
    }

    // return manager office number from input
    getOfficeNo(){
        return this.officeNo;
    }

    //override method from employee class
    getRole(){
        return "Manager";
    }
}

module.exports =Manager;

