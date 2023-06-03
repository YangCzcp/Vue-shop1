<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
 
    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <el-row>
        <el-col :span="8">
          <el-input placeholder="请输入内容" >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" >添加商品</el-button>
        </el-col>
      </el-row>
 
      <!-- table表格区域 -->
      <el-table>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="商品名称" prop="goods_name"></el-table-column>
        <el-table-column label="商品价格(元)" prop="goods_price" width="95px"></el-table-column>
        <el-table-column label="商品重量" prop="goods_weight" width="80px"></el-table-column>
        <el-table-column label="创建时间" prop="add_time" width="140px">
          <template slot-scope="scope">
            <!-- {{}} -->
       </template>
      </el-table-column>
        <el-table-column label="操作" width="130px">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini" ></el-button>
          </template>
        </el-table-column>
        
      </el-table>

      

  
    
 

 
      <!-- 分页区域 -->
      <el-pagination>
      </el-pagination>
    </el-card>
  </div>
</template>
 
<script>

export default {
  data() {
    return {
     
    }
  },
  created() {
   
  },
  methods: {
    
  }

}
</script>
 
<style lang="less" scoped>

  .box-card {
    // width: 480px;
    margin: 15px auto;
  }
</style>