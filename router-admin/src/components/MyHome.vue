<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <MyAside></MyAside>
    </el-aside>
    <el-container>
      <el-header>
        <MyHeader></MyHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 头部区域组件
import MyHeader from './subcomponents/MyHeader.vue'
// 左侧边栏组件
import MyAside from './subcomponents/MyAside.vue'

export default {
  name: 'MyHome',
  // 注册组件
  components: {
    MyHeader,
    MyAside
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color:rgb(149, 181, 149);
  border-bottom: 1px solid rgb(51, 51, 51);
}
.el-main {
  padding:0;
}
</style>
