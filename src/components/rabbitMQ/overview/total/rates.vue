<template lang="html">
  <el-tabs type="card" id="rates_card">
    <el-tab-pane label="信息比率">
    <el-row :gutter="5">
      <!--准备消息-->
      <el-col :span="3">
        <el-button class="rates_button" id="ac">
        <div class="block">
          <span class="demonstration">发布</span>
          <h1>{{pd.rate}}</h1>
          <span class="demonstration">msg/s</span>
        </div>
        </el-button>
      </el-col>

      <el-col :span="3">
        <el-button class="rates_button" id="ab">
        <div class="block">
          <span class="demonstration">传送</span>
          <h1>{{dd.rate}}</h1>
          <span class="demonstration">msg/s</span>
        </div>
        </el-button>
      </el-col>
      <button type="button" name="button" @click="ratesfr()" id="ceshi" style="display:none">ceshi</button>
    </el-row>
    </el-tab-pane>
  </el-tabs>
</template>

<script>




export default {
  data() {
    return {
      ratesdata: [],
      rdata: [],
      pd: [],
      dd: []
    };
  },
  mounted: function() {
    this.$nextTick(function() {
    // setInterval( this.ratesfr(), 5000)
    setInterval(function() {
      document.getElementById("ceshi").click();
    }, 5000)
    // this.ratesfr()
    //
    // this.con()
    })
  },
  methods: {
    ratesfr() {
      this.axios.get('/api/overview')
          .then((response) => {
            this.ratesdata = response.data
            this.rdata = this.ratesdata.message_stats
            this.pd = this.rdata.publish_details
            this.dd = this.rdata.deliver_get_details
          })
      //setTimeout('ratesfr()', 5000)
    }
  }
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
#ac, #ab {
  background: #ccffcc;
}
</style>
