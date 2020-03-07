<template>
  <div>
    <el-breadcrumb separator="/">
      <!-- 面包屑导航区域 -->
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
      <el-table :data="rightsList" border stripe>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column label="权限名称" prop="authName"></el-table-column>
        <el-table-column label="路径" prop="path"></el-table-column>
        <el-table-column label="权限等级" prop="level">
          <template v-slot="s">
            <el-tag type="" v-if="s.row.level === '0'">一级</el-tag>
            <el-tag type="success" v-else-if="s.row.level === '1'">二级</el-tag>
            <el-tag type="warning" v-else-if="s.row.level === '2'">三级</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 权限列表
      rightsList: []
    }
  },
  created() {
    this.getRightsList()
  },
  methods: {
    async getRightsList() {
      const { data: res } = await this.$http.get('/api/private/v1/rights/list');
      if (res.meta.status !== 200) {
        return this.$message.error('获取权限列表失败!')
      }
      this.rightsList = res.data;
      console.log(this.rightsList);
    }
  }
}
</script>
<style lang="less" scoped>

</style>
