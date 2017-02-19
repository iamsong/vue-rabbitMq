<template lang="html">
  <div class="">
    <div id="main" style="width: 600px;height:400px;"></div>
    <button type="button" name="button" v-on:click.native="inita()">chushi</button>
  </div>

</template>

<script>
import echarts from "echarts"
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {
  },
  attached() {},
  methods: {
    inita: function() {
      var mychart = echarts.init(document.getElementById('main'));
    // 绘制图表
    mychart.setOption({
    title: { text: 'ECharts 入门示例' },
    tooltip: {},
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
    });
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
