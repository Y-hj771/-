<template>
  <div class="login-container">
    <div class="login-title">智慧楼宇可视化系统登陆界面</div>
    <div class="login-context">
      <!-- 头部头像 -->
      <div class="login-logo">
        <img src="../assets/dog.png" alt="" />
      </div>

      <!-- form表单 -->
      <div class="login-input">
        <div id="ipt">
          <el-input
            prefix-icon="el-icon-user"
            placeholder="请输入用户名"
            v-model="username"
            clearable
          >
          </el-input>
        </div>

        <el-input
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          v-model="password"
          show-password
          clearable
        ></el-input>
        <div id="btn1">
          <el-button type="primary" @click="login">登陆</el-button>
        </div>
        <div id="btn2">
          <el-button @click="reset">重置</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    reset() {
      this.username = ''
      this.password = ''
    },
    login() {
      
      if (this.username === 'yhj' && this.password === '991130') {
        // 登录成功
        // 1. 存储 token
        sessionStorage.setItem('token', 'Bearer xxxx')
        // 2. 跳转到后台主页
        this.$router.push('/home')
        // localStorage,removeItem('token')
        // localStorage.setItem('token','1')
      } else {
        // 登录失败
        alert('密码错误')
        this.password = ''
        localStorage.removeItem('token')
      }
    },
  },
}
</script>
<style lang="less" scoped>
.login-container {
  height: 100%;
  background-color: rgb(43, 75, 107);
}
.login-context {
  width: 450px;
  height: 300px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: -1px 1px 20px seashell;
}
.login-title {
  width: 600px;
  height: 50px;
  font-size: 30px;
  text-align: center;
  margin: auto;
  color: aqua;
  text-shadow: 0px 0px 20px silver;
}
#ipt {
  width: 250px;
  height: 40px;
  margin-bottom: 20px;
}
.login-input {
  width: 250px;
  height: 100px;
  position: absolute;
  left: 102px;
  bottom: 106px;
}
.login-logo {
  position: absolute;
  width: 130px;
  height: 130px;
  top: -70px;
  left: 170px;
  // border-radius: 50%;
}
img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  box-shadow: 1px 1px 25px forestgreen;
}
#btn1 {
  float: left;
  margin-right: 10px;
  margin-top: 20px;
  margin-left: 40px;
}
#btn2 {
  margin-top: 20px;
}
</style>
