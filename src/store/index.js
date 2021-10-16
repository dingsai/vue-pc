import Vue from 'vue'
import Vuex from 'vuex'
import common from './common/index.js'
import base from './base/index.js'
import userManager from './userManager/index.js'
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    common,
    base,
    userManager
  }
});
