<template lang="html">
<el-row>
  <h1 style="text-align:left">总览</h1>
  <el-collapse v-model="activeNames" id="collapse" type="primary">
    <!--Totals-->
    <el-collapse-item title="总计" name="1">
      <queued></queued>
      <rates></rates>
      <counts></counts>
    </el-collapse-item>
    <!--Nodes-->
    <el-collapse-item title="节点" name="3">
      <node></node>
    </el-collapse-item>
    <!--Ports-->
    <el-collapse-item title="端口与环境" name="4">
      <listening></listening>
      <p></p>
      <web></web>
    </el-collapse-item>
    <!--import/export-->
    <el-collapse-item title="输入/输出" name="5">

    </el-collapse-item>
  </el-collapse>
</el-row>
</template>

<script>
import queued from "./overview/total/queued"
import rates from "./overview/total/rates"
import counts from "./overview/counts"
import node from "./overview/node";
import listening from "./overview/Ports/listening";
import web from "./overview/Ports/web";

export default {
  data() {
    return {
      activeNames: ['1','2','3','4','5']
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {

  },
  components: {
    queued,
    rates,
    node,
    counts,
    listening,
    web
  }
};
</script>

<style lang="css" scoped>
#collapse {
  text-align: left;
}
</style>
