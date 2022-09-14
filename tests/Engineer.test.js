// Import Engineer class
const Engineer = require("../lib/Engineer")

describe('Engineer', () =>{

    // creating engineer object  
    it('should creates an engineer object and checking type of github', () => {
        const engineer = new Engineer(12, 'TestData', 'test123@gmail.com', 'test123');
        expect(engineer.gitHub) .toEqual(expect.any(String));
    });

    // gets github from getGitHub()
    it('should return engineer github value', () => {
        const engineer = new Engineer(12, 'TestData', 'test123@gmail.com', 'test123');
        expect(engineer.getGitHub()).toEqual(expect.stringContaining('test123'));
    });

    // gets role from getRole() 
    it('should return role of engineer', () => {
        const engineer = new Engineer(12, 'TestData', 'test123@gmail.com', 'test123');
        expect(engineer.getRole()).toEqual("Engineer");
    });

})