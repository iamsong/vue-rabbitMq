<template lang="html">
  <el-table :data="channels_table" border style="width: 90%">
    <!---->
    <el-table-column label=" " width="400">
      <el-table-column label="通道" width="200"></el-table-column>
      <el-table-column label="节点" width="200"></el-table-column>
    </el-table-column>
    <!--Details-->
    <el-table-column label="详细" width="700">
      <el-table-column label="用户名" width="150"></el-table-column>
      <el-table-column label="节点" width="100"></el-table-column>
      <el-table-column label="预读取" width="100"></el-table-column>
      <el-table-column label="未应答" width="100"></el-table-column>
      <el-table-column label="未确认" width="150"></el-table-column>
      <el-table-column label="状态" width="100"></el-table-column>
    </el-table-column>
    <!--Message rates-->
    <el-table-column label="信息比率">
      <el-table-column label="发布" width="100"></el-table-column>
      <el-table-column label="确认" width="100"></el-table-column>
      <el-table-column label="投递/获取"></el-table-column>
      <el-table-column label="应答" width="100"></el-table-column>
    </el-table-column>
  </el-table>
</template>

<script>
var channels_table =[{

}]
export default {
  data() {
    return {
      channels_table
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
