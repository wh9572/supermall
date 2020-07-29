<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <tab-control 
      :titles="['流行','新款','精选']"
      @tabCilck="tabCilck" ref="tabControl1"  
      class="tab-control" v-show="isTabFixed">
      </tab-control>
   <Scroll class="content" ref="scroll" 
   :probe-type="3" @scroll="contentScroll"
    :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control 
      :titles="['流行','新款','精选']"
      @tabCilck="tabCilck" ref="tabControl2" >
      </tab-control>
      <goods-list :goods="showGoods"></goods-list>
   </Scroll>
    <back-top @click.native="backClick"
     v-show="isShowBackTop" 
    ></back-top>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'


import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'


import {getHomeMultidata,getHomeGoods} from 'network/home'
import {debounce} from 'common/utils/util'


  export default {
    components:{
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},        
        },
        currentType:'pop',
        isShowBackTop:true,
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    activated() {
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.saveY,0)
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
    },
    created() {
     // 1.请求多个数据
      this.getHomeMultidata()
     // 2.请求商品数据
     this.getHomeGoods('pop'),
     this.getHomeGoods('new'),
     this.getHomeGoods('sell')
    },
    mounted() {
      // 图片加载完成的时间监听
      const refresh = debounce(this.$refs.scroll.refresh,50)
      //  监听item中图片加载完成
      this.$bus.$on('itemImageLoad',() => {
        // console.log('----');
        refresh()
      })
    },
    methods: {
      /**
       * 事件监听相关的方法
       * 
       */
     
      tabCilck(index) {
        // console.log(index);
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      backClick() {
        // console.log(111)  调用Scroll里面的scrollTo方法
        this.$refs.scroll.scrollTo(0,0,500)
      },
      contentScroll(position) {
        // console.log(position);
        // 判断BackTop是否显示
        this.isShowBackTop = (-position.y) > 1000

      // 决定tabControl是否吸顶(position:fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore(){
        // console.log('上拉加载更多');
        this.getHomeGoods(this.currentType)

      },
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },

      /**
       * 网络请求相关的方法
       * 
       */
      getHomeMultidata() {
         
        getHomeMultidata().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
      })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
         this.goods[type].list.push(...res.data.list)
         this.goods[type].page += 1

          // 完成上拉加载更多
         this.$refs.scroll.finishPullUp()
        })
      }
    },
  }
</script>

<style lang="less" scoped>
  // #home {
  //   // padding-top: 44px;
    
  // }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    // position: fixed;
    // left: 0;
    // right: 0;
    // top: 0;
    // z-index: 9;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0; 
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
  // .content {
  //   height: calc(100% - 93px);
  //   overflow: hidden;
  //   margin-top: 44px;
  // }
</style>