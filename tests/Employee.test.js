// Import Employee class
const Employee = require("../lib/Employee")

describe('Employee', () =>{
     // creating employee object  and assign values
    it("should creates an employee object and checking type",() =>{

        const employee = new Employee(12, 'TestData', 'test123@gmail.com');
        expect(employee.empId).toEqual(expect.any(Number));
        expect(employee.empName).toEqual(expect.any(String));
        expect(employee.empEmail).toEqual(expect.any(String));
    });

    // gets name from getName() 
    it('should return employee name', () => {
        const employee = new Employee(12, 'TestData', 'test123@gmail.com');
        expect(employee.getName()).toEqual('TestData');
    });

    // gets id from getId() 
    it('should return employee ID', () => {
        const employee = new Employee(12, 'TestData', 'test123@gmail.com');
        expect(employee.getId()).toEqual(12);
    });

    // gets emails from getEmail()
    it('should return employee email', () => {
        const employee = new Employee(12, 'TestData', 'test123@gmail.com');
        expect(employee.getEmail()).toEqual('test123@gmail.com');
    });

    // gets role from getRole()
    it('should return role of employee', () => {
        const employee = new Employee(12, 'TestData', 'test123@gmail.com');
        expect(employee.getRole()).toEqual("Employee");
    });

});

