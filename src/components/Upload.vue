<!--  Template  -->
<template>
  <div class="upload">
    <h1>Upload</h1>
    <p>Be able to upload markdown and good articles</p>
    <textarea v-model="markdown" class="markdown" placeholder="Enter Markdown"></textarea>
    <p>{{markdown}}</p>
    <div v-html="renderedMarkdown">
    </div>
  </div>
</template>


<!--  Vue  -->
<script>
import showdown from 'Showdown'
var converter = new showdown.Converter()

export default {
  name: 'upload',
  data () {
    return {
      markdown: 'Markdown'
    }
  },
  computed: {
    renderedMarkdown: function () {
      var text = this.markdown
      var html = converter.makeHtml(text)
      return html
    }
  }
}
</script>


<!--  SCSS  -->
<style lang="scss">
.markdown {
  width: 80%;
  height: 200px;
  font-size: 18px;
}
</style>
