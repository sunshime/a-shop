<template>
  <div class="aheader">
    <!-- 头部 -->
    <div class="left">
      <img src="../common/images/scan.png" v-if="!searchStatus" alt>
      <i class="fa fa-angle-left" v-if="searchStatus" @click="back"></i>
      <slot></slot>
    </div>
    <div class="search" @click="getSearch">
      <i class="fa fa-search searchtext"></i>
      <span v-if="!searchStatus">小米手环4</span>
      <input type="text" placeholder="小米手环4" v-if="searchStatus" v-model="keyword">
    </div>
    <div class="right">
      <i class="fa fa-qrcode" v-if="!searchStatus"></i>
      <span v-if="searchStatus" @click="searchText">搜 索</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "aheader",
  data() {
    return {
      keyword:''
    };
  },
  props: {
    searchStatus: {
      type: Boolean
    }
  },
  watch: {
    searchStatus(value){
      this.searchStatus = value;
    },
    keyword(val){
      this.$emit('search', val)
    }

  },
  methods: {
    back() {
      // 返回上一级
      console.log("返回上一级");
      this.$router.back();
    },
    getSearch(){
      this.$emit('getSearch');
    },
    searchText(){
      this.$emit('searchText');
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../common/style/style.css");
</style>

