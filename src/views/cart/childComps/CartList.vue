<template>
  <div class="cart-list">
    <scroll class="content">
      <div v-for="(items,index) in cartList" :key="index">{{items}}</div>
    </scroll>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  import Scroll from "../../../components/common/scroll/Scroll";

  export default {
    name: "CartList",
    components: {
      Scroll
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
    bottom: 49px;
  }
</style>
