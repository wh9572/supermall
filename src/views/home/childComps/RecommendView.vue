<template>
  <div class="recommends">
    <div v-for="item in recommends"  :key="item.title" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" srcset="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      recommends:{
        type:Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .recommends {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
    .recommend-item {
      flex: 1;
      img {
        width: 70px;
        height: 70px;
        margin-bottom: 5px;
      }
    }
  }
</style>