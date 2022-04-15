<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    
   
    text-color="black"
    background-color= "pink"
  >
    <router-link to="/home">
      <el-menu-item index="1">
      <i class="el-icon-s-home"></i>
      <span slot="title">个人主页</span>
    </el-menu-item>
    </router-link>
    <router-link to="/home/door">
    <el-menu-item index="2">
      <i class="el-icon-location"></i>
      <span slot="title">门禁系统</span>
    </el-menu-item></router-link>
    <router-link to="/home/lift">
      <el-menu-item index="3">
      <i class="el-icon-sort"></i>
      <span slot="title">电梯系统</span>
    </el-menu-item>
    </router-link>

    <router-link to="/home/light">
      <el-menu-item index="4">
      <i class="el-icon-s-opportunity"></i>
      <span slot="title">光感系统</span>
    </el-menu-item>
    </router-link>

    <router-link to="/home/info">
      <el-menu-item index="5">
      <i class="el-icon-s-custom"></i>
      <span slot="title">户主信息</span>
    </el-menu-item>
    </router-link>
    
  </el-menu>
</template>

<script>
export default {
  name: 'MyAside',
}
</script>

<style lang="less" scoped>
.el-menu {
  border: none;
}
a {
  text-decoration: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
  
}
</style>
