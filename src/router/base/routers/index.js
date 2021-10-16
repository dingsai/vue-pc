import base from '../modules/index.js';
export default [
  {path:'/', name:'login_before_index', component:base.login_before_index},
  {path:'/register', name:'register', component:base.register, meta:{title:'注册账号'}},
]