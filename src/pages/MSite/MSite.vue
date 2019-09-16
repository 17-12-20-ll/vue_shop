<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont iconsousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <!--判断当数据没有获取到时，使用阴影图进行页面渲染，提升用户体验-->
      <div class="swiper-container" v-if="category.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(category , index) in categoryArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(c,index) in category" :key="index">
              <div class="food_container">
                <img :src="`${baseImageUrl}${c.image_url}`">
              </div>
              <span>{{c.title}}</span>
            </a>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont iconoption"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>

<script>
    //引入移动端的swiper
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'

    import HeaderTop from '../../components/HeaderTop/HeaderTop'
    import ShopList from '../../components/ShopList/ShopList'
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                baseImageUrl: 'https://fuss10.elemecdn.com'
            }
        },
        mounted() {
            this.$store.dispatch('actionGetCategory')
            this.$store.dispatch('actionGetShops')
        },
        components: {
            HeaderTop,
            ShopList
        },
        computed: {
            ...mapState(['address', 'category']),
            /*
            根据category一维数组得到一个二维数组，用于遍历两轮,小数组的元素个数最大是8个
             */
            categoryArr() {
                const {category} = this
                // 准备一个空的二维数组
                const arr = []
                let minArr = []
                //遍历category
                category.forEach(c => {
                    // 如果小数组已经满了，创建一个新的
                    if (minArr.length === 8) {
                        minArr = []
                    }
                    if (minArr.length === 0) {
                        // 当为零的时候，开始把小数组存入大数组，当清空时，再次把小数组放入大数组
                        // 逻辑为：当小数组为开始存入值时，大数组就会依据小数组的地址开始指向小数组的存储地址
                        arr.push(minArr)
                    }
                    // 将当前分类保存到小数组中
                    minArr.push(c)
                });
                return arr
            }
        }
        ,
        methods: {},
        watch: {
            //监听哪一个，名字就是哪一个
            category(value) {
                //该函数调用，表示值发生改变，然后再异步更新界面
                // 可以使用setTimeout，自定义延时，进行实现
                //保证页面加载完成，创建一个Swiper实例对象，来实现轮播
                /*setTimeout(() => {
                    new Swiper('.swiper-container', {
                        loop: true,//循环轮播
                        pagination: {
                            el: '.swiper-pagination'
                        },
                    });
                }, 100)*/

                // 界面更新就立即通知
                this.$nextTick(() => {//一旦界面完成更新，立即调用该方法(此语句写在数据更新之后)
                    //保证页面加载完成，创建一个Swiper实例对象，来实现轮播
                    new Swiper('.swiper-container', {
                        loop: true,//循环轮播
                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                        }
                    })
                })
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite //首页
    width 100%

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff

      .swiper-container
        width 100%
        height 100%

        .swiper-wrapper
          width 100%
          height 100%

          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap

            .link_to_food
              width 25%

              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0

                img
                  display inline-block
                  width 50px
                  height 50px

              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666

        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774

    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff

      .shop_header
        padding 10px 10px 0

        .shop_icon
          margin-left 5px
          color #999

        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
