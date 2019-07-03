<template>
  <div class="navscroll">
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="index in navNum" :title="scrollData[index]" :key="index" @click="scroll(index)"><slot></slot></van-tab>
    </van-tabs>
  </div>
</template>
<script>
// import Vue from "vue";

export default {
  name: "navscroll",
  data() {
    return {
    //   scrollData: [
    //     "",
    //     "今日推荐",
    //     "时尚",
    //     "美妆",
    //     "家电",
    //     "家居",
    //     "国际",
    //     "生活",
    //     "今日推荐",
    //     "时尚",
    //     "美妆",
    //     "家电",
    //     "家居",
    //     "国际",
    //     "生活"
    //   ],
      active: 0
    };
  },
  props: {
      scrollData:Array,
      navNum:Number
  },
  watch:{
      scrollData(val){
          this.scrollData = val;
      },
      navNum(val){
          this.navNum = val
      }
  },
  methods:{
      scroll(index){
          console.log(index,'index')
          this.$emit("scroll",index);
      }
  }
};
</script>
<style lang="less" scoped>
@import url("../common/style/style.css");
</style>
