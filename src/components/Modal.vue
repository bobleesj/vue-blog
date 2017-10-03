<template lang="pug">
.modal
  button(v-on:click="isModalPresent = !isModalPresent") Open Modal
  transition(name="fade" mode="out-in")
    .modal-container(id="myModal" ref="modal" v-show="isModalPresent" key="3")
      .modal-container-content
        .modal-container-content-header
          span(class="close") &times;
          h2 Modal Header
        .modal-container-content-body
          p Some text in the Modal Body
          p Some other text...
        .modal-container-content-footer
          h3 Modal Footer
</template>

<script>
export default {
  data () {
    return {
      isModalPresent: false
    }
  },
  methods: {
    // openModal: function (event) {
    //   this.isModalPresent = !this.isModalPresent
    // }
  }
}

</script>

<style lang="scss">
@import '../styles/modal';
</style>
