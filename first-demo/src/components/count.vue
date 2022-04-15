<template>
   <div>
        <p>我是全局组件</p>
        {{ count }}
        <br>
    <button @click='add'>+1</button>
   </div>
</template>
<script>
export default {
    // props 是'自定义属性'，为当前组件指定初始值
    // props 的值是只读的 不可以修改
    // props:['init'],
    props:{
        init:{
            // 如果外界使用Count 组件的时候，没有传递init属性，则默认值为0
            default:0,
            // init的值类型 Number数字型
            type:Number,
            // 必填项校验
            required:true
        }
    },

data(){
    return {
        count:this.init
    }
},
methods:
{
    add:function(){
        this.count+=1;
    }
}
}
</script>