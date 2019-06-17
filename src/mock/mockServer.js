import Mock from 'mockjs'
import city from './city.json'
import detail from './detail.json'
import index from './index.json'
Mock.mock('/city', {
  code: 0,
  data: city
})
Mock.mock('/detail', {
  code: 0,
  data: detail
})
Mock.mock('/index', {
  code: 0,
  data: index
})
