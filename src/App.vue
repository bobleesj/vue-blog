<template>
  <div id="app">
    <nav role="navigation">
      <!-- <div id="left-nav">
      <a id="logo" href="/"><img src="./assets/logo.png"/></a>
    </div>
    <div id="right-nav"> -->

    <div id="mySidenav" class="sidenav" ref="sideNav">
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">&times;</a>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/team">Team</router-link>
      <router-link to="/upload">Upload</router-link>
      <router-link to="/auth">Login</router-link>
    </div>
    <span style="font-size:30px;cursor:pointer" v-on:click="openNav">&#9776;</span>

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
    openNav: function (event) {
      this.$refs.sideNav.style.width = `250px`
    },
    closeNav: function (event) {
      this.$refs.sideNav.style.width = `0px`
    }
  }
}

</script>

<style lang="scss">
@import './styles/app';
@import './styles/nav';

</style>
