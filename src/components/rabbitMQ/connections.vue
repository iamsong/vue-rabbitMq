<template lang="html">
  <el-row>
    <h1 id="connections">连接</h1>
    <el-row :gutter="2">
      <el-col :span="1">
        <p>搜索:</p>
      </el-col>
      <el-col :span="3">
        <el-input icon="search" v-model="input1" :on-icon-click="handleIconClick"></el-input>
      </el-col>
    </el-row>
    <connections></connections>
  </el-row>
</template>

<script>
import connections from './connections/table'
export default {
  data() {
    return {
      input1: ''
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    handleIconClick(ev) {
      console.log(ev);
    }
  },
  components: {
    connections
  }
};
</script>

<style lang="css">
#connections {
  text-align: left;
}
#showing {
  background-color: yellow;
}
</style>
