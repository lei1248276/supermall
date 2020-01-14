<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="goods-price">{{goodsItem.price}}</span>
      <span class="goods-cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {};
        }
      },
    }
  }
</script>

<style scoped>
  .goods-item{
    width: 48%;
    position: relative;
    padding-bottom: 40px;
  }
  .goods-item img{
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
