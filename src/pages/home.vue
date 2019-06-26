<template>
  <div class="home">
    <!-- 头部 -->
    <Aheader></Aheader>
  </div>
</template>
<script>
import Aheader from '../components/aheader'
export default {
  name:'home',
  data(){
    return {

    }
  },
  components:{
    Aheader
  }
}
</script>
<style lang="less" scoped>
@import url('../common/style/public.css');
@import url('../common/style/app.css');
</style>

