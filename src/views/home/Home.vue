<template>
  <div id="home">
    <nav-bar class="nav-home">
      <template #center>
        <div>购物车</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";

  export default {
    name: "home",
    components: {
      NavBar,
    }
  }
</script>

<style scoped>
  .nav-home{
    background-color: var(--color-tint);
    color: white;
  }
</style>
