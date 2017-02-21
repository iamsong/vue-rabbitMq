<template lang="html">
<el-tabs type="card" id="queued_card">
  <el-tab-pane label="整体统计">
    <el-row id='row'>
      <el-button class="aa" id="c1">连接：{{data.connections}} 个</el-button>
      <el-button class="aa" id="c2">通道：{{data.channels}} 个</el-button>
      <el-button class="aa" id="c3">交换器：{{data.exchanges}} 个</el-button>
      <el-button class="aa" id="c4">队列：{{data.queues}} 个</el-button>
      <el-button class="aa" id="c5">用户：{{data.consumers}} 个</el-button>
   </el-row>
 </el-tab-pane>
</el-tabs>
</template>

<script>

var data = {
  connects: 10672,
  channels: 26,
  ex: 8,
  qu: 2,
  consumer: 7
}
export default {
  data() {
    return {
      data: [],
      countsdata: [],
    }
  },
  mounted: function() {
    this.$nextTick(function() {
        this.axios.get('/api/overview')
            .then((response) => {
              this.countsdata = response.data
              this.data = this.countsdata.object_totals
            })

    })
  },
  methods: {

  }
};

</script>

<style lang="css" scoped>
.aa {
  width: 200px;
  height: 40px;
  margin-top: 25px;
  margin-right: 10px;
}
#row {
  height: 100px;
}
#c1,#c2,#c3,#c4,#c5 {
  background: #ccffcc;
}
</style>
