var Mock = require('mockjs')
module.exports = () => {
  var data = Mock.mock({
    'list|10': [
      {
        'id|+1': 1,
        title: '@ctitle(5,10)',
        author: '@cname'
      }
      
    ]
  });
  return data
}