<template lang="html">
  <el-row>
    <el-table :data="nodedata" border style="width: 80%">
       <el-table-column prop="name" label="名称" width="180"></el-table-column>
       <el-table-column prop="price" label="文件描述" width="180">12</el-table-column>
       <el-table-column prop="sockets_used" label="Socket进程" width="180"></el-table-column>
       <el-table-column prop="proc_used" label="Erlang进程" width="180"></el-table-column>
       <el-table-column prop="mem_used" label="内存" width="180"></el-table-column>
       <el-table-column prop="disk_free_limit" label="磁盘空间" width="180"></el-table-column>
       <el-table-column prop="name" label="运行时间"></el-table-column>
       <el-table-column prop="name" label="类型"></el-table-column>
    </el-table>
    <button type="button" @click="getnode()">刷新</button>
    <p></p>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      nodedata: [],
      apiUrl: ''
    };
  },
  computed: {},
  attached() {},
  methods: {
    getnode() {
      this.axios.get('/api/vhosts')
          .then((response) => {
            console.log(response.data)
          })
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
