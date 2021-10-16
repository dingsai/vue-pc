import userManager from '../modules/index.js';
export default [
  {path:'/userInfo', name:'userInfo', component:userManager.userInfo, meta:{title:'用户信息'}},
  {path:'/userList', name:'userList', component:userManager.userList, meta:{title:'用户列表'}},
]