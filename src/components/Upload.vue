<!--  Template  -->
<template>
  <div class="upload">
    <h1>Upload</h1>
    <textarea v-model="markdown" class="markdown" placeholder="Preview"></textarea>
    <div v-html="renderedMarkdown"></div>
    <button v-on:click="counter += 1">Upload Blog</button>
    <p>{{counter}}</p>
  </div>
</template>

<!--  Vue  -->
<script>
import showdown from 'Showdown'
var converter = new showdown.Converter()

export default {
  name: 'upload',
  data: function () {
    return {
      markdown: '',
      counter: 0
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
