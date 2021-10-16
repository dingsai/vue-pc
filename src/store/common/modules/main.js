import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default ({
	state: {
        menuList:[],
		pageRow:10,
		containCardHeight: 0,
		scrollHeight:0,
		TableBodyHeight: 0,
		ops: {
			vuecroll:{
				mode:'native',
			},
			rail: {
				background: '#f5f5f5',
				opacity: 1,
				size: '6px',
				specifyBorderRadius: false,
				gutterOfEnds: null,
				gutterOfSide: '2px',
				keepShow: false
			},
			bar: {
				onlyShowBarOnScroll: true,
				keepShow: false,
				background: '#cccccc',
				opacity: 1,
				hoverStyle: false,
				specifyBorderRadius: false,
				minSize: false,
				size: '6px',
				disable: false,
			}
		},
	},
	getters: {
		
	},
	mutations: {
		setAllMenuList(state,data){
			state.menuList= data;
		},
		setPageRow(state,data){
			state.pageRow= data;
			state.TableBodyHeight= 49 * data + 40;
			console.log(state.TableBodyHeight)
		},
		setContainCardHeight(state,data){
			state.containCardHeight= data; //el-card主体的高度
			state.scrollHeight= data- 52 - 40; //表格主体高度（最大空间） 加滚动条  表头(固定) 52-去掉分页32和分页距离表格的间距20  40-el-card的上下padding:20  
		}
	},
	actions: {
		
	},
	modules: {
		
	}
})
