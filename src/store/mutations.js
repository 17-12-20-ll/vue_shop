/*
直接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO
/*  RECEIVE_POSITION*/
} from './mutation-types'

export default {
  // action与mutation传递数据时，需要包含数据对象
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORY] (state, {category}) {
    state.category = category
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
/*  [RECEIVE_POSITION] (state, {longitude, latitude}) {
    state.longitude = longitude
    state.latitude = latitude
  }*/
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo = userInfo
  }
}
