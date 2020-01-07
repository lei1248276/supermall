<template>
  <div id="home">
    <nav-bar class="nav-home">
      <template #center>
        <div>购物车</div>
      </template>
    </nav-bar>
    <swiper>
      <swiper-item class="slide" v-for="items in banners">
        <a :href="items.link">
          <img :src="items.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import Swiper from "@/components/common/swiper/Swiper";
  import SwiperItem from "@/components/common/swiper/SwiperItem";

  /* 网络请求*/
  import {getHomeMultidata} from "@/network/home";

  export default {
    name: "home",
    components: {
      NavBar,
      Swiper,
      SwiperItem,
    },
    data() {
      return{
        banners: [],
        recommends: [],
      }
    },
    created() {
      /* 请求网络数据*/
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .nav-home{
    background-color: var(--color-tint);
    color: white;
  }
</style>
