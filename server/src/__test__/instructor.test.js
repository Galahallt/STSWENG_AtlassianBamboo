import instructorController from '../controller/instructor_controller.js';
import instructorService from '../service/instructor_service.js';

import rateController from '../controller/rate_controller.js';
import rateService from '../service/rate_service.js';

import mockDB from '../__test__/mockDB.js';

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

// mock request object for prof
const mockReq = (prof) => {
  return {
    body: {
      lastName: prof.lastName,
      firstName: prof.firstName,
      email: prof.email,
      college: prof.college,
      department: prof.department,
      courses: prof.courses,
    },
  };
};

// mock request object for rating
const mockReqRate = (rate) => {
  return {
    body: {
      rating: rate.rating,
      userID: rate.userID,
      instructorID: rate.instructorID,
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
 * Instructor test suite.
 */
describe('valid instructor data', () => {
  /**
   * Tests valid instructor email when adding to database
   */
  test('can add instructor to profs to pick database', async () => {
    const req = mockReq({
      lastName: 'eNriquez',
      firstName: 'Bob',
      email: 'bob.enriquez@dlsu.edu.ph',
      college: 'CCS',
      department: 'Software Technology',
      courses: ['STSWENG'],
    });

    const res = mockRes();

    await instructorController.postAddProf(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});

describe('duplicate instructor data', () => {
  /**
   * Tests duplicate instructor data when adding instructor to database
   */
  test('can add instructor to profs to pick database', async () => {
    const prof = {
      id: 'asdqweqeq',
      lastName: 'eNriquez',
      firstName: 'Bob',
      email: 'bob.enriquez@dlsu.edu.ph',
      college: 'CCS',
      department: 'Software Technology',
      courses: ['STSWENG'],
    };

    await instructorService.addProf(prof);

    const req = mockReq({
      lastName: 'eNriquez',
      firstName: 'Bob',
      email: 'bob.enriquez@dlsu.edu.ph',
      college: 'CCS',
      department: 'Software Technology',
      courses: ['STSWENG'],
    });

    const res = mockRes();

    await instructorController.postAddProf(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Professor already exists.',
    });
  });
});

/**
 * Rating test suite
 */
describe('user adds rating to chosen professor', () => {
  /**
   * Test if added rating was valid
   */
  test('added rating successful', async () => {
    const req = mockReqRate({
      rating: 1.5,
      userID: 'asdasdjjjas',
      instructorID: 'askldhalshf',
    });

    const res = mockRes();

    await rateController.addRating(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
  });
});
