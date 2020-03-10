<template>
  <div class="category-menu">
    <scroll class="content">
      <div class="menu-list" v-for="(item,index) in categories" :key="index"
           @click="menuClick(index)" :class="{active: index === currentIndex}">
        {{item.title}}
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../../../components/common/scroll/Scroll";

  export default {
    name: "CategoryMenu",
    components: {
      Scroll
    },
    props: {
      categories: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    methods: {
      menuClick(index) {
        this.currentIndex = index;
        this.$emit('select-index',index);
      }
    }
  }
</script>

<style scoped>
  .category-menu{
    width: 20%;
    height: 100vh;
    background-color: #f6f6f6;
    text-align: center;
    font-size: 14px;
    box-sizing: border-box;
  }
  .category-menu .content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 80%;
    bottom: 49px;
  }
  .menu-list{
    padding: 14px 2px 14px;
  }
  .active{
    background-color: white;
    color: var(--color-high-text);
    border-left: 3px solid var(--color-high-text);
    font-weight: bold;
  }
</style>
