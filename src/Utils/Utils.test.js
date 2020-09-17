import Utils from './index'


// jest.mock('Utils', () => {

// })


describe("Utils", () => {

    describe('Check Email', () => {
        it("Valid Email", () => {
            const email = "ducy23061999.lala@gmail.com"
            const isValid = Utils.isValidEmail(email);

            expect(isValid).toBeTruthy();
        })
        it("InValid Email", () => {
            const email1 = "ducy23061999.lala@gmail"
            const email2 = "ducy23061999.lala"
            const email3 = "ducy230";
            
            const isValid1 = Utils.isValidEmail(email1);
            const isValid2 = Utils.isValidEmail(email2);
            const isValid3 = Utils.isValidEmail(email3);

            expect(isValid1).toBeFalsy();
            expect(isValid2).toBeFalsy();
            expect(isValid3).toBeFalsy();
        })

    });
})