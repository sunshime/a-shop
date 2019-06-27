<template>
  <div class="home">
    <!-- 头部 -->
    <Aheader :searchStatus="status" @search="search" @searchText="searchText"></Aheader>
  </div>
</template>
<script>
import Aheader from '../components/aheader'
export default {
  name:'home',
  data(){
    return {
      status:true,
      keyWords: ''
    }
  },
  components:{
    Aheader
  },
  methods:{
    search(val){
      console.log(val,'val----');
      this.keyWords = val;
    },
    searchText(){
        console.log('搜索');
        console.log(this.keyWords);
        // 发送请求 请求对应的数据

    }
  }
}
</script>
<style lang="less" scoped>
@import url('../common/style/app.css');
</style>
