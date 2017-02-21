<template lang="html">
<el-row>
  <el-col style="width: 90%">
    <p id="showing_c">{{channelsdata.length}} 项(最多 100 项)</p>
  </el-col>
  <el-table :data="channelsdata" border style="width: 90%" :row-class-name="tableRowClassName">
    <!---->
    <el-table-column label=" " width="400">
      <el-table-column prop="name" label="通道" width="200"></el-table-column>
      <el-table-column prop="node" label="节点" width="200"></el-table-column>
    </el-table-column>
    <!--Details-->
    <el-table-column   label="详细" width="700">
      <el-table-column prop="user" label="用户名" width="150"></el-table-column>
      <el-table-column prop="mode" label="模式" width="100"></el-table-column>
      <el-table-column prop="prefetch_count" label="预读取" width="100"></el-table-column>
      <el-table-column prop="messages_unacknowledged" label="未应答" width="100"></el-table-column>
      <el-table-column prop="messages_unconfirmed" label="未确认" width="150"></el-table-column>
      <el-table-column prop="state" label="状态" width="100"></el-table-column>
    </el-table-column>
    <!--Message rates-->
    <el-table-column label="信息比率">
      <el-table-column prop="publish" label="发布" width="100"></el-table-column>
      <el-table-column prop="confirm" label="确认" width="100"></el-table-column>
      <el-table-column prop="message_stats.deliver_get_details.rate" label="投递/获取"></el-table-column>
      <el-table-column prop="message_stats.deliver_no_ack" label="应答" width="100"></el-table-column>
    </el-table-column>
  </el-table>
  <button type="button" name="button" id="tableid" @click="channelsrefresh()" style="display:none"></button>
<el-row>
</template>

<script>
export default {
  data() {
    return {
      channelsdata: []
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      setInterval(function() {
        document.getElementById("tableid").click();
      }, 5000)
    })
  },
  methods: {
    channelsrefresh() {
      this.axios.get('/api/channels')
          .then((response) => {
            this.channelsdata = response.data
          })
      // setTimeout(this.channelsrefresh(), 10000)
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
