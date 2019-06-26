<template>
  <div class="aheader">
    <!-- 头部 -->
    <div class="left">
      <img src="../common/images/scan.png" v-if="!searchStatus" alt>
      <i class="fa fa-angle-left" v-if="searchStatus" @click="back"></i>
    </div>
    <div class="search">
      <i class="fa fa-search searchtext"></i>
      <span v-if="!searchStatus">小米手环4</span>
      <input type="text" placeholder="小米手环4" v-if="searchStatus" @input="search">
    </div>
    <div class="right">
      <i class="fa fa-qrcode" v-if="!searchStatus"></i>
      <span v-if="searchStatus">搜 索</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "aheader",
  data() {
    return {
      searchStatus: true,
      keyword:''
    };
  },
  watch:{
    
  },
  methods:{
    back(){
      // 返回上一级
      console.log('返回上一级');
      this.$router.back();
    },
    search(e){
      this.keyword = e.data;
      console.log(this.keyword,'this.keyword')
      let that = this;
      // let timer = setTimeout(() => {
      //   this.getRequire();  // 对应的请求
      // }, 3000);
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../common/style/public.css");
@import url("../common/style/style.css");
</style>

