/* eslint-disable node/no-unpublished-import */
import request from 'supertest';
import app from '../../app.js';
import mockDB from '../../config/mockDB.js';

describe('Test Index Route', () => {
  /**
   * Clear all test data after every test.
   */
  afterEach(async () => {
    await mockDB.clearDatabase();
  });

  /**
   * Remove and close the db and server.
   */
  afterAll(async () => {
    await mockDB.closeDatabase();
  });
  it('function returns prof, should respond with 200 status code', async () => {
    await request(app)
      .post('/professor/addProf')
      .send({
        id: 'asidasio91213',
        lastName: 'Espiritu',
        firstName: 'Paolo',
        email: 'paoloEspiritu@dlsu.edu.ph',
        college: 'CCS',
        department: 'Software Technology',
        courses: ['STSWENG', 'CSSWENG'],
      });

    const response = await request(app).post('/review/reviews').send({
      instructorID: 'asidasio91213',
    });
    expect(response.statusCode).toBe(200);
  });
  it('Professor does not exist, should respond with 400 status code', async () => {
    const response = await request(app).post('/review/reviews').send({
      instructorID: '11812345',
    });
    expect(response.statusCode).toBe(400);
  });
  it('add review sucessful, should respond with 200 status code', async () => {
    await request(app).post('/login').send({
      fullName: 'Tongki Ilagan',
      givenName: 'Tongki',
      familyName: 'Ilagan',
      imageURL: 'asdasdwqeq',
      email: 'vincent_ilagan@dlsu.edu.ph@dlsu.edu.ph',
      accessToken: 'asdasdasdasd',
    });
    await request(app)
      .post('/professor/addProf')
      .send({
        id: 'asidasio91213',
        lastName: 'Espiritu',
        firstName: 'Paolo',
        email: 'paoloEspiritu@dlsu.edu.ph',
        college: 'CCS',
        department: 'Software Technology',
        courses: ['STSWENG', 'CSSWENG'],
      });
    const response = await request(app).post('/review/addreview').send({
      user_id: '11812345',
      userName: 'Tongki',
      instructor_id: 'asidasio91213',
      course_code: 'CCPROG1',
      review: 'Great professor and teaches good!',
    });
    expect(response.statusCode).toBe(200);
  });
});
