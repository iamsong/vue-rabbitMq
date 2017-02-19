<template lang="html">
  <el-tabs type="card">
    <el-tab-pane label="Web 环境">
     <el-table :data="tableData" border style="width: 55%">
       <el-table-column prop="context" label="环境" width="200">  </el-table-column>
       <el-table-column prop="node" label="节点" width="200">  </el-table-column>
       <el-table-column prop="bound" label="绑定到" width="200">  </el-table-column>
       <el-table-column prop="port" label="端口">  </el-table-column>
       <el-table-column prop="ssl" label="SSL">  </el-table-column>
       <el-table-column prop="path" label="路径">  </el-table-column>
     </el-table>
    </el-tab-pane>
  </el-tabs>
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
