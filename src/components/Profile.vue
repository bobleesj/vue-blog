<template lang="pug">
  .profile
    .profile-container
      .profile-container-image
        img(src="https://cdn-images-1.medium.com/fit/c/180/180/1*r88lN70oSYaFoSFxCe_pJg.png")
        span Change Image
      .profile-container-info
        form(action="/api/auth/signup" method="post")
          span Full Name
          input(placeholder="Full Name" value="Bob Lee")
          span Tags
          input(placeholder="swift, ios, guitar, node.js")
          span Country
          input(placeholder="Country" name="country")
          span Biography
          textarea(placeholder="Tell us more about your expertise and interest" name="biography")
          button Edit

</template>

<style lang="scss">
@import '../styles/profile';
</style>
