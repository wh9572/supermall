<template>
  <div class="bottom-bar">
      <div class="bar-item bar-left">
        <div>
          <i class="iconfont iconservice service"></i>
          <span class="text">客服</span>
        </div>
        <div>
          <i class="icon icondianpu shop"></i>
          <span class="text">店铺</span>
        </div>
        <div>
          <i class="icon iconshoucang select"></i>
          <span class="text">收藏</span>
        </div>
      </div>
      <div class="bar-item bar-right">
        <div class="cart">加入购物车</div>
        <div class="buy">购买</div>
      </div>
  </div>
</template>
<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
.bottom-bar {
    font-size: 14px;
    height: 49px;
    // background: red;
    background-color: #fff;

    position: relative;
    // bottom: 49px;

    display: flex;
    text-align: center;
    // position: fixed;
    // left: 0;
    // right: 0;
    // bottom: 0;
  }

.bar-left {
  display: flex;
  flex: 1;
}
.bar-left > div {
  flex: 1;
  border-right: 0.04rem solid rgba(128, 128, 128, 0.2);
}
.bar-left .icon {
  display: block;
  // background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  width: 1rem;
  height: 1rem;
  margin: 0.12rem auto;
}
.service .text {
  background-position: 0 -2.4rem;
}
.shop .text {
  background-position: 0 -4.5rem;
}
.bar-right {
  display: flex;
  flex: 1;
}
.bar-right > div {
  flex: 1;
  line-height: 49px;
}
.cart {
  background-color: rgb(255, 174, 0);
}
.buy {
  background-color: var(--color-tint);
  color: white;
}
</style>