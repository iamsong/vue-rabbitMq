<template lang="html">
<el-row>
  <h1 class="exchanges">交换器</h1>
  <el-collapse v-model="activeNames" id="queues">
    <el-collapse-item title="所有交换器" name="1" class="exchanges">
      <exchanges></exchanges>
    </el-collapse-item>
    <el-collapse-item title="添加交换器" name="2" class="exchanges">
      <add></add>
    </el-collapse-item>
  </el-collapse>
</el-row>
</template>

<script>
import exchanges from './exchanges/table'
import add from './exchanges/add'
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
    exchanges,
    add
  }
};
</script>

<style lang="css">
.exchanges {
  text-align: left;
}
</style>
