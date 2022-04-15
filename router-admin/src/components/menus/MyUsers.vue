<template>
  <el-row class="home" :gutter="20" style="margin-left:0;margin-right:0">
    <el-col :span="8" style="margin-top:20px;">
      <el-card class="one" shadow="hover">
        <div class="user">
          <img src="../../assets/dog.png" />
          <div class="userinfo">
            <p class="name">袁豪杰</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
      </el-card>
      <el-card class="two" style="margin-top:80px;height:460px">
        <p class="dian">居民用电量</p>
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <el-col :span="16" style="margin-top:20px;">
      <el-row id="y">
        <el-card style="height:280px">
          <div style="height:280px" ref="echarts"></div>
        </el-card>
      </el-row>

      <el-row :gutter="20" style="margin-left:160px">
        <p class="rd">公告栏</p>
        <el-col :span="6">
          <div id="yy">
            <el-card body-style="background-color:#E6A23C;border-radius:10px">
              <i class="el-icon-message-solid"></i>
              <div class="detail">
                <p class="txt">消防铃警报</p>
                <p class="num">数量:20次</p>
              </div>
            </el-card>
          </div>
          <el-card body-style="background-color:#409EFF;border-radius:10px">
            <i class="el-icon-s-order"></i>
            <div class="detail">
              <p class="txt">水质检测</p>
              <p class="num">数量:3次</p>
            </div>
          </el-card>
        </el-col>

        <el-col :span="6">
          <div id="yy">
            <el-card body-style="background-color:#909399;border-radius:10px">
              <i class="el-icon-delete-solid"></i>
              <div class="detail">
                <p class="txt">垃圾桶消毒</p>
                <p class="num">数量:10次</p>
              </div>
            </el-card>
          </div>
          <el-card
            body-style="background-color:#67C23A
        ;border-radius:10px"
          >
            <i class="el-icon-s-flag"></i>
            <div class="detail">
              <p class="txt">植物养护</p>
              <p class="num">数量:5次</p>
            </div>
          </el-card>
        </el-col>

        <el-col :span="6">
          <div id="yy">
            <el-card
              body-style="background-color:#F56C6C
        ;border-radius:10px"
            >
              <i class="el-icon-question"></i>
              <div class="detail">
                <p class="txt">电器故障上报</p>
                <p class="num">数量:10台</p>
              </div>
            </el-card>
          </div>
          <el-card
            body-style="background-color:rgb(146, 126, 165)
        ;border-radius:10px"
          >
            <i class="el-icon-s-custom"></i>
            <div class="detail">
              <p class="txt">小区常住人口</p>
              <p class="num">数量:890人</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from '../../../api/data.js'
import * as echarts from 'echarts'
export default {
  name: 'MyUser',
  data() {
    return {
      tableData: [],
      tableLabel: {
        name: '户主姓名',
        weekUse: '周用电量(度)',
        mouthUse: '月用电量(度)',
        assessment: '评估',
      },
    }
  },
  mounted() {
    getData().then(res => {
      const { code,data } = res.data
      if( code === 20000 ){
        this.tableData = data.tableData
        const order = data.orderData
        const xData = order.dataX
        const keyArray = Object.keys(order.data[0])
        const series= []
        keyArray.forEach(key => {
            series.push({
              name: key,
              data: order.data.map(item => item[key]),
              type: 'line'
            })
        })
        const option = {
          xAxis: {
              data: xData
          },
          yAxis: {
            name:'使用次数'
          },
          legend: {
              data: keyArray
          },
          series
          }
          const E = echarts.init(this.$refs.echarts)
          E.setOption(option)
      }

      console.log(res);
    })
    // this.$http.get('http://www.liulongbin.top:3006/api/get').then((response) => {
    //   console.log(response.data)
    // })

  },
}
</script>
<style lang="less" scoped>
.rd {
  margin-left: 313px;
}
#y .el-card {
  width: 1000px;
  margin-bottom: 60px;
  margin-left: 80px;
  border-radius: 60px;
}
.detail {
  text-align: center;
}
#yy {
  margin-bottom: 10px;
}
.el-table {
  background-color: gray;
}
.dian {
  width: 100px;
  height: 40px;
  position: absolute;
  top: 20px;
  left: 215px;
  color: aqua;
}
.one {
  border-radius: 40px;
  background: url('../../assets/logo1.png');
}
.two {
  position: relative;
  border-radius: 40px;
  background-color: rgb(169, 142, 74);
  padding-top: 90px;
  box-sizing: border-box;
}
img {
  margin-left: 50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.userinfo {
  text-shadow: 20px 17px salmon;
  width: 200px;
  height: 100px;
  // background-color: firebrick;
  text-align: center;
}
p {
  font-size: 20px;
  color: rgb(185, 45, 122);
}
</style>
