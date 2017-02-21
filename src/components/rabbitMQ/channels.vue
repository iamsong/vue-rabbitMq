<template lang="html">
  <el-row>
    <h1 id="channels">通道</h1>
    <el-row :gutter="2">
      <el-col :span="1">
        <p>搜索:</p>
      </el-col>
      <el-col :span="3">
        <el-input icon="search"></el-input>
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
      input1: ''
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      setTimeout(this.noderefresh(), 3000)
    })
  },
  methods: {
    noderefresh() {
      this.axios.get('/api/nodes')
          .then((response) => {
            this.nodedata = response.data
          })
    }
  },
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
