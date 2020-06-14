<template>
  <div class="detail-base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">
      <p>{{goods.title}}</p>
    </div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <div class="info-services">
      <span v-for="(items,index) in goods.services.length - 1" :key="index">
        <img :src="goods.services[index+1].icon" alt="">
        {{goods.services[index].name}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {};
        }
      }
    }
  }
</script>

<style scoped>
 .detail-base-info{
   margin-top: 15px;
   color: #999;
   padding: 0 8px;
   border-bottom: 5px solid #f2f5f8;
 }
 .info-title{
   color: #222;
 }
 .info-price{
   margin: 10px 0 0;
   display: flex;
   align-items: baseline;
 }
 .info-price .n-price{
   font-size: 24px;
   color: var(--color-high-text);
 }
 .info-price .o-price{
   font-size: 13px;
   margin: 0 0 0 5px;
   text-decoration: line-through;
 }
 .info-price .discount{
   background-color: var(--color-high-text);
   color: white;
   font-size: 12px;
   border-radius: 8px;
   padding: 3px 5px 2px 5px;
   align-self: flex-start;
   margin: 1px 0 0 5px;
 }
  .info-other{
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    font-size: 13px;
    line-height: 30px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .info-services{
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    font-size: 13px;
    color: #333;
  }
 .info-services img{
   display: inline-block;
   width: 14px;
   height: 14px;
   position: relative;
   top: 2px;
   margin-right: -2px;
 }
</style>
