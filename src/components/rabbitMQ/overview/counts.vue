<template lang="html">
<el-tabs type="card" id="queued_card">
  <el-tab-pane label="整体统计">
    <el-row id='row'>
      <el-button class="aa" type="primary">连接：{{data.connects}} 个</el-button>
      <el-button class="aa" type="primary">通道：{{data.channels}} 个</el-button>
      <el-button class="aa" type="primary">交换器：{{data.ex}} 个</el-button>
      <el-button class="aa" type="primary">队列：{{data.qu}} 个</el-button>
      <el-button class="aa" type="primary">用户：{{data.consumer}} 个</el-button>
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
      data
    }
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
</style>
