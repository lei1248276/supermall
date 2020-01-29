<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="clear-fix info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(items,index) in detailInfo.detailImage[0].list" :src="items" alt="" :key="index"
           @load="imageLode">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        counter: 0,
        imagesLength: 0,
      }
    },
    methods: {
      imageLode() {
        this.counter += 1;
        // 判断, 所有的图片都加载完了, 那么进行一次回调就可以了(不使用判断就是有多少张图片就回调多少次)
        if (this.counter === this.imagesLength){
          this.$emit('imageLoad');
        }
      },
    },
    watch: {
      detailInfo() {
        // 获取图片的个数
        this.imagesLength = this.detailInfo.detailImage[0].list.length;
      }
    }
  }
</script>

<style scoped>
  .goods-info{
    padding: 15px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .goods-info .info-desc{
    padding: 0 15px;
  }
  .goods-info .desc{
    padding: 15px 0;
    font-size: 14px;
  }
  .goods-info .start,.goods-info .end{
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  .goods-info .start{
    float: left;
  }
  .goods-info .end{
    float: right;
  }
  .start::before{
    content: "";
    width: 5px;
    height: 5px;
    background-color: #333;
    position: absolute;
    bottom: 0;
  }
  .end::after{
    content: "";
    width: 5px;
    height: 5px;
    background-color: #333;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .goods-info .info-key{
    color: #333;
    font-size: 15px;
    margin: 10px 0 10px 15px;
  }
  .goods-info .info-list img{
    width: 100%;
  }
</style>
