<template lang="html">
  <el-table :data="exchangedata" border style="width: 73%" :row-class-name="tableRowClassName">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="type" label="种类" width="200"></el-table-column>
      <el-table-column prop="message_stats.publish_in" label="信息输入" width="200"></el-table-column>
      <el-table-column prop="message_stats.publish_in_details.rate" label="信息输入率" width="200"></el-table-column>
      <el-table-column prop="message_stats.publish_out_details.rate" label="信息输出率" width="200"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      exchangedata: []
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      setTimeout(this.exfresh(), 3000)
    })
  },
  attached() {},
  methods: {
    exfresh() {
      this.axios.get('/api/exchanges')
          .then((response) => {
            this.exchangedata = response.data
          })
    },
    tableRowClassName(row, index) {
      if (index % 2 !== 0) {
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
