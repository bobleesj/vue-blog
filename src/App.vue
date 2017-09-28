<template>
  <div id="app" v-on:click="pressedBody">

    <nav role="navigation">
      <!--  Side nav -->
      <div id="sideNav" class="sidenav" ref="sideNav">
        <a href="javascript:void(0)" class="closebtn">Close</a>
        <!-- The user is logged in -->
        <div v-if="isLoggedIn">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/team">Team</router-link>
          <router-link to="/user">User</router-link>
        </div>
        <div v-else>
          <!--  The user is not logged in -->
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/team">Team</router-link>
          <router-link to="/auth">Login</router-link>
        </div>
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
        <!--  Side navigation when the user is not logged in -->
      </div>

      <!--  Top nav-->
      <div id="topNav" class="topNav" ref="topNav">
        <!-- The user is logged in -->
        <div v-if="isLoggedIn">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/team">Team</router-link>
          <router-link to="/upload">Upload</router-link>
          <router-link to="/user">User</router-link>
        </div>
        <div v-else>
          <!--  The user is not logged in -->
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/team">Team</router-link>
          <router-link to="/upload">Upload</router-link>
          <router-link to="/auth">Login</router-link>
        </div>
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
      isLoggedIn: false
    }
  },
  created () {
    console.log('Component created')
    if (this.$cookie.get(`token`)) {
      this.isLoggedIn = true
    }
  },
  methods: {
    pressedBody: function (event) {
      // Press other area, close the sidenav
      if (event.target.id === 'first' || event.target.id === 'second' || event.target.id === 'third' || event.target.className === 'hamburger') {
        this.$refs.sideNav.style.width = `180px`
      } else {
        this.$refs.sideNav.style.width = `0px`
      }
    },
    changeNavBasedOnToken: function () {
      console.log('Working')
    }
  }
}
</script>

<style lang="scss">
@import './styles/app';
@import './styles/nav';

</style>
