<template>
  <nav-bar class="nav-bar">
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
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ["商品","参数","评论","推荐"],
        currentIndex: 0,
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('titleClick',index);
      },
      backClick() {
        this.$router.go(-1);
      },
    },
  }
</script>

<style scoped>
  .nav-bar{
    background-color: white;
  }
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
