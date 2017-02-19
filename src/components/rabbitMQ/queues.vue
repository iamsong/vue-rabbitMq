<template lang="html">
<el-row>
  <h1 style="text-align:left">队列</h1>
  <el-collapse v-model="activeNames" id="queues" >
    <el-collapse-item title="所有队列" name="1" style="text-align:left">
      <queues></queues>
    </el-collapse-item>
    <el-collapse-item title="添加队列" name="2" style="text-align:left">
      <add></add>
    </el-collapse-item>
  </el-collapse>
</el-row>
</template>

<script>
import queues from './queues/queues'
import add from "./queues/add"
export default {
  data() {
    return {
      activeNames: ['1','2']
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {
    queues,
    add
  }
};
</script>

<style lang="css">
</style>
