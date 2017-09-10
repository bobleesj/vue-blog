import Vue from 'vue'
import Team from '@/components/Team'

describe('Team.vue', () => {
  it('renders HTML elements', () => {
    const Constructor = Vue.extend(Team)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.team h1').textContent)
      .to.equal('Team')
    expect(vm.$el.querySelector('.team h2').textContent)
      .to.exist
    expect(vm.$el.querySelector('.team h3').textContent)
      .to.exist
  })
})
