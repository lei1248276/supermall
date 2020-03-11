<template>
  <div class="categoryContent">
    <grid-view :_cols="3" :v-padding="20" :_item-space="10">
      <div class="content" v-for="(item,index) in categoryProduct" :key="index">
        <img :src="item.image" alt="">
        <div class="title">{{item.title}}</div>
      </div>
    </grid-view>
  </div>
</template>

<script>
  import GridView from "../../../components/common/gridView/GridView";

  export default {
    name: "CategoryContent",
    components: {
      GridView
    },
    props: {
      categoryProduct: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .content{
    text-align: center;
  }
  .content img{
    display: inline-block;
    width: 80%;
   }
  .content .title{
    margin-top: 10px;
  }
</style>
