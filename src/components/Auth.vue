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
.auth {
  background-color: #F9F9F9;
  padding-top: 50px;
  width: 100%;
  height: 800px;

  .auth-login {
    margin: 0 auto;
    width: 260px;
    padding: 50px;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid #E6E6E6;
    border-radius: 2px;

    &-header {
      h1 {
        margin-bottom: 10px;
      }

      h2 {
        margin-bottom: 20px;
        font-size: 26px;
        font-weight: 400;
      }

    }

    &-form {
      margin: 0;

      form {
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 170px;

        input {
          margin: 0;
          border: 1px solid #E6E6E6;
          height: 45px;
          font-size: 14px;
          text-indent: 16px;
          border-radius: 1px;
          background-color: #F9F9F9;
        }

        button {
          margin: 0;
          background-color: #8A66FB;
          border: 0;
          height: 40px;
          color: white;
          font-size: 16px;
          font-weight: 500;
          border-radius: 1px;
        }

      }

    }

    &-divider {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 8px;
      margin-bottom: 13px;

      #left-divider {
        margin: 0;
        height: 1px;
        width: 100px;
        background-color: #DADADA;
      }

      #divider-text {
        margin: 0 15px;
        font-size: 12px;
        color: #DADADA;
      }

      #right-divider {
        margin: 0;
        height: 1px;
        width: 100px;
        background-color: #DADADA;
      }

    }

   &-facebook {

     button {
       background-color: #3B5998;
       border: 0;
       color: white;
       height: 40px;
       font-size: 14px;
       width: 100%;
       border-radius: 1px;
     }

   }

  }

  .auth-signup {
    display: flex;
    margin: 0 auto;
    width: 260px;
    padding: 20px 50px;
    background-color: white;
    border-radius: 2px;
    border: 1px solid #E6E6E6;
    margin-top: 20px;
    justify-content: center;

    span {
      margin: 0;
      font-size: 12px;

      a {
        text-decoration: none;
        font-weight: 600;
      }

    }

  }

  .auth-footer {

    &-copyright {
      display: flex;
      justify-content: center;
      margin-top: 20px;

      span {
        margin: 0 auto;
        font-size: 10px;
      }

    }

  }


}



</style>
