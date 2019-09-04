<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
    import FooterGuide from './components/FooterGuide/FooterGuide'

    export default {
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
