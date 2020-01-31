<template>
  <div class="cart-list">
    <scroll class="content">
      <Cart-list-item v-for="(items,index) in cartList"
                      :key="index"
                      :item-info="items">
      </Cart-list-item>
    </scroll>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import CartListItem from "./CartListItem";

  import Scroll from "../../../components/common/scroll/Scroll";

  export default {
    name: "CartList",
    components: {
      Scroll,
      CartListItem
    },
    computed: {
      ...mapGetters(['cartList'])
    }
  }
</script>

<style scoped>
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 89px;
  }
</style>
