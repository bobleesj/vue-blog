<template>
  <div id="app">
    <nav>
      <div id="left-nav">
        <a id="logo" href="/"><img src="./assets/logo.png"/></a>
      </div>
      <div id="right-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/team">Team</router-link>
        <router-link to="/upload">Upload</router-link>
        <router-link to="/auth">Login</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
*{margin:0;padding:0;}

html {
  -webkit-text-size-adjust: 100%;
}

body {
  background-color: white;
}

#app {
  font-family: "Helvetica", "Helvetica Neue";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #454545;
}

nav {
  margin-top: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.16), 0 1px 4px rgba(0,0,0,0.23);
  z-index: 2;
  width: 100%;
  background-color: white;

  #logo {
    img {
      width: 120px;
      margin: 14px 0 0 20px;
    }
  }

  #right-nav {
    margin-right: 15px;

    a {
      margin: 5px 15px;
      color: #454545;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
    }

    a:hover {
      color: black;
    }

  }

}
</style>
