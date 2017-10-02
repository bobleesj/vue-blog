<template lang="pug">
  .profile
    .profile-container
      .profile-container-image
        img(src="https://cdn.bobthedeveloper.io/profiles/59cec9cc2b76de13fd275b7e.png" @click="redirect")
        form(method="post" encType="multipart/form-data" action="http://localhost:5000/user/profile")
          span Change Image
          input(type="file" name="profilePicture")
          input(type="submit" value="Upload Profile")
      .profile-container-info
        form(method="post" action="http://localhost:5000/user/edit")
          span First Name
          input(placeholder="First Name" name="firstName")
          span Last Name
          input(placeholder="Last Name" name="lastName")
          span Description
          textarea(placeholder="Tell us more about your expertise and interest" name="userBio")
          button Edit
        button(@click="logout") Log out
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      firstName: `Bob`,
      lastName: `Lee`,
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
