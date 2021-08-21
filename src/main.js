import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'babel-polyfill'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.less'
Vue.config.productionTip = false

Vue.use(ElementUI,{size:'small'})

// router.beforeRouteEnter((to, from, next) => {
//   next();
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
