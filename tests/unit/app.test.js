const request = require('supertest');

const app = require('../../src/app');

describe('/Not Existing Page Response', () => {
  test('should return HTTP 404 response', async () => {
    const res = await request(app).get('/notreal.html');
    expect(res.statusCode).toBe(404);
  });
});
