<template>
  <swiper>
    <swiper-item v-for="items in banners">
      <a :href="items.link">
        <img :src="items.image" alt="" >
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "@/components/common/swiper/index"

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    components: {
      Swiper,
      SwiperItem,
    },
  }
</script>

<style scoped>

</style>
