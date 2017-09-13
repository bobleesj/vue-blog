import Vue from 'vue'
import Blog from '../../../src/components/Blog'

describe('Blog.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Blog)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.blog h1').textContent)
      .to.equal('Blog')
  })
})
