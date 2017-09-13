import Vue from 'vue'
import Auth from '../../../src/components/Auth'

describe('Auth.vue', () => {
  const Constructor = Vue.extend(Auth)
  const vm = new Constructor().$mount()
  it('h1 and h2 header exists', () => {
    expect(vm.$el.querySelector('.auth .auth-login-header h1').textContent).to.equal('Login')
    expect(vm.$el.querySelector('.auth .auth-login-header h2').textContent).to.equal('Join in 2 seconds')
  })
  it('login form exists', () => {
    expect(vm.$el.querySelector('.auth .auth-login-form form')).to.exist
    expect(vm.$el.querySelector('.auth .auth-login-form form #email').placeholder).to.equal('Email')
    expect(vm.$el.querySelector('.auth .auth-login-form form #password').placeholder).to.equal('Password')
    expect(vm.$el.querySelector('.auth .auth-login-form form button').textContent).to.equal('Join')
  })
  it('form divider exists', () => {
    expect(vm.$el.querySelector('.auth .auth-login-divider')).to.exist
    expect(vm.$el.querySelector('.auth .auth-login-divider #left-divider')).to.exist
    expect(vm.$el.querySelector('.auth .auth-login-divider #divider-text').textContent).to.equal('OR')
    expect(vm.$el.querySelector('.auth .auth-login-divider #right-divider')).to.exist
  })
  it('sign up divider exist', () => {
    expect(vm.$el.querySelector('.auth .auth-signup span').textContent)
      .to.equal(`Haven't joined yet? a Sign Up`)
    expect(vm.$el.querySelector('.auth .auth-signup span a').href).to.exist
  })
})
