/* eslint-disable node/no-unpublished-import */
import request from 'supertest';
import app from '../../app.js';
import mockDB from '../../config/mockDB.js';

describe('Test Instructor Routes', () => {
  afterEach(async () => {
    mockDB.clearDatabase();
  });

  afterAll(async () => {
    mockDB.closeDatabase();
  });

  // to modify
  // it('valid professor, should respond with 200 status code', async () => {
  //   const response = await request(app)
  //     .post('/professor/addProf')
  //     .send({
  //       id: 'asidasio91213',
  //       lastName: 'Espiritu',
  //       firstName: 'Paolo',
  //       email: 'paoloEspiritu@dlsu.edu.ph',
  //       college: 'CCS',
  //       department: 'Software Technology',
  //       courses: ['STSWENG', 'CSSWENG'],
  //     });
  //   expect(response.statusCode).toBe(200);
  // });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/professor/addProf')
      .send({ error: new Error('Server Error') });
    expect(response.statusCode).toBe(500);
  });

  // it('no newProf was added, should respond with 400 status code', async () => {
  //   const response = await request.app.post('/professor/addProfsCsv').send({
  //     newProf: [],
  //   });
  //   expect(response.statusCode).toBe(400);
  // });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/professor/addProfsCsv')
      .send({
        file: new Error('Server Error'),
      });
    expect(response.statusCode).toBe(500);
  });

  it('function called, should respond with 200 status code', async () => {
    const response = await request(app).get('/professor/getAllProfs');
    expect(response.statusCode).toBe(200);
  });

  // to modify
  // it('function called, should respond with 200 status code', async () => {
  //   const response = await request(app).get('/professor/12omj8v4kz4b0ot4');
  //   expect(response.statusCode).toBe(200);
  // });

  // to modify
  // it('professor does not exist, should respond with 400 status code', async () => {
  //   const response = await request(app).get('/professor/asdasdjklhasd');
  //   expect(response.statusCode).toBe(400);
  // });
});
