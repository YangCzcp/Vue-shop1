<template>
    <div class="login"> 
   <el-form :model="form" ref="form" :rules="rules" label-width="80px" class="demo-ruleForm"> 
      <el-form-item label="账号" prop="username"> 
        <el-input v-model="form.username" placeholder="请在这里输入用户名"></el-input> 
        </el-form-item>
      <el-form-item label="密码" prop="password"> 
        <el-input type="password" v-model="form.password" placeholder="请在这里输入密码"></el-input> 
      </el-form-item> 
  
   <el-form-item> 
      <el-button type="primary" @click="login">登录</el-button>
      <el-button @click="resetForm('form')">重置</el-button> 
    </el-form-item>
  
    </el-form> 
   </div> 
   </template>
  
    <script> 
   export default {
    name:"Login" ,
        data() { 
          return { 
            form: { 
              username: '',
              password: '' 
            }, 
        rules: { 
          username: [ 
            { required: true, message: '请输入用户名', trigger: 'blur' },
            {pattern: /^[^\u4e00-\u9fa5]+$/, message: '用户名不能包含中文', trigger: 'blur' }
          ],
          password: [ 
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 20, message: '密码长度应为6~20位', trigger: 'blur' } 
              ] 
            }, 
            defaultUsername: 'admin', 
            defaultPassword: '123456' 
            } 
          }, 
        methods: { 
          login() { // 登录事件处理器
            if (!this.form.username || !this.form.password) {
      this.$message.error('请输入用户名和密码');//未输入用户名跟密码
    } else if (
      this.form.username === this.defaultUsername &&
      this.form.password === this.defaultPassword
    ) {
      localStorage.setItem('isLoggedIn', this.form.username);//本地存储
      // localStorage.setItem('token',this.form.password)
      this.$router.push('/success'); //跳转
      this.$message({
            message: '登录成功 ,欢迎你',
            type: 'success',
            // duration:2000
          })
    } else {
      this.$message.error('用户名或密码错误');
    }
           },
            resetForm(formName) { // 表单重置处理器
              this.$refs[formName].resetFields(); // 重置
            }
           }
          } 
            </script>
  
    <style scoped lang="less"> 
    // less设置样式
    .login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh; /* 视口高度 */
        .demo-ruleForm {
           width: 400px; 
          }
       } 
       </style>