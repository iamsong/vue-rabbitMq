<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <topmenu></topmenu>
    <router-view></router-view>
    <foote></foote>
  </div>
</template>

<script>
import topmenu from "./components/rabbitMQ/topmenu"
import foote from "./components/rabbitMQ/foote"
export default {
  name: 'app',
  components: {
    topmenu,
    foote
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  width: 90%;
  margin-left: 5%;
}
</style>
