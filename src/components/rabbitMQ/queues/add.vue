<template lang="html">
  <el-row>
    <el-col :span="10">
    <el-form label-width="180px" :model="formLabelAlign">

      <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>

      <el-form-item label="持久性" placeholder="请选择">
        <el-select v-model="formLabelAlign.durability">
          <el-option label="Durable" value="Durable"></el-option>
          <el-option label="Transient" value="Transient"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="节点">
        <el-select v-model="formLabelAlign.node" placeholder="请选择">
          <el-option label="rabbit@RedisSlave1" value="rabbit@RedisSlave1"></el-option>
          <el-option label="rabbit@RedisSlave2" value="rabbit@RedisSlave2"></el-option>
          <el-option label="rabbit@RedisSlave3" value="rabbit@RedisSlave3"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="自动删除">
        <el-select v-model="formLabelAlign.delte" placeholder="请选择">
          <el-option label="Yes" value="Yes"></el-option>
          <el-option label="No" value="No"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="信息 TTL">
        <el-input v-model="formLabelAlign.ttl"></el-input>
      </el-form-item>

      <el-form-item label="自动失效">
        <el-input v-model="formLabelAlign.expire"></el-input>
      </el-form-item>

      <el-form-item label="最大长度">
        <el-input v-model="formLabelAlign.length"></el-input>
      </el-form-item>

      <el-form-item label="密钥交换">
        <el-input v-model="formLabelAlign.exchange"></el-input>
      </el-form-item>

      <el-form-item label="密钥路由键">
        <el-input v-model="formLabelAlign.key"></el-input>
      </el-form-item>

      <el-form-item label="条件">
        <el-input v-model="formLabelAlign.Arguments"></el-input>
      </el-form-item>
    </el-form>
  </el-col>
  <el-col :push='2'>
    <el-button>添加队列</el-button>
  </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      formLabelAlign: {
         name: '',
         durability: '',
         node: '',
         delte: ''
       }
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
el-input {
  width: 500px;
}
</style>
