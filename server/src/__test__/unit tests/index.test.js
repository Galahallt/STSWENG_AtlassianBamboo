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

  it('should respond with 400 status code | invalid DLSU email', async () => {
    const response = await request(app).post('/login').send({
      fullName: 'Keil Finez',
      givenName: 'Keil Christopher',
      familyName: 'Finez',
      imageURL: 'asdasdwqeq',
      email: 'keilFinez@gmail.com',
      accessToken: 'asdasdasdasd',
    });
    expect(response.statusCode).toBe(400);
  });

  it('should respond with 200 status code | valid DLSU email', async () => {
    const response = await request(app).post('/login').send({
      fullName: 'Keil Finez',
      givenName: 'Keil Christopher',
      familyName: 'Finez',
      imageURL: 'asdasdwqeq',
      email: 'keilFinez@dlsu.edu.ph',
      accessToken: 'asdasdasdasd',
    });
    expect(response.statusCode).toBe(200);
  });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        error: new Error('Server Error'),
      });
    expect(response.statusCode).toBe(500);
  });
});
