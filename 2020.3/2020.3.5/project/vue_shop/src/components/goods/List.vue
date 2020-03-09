<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="queryinfo.query" clearable @clear="getGoodsList">
            <el-button slot="append" icon="el-icon-search" @click="handleCurrentChange(1);getGoodsList"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="goAddpage">添加商品</el-button>
        </el-col>
      </el-row>
      <!-- table表格区域 -->
      <el-table :data="goodslist" border stripe>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column label="商品名称" prop="goods_name"></el-table-column>
        <el-table-column
          label="商品价格"
          width="90px"
          prop="goods_price"
          :formatter="(row)=>{return '￥' + row.goods_price}"
        ></el-table-column>
        <el-table-column
          label="商品重量"
          width="120px"
          prop="goods_weight"
          :formatter="(row)=>{return row.goods_weight + 'g'}"
        ></el-table-column>
        <el-table-column label="创建时间" width="120px" prop="add_time">
          <template v-slot="scope">{{scope.row.add_time | dateFormat}}</template>
        </el-table-column>
        <el-table-column label="操作" width="200px" v-slot="scope">
          <template>
            <el-button size="mini" type="primary" icon="el-icon-edit">编辑</el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete" @click="removeById(scope.row.goods_id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryinfo.pagenum"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="queryinfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        background
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 查询参数对象
      queryinfo: {
        query: '',
        pagenum: 1,
        pagesize: 10
      },
      goodslist: [],
      total: 0
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    // 根据分页获取对应的商品列表
    async getGoodsList() {
      const { data: res } = await this.$http.get('/api/private/v1/goods', {
        params: this.queryinfo
      })
      if (res.meta.status !== 200) {
        return this.$message.error('获取商品列表失败！')
      }
      this.$message.success('获取商品列表成功')
      console.log(res.data)
      this.goodslist = res.data.goods
      this.total = res.data.total
    },
    handleSizeChange(newSize) {
      this.queryinfo.pagesize = newSize;
      this.getGoodsList();
    },
    handleCurrentChange(newPage) {
      this.queryinfo.pagenum = newPage;
      this.getGoodsList();
    },
    async removeById(id) {
      const ConfirmResult = await this.$confirm('此操作将永久删除该商品，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if (ConfirmResult !== 'confirm') {
        return this.$message.info('已取消删除');
      }
      const { data: res } = await this.$http.delete(`/api/private/v1/goods/${id}`)
      // console.log(res.meta.status)
      if (res.meta.status !== 200) {
        return this.$message.error('删除失败');
      }
      this.$message.success('删除成功')
      this.getGoodsList()
    },
    goAddpage() {
      this.$router.push('/goods/add');
    }
  }
}
</script>

<style lang="less" scoped>
</style>
