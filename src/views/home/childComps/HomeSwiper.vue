<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.title" >
        <a :href="item.link">
          <img :src="item.image" alt="" srcset="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

  export default {
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      banners:{
        type:Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isLoad:false
      }
    },
    methods: {
      imageLoad() {
        if(!this.isLoad) {
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }
        
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>