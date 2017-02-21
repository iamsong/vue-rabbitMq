<template lang="html">
  <el-table :data="queuesdata" border style="width: 80%" :row-class-name="tableRowClassName">
    <!--Overview-->
    <el-table-column label="概览">
      <el-table-column prop="name" label="名称" width="200"></el-table-column>
      <el-table-column prop="node" label="节点"></el-table-column>
      <el-table-column prop="name" label="Exclusive" width="120"></el-table-column>
      <el-table-column prop="state" label="状态" width="100"></el-table-column>
    </el-table-column>
    <!--Messages-->
    <el-table-column label="信息" width="300">
      <el-table-column prop="messages_ready" label="准备的信息" width="100"></el-table-column>
      <el-table-column prop="messages_unacknowledged" label="未应答信息" width="100"></el-table-column>
      <el-table-column prop="messages" label="总共" width="100"></el-table-column>
    </el-table-column>
    <!--Message rates-->
    <el-table-column label="信息比率" width="300">
      <el-table-column prop="message_stats.publish_details.rate" label="发布/S" width="100"></el-table-column>
      <el-table-column prop="message_stats.deliver_get_details.rate" label="传送/获取/S" width="100"></el-table-column>
      <el-table-column prop="message_stats.deliver_no_ack_details.rate" label="应答/S" width="100"></el-table-column>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      queuesdata: [],
      qdata: []
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      setTimeout(this.connectfresh(), 3000)
    })
  },
  methods: {
    connectfresh() {
      this.axios.get('/api/queues')
          .then((response) => {
            this.queuesdata = response.data
            this.qdata = this.queuesdata
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
  }
};
</script>

<style lang="css">
</style>
