// mock数据模拟
import Mock from 'mockjs'
//图表数据
let List = []
export default {
  getStatisticalData: () => {
    //Mlock. Random.float产生随机数100到 8000之间保留小数最小e位最大0位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          指纹锁: Mock.Random.float(100, 800, 0, 0),
          楼道灯: Mock.Random.float(100, 800, 0, 0),
          电梯: Mock.Random.float(100, 800, 0, 0),
          街道路灯: Mock.Random.float(100, 800, 0, 0),
          家用电器: Mock.Random.float(100, 800, 0, 0),
          门禁刷卡机: Mock.Random.float(100, 800, 0, 0),
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 用电量
        tableData: [
          {
            name: '小王',
            weekUse: 80,
            mouthUse: 300,
            assessment: '正常',
          },
          {
            name: '小红',
            weekUse: 78,
            mouthUse: 290,
            assessment: '正常',
          },
          {
            name: '小张',
            weekUse: 51,
            mouthUse: 231,
            assessment: '良好',
          },
          {
            name: '小李',
            weekUse: 120,
            mouthUse: 500,
            assessment: '偏高',
          },
          {
            name: '小郭',
            weekUse: 96,
            mouthUse: 635,
            assessment: '偏高',
          },
          {
            name: '小吴',
            weekUse: 80,
            mouthUse: 300,
            assessment: '正常',
          },
        ],
        // 机器使用次数折线图
        orderData: {
          dataX: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          data: List
        },
        //饼图
        videoData: [
          {
            name: '小米',
            value: 2999,
          },
          {
            name: '小米',
            value: 2999,
          },
          {
            name: '小米',
            value: 2999,
          },
          {
            name: '小米',
            value: 2999,
          },
          {
            name: '小米',
            value: 2999,
          },
          {
            name: '小米',
            value: 2999,
          },
        ],
      },
    }
  },
}
