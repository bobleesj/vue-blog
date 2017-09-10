<!--  Template  -->
<template>
  <div class="upload">
    <h1>Upload</h1>
    <p>Be able to upload markdown and good articles</p>
    <textarea v-model="markdown" class="markdown" placeholder="Enter Markdown"></textarea>
    <p>{{markdown}}</p>
  </div>
</template>


<!--  Vue  -->
<script>
export default {
  name: 'upload',
  data () {
    return {
      markdown: 'Markdown'
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
