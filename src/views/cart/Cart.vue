<template>
  <div >
      <nav-bar class="nav-bar">
        <div slot="center">购物车({{length}})</div>
      </nav-bar>

      <!-- 商品的列表 -->
      <cart-list></cart-list>
      <!-- 底部的汇总 -->
      <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'


import {mapGetters} from 'vuex'

  export default {
    components:{
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      // cartLength() {
      //   return this.$store.getters.cartLength
      // }
      // 1.数组形式
      // ...mapGetters(['cartLength','cartList'])
      // 2.起别名用对象的形式
      ...mapGetters({
        length:'cartLength'
      })
    },
  }
</script>

<style  scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>