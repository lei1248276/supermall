<template>
  <div class="goods">
    <goods-item v-for="(item,index) in goods" :goods-item="item" :key="index"></goods-item>
  </div>
</template>

<script>
  import GoodsItem from "./GoodsItem";

  export default {
    name: "Goods",
    components: {
      GoodsItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    mounted() {
      console.log(this.goods);
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /*padding: 2px;*/
  }
</style>
