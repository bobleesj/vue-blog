// Import modules
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const server = require('../../../app')
const authRouter = require('../../../server/routers/auth-router')

// Inject dependencies
chai.use(chaiHttp)

describe('GET /api/auth/login', function() {
  it('exports auth controller', function(done) {
    chai.request(server)
      .get('/api/auth/login')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        done()
      })
  })
})
