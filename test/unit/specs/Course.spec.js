import Vue from 'vue'
import Course from '@/components/Course'

describe('Course.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Course)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.course h1').textContent)
      .to.equal('Course')
  })
})
