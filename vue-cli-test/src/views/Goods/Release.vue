<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>发布商品</span>
      </div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="分类">
          <el-select v-model="form.cate_1st" placeholder="请选择活动区域">
            <el-option :label="item.name" v-for="(item, index) in cate_1st_options" :value="item.id" :kye="item.id"></el-option>
          </el-select>
          <el-select v-model="form.cate_2nd" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.cate_3rd" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { Category } from '@/api/index'
export default {
  name: 'Release',
  data() {
    return {
      form: {
        cate_1st: '', // 保存一级分类选则后的值  ----id
        cate_2nd: '',
        cate_3rd: ''
      },
      cate_1st_options: [], // 一级分类的所有数据
      cate_2nd_options: [],
      cate_3rd_options: []
    }
  },
  created() {
    this.handelCate()
  },
  methods: {
    async handelCate() {
      let data = await this.getCateList(1)
      this.cate_1st_options = data
    },
    async getCateList(id) {
      let { status, data } = await Category.list({ pId: id })
      if (!status) {
        this.$message.error('分类信息获取失败')
        return false
      }
      return Promise.resolve(data)
    }
  }
}
</script>

<style>
</style>