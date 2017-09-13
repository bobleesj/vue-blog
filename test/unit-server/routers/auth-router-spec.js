// Import modules
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const app = require('../../../app')
const authRouter = require('../../../server/routers/auth-router')

// Inject dependencies
chai.use(chaiHttp)

// Test
describe('GET /api/auth/login', function() {
  it('exports auth controller', function(done) {
    chai.request(app)
    .get('/api/auth/login')
    .end((err, res) => {
      expect(res.status).to.equal(200)
      done()
    })
  })
})
