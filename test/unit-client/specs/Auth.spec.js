import Vue from 'vue'
import Auth from '../../../client/components/Auth'

describe('Auth.vue', () => {
  it('html form exists', () => {
    const Constructor = Vue.extend(Auth)
    const vm = new Constructor().$mount()
    // Form
    expect(vm.$el.querySelector('.auth form')).to.exist
    expect(vm.$el.querySelector('.auth h1').textContent).to.equal('Login')
    expect(vm.$el.querySelector('.auth h2').textContent).to.equal('Join in 2 seconds')
    expect(vm.$el.querySelector('.auth #password').placeholder).to.equal('Password')
    expect(vm.$el.querySelector('.auth #email').placeholder).to.equal('Email')
    // Form divider for facebook underneath
    expect(vm.$el.querySelector('.auth #left-divider')).to.exist
    expect(vm.$el.querySelector('.auth #right-divider')).to.exist
    expect(vm.$el.querySelector('.auth #divider-text').textContent).to.equal('OR')
  })
})
