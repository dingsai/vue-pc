import base from '../modules/index.js';
export default [
  {path:'/',name:'login_before_index',component:base.login_before_index},
  {path:'/index',name:'login_after_index',component:base.login_after_index},
]