<template>
  <div class="tab-bar-item" @click="itemClick" >
    <div v-if="!isActive" ><slot name="item-icon"></slot></div>
    <div v-else ><slot name="item-icon-active"></slot></div>
    <div :style="isActiveColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: "#ff5777",
      }
    },
    data() {
      return {
        // isActive: true,
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1;
      },
      isActiveColor() {
        return this.isActive ? {color: this.activeColor} : {};
      }
    },
    methods: {
      itemClick() {
        if (this.$route.path !== this.path){
          // console.log(this.$route);
          this.$router.replace(this.path)
        }
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    background-color: #f6f6f6;
  }
  .tab-bar-item img{
    display: inline;
    width: 24px;
    height: 24px;
    margin-top: 3px;
  }
</style>
