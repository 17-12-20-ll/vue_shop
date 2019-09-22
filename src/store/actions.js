/*
通过mutations间接更新state的多个方法的对象
 */
// 用来异步改变mutation的值的
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  REST_USER_INFO
} from './mutation-types'
import {
  getAddress,
  getFoodCategory,
  getShopList,
  getUserInfo,
  getLogout
} from '../api'

export default {
  //异步获取地址
  async actionGetAddress({commit, state}) {
    console.log(state, 'aaa')
    //发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await getAddress(geohash)
    //根据结果通过mutation修改state的值
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  //异步获取食品分类列表
  async actionGetCategory({commit}) {
    //发送异步ajax请求
    const result = await getFoodCategory()
    //根据结果通过mutation修改state的值
    if (result.code === 0) {
      const category = result.data
      commit(RECEIVE_CATEGORY, {category})
    }
  },
  //异步获取商家列表
  async actionGetShops({commit, state}) {
    console.log(state, 'lalallalalla')
    //发送异步ajax请求
    const {longitude, latitude} = state
    const result = await getShopList(longitude, latitude)
    //根据结果通过mutation修改state的值
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  // 同步记录用户信息
  recordUser({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },

  // 异步获取用户信息
  async actionUserInfo({commit}) {
    const result = await getUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },
  // 异步登出
  async actionLogout({commit}){
    const result = await getLogout()
    if (result.code === 0) {
      commit(REST_USER_INFO)
    }
  }
}
