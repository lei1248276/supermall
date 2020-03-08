<template>
  <div class="cart-bottom-bar">
    <div class="checkbox" @click="checkAll">
      <check-button class="check-all" :is-checked="isSelectAll"></check-button>
      <span>全选</span>
    </div>
    <span class="total-price">合计:￥{{totalPrice}}</span>
    <span class="buy-product" @click="calcClick">结算({{buyProduct}})</span>
  </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkButton/CheckButton";
  import {CHECK_ALL_CLICK} from "../../../store/mutation-types";
  import {mapGetters} from "vuex";

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    methods: {
      /* 点击全选按钮*/
      checkAll() {
        this.$store.commit(CHECK_ALL_CLICK,this.isSelectAll);
      },
      /* 未选中商品点击结算情况下*/
      calcClick() {
        if (!this.isSelectAll){
          this.$toast.show('请选中商品');
        }
      }
    },
    computed: {
      ...mapGetters(['cartList']),
      /* 计算总价格*/
      totalPrice() {
        return this.cartList.filter(item => {
          return item.checked;
        }).reduce((previousValue, currentValue) => {
          return previousValue + currentValue.price * currentValue.count;
        },0).toFixed( 2);
      },
      /* 结算购买商品数量*/
      buyProduct() {
        return this.cartList.filter(item => {
          return item.checked;
        }).reduce((previousValue, currentValue) => {
          return previousValue + currentValue.count;
        },0)
      },
      /* 判断商品是否在全选情况下，再选中全选按钮*/
      isSelectAll() {
        if (this.cartList.length === 0){
          return false;
        }
        return this.cartList.every(value => value.checked);
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar{
    height: 40px;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    line-height: 40px;
    font-size: 18px;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
  }
  .cart-bottom-bar .checkbox{
    display: inline-block;
    margin-left: 15px;
  }
  .cart-bottom-bar .check-all{
    display: inline-block;
    vertical-align: middle;
    width: 22px;
    height: 22px;
  }
  .cart-bottom-bar .total-price{
    margin-left: 15px;
  }
  .cart-bottom-bar .buy-product{
    float: right;
    background-color: orangered;
    padding: 0 20px;
    color: white;
  }
</style>
