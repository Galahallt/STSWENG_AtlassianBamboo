/* eslint-disable node/no-unpublished-import */
import request from 'supertest';
import app from '../../app.js';
import mockDB from '../../config/mockDB.js';

describe('Test Review Route', () => {
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

  // weird case
  // it('no reviews, should respond with 400 status code', async () => {
  //   const response = await request(app).post('/review/reviews').send({
  //     instructorID: 'basdasdasd',
  //   });

  //   expect(response.statusCode).toBe(400);
  // });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/review/reviews')
      .send({
        instructorID: new Error('Server Error'),
      });
    expect(response.statusCode).toBe(500);
  });

  it('invalid user/prof id, should respond with 400 status code', async () => {
    const response = await request(app).post('/review/addreview').send({
      user_id: 'aiosdoaisdhasd',
      userName: 'Pogi McPogster',
      instructor_id: 'basdasdasd',
      course_code: 'STSWENG',
      review: 'Great subject, great prof!',
    });

    expect(response.statusCode).toBe(400);
  });

  // it('review not found, should respond with 400 status code', async () => {
  //   const response = await request(app).post(
  //     '/review/deleteReview/asdasdahsdh'
  //   );

  //   expect(response.statusCode).toBe(400);
  // });

  // it('bad request, should respond with 500 status code', async () => {
  //   const response = await request(app)
  //     .post('/review/deleteReview/asdasdahsdh')
  //     .send({
  //       error: new Error('Server Error'),
  //     });

  //   expect(response.statusCode).toBe(500);
  // });
});
