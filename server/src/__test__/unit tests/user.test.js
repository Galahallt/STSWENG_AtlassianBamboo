/* eslint-disable node/no-unpublished-import */
import request from 'supertest';
import app from '../../app.js';
import mongoose from 'mongoose';

describe('Test User Routes', () => {
  afterAll(async () => {
    mongoose.disconnect();
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
