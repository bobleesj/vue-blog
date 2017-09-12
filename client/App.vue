<template>
  <div id="app">
    <nav>
      <a><img src="./assets/logo.png"/></a>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/team">Team</router-link>
      <router-link to="/upload">Upload</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/course">Course</router-link>
      <router-link to="/auth/login">Login</router-link>
      <router-view></router-view>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


nav {

  a {
    color: #333333;
    text-decoration: none;
    margin-left: 10px;
  }

}


</style>
