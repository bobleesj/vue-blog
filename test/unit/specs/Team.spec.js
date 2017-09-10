import Vue from 'vue'
import Team from '@/components/Team'

describe('Team.vue', () => {
  const Constructor = Vue.extend(Team)

  it('renders HTML elements', () => {
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.team h1').textContent)
    .to.equal('Team')
    expect(vm.$el.querySelector('.team h2').textContent)
    .to.exist
    expect(vm.$el.querySelector('.team h3').textContent)
    .to.exist
  })

  it('has a created hook', () => {
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.team h1').textContent)
    .to.equal('Team')
  })

  it('correctly sets the message when created', () => {
    const vm = new Constructor().$mount()
    expect(vm.name).to.equal('Bob Lee')
  })

  it('has a update image method', () => {
    const vm = new Constructor().$mount()
    expect(vm.updateImg).to.exist
  })

  it('has a created hook', () => {
    expect(typeof Team.created).to.exist
  })
})
