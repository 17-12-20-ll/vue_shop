<template>
  <div id="app">
    <router-view></router-view>
    <!--route表示当前路由，所以可以获取当前路由的元数据并且进行权限控制，是否显示等判断-->
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    mounted () {
      /*let m_this = this
      AMap.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
        })
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', onComplete)

        function onComplete (data) {
          // data是具体的定位信息
          console.log('定位成功信息：', data)
          let lat = data.position.lat
          let lng = data.position.lng
          console.log(lat, lng)
          m_this.$store.commit('receive_position', {lng, lat})
        }
      })
      // this.$store.commit('receive_position', {})*/
      // this.$store.dispatch('actionGetAddress')
      this.actionGetAddress()
    },
    methods: {
      ...mapActions(['actionGetAddress'])
    }
    ,
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*
  三种css高级编译
  less sass stylus
  */
  /*
  stylus:
  结构化：
  完全通过缩进控制，不需要大括号和分号，冒号可选
  */
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
