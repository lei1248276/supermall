<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-header">
      <p class="header-title">用户评价</p>
      <p class="header-more">更多</p>
    </div>
    <div class="comment-uname">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="comment-uname-info">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-img">
        <img :src="items" v-for="(items,index) in commentInfo.images" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  // 导入时间格式化函数
  import {formatDate} from "../../../common/utils";

  export default {
    name: "DetailCommentInfo",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    filters: {
      showDate(value) {
        let date = new Date(value * 1000);
        return formatDate(date,'yyyy-MM-dd');
      }
    }
  }
</script>

<style scoped>
  .comment-info{
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }
  .comment-info .comment-header{
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .comment-info .comment-uname{
    display: flex;
    align-items: center;
    padding: 10px 0 5px;
  }
  .comment-uname img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  .comment-uname span{
    margin-left: 10px;
  }
  .comment-info .comment-uname-info{
    padding: 0 5px 15px;
  }
  .comment-uname-info p{
    font-size: 14px;
    color: #777;
    line-height: 1.5;
  }
  .comment-uname-info .info-other{
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
  .info-other .date{
    margin-right: 8px;
  }
  .comment-uname-info .info-img{
    margin-top: 10px;
  }
  .info-img img{
    display: inline-block;
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>
