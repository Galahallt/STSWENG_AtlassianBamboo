/* eslint-disable node/no-unpublished-import */
import request from 'supertest';
import app from '../../app.js';
import mockDB from '../../config/mockDB.js';

describe('Test Rating Routes', () => {
  afterEach(async () => {
    mockDB.clearDatabase();
  });

  afterAll(async () => {
    mockDB.closeDatabase();
  });

  // to modify
  // it('rating found, should respond with 200 status code', async () => {
  //   const response = await request(app).post('/rating/findRating').send({
  //     userEmail: 'keilFinez@dlsu.edu.ph',
  //     profEmail: 'paoloEspiritu@dlsu.edu.ph',
  //   });
  //   expect(response.statusCode).toBe(200);
  // });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/rating/findRating')
      .send({ error: new Error('Server Error') });
    expect(response.statusCode).toBe(500);
  });

  // to modify
  // it('add prof successful, should respond with 200 status code', async () => {
  //   const response = await request(app).post('/rating/addRating').send({
  //     rating: 4,
  //     userEmail: 'keilFinez@dlsu.edu.ph',
  //     instructorEmail: 'paoloEspiritu@dlsu.edu.ph',
  //   });
  //   expect(response.statusCode).toBe(200);
  // });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/rating/addRating')
      .send({ error: new Error('Server Error') });
    expect(response.statusCode).toBe(500);
  });

  // to modify
  // it('professor found, should respond with 200 status code', async () => {
  //   const response = await request(app)
  //     .patch('/rating/getInstructorRatings')
  //     .send({
  //       instructorID: '12omj8v4kz4b0ot4',
  //     });
  //   expect(response.statusCode).toBe(200);
  // });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .patch('/rating/getInstructorRatings')
      .send({ instructorID: new Error('Server Error') });
    expect(response.statusCode).toBe(500);
  });

  // to modify
  // it('rating updated, should respond with 200 status code', async () => {
  //   const response = await request(app).patch('/rating/updateRating').send({
  //     rating: 2,
  //     userEmail: 'keilFinez@dlsu.edu.ph',
  //     instructorEmail: 'paoloEspiritu@dlsu.edu.ph',
  //   });
  //   expect(response.statusCode).toBe(200);
  // });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .patch('/rating/updateRating')
      .send({ error: new Error('Server Error') });
    expect(response.statusCode).toBe(500);
  });
});
