<template lang="html">
  <el-table :data="tableData3" border style="width: 80%">
    <!--Network-->
    <el-table-column label="网络" width="1000">
      <el-table-column prop="name" label="名称" width="200"></el-table-column>
      <el-table-column prop="name" label="协议" width="100"></el-table-column>
      <el-table-column prop="name" label="客户端" width="200"></el-table-column>
      <el-table-column prop="name" label="节点" width="150"></el-table-column>
      <el-table-column prop="name" label="来自客户端" width="150"></el-table-column>
      <el-table-column prop="name" label="发往客户端" width="100"></el-table-column>
      <el-table-column prop="name" label="超时" width="100"></el-table-column>
    </el-table-column>
    <!--Overview-->
    <el-table-column  label="概览">
      <el-table-column prop="name" label="通道" width="130"></el-table-column>
      <el-table-column prop="name" label="用户名" width="130"></el-table-column>
      <el-table-column prop="name" label="状态"></el-table-column>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css" scoped>
</style>
