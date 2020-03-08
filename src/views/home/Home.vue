<template>
  <div id="home">
    <nav-bar class="nav-home">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control :title="['流行','新款','精选']"
                 @tab-click="tabClick"
                 ref="tabControl1"
                 class="tab-control-two"
                 v-show="isTabControlFixed">
    </tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pulling-up="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :title="['流行','新款','精选']"
                   @tab-click="tabClick"
                   ref="tabControl2" >
      </tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import Scroll from "@/components/common/scroll/Scroll";

  import TabControl from "@/components/content/tabControl/TabControl";
  import BackTop from "@/components/content/backTop/BackTop";
  import GoodsList from "../../components/content/goods/GoodsList";

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  /* 导入网络请求函数*/
  import {getHomeMultidata,getHomeGoods} from "@/network/home";
  /* 导入公共方法*/
  import {debounce} from "../../common/utils";

  export default {
    name: "home",
    components: {
      Scroll,
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
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
        tabOffsetTop: 0,
        isTabControlFixed: false,
        activePosition: 0,
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
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
    mounted() {
      /* 1.监听GoodsItem中图片加载完成
      （监听函数要在触发函数之前存在所以放在beforeCreate、created、beforeMount、mounted钩子函数中）*/
      let refresh = debounce(this.$refs.scroll.refresh);
      this.$bus.$on("itemImageLoad",() => {
        // 重新计算better-scroll
        refresh();
      });
    },
    updated() {
      /* 1.获取DOM更新后的tabControl的offsetTop*/
      this.$nextTick(() => {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
        // console.log(this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop);
      })
    },
    /* 手动保存路由跳转时定位*/
    activated() {
      // 此处time参数不能设置为0，要不然会采取backTop的定位（原因不明）
      this.$refs.scroll.scrollTo(0,this.activePosition,50);
      this.$refs.scroll.refresh();
    },
    /* 保存定位*/
    deactivated() {
      this.activePosition = this.$refs.scroll.scroll.y;
    },
    /* 在动态组件中来回切换会增加事件触发次数（每次使用事件总线，都要手动销毁）*/
    beforeDestroy() {
      this.$bus.$off("itemImageLoad");
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
        // 让两个tabControl保持一致
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      backClick() {
        this.$refs.scroll.scrollTo();
      },
      contentScroll(position) {
        // console.log(position);
        // 1. 判断BackTop是否显示
        this.isShow = (-position.y) > 1000;
        // 2. 判断TabControl是否吸顶
        this.isTabControlFixed = (-position.y) >= this.tabOffsetTop;
      },
      loadMore() {
        console.log("上拉加载数据");
        this.getHomeGoods(this.currentType);
      },
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }
  .nav-home{
    background-color: var(--color-tint);
    color: white;
    font-size: 22px;
  }
  .content{
    overflow: hidden;
    /*height: calc(100vh - 44px - 49px);*/
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
  }
  /* position: fixed失效！
    bscroll的滚动是用transform的translate来进行偏移，但是父元素设置了transform，所有子元素的position: fixed都不再相对于视口，而是相对于这个transform父元素！这不是什么bug，而是规范中规定。*/
  .tab-control-two{
    position: relative;
    z-index: 1000;
  }
</style>
