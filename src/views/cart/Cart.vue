<template>
  <div class="shop-cart">
    <!--  导航  -->
    <nav-bar class="nav-bar">
      <template #center>
        <div>购物车({{cartLength}})</div>
      </template>
    </nav-bar>
    <!--  列表  -->
    <cart-list></cart-list>
    <!--  底部汇总  -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  import {mapGetters} from 'vuex';

  export default {
    name: "cart",
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      // mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性（有两种写法）
      // 数组写法
      // ...mapGetters(["cartLength"])
      // 对象写法（优点：可以自定义属性名）
      ...mapGetters({
        cartLength: "cartLength"
      }),
    }
  }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: white;
    font-weight: bold;
    font-size: 22px;
  }
</style>
