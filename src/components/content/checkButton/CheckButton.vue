<template>
  <div class="check-button" :class="{check:isChecked}" @click="checkedClick">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    props:{
      isChecked:{
        type:Boolean,
        default:false
      }
    },
    methods: {
      checkedClick() {
        this.$emit('checkClick')
      }
    },
  }
</script>

<style lang="less" scoped>
.check-button {
  border-radius: 50%;
  border: 1px solid #aaa;
}
.check {
  border-color: red;
  background-color: red;
 }
</style>