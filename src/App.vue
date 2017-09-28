<template>
  <div id="app">
    <nav role="navigation">
      <!-- <div id="left-nav">
      <a id="logo" href="/"><img src="./assets/logo.png"/></a>
    </div>
    <div id="right-nav"> -->


    <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/team">Team</router-link>
    <router-link to="/upload">Upload</router-link>
    <router-link to="/auth">Login</router-link> -->

    <div id="mySidenav" class="sidenav" ref="sideNav">
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">&times;</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
    <p>Click on the element below to open the side navigation menu.</p>
<span style="font-size:30px;cursor:pointer" v-on:click="openNav">&#9776; open</span>




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
    openNav: function (event) {
      this.$refs.sideNav.style.width = `250px`
    },
    closeNav: function (event) {
      this.$refs.sideNav.style.width = `0px`A
    }
  }
}

</script>

<style lang="scss">
@import './styles/app';
@import './styles/nav';

</style>
