<template>
  <swiper class="swiper-item">
    <swiper-item v-for="item in topImages">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "@/components/common/swiper/index"

  export default {
    name: "DetailItem",
    components: {
      Swiper,
      SwiperItem,
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .swiper-item{
    height: 300px;
    overflow: hidden;
  }

</style>
