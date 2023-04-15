<template>
    <div class="mall-admin-system">
      <!-- 顶部导航栏 -->
      <el-header height="80px">
        <div class="logo"></div>
        <div class="user-info">{{userInfo.username}}</div>
        <div class="logout">
          <el-button type="primary" @click="logout">退出登录</el-button>
        </div>
      </el-header>
      <!-- 页面布局 -->
      <el-container style="height: calc(100vh - 80px);">
        <!-- 侧边栏 -->
        <el-aside width="200px">
          <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" @select="handleSelect">
            <!-- 二级菜单 -->
            <el-submenu index="product">
              <template slot="title">
                <i class="el-icon-goods"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item index="ProductList">商品列表</el-menu-item>
              <el-menu-item index="ProductAdd">新增商品</el-menu-item>
            </el-submenu>
            <el-menu-item index="order">
              <i class="el-icon-s-order"></i>
              <span>订单管理</span>
            </el-menu-item>
            <el-menu-item index="user">
              <i class="el-icon-user"></i>
              <span>用户管理</span>
            </el-menu-item>
            <el-menu-item index="data-analysis">
              <i class="el-icon-data-analysis"></i>
              <span>数据统计</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
  
        <!-- 主体区域 -->
        <el-main>
          <router-view></router-view>
          <!-- 这是一个内容块的测试 -->
        </el-main>
  
      </el-container>
    </div>
  </template>
  
  <script>
//   import index from '@/Order/index.vue'
  export default {
    name: 'Order',
    // components:{
    //     index
    // },
    data() {
      return {
        activeMenu: 'order',//激活的菜单项
        userInfo: {
          username: 'admin'
        }
      }
    },
    methods: {
      handleSelect(index) {
        this.activeMenu = index
        this.$router.push('/' + index)
      },
      logout() {
      // 清除本地存储的isLoggedIn信息并跳转到登录页面
      localStorage.removeItem('isLoggedIn')
      this.$router.push({ path: '/' })
      }
    }
  }
  </script>
  
  <style>
  .mall-admin-system {
    height: 100vh;
  }
  .el-header{
    background-color: darkgray;
  }
  .el-main{
    background-color: rgb(211, 204, 193);
  }
  .logo {
    width: 120px;
    height: 80px;
    background-image: url(../assets/logo.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    float: left;
    margin-right: 20px;
  }
  
  .user-info {
    float: left;
    margin-right: 10px;
    line-height: 80px;
  }
  
  .logout {
    float: right;
    line-height: 80px;
  }
  
  .el-aside {
    border-right: 1px solid #e6e6e6;
  }
  
  .el-menu-vertical-demo {
    width: 100%;
    margin-top: 20px;
  }
  </style>