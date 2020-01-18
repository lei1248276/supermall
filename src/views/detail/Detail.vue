<template>
  <div>
    <nav-bar>
      <template #left>
        <div class="back" @click="backClick">
          <img src="@/assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template #center >
        <div class="title" >
          <div v-for="(items,index) in titles"
               class="title-item"
               :class="{active: currentIndex === index}" @click="itemClick(index)">{{items}}</div>
        </div>
      </template>
      <template #right></template>
    </nav-bar>
    <detail-item :topImages="topImages"></detail-item>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import DetailItem from "./childComps/DetailItem";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";

  import {getDetail,Goods} from "../../network/detail";

  export default {
    name: "Detail",
    components: {
      NavBar,
      DetailItem,
      DetailBaseInfo
    },
    data() {
      return {
        iid: null,
        titles: ["商品","参数","评论","推荐"],
        currentIndex: 0,
        topImages: null,
        goods: {},
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
      },
      backClick() {
        this.$router.back();
      },
    },
    created() {
      // 1.保存各个详情页的iid
      this.iid = this.$route.params.iid;
      // 2.请求各个详情页的iid数据
      getDetail(this.iid).then((res) => {
        // 1.获取顶部轮播图的数据
        const data = res.result;
        console.log(res);
        this.topImages = data.itemInfo.topImages;
        // 2.获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        console.log(this.goods);
      });
    }
  }
</script>

<style scoped>
  .title{
    display: flex;
    font-size: 14px ;
  }
  .title-item{
    flex: 1;
  }
  .active{
    color: var(--color-tint);
  }
  .back{
    width: 100%;
    height: 100%;
  }
  .left img{
    display: inline-block;
    vertical-align: middle;
  }
</style>
