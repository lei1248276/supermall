<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-item :topImages="topImages"></detail-item>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <detail-recommend-list :goods="recommends" ref="recommends"></detail-recommend-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailItem from "./childComps/DetailItem";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import DetailRecommendList from "./childComps/DetailRecommendList";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import Scroll from "../../components/common/scroll/Scroll";
  import {getDetail,getRecommend,Goods,Shop,GoodsParam} from "../../network/detail";
  import {backTopMixin} from "../../common/mixin";

  import {mapActions} from "vuex";

  export default {
    name: "Detail",
    components: {
      Scroll,
      DetailItem,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailNavBar,
      DetailCommentInfo,
      DetailRecommendList,
      DetailBottomBar,
    },
    data() {
      return {
        iid: null,
        topImages: null,
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        currentIndex: 0,
      }
    },
    /* 使用混入导入back-top*/
    mixins: [backTopMixin],
    methods: {
      ...mapActions(['addCart']),
      imageLoad() {
        this.$refs.scroll.refresh();
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.param.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
        // 把最后一个值设置为无限大，防止最后一个值为 undefined
        this.themeTopYs.push(Infinity);
        // console.log(this.themeTopYs);
      },
      titleClick(index) {
        // console.log(index);
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200);
      },
      contentScroll(position) {
        // 1.获取 Y 值
        const positionY = -position.y;
        const length = this.themeTopYs.length;
        // 2.positionY和主题中值进行对比
        for (let i = 0; i < length; i++) {
          if (this.currentIndex !== i &&
            (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])){
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex;
            console.log(this.currentIndex);
          }
        }
        // 3. 判断BackTop是否显示
        this.isShow = (-position.y) > 1000;
      },
      addToCart() {
        // 1.获取购物车需要展示的信息
        const product = {};
        product.title = this.goods.title;
        product.image = this.topImages[0];
        product.desc = this.goods.desc;
        product.price = this.goods.realPirce;
        product.iid = this.iid;
        // 2.将商品添加到购物车
          // 方法一：使用mapActions
        this.addCart(product).then(res => {
          // console.log(res);
          // 普通封装toast
          /*this.message = res;
          this.toastShow = true;
          setTimeout(() => {
            this.toastShow = false
          },1000);*/
          // 使用自定义插件封装toast
          this.$toast.show(res);
        });
          // 方法二：使用Promise
        /*this.$store.dispatch('addCart',product).then(res => {
          console.log(res);
        });*/

      },
    },
    created() {
      // 一.保存各个详情页的iid
      this.iid = this.$route.params.iid;
      // 二.请求各个详情页的iid数据
      getDetail(this.iid).then((res) => {
        const data = res.result;
        // console.log(res);
        // 1.获取顶部轮播图的数据
        this.topImages = data.itemInfo.topImages;
        // console.log(this.topImages);
        // 2.获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        // console.log(this.goods);
        // 3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo);
        // console.log(this.shop);
        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo;
        // 5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule);
        // console.log(this.paramInfo);
        // 6.取出评论的信息
        if (data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0];
          // console.log(this.commentInfo);
        }
      });
      // 三.请求详情页的推荐数据
      getRecommend().then((res) => {
        this.recommends = res.data.list;
        // console.log(this.recommends);
      })
    },
  }
</script>

<style scoped>
  #detail{
    height: 100vh;
    position: relative;
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 58px;
    background-color: white;
  }
</style>
