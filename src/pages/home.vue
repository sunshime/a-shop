<template>
  <div class="home">
    <!-- 头部 -->
    <Aheader :searchStatus="status" @search="search" @getSearch="getSearch"></Aheader>
    <Scroll></Scroll>
  </div>
</template>
<script>
import Aheader from '../components/aheader'
import Scroll from '../components/scroll'
export default {
  name:'home',
  data(){
    return {
      status:false
    }
  },
  components:{
    Aheader,
    Scroll
  },
  methods:{
    search(val){
      console.log(val,'val----');
      
    },
    getSearch(){
      console.log('跳转到搜索页面')
      this.$router.push('search');      
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../common/style/app.css');
</style>

