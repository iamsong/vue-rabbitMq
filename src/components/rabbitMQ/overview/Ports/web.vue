<template lang="html">
  <el-tabs type="card">
    <el-tab-pane label="Web 环境">
     <el-table :data="wdata" border style="width: 55%" :row-class-name="tableRowClassName">
       <el-table-column prop="description" label="环境" width="200">  </el-table-column>
       <el-table-column prop="node" label="节点" width="200">  </el-table-column>
       <el-table-column prop="ip_address" label="绑定到" width="200">  </el-table-column>
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
      webdata: [],
      wdata: []
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      setTimeout(this.reweb(), 5000)
    })
  },
  methods: {
    reweb() {
      this.axios.get('/api/overview')
          .then((response) => {
            this.webdata = response.data
            this.wdata = this.webdata.contexts
          })
    },
    tableRowClassName(row, index) {
      if (index === 1 || index ===5 ) {
        return 'info-row';
      } else if (index === 3) {
        return 'positive-row';
      }
      return '';
   }
  },
  components: {}
};
</script>

<style lang="css">
</style>
