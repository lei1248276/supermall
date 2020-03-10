<template>
  <div class="recommend">
    <div v-for="items in recommends" class="recommend-item">
      <a :href="items.link">
        <img :src="items.image" alt="">
        <p>{{items.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return [];
        },
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex: 1;
    font-size: 12px;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
    display: inline-block;
  }
</style>
