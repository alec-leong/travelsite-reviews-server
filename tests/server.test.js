// Global Jest Methods: https://jestjs.io/docs/en/api
// Expect Jest Methods: https://jestjs.io/docs/en/expect
// Async Jest: https://jestjs.io/docs/en/asynchronous#callbacks
// http-terminator: https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html
// supertest: https://www.npmjs.com/package/supertest

require('dotenv').config();
const request = require('supertest'); // A module to test Express.js server.

const host = process.env.APP_HOST || 'localhost';
const port = process.env.APP_PORT || 3000;
const protocol = /^(https|HTTP\/2|HTTP2)/i.test(process.env.APP_PROTOCOL) ? 'https' : 'http';

describe('GET /reviews/id', () => {
  let id;
  let server;

  // Set `id` and `server` before testing.
  beforeAll(() => {
    id = 0;
    server = `${protocol}://${host}:${port}`;
  });

  test('responds with json', (done) => request(server)
    .get(`/reviews/${id}`)
    .expect('Content-Type', /json/)
    .expect(200, done));
});
