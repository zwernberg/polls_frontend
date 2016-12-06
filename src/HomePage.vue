<template>

    <div class="home-view">
        <div class="button-style">
          <router-link to="/create">Create</router-link>
        </div>
        <div class="button-style">
          <router-link to="/find">Search</router-link>
        </div>
    </div>

</template>
<script>
export default {
  name: "HomePage",
  data () {
    return {
      msg: 'Hello world!',

    }
  },
  methods: {

  }
}
</script>

<style>
  .home-view {
    position: fixed;
    bottom: 3%;
    left: 3%;
    right: 3%;
  }
  .button-style {
    border: 1px solid black;
    border-radius: 3px;
    font-size: 75px;
    margin-top: 30px;
  }
  a:link, a:visited, a:hover, a:active {
    text-decoration: none;
  }
</style>