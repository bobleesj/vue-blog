<template lang="pug">
.auth(v-if="isLoginPage")
  .auth-login
    .auth-login-header
      h1 Login
      h2 Join in one second
    .auth-login-form
      form(action="http://localhost:5000/auth/login" method="post")
        input(placeholder="Email" id="email" name="email" required)
        input(type="password" placeholder="Password" id="password" name="password" required)
        input(type="submit" value="Join")
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
      form(action="http://localhost:5000/auth/signup" method="post")
        input(placeholder="First Name" id="firstname" name="firstName" ref="firstName" required)
        input(placeholder="Last Name" id="lastname" name="lastName" ref="lastName" required)
        input(placeholder="Email" id="email" name="email" ref="email" required)
        input(type="password" placeholder="Password" id="password" name="password" ref="password" required)
        input(type="submit" value="Sign Up")
    .auth-login-divider
      #left-divider
      span(id="divider-text") OR
      #right-divider
    .auth-login-facebook
      button Join in one second
  .auth-signup
    span Already have an account? #[a(@click="greet") Login]
  .auth-footer
    .auth-footer-copyright
      span Copyright © Bob Lee. All rights reserved.
</template>

<script>
export default {
  data: function () {
    return {
      isLoginPage: true
    }
  },
  methods: {
    greet: function (event) {
      this.isLoginPage = !this.isLoginPage
    }
  }
}
</script>

<style lang="scss">
@import '../styles/form.scss';
</style>
