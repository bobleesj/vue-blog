<!--  Template  -->
<template lang="pug">
 .upload
  .upload-markdown
    .upload-markdown-container
      .upload-markdown-container-header
        span(id="header") Markdown
        span(id="upload") Upload
      .upload-markdown-container-body
        textarea(v-model="markdown" class="markdown" placeholder="Enter Markdown")
      .upload-markdown-container-footer
        span For the formatting and writing tips, please follow this #[a(href="https://team.bobthedeveloper.io") guide]
  .upload-preview
    .upload-preview-container(v-html="renderedMarkdown")
  modal
</template>

<!--  Vue  -->
<script>
import showdown from 'Showdown'
import Modal from './Modal'
var converter = new showdown.Converter()

export default {
  name: 'upload',
  data: function () {
    return {
      markdown: ``,
      counter: 0,
      posts: []
    }
  },
  computed: {
    renderedMarkdown: function () {
      var text = this.markdown
      var html = converter.makeHtml(text)
      return html
    }
  },
  methods: {
    addNewTodo: function () {
      this.posts.push({
        title: 'Title',
        subtitle: 'Subtitle'
      })
    }
  },
  components: {
    'modal': Modal
  }
}
</script>

<!--  SCSS  -->
<style lang="scss">
@import '../styles/upload'
</style>
