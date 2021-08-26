<template>

<header> </header>

  <div id="nav">
    <router-link :to="{name: 'Home'}">Feed</router-link> /
    <router-link :to="{name: 'PostList'}">Create a Post</router-link> /
    <router-link :to="{name: 'About'}">About</router-link> 
    <!-- <router-link :to="{name: 'Register'}">Register</router-link> -->
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #255548;
}

#nav {
  padding: 30px;
  text-align: left;
}

#nav a {
  font-weight: bold;
  color: #255548;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #4bac7b;
}
</style>
