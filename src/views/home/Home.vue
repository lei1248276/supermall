<template>
  <div id="home">
    <nav-bar class="nav-home">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pulling-up="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :title="['流行','新款','精选']" @tab-click="tabClick"></tab-control>
      <goods :goods="showGoods"></goods>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>

  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import Scroll from "@/components/common/scroll/Scroll";

  import TabControl from "@/components/content/tabControl/TabControl";
  import BackTop from "@/components/content/backTop/BackTop";
  import Goods from "../../components/content/goods/Goods";

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  /* 导入网络请求函数*/
  import {getHomeMultidata,getHomeGoods} from "@/network/home";

  export default {
    name: "home",
    components: {
      Scroll,
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      Goods,
      BackTop
    },
    data() {
      return{
        banners: [],
        recommends: [],
        isShow: false,
        goods: {
          'pop': {page: 0,list: []},
          'new': {page: 0,list: []},
          'sell': {page: 0,list: []},
        },
        currentType: 'pop',
      }
    },
    created() {
      /* 请求Multidata网络数据*/
      this.getHomeMultidata();

      /* 请求Goods网络数据*/
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    computed: {
      showGoods() {
      return  this.goods[this.currentType].list;
      }
    },
    methods: {
      /* 请求网络数据函数*/
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
          // console.log(this.recommends);
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          // console.log(this.goods[type].list);
          this.goods[type].page += 1;

          /* 更新上拉加载*/
          this.$refs.scroll.finishPullUp();
        })
      },

      /* 监听事件方法*/
      tabClick(index) {
        console.log(index);
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
      },
      backClick() {
        this.$refs.scroll.scrollTo();
      },
      contentScroll(position) {
        // console.log(position);
        this.isShow = (-position.y) > 1000;
      },
      loadMore() {
        console.log("上拉加载数据");
        this.getHomeGoods(this.currentType);
      }
    }
  }
</script>

<style scoped>
  .nav-home{
    background-color: var(--color-tint);
    color: white;
  }
  .content{
    height: calc(100vh - 44px - 49px);
  }
</style>
