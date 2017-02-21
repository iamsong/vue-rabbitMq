<template lang="html">
<el-row>
  <el-col style="width: 80%">
    <p id="showing">共{{connectionsdata.length }}项(只显示前 100 项)</p>
  </el-col>
  <el-table :data="cdata" border style="width: 80%">
    <!--Network-->
    <el-table-column label="网络" width="1000">
      <el-table-column prop="name" label="名称" width="200"></el-table-column>
      <el-table-column prop="protocol" label="协议" width="200"></el-table-column>
      <!-- <el-table-column prop="name" label="客户端" width="200"></el-table-column> -->
      <el-table-column prop="node" label="节点" width="250"></el-table-column>
      <!-- <el-table-column prop="name" label="来自客户端" width="150"></el-table-column>
      <el-table-column prop="name" label="发往客户端" width="100"></el-table-column> -->
      <el-table-column prop="timeout" label="超时" width="200"></el-table-column>
    </el-table-column>
    <!--Overview-->
    <el-table-column  label="概览">
      <el-table-column prop="channels" label="通道" width="130"></el-table-column>
      <el-table-column prop="user" label="用户名" width="130"></el-table-column>
      <el-table-column prop="state" label="状态"></el-table-column>
    </el-table-column>
  </el-table>
</el-row>
</template>

<script>
export default {
  data() {
    return {
      connectionsdata: [],
      cdata: []
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      setTimeout(this.connectfresh(), 3000)
    })
  },
  methods: {
    connectfresh() {
      this.axios.get('/api/connections')
          .then((response) => {
            this.connectionsdata = response.data
            this.cdata = this.connectionsdata.slice(0, 100)
          })
    }
  }
};
</script>

<style lang="css" scoped>
</style>
