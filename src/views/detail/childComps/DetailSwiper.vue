<template>
    <swiper class="swiper-item">
      <Swiper-item v-for="item in topImages" :key="item">
        <img :src="item" alt="">
      </Swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

  export default {
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      topImages:{
        type:Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="less" scoped>
// 类名为swiper不管用
  .swiper-item{
    height: 300px;
    overflow: hidden;
  }
</style>