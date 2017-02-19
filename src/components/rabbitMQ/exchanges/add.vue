<template lang="html">
  <el-row>
    <el-col :span="10">
    <el-form label-width="180px" :model="formLabelAlign">

      <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>

      <el-form-item label="类型" placeholder="请选择">
        <el-select v-model="formLabelAlign.durability">
          <el-option label="topic" value="topic"></el-option>
          <el-option label="fanout" value="fanout"></el-option>
          <el-option label="direct" value="direct"></el-option>
          <el-option label="headers" value="headers"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="持久性" placeholder="请选择">
        <el-select v-model="formLabelAlign.durability">
          <el-option label="Durable" value="Durable"></el-option>
          <el-option label="Transient" value="Transient"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="内部">
        <el-select v-model="formLabelAlign.node" placeholder="请选择">
          <el-option label="Yes" value="Yes"></el-option>
          <el-option label="No" value="No"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="自动删除">
        <el-select v-model="formLabelAlign.delte" placeholder="请选择">
          <el-option label="Yes" value="Yes"></el-option>
          <el-option label="No" value="No"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Alternate交换">
        <el-input v-model="formLabelAlign.exchange"></el-input>
      </el-form-item>

      <el-form-item label="条件">
        <el-input v-model="formLabelAlign.Arguments"></el-input>
      </el-form-item>
    </el-form>
  </el-col>
  <el-col :push="2">
    <el-button type="primary">添加交换器</el-button>
  </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      formLabelAlign:''
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
</style>
