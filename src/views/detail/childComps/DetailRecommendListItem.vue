<template>
  <div class="recommend-list-item" >
    <img v-lazy="showImage" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="goods-price">{{goodsItem.price}}</span>
      <span class="goods-cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailRecommendListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {};
        }
      },
    },
    computed: {
      showImage() {
        return this.goodsItem.image;
      }
    }
  }
</script>

<style scoped>
  .recommend-list-item{
    width: 48%;
    position: relative;
    padding-bottom: 40px;
  }
  .recommend-list-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    font-size: 12px;
    text-align: center;
    overflow: hidden;
  }
  .goods-info p{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 3px;
  }
  .goods-price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-cfav{
    position: relative;
  }
  .goods-cfav::before{
    content: '';
    width: 14px;
    height: 14px;
    position: absolute;
    bottom: 1px;
    left: -15px;
    background: url("~@/assets/img/common/collect.svg") no-repeat 0/14px ;
  }
</style>
