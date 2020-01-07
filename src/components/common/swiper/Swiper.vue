<template>
  <div id="hy-swiper">
    <div class="swiper">
      <slot></slot>
    </div>
    <div class="indicator">
      <div class="indi-item" ></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
  }
</script>

<style scoped>
  #hy-swiper{
    overflow: hidden;
    position: relative;
  }
  .swiper{
    display: flex;
  }
  .indicator{
    width: 100%;
    display: flex;
    position: absolute;
    bottom: 8px;
    justify-content: center;
  }
  .indi-item{
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: red;
    /*text-align: center;*/
    line-height: 8px;
  }
</style>
