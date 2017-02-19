<template lang="html">
<el-tabs type="card" id="queued_card">
  <el-tab-pane label="队列消息">
  <el-row :gutter="20">
    <!--准备消息-->
    <el-col :span="3">
      <el-button class="queued_button" type="primary">
      <div class="block">
        <span class="demonstration">准备消息</span>
        <h1>36</h1>
      </div>
      </el-button>
    </el-col>
    <!--未应答状态的消息-->
    <el-col :span="3">
      <el-button class="queued_button" type="primary">
      <div class="block">
        <span class="demonstration">未应答状态的消息</span>
        <h1>136</h1>
      </div>
      </el-button>
    </el-col>
    <!--总共-->
    <el-col :span="3">
      <el-button class="queued_button" type="primary">
      <div class="block">
        <span class="demonstration">总共</span>
        <h1>56</h1>
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
.queued_button {
  width: 200px;
  height: 100px;
}
#queued_card {
  margin-top: 25px;
  margin-bottom: 20px;
}
</style>
