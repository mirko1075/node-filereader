//test server.ts
import request from 'supertest';
import { app } from '../app';

describe('GET /', () => {
  it('should return 200 OK', done => {
    request(app).get('/').expect(200, done);
  });

  it('should return 404 Not Found', done => {
    request(app).get('/foo').expect(404, done);
  });

  it('should return 404 Not found', done => {
    request(app).post('/').expect(404, done);
  });

  it('should return 200 OK', done => {
    request(app)
      .post('/upload')
      .attach('file', __dirname + '/' + `text.txt`)
      .expect(200, done);
  });

  //it should render the result page with the parameters
  it('should render the result page with the parameters', done => {
    request(app)
      .post('/upload')
      .attach('file', __dirname + '/' + `text.txt`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).toContain('file content');
        expect(res.text).toContain('Total words');
        expect(res.text).toContain('Total characters');
        expect(res.text).toContain('Total spaces');
        expect(res.text).toContain('Repeated words');
        done();
      });
  });

  it('should return 400 Bad Request if no file provided', done => {
    request(app).post('/upload').expect(400, done);
  });
});
