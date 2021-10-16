import Vue from 'vue'
import App from './App.vue'
import router from './router/userManager'
import axios from '@/global/axios'
import store from './store'
import ElementUI from 'element-ui';
import 'babel-polyfill'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.less'
Vue.config.productionTip = false

Vue.prototype.$axiosJson=axios;

Vue.prototype.$bus = new Vue();

Vue.use(ElementUI,{size:'small'})

//title组件
import Title from '@/components/commonModule/title';
Vue.use(Title,Vue.component("Title",Title))

import vuescroll from 'vuescroll';
// 设置全局配置
Vue.use(vuescroll,Vue.component("vuescroll",vuescroll))



router.beforeEach((to, from, next) => {
	if(to.meta.title) {   //路由发生变化时候修改页面中的title
		document.title = to.meta.title
	}
	next();
})
new Vue({
	router,
	store,
	render: h => h(App),
	watch:{
		$route:{
			handler(newVal,oldVal){
				this.$nextTick(()=>{
					var titleHeight= document.getElementsByClassName('title')[0] ? document.getElementsByClassName('title')[0].offsetHeight : 0;
					var searchCard= document.getElementsByClassName('searchCard')[0] ? document.getElementsByClassName('searchCard')[0].offsetHeight : 0;
					//窗口-56(头部)-16-16(主体padding 上下)-titleHeight-searchCard-10(表格上间距)
					this.$store.commit('setContainCardHeight',window.innerHeight-56-16-16-titleHeight-searchCard-10);
				})
			}
		}
	}
}).$mount('#app')
