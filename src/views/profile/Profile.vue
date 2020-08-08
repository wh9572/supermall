<template>
  <div class="user_info">
      <nav-bar class="nav-bar">
        <div slot="center">个人中心</div>
      </nav-bar>

      <div class='user-info-wrap'>
        <a href="javascript:;">登录</a>
        <img src="~assets/img/profile/avatar.svg" alt="">
      </div>

      <div class="app_info_wrap">
        <div class="app_info_item contact">
          <p>联系客服</p>
          <p>400-618-4000</p>
        </div>
        <div class="app_info_item">
          <p>意见反馈</p>
        </div>
        <div class="app_info_item">
          <p>关于我们</p>
        </div>
      </div>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'

  export default {
    components:{
      NavBar
    }
  }
</script>

<style lang="less" scoped>
.user_info {

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }

   .user-info-wrap {
    background-color: var(--color-tint);
    height: 300px;
    margin-top: 5px;
    display: flex;
    a {
      color: #fff;
      display: flex;
      align-items: center;
      margin: 0 auto;
      margin-bottom: -70px;
    }
    img{
      position: absolute;
      left: 50%;
      top: 25%;
      transform: translate(-50%,-50%);
      width: 25%;
      height: 25%;
    }
   
  }

 
  .app_info_wrap {
      margin-top: 20px;
      background-color: #fff;
      .app_info_item {
        padding: 20px;
        border-bottom: 1px solid #ccc;
        &:first-child {
        border-top: 1px solid #ccc;
        }
      }
      .contact {
        display: flex;
        justify-content: space-between;
      }
    }
}
</style>