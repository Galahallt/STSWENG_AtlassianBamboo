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

  it('should retrieve null list of admins | 400 status code', async () => {
    const response = await request(app).get('/admin/adminlist');

    expect(response.statusCode).toBe(400);
  });

  it('should retrieve list of admins | 200 status code', async () => {
    await request(app).post('/login').send({
      fullName: 'Keil Finez',
      givenName: 'Keil Christopher',
      familyName: 'Finez',
      imageURL: 'asdasdwqeq',
      email: 'keilFinez@dlsu.edu.ph',
      accessToken: 'asdasdasdasd',
    });

    await request(app).post('/admin/addadmin').send({
      email: 'keilFinez@dlsu.edu.ph',
    });

    const response = await request(app).get('/admin/adminlist');

    expect(response.statusCode).toBe(200);
  });

  it('should respond with 500 status code', async () => {
    const response = await request(app).get('/admin/adminlist');

    expect(response.statusCode).toBe(400);
  });

  it('should add an admin | 200 status code', async () => {
    await request(app).post('/login').send({
      fullName: 'Keil Finez',
      givenName: 'Keil Christopher',
      familyName: 'Finez',
      imageURL: 'asdasdwqeq',
      email: 'keilFinez@dlsu.edu.ph',
      accessToken: 'asdasdasdasd',
    });

    const response = await request(app).post('/admin/addadmin').send({
      email: 'keilFinez@dlsu.edu.ph',
    });

    expect(response.statusCode).toBe(200);
  });

  it('should respond with 500 status code', async () => {
    await request(app).post('/login').send({
      fullName: 'Keil Finez',
      givenName: 'Keil Christopher',
      familyName: 'Finez',
      imageURL: 'asdasdwqeq',
      email: 'keilFinez@dlsu.edu.ph',
      accessToken: 'asdasdasdasd',
    });

    const response = await request(app)
      .post('/admin/addadmin')
      .send({
        email: new Error('Server Error'),
      });

    expect(response.statusCode).toBe(500);
  });

  it('should remove an admin | 200 status code', async () => {
    await request(app).post('/login').send({
      fullName: 'Keil Finez',
      givenName: 'Keil Christopher',
      familyName: 'Finez',
      imageURL: 'asdasdwqeq',
      email: 'keilFinez@dlsu.edu.ph',
      accessToken: 'asdasdasdasd',
    });

    await request(app).post('/admin/addadmin').send({
      email: 'keilFinez@dlsu.edu.ph',
    });

    const response = await request(app).post('/admin/removeadmin').send({
      email: 'keilFinez@dlsu.edu.ph',
    });

    expect(response.statusCode).toBe(200);
  });

  it('should respond with 500 status code', async () => {
    await request(app).post('/login').send({
      fullName: 'Keil Finez',
      givenName: 'Keil Christopher',
      familyName: 'Finez',
      imageURL: 'asdasdwqeq',
      email: 'keilFinez@dlsu.edu.ph',
      accessToken: 'asdasdasdasd',
    });

    await request(app).post('/admin/addadmin').send({
      email: 'keilFinez@dlsu.edu.ph',
    });

    const response = await request(app)
      .post('/admin/removeadmin')
      .send({
        email: new Error('Server Error'),
      });

    expect(response.statusCode).toBe(500);
  });
});
