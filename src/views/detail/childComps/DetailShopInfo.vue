<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item left">
        <div class="info-sells">
          <span class="sells-count">{{shop.sells | sellCountFilter}}</span>
          <span class="sells-text">总销量</span>
        </div>
        <div class="info-goods">
          <span class="goods-count">{{shop.goodsCount}}</span>
          <span class="goods-text">全部宝贝</span>
        </div>
      </div>
      <div class="shop-middle-item right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    filters: {
      sellCountFilter(value) {
        if (value < 10000) {
          return value;
        }
        return (value / 10000).toFixed(1) + "万";
      }
    },
  }
</script>

<style scoped>
  .shop-info{
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  .shop-info .shop-top{
    display: flex;
    align-items: center;
  }

  .shop-top img{
    width: 45px;
    height: 45px;
  }

  .shop-top span{
    margin-left: 10px;
  }

  .shop-middle{
    margin-top: 15px;
    display: flex;
    text-align: center;
  }

  .shop-middle-item{
    flex: 1;
  }

  .left{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #333;
    border-right: 1px solid rgba(0,0,0,.1);
  }

  .left .info-sells,.left .info-goods{
    display: flex;
    flex-direction: column;
  }

  .sells-count, .goods-count{
    font-size: 18px;
  }

  .sells-text, .goods-text{
    margin-top: 10px;
    font-size: 12px;
  }

  .right {
    font-size: 13px;
    color: #333;
  }

  .right table {
    width: 120px;
    margin-left: 30px;
    text-align: left;
  }

  .right table td {
    padding: 5px 0;
  }

  .right .score {
    color: #5ea732;
  }

  .right .score-better {
    color: #f13e3a;
  }

  .right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .right .better-more span {
    background-color: #f13e3a;
  }

  .shop-bottom{
    text-align: center;
    margin-top: 10px;
  }

  .enter-shop{
    font-size: 14px;
    background-color: #f2f5f8;
    border-radius: 10px;
    width: 150px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
  }


</style>
