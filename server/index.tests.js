var chaiHttp = require('chai-http');
var chai = require('chai');
var expect = chai.expect;
var server = require('.index.js');

chai.use(chaiHttp);

describe('API Routes', () => {

  test('GET / returns a success status code' () => {
    chai.request(server)
    .get('/')
    .end((err, res) => {
      expect(res).to.have.status('200');
    })
  })
  test('GET /description returns a success status code', () => {
    chai.request(server)
      .get('/description')
      .end((err, res) => {
         expect(res).to.have.status('200');
      })
  })
})