<template>
  <div class="profile">
    <nav-bar class="nav">
      <template #center>
        <div class="nav-title">超级商城</div>
      </template>
    </nav-bar>
    <scroll class="content">
      <user-info></user-info>
      <div class="account">
        <div class="account-item">
          <div class="number">
            <span>0.00</span>元
          </div>
          <div>我的余额</div>
        </div>
        <div class="account-item">
          <div class="number">
            <span>0</span>元
          </div>
          <div>我的优惠</div>
        </div>
        <div class="account-item">
          <div class="number">
            <span>0</span>元
          </div>
          <div>我的积分</div>
        </div>
      </div>
      <list-view :item-info="orderList"></list-view>
      <list-view :item-info="serviceList"></list-view>
      <list-view :item-info="moreList"></list-view>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../../components/common/scroll/Scroll";
  import NavBar from "../../components/common/navbar/NavBar";
  import UserInfo from "./childComps/UserInfo";
  import ListView from "./childComps/ListView";

  export default {
    name: "profile",
    components: {
      Scroll,
      NavBar,
      UserInfo,
      ListView
    },
    data() {
      return {
        orderList: [
          {icon: require('@/assets/img/profile/message.svg'),info: '我的消息'},
          {icon: require('@/assets/img/profile/shopping.svg'),info: '积分商城'},
          {icon: require('@/assets/img/profile/vip.svg'),info: '会员卡'},
        ],
        serviceList: [
          {icon: require('@/assets/img/profile/cart.svg'),info: '我的购物车'},
          {icon: require('@/assets/img/profile/app.svg'),info: '下载购物APP'},
        ],
        moreList: [
          {icon: require('@/assets/img/profile/setup.svg'),info: '设置'},
          {icon: require('@/assets/img/profile/more.svg'),info: '更多'},
        ]
      }
    }
  }
</script>

<style scoped>
  .profile{
    height: 100vh;
    position: relative;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
  }
  .nav{
    background-color: var(--color-tint);
  }
  .nav .nav-title{
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
  .account{
    display: flex;
    height: 75px;
    box-shadow: 0 10px 1px rgba(100,100,100,.2);
  }
  .account .account-item{
    flex: 1;
    border-right: 1px solid rgba(100,100,100,.2);
    text-align: center;
  }
  .account-item:last-child{
    border: none;
  }
 .account-item .number{
    padding: 10px 0 5px;
  }
  .account-item .number span{
    font-size: 24px;
    font-weight: bold;
    color: #ff5f3e;
  }
</style>
