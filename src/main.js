// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import animate from 'animate.css'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import './style/elemeUi.min.css'
// import './style/account.min.css'
Vue.use(ElementUI)
Vue.use(animate)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
// 把axios添加在组件的构造函数Vue的原型中，所有组件都可以直接访问axios

Vue.prototype.http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
