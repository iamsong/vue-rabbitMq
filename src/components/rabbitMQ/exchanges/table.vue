<template lang="html">
  <el-table :data="exchangedata" border style="width: 73%">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="name" label="种类" width="200"></el-table-column>
      <el-table-column prop="name" label="策略" width="200"></el-table-column>
      <el-table-column prop="name" label="参数" width="200"></el-table-column>
      <el-table-column prop="name" label="信息输入率" width="200"></el-table-column>
      <el-table-column prop="name" label="信息输出率" width="200"></el-table-column>
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
