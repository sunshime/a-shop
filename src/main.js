// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import Axios from 'axios'
import Vuex from 'vuex'
import 'vant/lib/index.css'
import store from './store/index'
Vue.config.productionTip = false
// 引入Axios
Vue.prototype.$http = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Vant,
  Axios,
  Vuex,
  store,
  components: { App },
  template: '<App/>'
})
