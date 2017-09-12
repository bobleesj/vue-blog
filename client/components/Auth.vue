<template lang="pug">
  .auth
    .auth-header
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
</template>
