<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#268BD2">
      <template #item-icon><img src="@/assets/img/tabbar/home.svg" alt=""></template>
      <template #item-icon-active><img src="@/assets/img/tabbar/home_active.svg" alt=""></template>
      <template #item-text><p>首页</p></template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#268BD2">
      <template #item-icon><img src="@/assets/img/tabbar/category.svg" alt=""></template>
      <template #item-icon-active><img src="@/assets/img/tabbar/category_active.svg" alt=""></template>
      <template #item-text><p>分类</p></template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#268BD2">
      <template #item-icon><img src="@/assets/img/tabbar/shopcart.svg" alt=""></template>
      <template #item-icon-active><img src="@/assets/img/tabbar/shopcart_active.svg" alt=""></template>
      <template #item-text><p>购物车</p></template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#268BD2">
      <template #item-icon><img src="@/assets/img/tabbar/profile.svg" alt=""></template>
      <template #item-icon-active><img src="@/assets/img/tabbar/profile_active.svg" alt=""></template>
      <template #item-text><p>我的</p></template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "@/components/common/tabbar/TabBar";
  import TabBarItem from "@/components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem,
    }
  }
</script>

<style scoped>

</style>
