<template>
  <div class="list-view">
    <div v-for="(item,index) in itemInfo" :key="index" class="items">
      <img :src="item.icon" alt="">
      <div class="items-info">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ListView",
    props: {
      itemInfo: {
        type: Array,
        default() {
          return []
        }
      }
    },
  }
</script>

<style scoped>
  .list-view{
    box-shadow: 0 10px 1px rgba(100,100,100,.2);
  }
  .items{
    height: 44px;
    line-height: 44px;
    position: relative;
    margin-top: 10px;
  }
  .items img{
    position: absolute;
    top: 10px;
    left: 10px;
    width: 24px;
    height: 24px;
  }
  .items .items-info{
    margin-left: 40px;
    border-bottom: 1px solid rgba(100,100,100,.2);
  }
  .items:last-child .items-info{
    border: none;
  }
</style>
