/* eslint-disable node/no-unpublished-import */
import request from 'supertest';
import app from '../../app.js';
import mockDB from '../../config/mockDB.js';

describe('Test Rating Routes', () => {
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

  it('rating found, should respond with 200 status code', async () => {
    await request(app).post('/login').send({
      fullName: 'Keil Finez',
      givenName: 'Keil Christopher',
      familyName: 'Finez',
      imageURL: 'asdasdwqeq',
      email: 'keilFinez@dlsu.edu.ph',
      accessToken: 'asdasdasdasd',
    });

    await request(app)
      .post('/professor/addProf')
      .send({
        lastName: 'Espiritu',
        firstName: 'Paolo',
        email: 'paoloEspiritu@dlsu.edu.ph',
        college: 'CCS',
        department: 'Software Technology',
        courses: ['STSWENG', 'CSSWENG'],
      });

    await request(app).post('/rating/addRating').send({
      rating: 3,
      userEmail: 'keilFinez@dlsu.edu.ph',
      profEmail: 'paoloEspiritu@dlsu.edu.ph',
    });

    const response = await request(app).post('/rating/findRating').send({
      userEmail: 'keilFinez@dlsu.edu.ph',
      profEmail: 'paoloEspiritu@dlsu.edu.ph',
    });
    expect(response.statusCode).toBe(200);
  });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/rating/findRating')
      .send({ error: new Error('Server Error') });
    expect(response.statusCode).toBe(500);
  });

  // to modify
  it('add prof successful, should respond with 200 status code', async () => {
    await request(app).post('/login').send({
      fullName: 'Keil Finez',
      givenName: 'Keil Christopher',
      familyName: 'Finez',
      imageURL: 'asdasdwqeq',
      email: 'keilFinez@dlsu.edu.ph',
      accessToken: 'asdasdasdasd',
    });

    await request(app)
      .post('/professor/addProf')
      .send({
        lastName: 'Espiritu',
        firstName: 'Paolo',
        email: 'paoloEspiritu@dlsu.edu.ph',
        college: 'CCS',
        department: 'Software Technology',
        courses: ['STSWENG', 'CSSWENG'],
      });

    const response = await request(app).post('/rating/addRating').send({
      rating: 4,
      userEmail: 'keilFinez@dlsu.edu.ph',
      instructorEmail: 'paoloEspiritu@dlsu.edu.ph',
    });
    expect(response.statusCode).toBe(200);
  });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/rating/addRating')
      .send({ error: new Error('Server Error') });
    expect(response.statusCode).toBe(500);
  });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .patch('/rating/getInstructorRatings')
      .send({ instructorID: new Error('Server Error') });
    expect(response.statusCode).toBe(500);
  });

  it('rating updated, should respond with 200 status code', async () => {
    await request(app).post('/login').send({
      fullName: 'Keil Finez',
      givenName: 'Keil Christopher',
      familyName: 'Finez',
      imageURL: 'asdasdwqeq',
      email: 'keilFinez@dlsu.edu.ph',
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

    const response = await request(app).patch('/rating/updateRating').send({
      rating: 2,
      userEmail: 'keilFinez@dlsu.edu.ph',
      instructorEmail: 'paoloEspiritu@dlsu.edu.ph',
    });
    expect(response.statusCode).toBe(200);
  });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .patch('/rating/updateRating')
      .send({ error: new Error('Server Error') });
    expect(response.statusCode).toBe(500);
  });
});
