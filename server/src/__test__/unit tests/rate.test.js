/* eslint-disable node/no-unpublished-import */
import request from 'supertest';
import app from '../../app.js';
import mongoose from 'mongoose';

describe('Test Rating Routes', () => {
  afterAll(async () => {
    mongoose.disconnect();
  });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/rating/findRating')
      .send({ error: new Error('Server Error') });
    expect(response.statusCode).toBe(500);
  });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/rating/addRating')
      .send({ error: new Error('Server Error') });
    expect(response.statusCode).toBe(500);
  });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/rating/getInstructorRatings')
      .send({ error: new Error('Server Error') });
    expect(response.statusCode).toBe(500);
  });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/rating/updateRating')
      .send({ error: new Error('Server Error') });
    expect(response.statusCode).toBe(500);
  });
});
