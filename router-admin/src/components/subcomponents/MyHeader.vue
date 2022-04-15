<template>
  <header>
    <div class="title">
      楼宇可视化系统
    </div>
    <div class="r-pic">
      <el-dropdown trigger="hover" szie="mini" @command="logout">
        <span>
          <img src="../../assets/dog.png" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command=1>个人主页</el-dropdown-item>
          <el-dropdown-item command=2>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
  data() {
    return {}
  },
  methods: {
    logout(command) {
     
      if (command == 1) {
        this.$router.push('/home')
      } else if (command == 2) 
      {
        // 1. 清空 token
        sessionStorage.removeItem('token')
        // 2. 跳转到登录页面
        this.$router.push('/login')
      }
    },
  },
}
</script>
<style lang="less" scoped>
.title {
  display: inline-block;
  width: 300px;
  height: 60px;
  position: absolute;
  top: 1px;
  left: 50%;
  // padding-top: 10px;
  text-align: center;
  line-height: 60px;
  color: rgb(6, 6, 6);
  font-size: 20px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.r-pic {
  display: inline-block;
  position: absolute;
  right: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
}
img {
  width: 100%;
}
</style>
