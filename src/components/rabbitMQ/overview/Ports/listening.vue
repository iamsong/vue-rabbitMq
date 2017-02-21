<template lang="html">
  <el-tabs type="card">
    <el-tab-pane label="监听端口">
     <el-table :data="ldata" border style="width: 50%" :row-class-name="tableRowClassName">
       <el-table-column prop="protocol" label="协议" width="200">  </el-table-column>
       <el-table-column prop="node" label="节点" width="200">  </el-table-column>
       <el-table-column prop="ip_address" label="绑定至" width="200">  </el-table-column>
       <el-table-column prop="port" label="端口">  </el-table-column>
     </el-table>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeName: '1',
      listeningdata: [],
      ldata: []
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      setTimeout(this.relisten(), 5000)
    })
  },
  methods: {
    relisten() {
      this.axios.get('/api/overview')
          .then((response) => {
            this.listeningdata = response.data
            this.ldata = this.listeningdata.listeners
          })
    },
    tableRowClassName(row, index) {
      if (index === 1 || index ===5 || index === 3 ) {
        return 'info-row';
      } else if (index === 10) {
        return 'positive-row';
      }
      return '';
   }
  },
};
</script>

<style lang="css">

</style>
