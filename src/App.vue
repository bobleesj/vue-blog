<template>
  <div id="app" v-on:click="pressedBody">
    <nav role="navigation">
      <!--  Side navigation pop up -->
      <div id="sideNav" class="sidenav" ref="sideNav">
        <a href="javascript:void(0)" class="closebtn">Close</a>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/team">Team</router-link>
        <router-link to="/upload">Upload</router-link>
        <router-link to="/auth">Login</router-link>
      </div>
      <!--  Open button-->
      <div class="hamburger">
        <div id="first"></div>
        <div id="second"></div>
        <div id="third"></div>
      </div>
      <!--  Logo  -->
      <div class="logo-container">
        <a id="logo" href="/"><img src="./assets/logo.png"/></a>
      </div>
      </nav>
      <router-view></router-view>
    </div>
  </template>

  <script>
  export default {
    name: 'app',
    data: function () {
      return {
        isNavOpen: false
      }
    },
    methods: {
      pressedBody: function (event) {
        if (event.target.className === 'hamburger') {
          this.$refs.sideNav.style.width = `180px`
        } else {
          this.$refs.sideNav.style.width = `0px`
        }
      }
    }
  }
  </script>

  <style lang="scss">
  @import './styles/app';
  @import './styles/nav';

  </style>
