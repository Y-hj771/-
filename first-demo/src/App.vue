<template>
  <div id="app">
    <h1>
      hahaha    ---{{ number }}
    </h1>
    <div id="one">
      <!-- <button @click="conObj=left">切换</button>
       <button @click="conObj=right">切换</button> -->
        <!-- 3.以标签形式，使用注册好的组件 -->
      <left :age="age" :user="user"></left>
      <right @change="tb"></right>
     <!-- <component :is="left"></component> -->
      
    </div>
    
   
  </div>
</template>

<script>
// 1.导入需要使用的组件
import left from '@/components/left.vue'
import right from '@/components/right.vue'
// 默认导出 固定写法
  export default {
    // 注意：vue组件中的data必须是函数 return{}可以定义数据
    data:function(){
      return {
        username:'sss',
        user:'yhj',
        age:22,
        number:0
      }
    },
    methods:{
      // val 是子组件中传过来的this.num
      tb(val){
        this.number = val
      }
    },
    // 2.注册组件
    components:{
      left,
      right
    }
  }
</script>

<style>
  #app {
    text-align: center;
    /* justify-content: space-between; */
    height: 2000px;
    background: firebrick;
    padding: 20px;
  }
  #one {
    display: flex;
  }
  
</style>
