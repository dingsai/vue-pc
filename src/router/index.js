import Vue from 'vue'
import VueRouter from 'vue-router'
import base from './base/routers/index.js';
import container from './container/routers/index.js';
import userManager from './userManager/routers/index.js';
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[].concat(base,container,userManager)
})

export default router

//点击同一个路由操作 vue会抛出错误，此方法修改路由跳转的方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}