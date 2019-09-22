/*
使用mock js  提供mock数据接口
 */

import Mock from 'mockjs'
import data from './data'

// 返回goods列表的接口
Mock.mock('/goods', {code: 0, data: data.goods})
// 返回ratings列表的接口
Mock.mock('/ratings', {code: 0, data: data.ratings})
// 返回info的接口
Mock.mock('/info', {code: 0, data: data.info})

// export default xxx   不需要暴露任何数据，只需要保证能执行一次，相当于运行服务器
