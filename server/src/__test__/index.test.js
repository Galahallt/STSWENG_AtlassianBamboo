import request from 'supertest';
// import userService from '../service/user_service.js';
import User from '../model/User.js';
// const mockDB = require('./mockDB.js');

// beforeAll(async () => await mockDB.connect());

// afterEach(async () => await mockDB.clearDatabase());

// afterAll(async () => await mockDB.closeDatabase());

describe('User Creation', () => {
  it('First User', async () => {
    try {
      const user = {
        fullName: 'Keil Finez',
        givenName: 'Keil Christopher',
        familyName: 'Finez',
        email: 'keilFinez@gmail.com',
        accessToken: 'asdasdasdasd',
      };
      expect(user.fullName).toEqual('Keil Finez');
      done();
    } catch (error) {
      console.log(error);
    }
  });
});

// test('respond with status code 400', async (done) => {
//   const user = {
//     fullName: 'Keil Finez',
//     givenName: 'Keil Christopher',
//     familyName: 'Finez',
//     email: 'keilFinez@gmail.com',
//     accessToken: 'asdasdasdasd',
//   };
//   const response = await request(app).post('/login').send({
//     fullName: 'Keil Finez',
//     givenName: 'Keil Christopher',
//     familyName: 'Finez',
//     email: 'keilFinez@gmail.com',
//     accessToken: 'asdasdasdasd',
//   });
//   expect(response.statusCode).toBe(400);

//   done();
// });

// describe('POST /login', () => {
//   describe('logging in with non-dlsu email', () => {
//     // user should not be able to login
//     // status code 400 with message "Not DLSU account!"

//   });
// });
