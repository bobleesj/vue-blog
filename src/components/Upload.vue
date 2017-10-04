<!--  Template  -->
<template lang="pug">
 .upload
  .upload-markdown
    .upload-markdown-container
      .upload-markdown-container-header
        span(id="header") Markdown
        span(id="upload" @click="clickUploadButton") Upload
      .upload-markdown-container-body
        textarea(v-model="markdown" class="markdown" placeholder="Enter Markdown")
      .upload-markdown-container-footer
        span For the formatting and writing tips, please follow this #[a(href="https://team.bobthedeveloper.io") guide]
  .upload-preview
    .upload-preview-container(v-html="renderedMarkdown")
  modal(:isModalPresent="isModalOpen")
</template>

<!--  Vue  -->
<script>
import showdown from 'Showdown'
import Modal from './Modal'
var converter = new showdown.Converter()

export default {
  name: 'upload',
  components: {
    'modal': Modal
  },
  computed: {
    renderedMarkdown: function () {
      var text = this.markdown
      var html = converter.makeHtml(text)
      return html
    }
  },
  created () {
    this.$store.commit('prepareForUpload')
  },
  data: function () {
    return {
      markdown: ``,
      counter: 0,
      posts: [],
      isModalOpen: false
    }
  },
  methods: {
    clickUploadButton: function () {
      this.isModalOpen = !this.isModalOpen
      console.log(this.$store.state.postObject.title)
    }
  }
}
</script>

<!--  SCSS  -->
<style lang="scss">
@import '../styles/upload'
</style>
