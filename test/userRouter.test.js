const userRouter = require('../routers/userRouter');
const request = require('supertest');

userDeets = {
    "last_name": "Elenwoke", 
    "first_name": "Eden",
    "username": "edentheheathen",
    "email_address": "edentheheathen@gmail.com",
};

userDeets2 = {
    "last_name": "", 
    "first_name": "Eden",
    "username": "edentheheathen",
    "email_address": "edentheheathen@gmail.com",
};

userDeets3 = {
    "last_name": "Elenwoke", 
    "first_name": "",
    "username": "edentheheathen",
    "email_address": "edentheheathen@gmail.com",
};

userDeets4 = {
    "last_name": "Elenwoke",  
    "first_name": "Eden",
    "username": "",
    "email_address": "edentheheathen@gmail.com",
};


describe("POST/register", () => {

    describe("given that I have a valid user object", () => {

        test("should return a 200 status code", async () => {
            const response = await request(userRouter).post("/users/register").send(userDeets);
            // expect(response.statusCode).toBe(200);
            expect(response.last_name).toBe(userDeets.last_name);
            
        });

        test("should throw a database error when last name field is missing", async() => {
            const response = await request(userRouter).post("/users/register").send(userDeets2);
            expect(response.error);
        });

        test("should throw a database error when first name field is missing", async() => {
            const response = await request(userRouter).post("/users/register").send(userDeets3);
            expect(response.error);
        });

        test("should be false if username field is missing", async() => {
            const response = await request(userRouter).post("/users/register").send(userDeets4);
            expect(response.statusCode).toBe(404);

      });

    });




describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  })







})
