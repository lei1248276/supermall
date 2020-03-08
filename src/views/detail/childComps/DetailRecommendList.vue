<template>
  <div class="recommend-list">
    <detail-recommend-list-item v-for="(item,index) in goods"
                                :goods-item="item" :key="index">
    </detail-recommend-list-item>
  </div>
</template>

<script>
  import DetailRecommendListItem from "./DetailRecommendListItem";

  export default {
    name: "DetailRecommendList",
    components: {
      DetailRecommendListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return [];
        }
      }
    },
  }
</script>

<style scoped>
  .recommend-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /*padding: 2px;*/
  }
</style>
