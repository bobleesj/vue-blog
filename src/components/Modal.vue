<template lang="pug">
.modal
  transition(name="fade" mode="out-in")
    .modal-container(id="myModal" ref="modal" v-show="isModalPresent" key="3")
      .modal-container-content
        .modal-container-content-header
          span(class="close") &times;
          h2 Upload Task
          hr
        .modal-container-content-body
          form(action="http://localhost:5000/post/upload" method="post" encType="multipart/form-data")
            h3 Enter Tags
            input(type="text" name="tags" placeholder="iOS, swift, rxswift")
            h3 Category
            input(type="text" name="category")
            h3 Cover Photo
            input(type="file" name="coverPhoto")
            input(type="password" name="password" password)
            input(type="submit")
        .modal-container-content-footer
          h3 Modal Footer
</template>

<script>
export default {
  props: {
    isModalPresent: false
  }
}

</script>

<style lang="scss">
@import '../styles/modal';
</style>
