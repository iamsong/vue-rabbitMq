<template lang="html">
  <el-tabs type="card">
    <el-tab-pane label="监听端口">
     <el-table :data="tableData" border style="width: 50%">
       <el-table-column prop="protocol" label="协议" width="200">  </el-table-column>
       <el-table-column prop="node" label="节点" width="200">  </el-table-column>
       <el-table-column prop="bound" label="绑定至" width="200">  </el-table-column>
       <el-table-column prop="port" label="端口">  </el-table-column>
     </el-table>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeName: '1'
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
