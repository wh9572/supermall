<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-all" 
      :is-checked="isSelectAll"
      @click.native="checkClick">
      </check-button>
      <p>全选</p>
    </div>
    <div class="price">
      合计：￥{{totalPrice}}
    </div>

    <div class="calculate" @click="calcClick">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
  export default {
    components:{
      CheckButton
    },
    computed: {
      totalPrice() {
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue,item) => {
          return preValue +  item.price * item.count
        },0).toFixed(2)
      },
      checkLength() {
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        if(this.$store.state.cartList.length === 0) return false

        // 1.
        // return !(this.$store.state.cartList.fliter(item => !item.checked).length)
        // 2.
        //  return !this.$store.state.cartList.find(item => !item.checked)
        // 3.普通遍历
        for (let item of this.$store.state.cartList) {
          if (!item.checked) {
            return false
          }
        }
        return true
      }
    },  
    methods: {
      checkClick() {
        // console.log(111);
        if (this.isSelectAll) {  //全部选中
          this.$store.state.cartList.forEach(item => item.checked = false);
        } else { //部分或全部不选中
          this.$store.state.cartList.forEach(item => item.checked = true);
        }
      },
      calcClick() {
        if (!this.checkLength) {
          this.$toast.show('请选择购买的商品',2000)
        }
      }
    },
  }
</script>

<style lang="less" scoped>
  .bottom-bar {
    display: flex;
    position: relative;

    background-color: #eee;
    height: 40px;
    bottom: 40px;
    line-height: 40px;
    font-size: 14px;
  }
  .check-content {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
  }
  .check-all {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }
  .price {
    margin-left: 20px;
    flex: 1;
  }
  .calculate {
    background-color: red;
    color: #fff;
    width: 90px;
    text-align: center;
  }
</style>