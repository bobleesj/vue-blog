<template lang="pug">
  .profile
    .profile-container
      .profile-container-image
        img(src="https://cdn-images-1.medium.com/fit/c/180/180/1*r88lN70oSYaFoSFxCe_pJg.png" @click="redirect")
        span Change Image
      .profile-container-info
        form(method="post")
          span User ID
          input(:value="userId" readonly)
          span Full Name
          input(placeholder="Full Name" :value="name")
          span Description
          textarea(placeholder="Tell us more about your expertise and interest" name="biography")
          span Token
          input(:value="token")
          button Edit
        button(@click="logout") Log out
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      name: `Bob Lee`,
      userId: `12312312`,
      token: this.$cookie.get('token'),
      posts: [``]
    }
  },
  async created () {
    console.log(this.$cookie.get('token'))
    try {
      const response = await axios.get(`http://localhost:5000/blog/posts`)
      this.posts.push(response)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    redirect: function () {
      this.$router.push('/')
    },
    logout: function () {
      this.$cookie.delete('token')
      window.location.reload()
      this.$router.push(`/`)
    }
  }
}
</script>

<style lang="scss">
@import '../styles/user';
</style>
