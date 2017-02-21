<template lang="html">
  <el-row>
    <el-col :span="10">
    <el-form label-width="180px" :model="formLabelAlign1">

      <el-form-item label="名称">
        <el-input v-model="formLabelAlign1.name"></el-input>
      </el-form-item>

      <el-form-item label="持久性" placeholder="请选择">
        <el-select v-model="formLabelAlign1.durable">
          <el-option label="Durable" value="Durable"></el-option>
          <el-option label="Transient" value="Transient"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="节点">
        <el-select v-model="formLabelAlign1.node" placeholder="请选择">
          <el-option label="rabbit@RedisSlave1" value="rabbit@RedisSlave1"></el-option>
          <el-option label="rabbit@RedisSlave2" value="rabbit@RedisSlave2"></el-option>
          <el-option label="rabbit@RedisSlave3" value="rabbit@RedisSlave3"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="自动删除">
        <el-select v-model="formLabelAlign1.auto_delete" placeholder="请选择">
          <el-option label="Yes" value="Yes"></el-option>
          <el-option label="No" value="No"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="信息 TTL">
        <el-input v-model="formLabelAlign1.ttl"></el-input>
      </el-form-item>

      <el-form-item label="自动失效">
        <el-input v-model="formLabelAlign1.expire"></el-input>
      </el-form-item>

      <el-form-item label="最大长度">
        <el-input v-model="formLabelAlign1.length"></el-input>
      </el-form-item>

      <el-form-item label="密钥交换">
        <el-input v-model="formLabelAlign1.exchange"></el-input>
      </el-form-item>

      <el-form-item label="密钥路由键">
        <el-input v-model="formLabelAlign1.key"></el-input>
      </el-form-item>

      <el-form-item label="条件">
        <el-input v-model="formLabelAlign1.arguments"></el-input>
      </el-form-item>
    </el-form>
  </el-col>
  <el-col :push='2'>
    <el-button type="primary" @click="addqueues()">添加队列</el-button>
  </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      formLabelAlign1: {
         name: '',
         durable: '',
         node: '',
         auto_delete: '',
         arguments: ''
       }
    };
  },
  methods: {
    addqueues() {
      this.$http.put('/api/queues/%2f'+'/'+ this.formLabelAlign1.name)
          .then((response) => {
            this.$message({
              type: 'success',
              message: '添加成功！'
            })
          })
    }
  },
  components: {}
};
</script>

<style lang="css">
el-input {
  width: 500px;
}
</style>
