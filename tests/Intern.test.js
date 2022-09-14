// Import Intern class
const Intern = require("../lib/Intern")

describe('Intern', () =>{
    // creating intern object and assign values 
    it('should creates an intern object and checking school type', () => {
        const intern = new Intern(12, 'TestData', 'test123@gmail.com', 'SJSU');
        expect(intern.school) .toEqual(expect.any(String));
    });

    // gets school from getSchool()
    it('should return school', () => {
        const intern = new Intern(12, 'TestData', 'test123@gmail.com', 'SJSU');
        expect(intern.getSchool()).toEqual(expect.stringContaining('SJSU'));
    });

    // gets role from getRole()
    it('gets role of intern', () => {
        const intern = new Intern(12, 'TestData', 'test123@gmail.com', 'SJSU');
        expect(intern.getRole()).toEqual("Intern");
    }); 
});