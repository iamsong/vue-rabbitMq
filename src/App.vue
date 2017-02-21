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
#app .el-collapse-item__header{
    height: 43px;
    line-height: 43px;
    padding-left: 15px;
    background-color: #99A9BF;
    color: #F9FAFC;
    cursor: pointer;
    border-bottom: 1px solid rgb(223, 230, 236);
    font-weight: bold;
    font-style: 25px;
}
#app .el-collapse{
    text-align: left;
    border: 1px solid #99A9BF;
}
/*#app .el-menu--dark{
  background-color: #ff9900;

}
#app .el-menu--dark .el-menu-item {
  color: #fff;
}
#app .el-menu--horizontal.el-menu--dark .el-menu-item.is-active{
  color: #000;
}
#app .el-menu--dark .el-menu-item:hover{
  background-color: #ff9900;
}*/
</style>
