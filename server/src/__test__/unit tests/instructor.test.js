/* eslint-disable node/no-unpublished-import */
import request from 'supertest';
import app from '../../app.js';
import mongoose from 'mongoose';

describe('Test Instructor Routes', () => {
  afterAll(async () => {
    mongoose.disconnect();
  });

  // it('invalid DLSU email, should respond with 400 status code', async () => {
  //   const response = await request.app.post('/professor/addProf').send({
  //     id: asiduasio91213,
  //     firstName: 'Paolo',
  //     lastName: 'Espiritu',
  //     email: 'paoloEspiritu@gmail.com',
  //     college: 'CCS',
  //     department: 'Software Technology',
  //     courses: ['STSWENG', 'CSSWENG'],
  //   });
  //   expect(response.statusCode).toBe(400);
  // })

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/professor/addProf')
      .send({ error: new Error('Server Error') });
    expect(response.statusCode).toBe(500);
  });

  it('no newProf was added, should respond with 400 status code', async () => {
    const response = await request.app.post('/professor/addProfsCsv').send({
      newProf: [],
    });
    expect(response.statusCode).toBe(400);
  });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/professor/addProfsCsv')
      .send({
        error: new Error('Server Error'),
      });
    expect(response.statusCode).toBe(500);
  });

  it('no profs returned, should respond with 400 status code', async () => {
    const response = await request.app.get('/professor/getAllProfs').send({
      profs: [],
    });
    expect(response.statusCode).toBe(400);
  });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/professor/addProfsCsv')
      .send({ error: new Error('Server Error') });
    expect(response.statusCode).toBe(500);
  });

  it('no prof returned, should respond with 400 status code', async () => {
    const response = await request.app.get('/professor/:profID').send({
      prof: '',
    });
    expect(response.statusCode).toBe(400);
  });

  it('bad request, should respond with 500 status code', async () => {
    const response = await request(app)
      .post('/professor/:profID')
      .send({ error: new Error('Server Error') });
    expect(response.statusCode).toBe(500);
  });
});
