<template>
  <div class="upload">
    <h1>Upload</h1>
    <p>Be able to upload markdown and good articles</p>
    <input v-model="markdown" placeholder="Enter Markdown">
    <p>{{markdown}}</p>
  </div>
</template>

<script>
export default {
  name: 'upload',
  data () {
    return {
      markdown: ''
    }
  }
}
</script>
