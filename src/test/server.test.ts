//test server.ts
import request from 'supertest';
import { app } from '../server';

describe('GET /', () => {
  it('should return 200 OK', done => {
    request(app).get('/').expect(200, done);
  });

  it('should return 404 Not Found', done => {
    request(app).get('/foo').expect(404, done);
  });

  it('should return 405 Method Not Allowed', done => {
    request(app).post('/').expect(405, done);
  });

  it('should return 500 Internal Server Error', done => {
    request(app).get('/error').expect(500, done);
  });

  it('should return 200 OK', done => {
    request(app).get('/upload').expect(200, done);
  });
});
