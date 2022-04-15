import axios from './axios'

export const getMenu = (param) => {
  return axios.request({
    url: './premission/getMenu',
    method: 'post',
    data: param,
  })
}

export const getData = () => {
  return axios.request({
    // 默认get请求
    url: 'getData',
  })
}

export const getUsers = (params) => {
  return axios.request({
    url: '/user/get',
    method: 'get',
    params
  })
}

// export const delUsers = () => {
//   return axios.request({
//     url: 'delUsers',
//     method: 'get',
//   })
// }

// export const addUsers = () => {
//   return axios.request({
//     url: 'addUsers',
//     method: 'post',
//   })
// }
// export const editUsers = () => {
//   return axios.request({
//     url: 'editUsers',
//     method: 'post',
//   })
// }
// export const searchUser = () => {
//   return axios.request({
//     url: 'searchUser',
//     method: 'get',
//   })
// }
// export const s = () => {
//   return axios.request({
//     url: 'posts',
//     method: 'get',
//   })
// }

// export const to = () => {
//   return axios.request({
//     url: 'add',
//     method: 'post',
//   })
// }
