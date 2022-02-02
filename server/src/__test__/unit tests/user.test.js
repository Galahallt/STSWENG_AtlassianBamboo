/* eslint-disable node/no-unpublished-import */
import request from 'supertest';
import app from '../../app.js';
import mockDB from '../../config/mockDB.js';

describe('Test User Routes', () => {
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

  it('user id does not exist, should respond with 400 status code', async () => {
    const response = await request(app).post('/user/getUserById').send({
      id: 'asdasdsadasdasd',
    });
    expect(response.statusCode).toBe(400);
  });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/user/getUserById')
      .send({
        id: new Error('Server Error'),
      });
    expect(response.statusCode).toBe(500);
  });

  it('user email does not exist, should respond with 400 status code', async () => {
    const response = await request(app).post('/user/getUserByEmail').send({
      email: 'pogi@dlsu.edu.ph',
    });
    expect(response.statusCode).toBe(400);
  });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/user/getUserByEmail')
      .send({
        email: new Error('Server Error'),
      });
    expect(response.statusCode).toBe(500);
  });
});
