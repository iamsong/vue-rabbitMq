<template lang="html">
  <el-tabs type="card" id="rates_card">
    <el-tab-pane label="信息比率">
    <el-row :gutter="5">
      <!--准备消息-->
      <el-col :span="3">
        <el-button class="rates_button" type="primary">
        <div class="block">
          <span class="demonstration">发布</span>
          <h1>36</h1>
          <span class="demonstration">msg/s</span>
        </div>
        </el-button>
      </el-col>

      <el-col :span="3">
        <el-button class="rates_button" type="primary">
        <div class="block">
          <span class="demonstration">传送</span>
          <h1>136</h1>
          <span class="demonstration">msg/s</span>
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
.rates_button {
  width: 200px;
  height: 120px;
}
#rates_card {
  margin-top: 25px;
  margin-bottom: 20px;
}
</style>
