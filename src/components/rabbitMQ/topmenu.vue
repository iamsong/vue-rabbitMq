<template>
<el-row>
  <el-menu default-active="1" class="el-menu-demo"  mode="horizontal" @select="handleSelect">
    <img src="../../assets/line.png">
    <h1>消息中间件客户端</h1>
  </el-menu>
  <p></p>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane name="first"><span slot="label"><router-link to="/">总览</router-link></span></el-tab-pane>
    <el-tab-pane><span slot="label"><router-link to="connec">连接</router-link></span></el-tab-pane>
    <el-tab-pane><span slot="label"><router-link to="channels">通道</router-link></span></el-tab-pane>
    <el-tab-pane><span slot="label"><router-link to="exchanges">交换器</router-link></span></el-tab-pane>
    <el-tab-pane><span slot="label"><router-link to="queues">队列</router-link></span></el-tab-pane>
    <el-tab-pane><span slot="label"><router-link to="admin">用户</router-link></span></el-tab-pane>
  </el-tabs>
</el-row>

  <!-- <el-row>
    <router-link to="/">overview</router-link>
    <router-link to="connec">connections</router-link>
  </el-row> -->

</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>
