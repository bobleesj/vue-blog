<template lang="pug">
  .auth
    .auth-login
      .auth-login-header
        h1 Login
        h2 Join in 2 seconds
      .auth-login-form
        form
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
      span Haven't joined yet? a #[a(href="/auth/signup") Sign Up]
</template>
