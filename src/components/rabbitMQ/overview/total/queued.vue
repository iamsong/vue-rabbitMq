<template lang="html">
<el-tabs type="card" id="queued_card">
  <el-tab-pane label="队列消息">
  <el-row :gutter="20">
    <!--准备消息-->
    <el-col :span="3">
      <el-button class="queued_button" id="q1">
      <div class="block">
        <span class="demonstration">准备消息</span>
        <h1>{{qdata.messages_ready}}</h1>
      </div>
      </el-button>
    </el-col>
    <!--未应答状态的消息-->
    <el-col :span="3">
      <el-button class="queued_button" id="q2">
      <div class="block">
        <span class="demonstration">未应答状态的消息</span>
        <h1>{{qdata.messages_unacknowledged}}</h1>
      </div>
      </el-button>
    </el-col>
    <!--总共-->
    <el-col :span="3">
      <el-button class="queued_button" id="q3">
      <div class="block">
        <span class="demonstration">总共</span>
        <h1>{{qdata.messages}}</h1>
      </div>
      </el-button>
    </el-col>
  </el-row>
  </el-tab-pane>
</el-tabs>
</template>

<script>
export default {
  data() {
    return {
      qdata:[],
      queuedata: []
    };
  },
  mounted: function() {
    this.$nextTick(function() {
        this.axios.get('/api/overview')
            .then((response) => {
              this.queuedata = response.data
              this.qdata = this.queuedata.queue_totals
            })
    })
  }
};
</script>

<style lang="css">
.queued_button {
  width: 200px;
  height: 100px;
}
#queued_card {
  margin-top: 25px;
  margin-bottom: 20px;
}
#q1,#q2,#q3 {
  background: #ccffcc;
}
</style>
