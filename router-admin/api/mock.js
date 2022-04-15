import Mock from 'mockjs'
import userApi from './mockServeData/home'
import infoApi from './mockServeData/user'


Mock.mock('getData', userApi.getStatisticalData)

Mock.mock(/user\/get/, 'get', infoApi.getUserList)
Mock.mock(/user\/del/, 'get', infoApi.deleteUser)
Mock.mock(/user\/add/, 'post', infoApi.createUser)
Mock.mock(/user\/edit/, 'post', infoApi.updateUser)


// Mock.mock('searchUser','get',searchApi.searchUserList)
// Mock.mock(/user\/edit/, 'post', infoApi.updateUser)
// Mock.mock(/user\/getUser/, 'get', infoApi.getUserList)
// Mock.mock(/user\/del/,'post',infoApi.deleteUser)
// Mock.mock('posts', 'get', { data: data.posts })
// Mock.mock('add','post',{data:user.users})