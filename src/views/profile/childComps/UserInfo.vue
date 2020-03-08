<template>
  <div class="user-info">
    <a href="#" class="clear-fix">
      <div class="avatar-default left">
        <slot name="user-icon">
          <img src="@/assets/img/profile/avatar.svg" alt="">
        </slot>
      </div>
      <div class="login-info left">
        <slot name="user-nickname">
          <div class="register">登入/注册</div>
        </slot>
        <div class="phone">
          <img src="@/assets/img/profile/phone.svg" alt="">
          <slot name="user-phone">
            <span>暂无绑定手机号</span>
          </slot>
        </div>
      </div>
      <div class="right">
        <img src="@/assets/img/profile/arrow-left.svg" alt="">
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "UserInfo"
  }
</script>

<style scoped>
  .user-info{
    background-color: var(--color-tint);
    overflow: hidden;
  }
  .avatar-default{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0 10px 0;
  }
  .avatar-default img{
    width: 100%;
    height: 100%;
  }
  .login-info{
    color: white;
  }
  .login-info .register{
    margin-top: 10px;
  }
  .phone{
    width: 115px;
  }
  .phone img{
    display: inline-block;
    width: 20px;
    height: 30px;
  }
  .phone span{
    font-size: 13px;
    position: relative;
    top: -10px;
  }
  .right img{
    width: 20px;
    height: 20px;
    margin: 20px 10px;
  }
</style>
