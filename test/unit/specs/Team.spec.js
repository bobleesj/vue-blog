import Vue from 'vue'
import Team from '@/components/Team'

describe('Team.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Team)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.team h1').textContent)
      .to.equal('Team')
  })
})
