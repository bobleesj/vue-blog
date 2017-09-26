<template lang="pug">
.auth(v-if="isLoginPage")
  .auth-login
    .auth-login-header
      h1 Login
      h2 Join in one second
    .auth-login-form
      form(action="http://localhost:8000/signup" method="post")
        input(placeholder="Email" id="email" name="email" required)
        input(placeholder="Password" id="password" name="password" required)
        button Join
    .auth-login-divider
      #left-divider
      span(id="divider-text") OR
      #right-divider
    .auth-login-facebook
      button Join in one second
  .auth-signup
    span Haven't joined yet? #[a(v-on:click="greet") Sign Up]
  .auth-footer
    .auth-footer-copyright
      span Copyright © Bob Lee. All rights reserved.
.auth(v-else="isLoginPage")
  .auth-login
    .auth-login-header
      h1 Sign Up
      h2 Join in 3 seconds
    .auth-login-form
      input(placeholder="First Name" id="firstname" name="firstName" ref="firstName" required)
      input(placeholder="Last Name" id="lastname" name="lastName" ref="lastName" required)
      input(placeholder="Email" id="email" name="email" ref="email" required)
      input(placeholder="Password" id="password" name="password" ref="password" required)
      button(v-on:click="signup") Sign Up
    .auth-login-divider
      #left-divider
      span(id="divider-text") OR
      #right-divider
    .auth-login-facebook
      button(@click="signup") Join in one second
  .auth-signup
    span Already have an account? #[a(@click="greet") Login]
  .auth-footer
    .auth-footer-copyright
      span Copyright © Bob Lee. All rights reserved.
</template>

<script>
import firebase from 'firebase'

export default {
  data: function () {
    return {
      isLoginPage: true
    }
  },
  methods: {
    greet: function (event) {
      this.isLoginPage = !this.isLoginPage
    },
    signup: function (event) {
      console.log('Sign up button pressed')
      let firstName = this.$refs.firstName.value
      let lastName = this.$refs.lastName.value
      let password = this.$refs.password.value
      let email = this.$refs.email.value

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function () {
          // Handle sucessful creation of user
          // You can get current user using firebase.auth().currentUser
          console.log('User successfully created')
        }).catch(function (error) {
          // Handle failure of creation of user
          console.log(error)
        })

      firebase.database().ref('users/' + firstName).set({
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email
      })
    }
  }
}
</script>

<style lang="scss">
@import '../styles/form.scss';
</style>
