import Router from '../../../client/router/index'

describe('Router', () => {
  it('contains all the routes', () => {
    let routes = Router.options.routes
    expect(routes.length).to.equal(7)
    expect(routes[0].name).to.equal('Home')
    expect(routes[1].name).to.equal('About')
    expect(routes[2].name).to.equal('Blog')
    expect(routes[3].name).to.equal('Team')
    expect(routes[4].name).to.equal('Upload')
    expect(routes[5].name).to.equal('Course')
    expect(routes[6].name).to.equal('Auth')
  })
})
