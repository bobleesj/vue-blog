<template lang="pug">
  .auth
    .auth-login
      .auth-login-header
        h1 Login
        h2 Join in 2 seconds
      .auth-login-form
        form(action="/api/auth/login" method="POST")
          input(placeholder="Email" id="email")
          input(placeholder="Password" id="password")
          button Join
      .auth-login-divider
        #left-divider
        span(id="divider-text") OR
        #right-divider
      .auth-login-facebook
        button Join in one second
    .auth-signup
      span Haven't joined yet? #[a(href="/auth/signup") Sign Up]
    .auth-footer
      .auth-footer-copyright
        span Copyright © Bob Lee. All rights reserved.
</template>

<style lang="scss">
@import '../../styles/form.scss';
</style>
