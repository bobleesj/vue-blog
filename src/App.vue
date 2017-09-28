<template>
  <div id="app">
      <!-- <div id="left-nav">
        <a id="logo" href="/"><img src="./assets/logo.png"/></a>
      </div>
      <div id="right-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/team">Team</router-link>
        <router-link to="/upload">Upload</router-link>
        <router-link to="/auth">Login</router-link>
      </div> -->

      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Info</li></a>
            <a href="#"><li>Contact</li></a>
            <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
          </ul>
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

  // #logo {
  //   img {
  //     width: 120px;
  //     margin: 14px 0 0 20px;
  //   }
  // }
  //
  // #right-nav {
  //   margin-right: 15px;
  //
  //   a {
  //     margin: 5px 15px;
  //     color: #454545;
  //     text-decoration: none;
  //     font-size: 14px;
  //     font-weight: 500;
  //   }
  //
  //   a:hover {
  //     color: black;
  //   }
  //
  // }

}

@media screen and (max-width: 550px) {
  a {
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
  }

  a:hover {
    color: tomato;
  }

  #menuToggle {
    display: block;
    position: relative;
    top: 2px;
    left: 20px;

    z-index: 1;

    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */
    -webkit-touch-callout: none;
  }

  #menuToggle span {
    display: block;
    width: 29px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #232323;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  /*
   * Transform all the slices of hamburger
   * into a crossmark.
   */
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-1px, 1px);
    background: #232323;
  }

  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  /*
   * Ohyeah and the last one should go the other direction
   */
  #menuToggle input:checked ~ span:nth-last-child(2) {
    opacity: 1;
    transform: rotate(-45deg) translate(0, -1px);
  }

  /*
   * Make this absolute positioned
   * at the top left of the screen
   */
  #menu {
    position: absolute;
    width: 200px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;

    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */

    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }

  #menu li {
    padding: 10px 0;
    font-size: 16px;
  }

  /*
   * And let's fade it in from the left
   */
  #menuToggle input:checked ~ ul {
    transform: scale(1.0, 1.0);
    opacity: 1;
  }
}

</style>
