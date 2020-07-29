<template>
  <div class="goods" >
    <goods-list-item v-for="item in goods" 
    :key="item.title" :goodsItem="item">
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
  export default {
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      GoodsListItem
    }
  }
</script>

<style lang="less" scoped>
  .goods {
    display: flex;
    flex-wrap: wrap; //决定一行显示多少个
    justify-content: space-evenly;  //均等分
  }
</style>