<template>
  <div>
    <!-- <iframe src="https://sugar.aipage.com/dashboard/8758b057dfe51472b39320b346e23377" style="border:none" width="1720" height="876"   id="sugar-report"></iframe> -->
    <el-card class="box-card">
      <div slot="header">
        <span>转换空间</span>
       
      </div>
      <div  class="text item">
          <el-button type="primary">开灯</el-button>
          <el-button type="info">关灯</el-button>
      </div>
    </el-card>
      
     

   
    
  </div>
</template>

<script>

export default {
  name: 'MyLight',
}
</script>

<style lang="less" scoped>
// div {
//   width: 1720px;
//   height: 876px;
//   display: flex;
//   // padding: 20px;
//   justify-content: center;
//   // align-items: center;
// }
span {
  margin-left: 50%;
  text-align: center;
  font-size: 20px;
  color: goldenrod;
}
</style>