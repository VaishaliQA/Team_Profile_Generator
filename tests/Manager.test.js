// Import Manager class
const Manager = require("../lib/Manager")

describe('Manager', () =>{

    // creating manager object  and assign values
    it('should creates an employee object and checking type', () => {
        const manager = new Manager(12, 'TestData', 'test123@gmail.com', 4323456312);
        expect(manager.officeNo).toEqual(expect.any(Number));
    });

    // gets school from getSchool()
    it('should return office number', () => {
        const manager = new Manager(12, 'TestData', 'test123@gmail.com', 4323456312);
        expect(manager.getOfficeNo()).toEqual(4323456312);
    });

    // gets role from getRole()
    it('should return role of manager', () => {
        const manager = new Manager(12, 'TestData', 'test123@gmail.com', 4323456312);
        expect(manager.getRole()).toEqual("Manager");
    }); 

})