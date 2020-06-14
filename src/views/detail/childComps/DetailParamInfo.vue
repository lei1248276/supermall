<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table class="param-sizes" v-for="(table,indexO) in paramInfo.sizes" :key="indexO">
      <tr v-for="(tr,indexT) in table" :key="indexT">
        <td v-for="(td,indexTh) in tr" :key="indexTh">{{td}}</td>
      </tr>
    </table>
    <table class="goods-param-info">
      <tr v-for="(tr,indexO) in paramInfo.infos" :key="indexO">
        <td class="info-key">{{tr.key}}</td>
        <td class="info-value">{{tr.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.images.length !== 0">
      <img :src="paramInfo.images" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props: {
      paramInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    },

  }
</script>

<style scoped>
  .param-info{
    padding: 20px 10px 0;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .param-info table.param-sizes{
    width: 100%;
    border-collapse: collapse;
    border-bottom: 3px solid #f2f5f8;
  }
  table.param-sizes tr{
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  table.param-sizes tr td{
    padding: 10px 5px;
    width: 55px;
  }
  .param-info table.goods-param-info{
    width: 100%;
    border-collapse: collapse;
  }
  table.goods-param-info tr{
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  table.goods-param-info tr td{
    padding: 10px 5px;
  }
  table.goods-param-info tr td.info-key{
    width: 65px;
  }
  table.goods-param-info tr td.info-value{
    color: #eb4868;
  }
  .info-img img{
    width: 100%;
  }
</style>
