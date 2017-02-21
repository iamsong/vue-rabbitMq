<template lang="html">
  <el-row id="node">
    <el-table :data="nodedata" border style="width: 80%" :row-class-name="tableRowClassName">
       <el-table-column prop="name" label="名称" width="180"></el-table-column>
       <el-table-column prop="fd_used" label="文件描述" width="180">12</el-table-column>
       <el-table-column prop="sockets_used" label="Socket进程" width="180"></el-table-column>
       <el-table-column prop="proc_used" label="Erlang进程" width="180"></el-table-column>
       <el-table-column prop="mem_used" label="内存" width="180"></el-table-column>
       <el-table-column prop="disk_free_limit" label="磁盘空间" width="180"></el-table-column>
       <el-table-column prop="uptime" label="运行时间"></el-table-column>
       <el-table-column prop="type" label="类型"></el-table-column>
    </el-table>
  </el-row>
</template>

<script>
export default {
  props: ['fdata'],
  data() {
    return {
      nodedata: [],
      apiUrl: ''
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
    },
    tableRowClassName(row, index) {
      if (index === 1) {
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
#ndoe {
  margin-top: 100px;
  margin-bottom: 25px;
}
.el-table .info-row {
  background:  #c9e5f5;
}

</style>
