<template lang="html">
  <el-table :data="tableData3" border style="width: 80%">
    <!--Overview-->
    <el-table-column label="概览">
      <el-table-column prop="name" label="名称" width="100"></el-table-column>
      <el-table-column prop="name" label="节点"></el-table-column>
      <el-table-column prop="name" label="Exclusive" width="120"></el-table-column>
      <el-table-column prop="name" label="参数" width="120"></el-table-column>
      <el-table-column prop="name" label="策略" width="100"></el-table-column>
      <el-table-column prop="name" label="状态" width="100"></el-table-column>
    </el-table-column>
    <!--Messages-->
    <el-table-column label="信息" width="300">
      <el-table-column prop="name" label="准备的信息" width="100"></el-table-column>
      <el-table-column prop="name" label="未应答信息" width="100"></el-table-column>
      <el-table-column prop="name" label="总共" width="100"></el-table-column>
    </el-table-column>
    <!--Message rates-->
    <el-table-column label="信息比率" width="300">
      <el-table-column prop="name" label="收取" width="100"></el-table-column>
      <el-table-column prop="name" label="传送/获取" width="100"></el-table-column>
      <el-table-column prop="name" label="应答" width="100"></el-table-column>
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

<style lang="css">
</style>
