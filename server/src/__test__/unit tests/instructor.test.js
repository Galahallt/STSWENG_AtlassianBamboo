/* eslint-disable node/no-unpublished-import */
import request from 'supertest';
import app from '../../app.js';
import mockDB from '../../config/mockDB.js';

describe('Test Instructor Routes', () => {
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

  it('valid professor, should respond with 200 status code', async () => {
    const response = await request(app)
      .post('/professor/addProf')
      .send({
        lastName: 'Espiritu',
        firstName: 'Paolo',
        email: 'paoloEspiritu@dlsu.edu.ph',
        college: 'CCS',
        department: 'Software Technology',
        courses: ['STSWENG', 'CSSWENG'],
      });
    expect(response.statusCode).toBe(200);
  });

  it('professor exists, should respond with 400 status code', async () => {
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

    const response = await request(app)
      .post('/professor/addProf')
      .send({
        lastName: 'Espiritu',
        firstName: 'Paolo',
        email: 'paoloEspiritu@dlsu.edu.ph',
        college: 'CCS',
        department: 'Software Technology',
        courses: ['STSWENG', 'CSSWENG'],
      });
    expect(response.statusCode).toBe(400);
  });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/professor/addProf')
      .send({ error: new Error('Server Error') });
    expect(response.statusCode).toBe(500);
  });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/professor/addProfsCsv')
      .send({
        file: new Error('Server Error'),
      });
    expect(response.statusCode).toBe(500);
  });

  it('function returns prof, should respond with 200 status code', async () => {
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

    const response = await request(app).get('/professor/getAllProfs');
    expect(response.statusCode).toBe(200);
  });

  it('no prof return, should respond with 400 status code', async () => {
    const response = await request(app).get('/professor/getAllProfs');
    expect(response.statusCode).toBe(400);
  });

  it('professor does not exist, should respond with 400 status code', async () => {
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

    const response = await request(app).get('/professor/basdhasdhjad');
    expect(response.statusCode).toBe(400);
  });
});
