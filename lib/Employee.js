// Employee Class
class Employee{
    // Constructor
    constructor(empId,empName, empEmail)
    {
        this.empId = empId;
        this.empName = empName;
        this.empEmail = empEmail;
    }

    // return id from input
    getId(){
        return this.empId;
    }

    // return name from input
    getName(){
        return this.empName;
    }

    // return email from input
    getEmail(){
        return this.empEmail;
    }

    // return role from input
    getRole(){
        return "Employee";
    }
}

// Module to be exported
module.exports = Employee;