<template>
  <div class="bottom-bar">
    <div class="bar-item">
      <div class="service">
        <i></i>
        <span>客服</span>
      </div>
      <div class="shop">
        <i></i>
        <span>店铺</span>
      </div>
      <div class="collect" @click="collectClick">
        <i :style="show"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    data() {
      return {
        isShow: false,
        bgPosition: "0 -26px",
      }
    },
    methods: {
      collectClick() {
        this.isShow = !this.isShow;
      },
      addToCart() {
        this.$emit("addToCart");
      }
    },
    computed: {
      show() {
        return this.isShow ? {backgroundPosition: this.bgPosition} : {};
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    height: 58px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1000;
    display: flex;
    text-align: center;
  }
  .bottom-bar .bar-item{
    flex: 1;
    display: flex;
  }
  .bar-item .service,.bar-item .shop,.bar-item .collect,.bar-item .cart,.bar-item .buy{
    flex: 1;
  }
  .bar-item .service i,.bar-item .shop i,.bar-item .collect i{
    display: block;
    width: 22px;
    height: 22px;
    margin: 3px auto 10px;
  }
  .bar-item .service i{
    background: url("~@/assets/img/detail/detail_bottom.png") no-repeat 0 -51px/100%;
  }
  .bar-item .shop i {
    background: url("~@/assets/img/detail/detail_bottom.png") no-repeat 0 -97px/100%;
  }
  .bar-item .collect i{
    background: url("~@/assets/img/detail/detail_bottom.png") no-repeat 0 1px/100%;
  }
  .bottom-bar .bar-right{
    line-height: 58px;
  }
  .bar-right .cart{
    background-color: #ffe817;
    color: #333;
  }
  .bar-right .buy{
    background-color: #f69;
  }
  .switch{

  }
</style>
