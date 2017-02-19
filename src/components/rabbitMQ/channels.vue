<template lang="html">
  <el-row>
    <h1 id="channels">通道</h1>
    <el-row :gutter="2">
      <el-col :span="1">
        <p>搜索:</p>
      </el-col>
      <el-col :span="3">
        <el-input icon="search" v-model="input1" :on-icon-click="handleIconClick"></el-input>
      </el-col>
      <el-col :span="4" :push="10">
        <p id="showing_c">27 项(最多 100 项)</p>
      </el-col>
    </el-row>
    <channels></channels>
  </el-row>
</template>

<script>
import channels from "./channels/table"
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {
    channels
  }
};
</script>

<style lang="css">
#channels {
  text-align: left;
}
#showing_c {
  background-color: yellow;
}
</style>
