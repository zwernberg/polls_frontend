<template>
  <div id="app">
    <h1><router-link :to="{name:'home'}">app name</router-link></h1>

      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- <router-link> will be rendered as an `<a>` tag by default -->



    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <div class="container-fluid">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style src="bootstrap/dist/css/bootstrap.css"></style>
<style>
  * {
    background-color: #f7e3e3;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #111d1d;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: bold;
    font-size: 100px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #111d1d;
    background-color: #f7e3e3;
  }
</style>
