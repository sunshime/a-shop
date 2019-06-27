<template>
  <div class="home">
    <!-- 头部 -->
    <Aheader :searchStatus="status" @search="search" @getSearch="getSearch"></Aheader>
    <NaScroll :scrollData="scrollData" :navNum="navNum" @scroll="scroll">
      <!-- 内容.{{scrollData[index]}} -->
    </NaScroll>
  </div>
</template>
<script>
import Aheader from "../components/aheader";
import NaScroll from "../components/navscroll";
export default {
  name: "home",
  data() {
    return {
      status: false,
      scrollData: [
        "",
        "首页",
        "今日推荐",
        "时尚装",
        "亮美妆",
        "家电",
        "家居",
        "国际",
        "生活港",
        "时尚",
        "美妆",
        "家电",
        "家居",
        "国际",
        "生活"
      ],
      navNum:14,   //导航栏的个数
    };
  },
  components: {
    Aheader,
    NaScroll
  },
  methods: {
    search(val) {
      console.log(val, "val----");
    },
    getSearch() {
      console.log("跳转到搜索页面");
      this.$router.push("search");
    },
    scroll(val){
      console.log(val)
      // this.index = val;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../common/style/app.css");
</style>

