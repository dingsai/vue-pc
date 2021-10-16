import Vue from 'vue'
import VueRouter from 'vue-router'
import userManager from './routers/index.js';
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[].concat(userManager)
})

export default router

//点击同一个路由操作 vue会抛出错误，此方法修改路由跳转的方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}