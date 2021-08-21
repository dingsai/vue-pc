import Vue from 'vue'
import VueRouter from 'vue-router'
import route from './routers/index.js';
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:route
})

export default router
