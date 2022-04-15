<template>
    <div id="left">
        <h2>我是子组件</h2>
        <p>{{ user }}: {{ age }}</p>
        <p>{{ str }}</p>
        <button @click='output'>输出</button>
        <Mycount :init='9'></Mycount>
    </div>
</template>
<style scoped>
    #left {
        flex: 1;
        /* font-size: 20px; */
        /* width: 200px; */
        height: 500px;
        background-color: dodgerblue;
    }
</style>
<script>
// 调用传值中间文件
import bus from '../eventbus'
export default {
    props:['age','user'],
    data(){
        return {
            str:'你好我要过来了'
        }
    },
    methods:{
        // 调用$emit()方法 输出方
        output(){
            bus.$emit('share',this.str)
}    }
}
</script>