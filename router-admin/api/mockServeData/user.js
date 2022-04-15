import Mock from 'mockjs'
// get请求是从config.url获取参数,post请求是从config.body中获取参数
function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g,'":"') +
    '"}'
  )
}
let List = []
const count = 60

  for (let i = 0; i < count; i++) {
    List.push(
      Mock.mock({ 
      id: Mock.Random.guid(),
      name: Mock.Random.cname(),
      gen: Mock.Random.integer(0,1),
      addr: Mock.mock('@county(true)'),
      tel:Mock.Random.float(10000000000,99999999999,0,0)   
      })
    )
  }
 


export default {
  // /*** 获取列表* 要带参数 name, page, limt; name可以不填, ////page,limit有默认值。
  // * @param name, page, limit
  // * @return {undefined{code: number, count: number, data: *///[]}}
  // 
  getUserList: config => {
    const { name, page = 1, limit = 10 } = param2Obj(config.url)
    console.log('name:' + name,'page:' + page, '分页大小limit:' + limit);
    const mockList = List.filter(user => {
      if (name && user.name.indexOf(name) === -1 ) return false
      return true
    })
    const pageList = mockList.filter((item,index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 20000,
      count: mockList.length,
      data: pageList
    }
  },

   
  // 增加用户 @param name,addr,age,birth,sex
  // @return {{code:number,data,:{message:string}}}
  createUser: config => {
    const { name, gen, addr, tel } = JSON.parse(config.body)
    console.log(JSON.parse(config.body));
    List.unshift({
      id: Mock.Random.guid(),
      name: name,
      gen: gen,
      addr: addr,
      tel: tel,
    })
    return {
      code: 20000,
      data: {
        message: '添加成功'
      }
    }
  },

  // // 删除用户 @param id
  // // @return {*}
 
  deleteUser: config => {
    const { id } = param2Obj(config.url)
    // console.log(JSON.parse(config.body));
    if (!id) {
      return {
        code: -999,
        message: '参数不正确'
      }
    } else {
      List = List.filter(u => u.id !== id)
      return {
        code: 20000,
        message: '删除成功'
        
      }
    }
  },

  // // 批量输出
  // // @param config
  // // @return {{code:number,data:{message:string}}}
  // batchremove: config => {
  //   let { ids } = param2Obj(config.url)
  //   ids = ids.split(',')
  //   List = List.filter(u => !ids.includes(u.id))
  //   return {
  //     code: 20000,
  //     data: {
  //       message: '批量删除成功'
  //     }
  //   }
  // },

  // // 修改用户
  // // @param id,name,addr,age,birth,sex
  // // @return {{code:number,data:{message:string}}}
  updateUser: config => {
    const { id, name, gen, addr, tel } = JSON.parse(config.body)
    const sex_num = parseInt(gen)
    List.some(u => {
      if (u.id === id) {
        u.name = name
        u.addr = addr
        u.gen = sex_num
        u.tel = tel  
        return true
      }
    })
    return {
      code: 20000,
      data: {
        message: '编辑成功'
      }
    }
  }
}
