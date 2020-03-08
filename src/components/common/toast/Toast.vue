<template>
  <transition>
    <div class="toast" v-show="isShow">
        <p>{{message}}</p>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message = '输入内容',duration = 1000) {
        this.message = message;
        this.isShow = true;
        setTimeout(() => {
          this.message = '';
          this.isShow = false;
        },duration);
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 1000;
    padding: 25px 20px;
    border-radius: 5px;
    background-color: rgba(0,0,0,.7);
    color: #fff;
  }
  .v-enter{
    transform: translateX(10px);
  }
  .v-enter-active{
    transition: all .3s ease;
  }
</style>
