<template lang="pug">
  .profile
    .profile-container
      .profile-container-image
        img(:src="profileImage" @click="redirect")
        form(method="post" encType="multipart/form-data" action="http://localhost:5000/user/profile")
          span Change Image
          input(type="file" name="profilePicture")
          input(type="submit" value="Upload Profile")
      .profile-container-info
        form(method="post" action="http://localhost:5000/user/edit")
          span First Name
          input(:value="firstName" placeholder="First Name" name="firstName")
          span Last Name
          input(:value="lastName" placeholder="Last Name" name="lastName")
          span Description
          textarea(:value="description" placeholder="Tell us more about your expertise and interest" name="userBio")
          button Edit
        button(@click="logout") Log out
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      firstName: ``,
      lastName: ``,
      description: ``,
      profileImage: ``
    }
  },
  async created () {
    console.log(this.token)
    try {
      const user = await axios(`http://localhost:5000/user`, {
        method: `get`,
        withCredentials: true
      })
      console.log(user)
      this.firstName = user.data.firstName
      this.lastName = user.data.lastName
      this.description = user.data.description
      this.profileImage = `https://cdn.bobthedeveloper.io/profiles/` + user.data._id + `.png`
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
    },
    getUserInfo: async function () {
    }
  }
}
</script>

<style lang="scss">
@import '../styles/user';
</style>
