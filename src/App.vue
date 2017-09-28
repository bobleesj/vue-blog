<template>
  <div id="app">
    <nav role="navigation">
      <!-- <div id="left-nav">
      <a id="logo" href="/"><img src="./assets/logo.png"/></a>
    </div>
    <div id="right-nav"> -->
    <div class="container" v-on:click="toggle" v-bind:class="{ change: isNavOpen }">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>

    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/team">Team</router-link>
    <router-link to="/upload">Upload</router-link>
    <router-link to="/auth">Login</router-link>
    <!-- </div> -->
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
    toggle: function (event) {
      this.isNavOpen = true
      console.log(this.isNavOpen)
    }
  }
}

</script>

<style lang="scss">
@import './styles/app';
@import './styles/nav';

</style>
