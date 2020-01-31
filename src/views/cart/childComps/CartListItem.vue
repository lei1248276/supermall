<template>
  <div class="cart-list-item">
    <div class="checkbox">
      <check-button :is-checked="itemInfo.checked" @click.native="checkClick"></check-button>
    </div>
    <div class="cart-image">
      <img :src="itemInfo.image" alt="">
    </div>
    <div class="item-info">
      <div class="cart-title">{{itemInfo.title}}</div>
      <div class="cart-desc">{{itemInfo.desc}}</div>
      <div class="cart-price">￥{{itemInfo.price}}</div>
      <div class="cart-count">x{{itemInfo.count}}</div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkButton/CheckButton";

  export default {
    name: "CartListItem",
    components: {
      CheckButton
    },
    props: {
      itemInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
      }
    },
    methods: {
      checkClick() {
        this.itemInfo.checked = !this.itemInfo.checked;
      }
    },
    computed: {
      checked() {
        return this.$store.state.checked;
      }
    }
  }
</script>

<style scoped>
  .cart-list-item{
    display: flex;
    padding: 5px;
  }
  .cart-list-item .checkbox{
    display: flex;
    align-items: center;
  }

  .cart-list-item .cart-image{
    padding: 5px;
  }
  .cart-list-item .cart-image img{
    width: 100px;
    height: 120px;
    border-radius: 5px;
  }
  .cart-list-item .item-info{
    padding: 5px 10px;
    overflow: hidden;
  }
  .item-info .cart-title{
    font-size: 22px;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .item-info .cart-desc{
    margin-top: 15px;
    font-size: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .item-info .cart-price{
    font-size: 22px;
    margin-top: 40px;
    color: orangered;
  }
  .item-info .cart-count{
    font-size: 22px;
    margin: -25px 0 0 180px;
  }
</style>
