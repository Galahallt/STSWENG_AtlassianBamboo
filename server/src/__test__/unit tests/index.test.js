import indexController from '../../controller/index_controller.js';
import mockDB from './mockDB.js';

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await mockDB.connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await mockDB.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await mockDB.closeDatabase());

// mock request object
const mockReq = (user) => {
  return {
    body: {
      fullName: user.fullName,
      givenName: user.givenName,
      familyName: user.familyName,
      imageURL: user.imageURL,
      email: user.email,
      accessToken: user.accessToken,
    },
  };
};

// mock result object
const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

/**
 * User test suite.
 */
describe('invalid DLSU email', () => {
  /**
   * Tests wrong user email in logging in
   */
  test('cannot login due to invalid DLSU e-mail', async () => {
    const req = mockReq({
      fullName: 'Keil Finez',
      givenName: 'Keil Christopher',
      familyName: 'Finez',
      imageURL: 'asdasdwqeq',
      email: 'keilFinez@gmail.com',
      accessToken: 'asdasdasdasd',
    });

    const res = mockRes();

    await indexController.postLogin(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Not DLSU account!' });
  });
});

describe('valid DLSU email', () => {
  /**
   * Tests that a valid user can be created through the userService without throwing any errors.
   */
  test('can login to profs to pick web application', async () => {
    const req = mockReq({
      fullName: 'Keil Finez',
      givenName: 'Keil Christopher',
      familyName: 'Finez',
      imageURL: 'asdasdwqeq',
      email: 'keilFinez@dlsu.edu.ph',
      accessToken: 'asdasdasdasd',
    });

    const res = mockRes();

    await indexController.postLogin(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
