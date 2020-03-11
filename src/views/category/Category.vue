<template>
  <div id="category">
    <nav-bar class="nav"><template #center><div class="title">分类</div></template></nav-bar>
    <div class="content">
      <category-menu :categories="categories" @select-index="selectIndex"></category-menu>
      <scroll class="category-content" :probeType="3" ref="scroll">
        <category-content :category-product="categoryProduct"></category-content>
      </scroll>
    </div>
  </div>
</template>

<script>
  import Scroll from "../../components/common/scroll/Scroll";
  import NavBar from "../../components/common/navbar/NavBar";

  import CategoryMenu from "./childComps/CategoryMenu";
  import CategoryContent from "./childComps/CategoryContent";

  import {getCategory,getSubcategory} from "../../network/category";

  export default {
    name: "category",
    components: {
      Scroll,
      NavBar,
      CategoryMenu,
      CategoryContent
    },
    data() {
      return {
        currentIndex: 0,
        categories: [],
        categoryProduct: [],
      }
    },
    created() {
      this._getCategory();
    },
    updated() {
      this.$refs.scroll.refresh();
    },
    methods: {
      // 1.请求category网络数据
      _getCategory() {
        getCategory().then(res => {
          console.log(res);
          // 1.获取分类数据
          this.categories = res.data.category.list;

          // 2.获取初次调用数据
          this._getSubcategory(0);
        });
      },
      // 2.请求category-content的网络数据
      _getSubcategory(index) {
        console.log(this.categories[index]);
        const maitKey = this.categories[index].maitKey;
        console.log(maitKey);
        getSubcategory(maitKey).then(res => {
          console.log(res);
          this.categoryProduct = res.data.list;
        })
      },
      selectIndex(index) {
        this.currentIndex = index;
        this._getSubcategory(index);
        console.log(this.currentIndex);
      },
    }
  }
</script>

<style scoped>
  #category{
    position: relative;
    height: 100vh;
    overflow: hidden;
  }
  .nav{
    background-color: var(--color-tint);
    color: white;
    font-weight: bold;
    font-size: 22px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
  .category-content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 20%;
    right: 0;
  }
</style>
