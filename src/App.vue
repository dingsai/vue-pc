<template>
	<div id="app">
		<!-- 登录前的 -->
		<div v-if="!token" class="box">
			<HeaderLoginBefore v-if="!token" :title="$route.meta.title || null"></HeaderLoginBefore>
			<router-view />
		</div>
		<!-- 登录后 -->
		<div v-else class="main">
			<HeaderLoginAfter v-if="token"></HeaderLoginAfter>
			<Menu v-if="menuList && menuList.length > 0" class="fl" :style="{height:containerHeight}" :menuList="menuList" :menuActiveIndex="menuActiveIndex" :currentLevelOneIndex="currentLevelOneIndex"></Menu>
			<!-- 无菜单的主体-首页 -->
			<div v-if="$route.path.indexOf('/index') > -1" class="container_home mauto" :style="{height:containerHeight,width: 1024+'px'}">
				<router-view/>
			</div>
			<!-- 有菜单的主体 -->
			<div v-else class="container" :style="{height:containerHeight,width:containerWidth}">
				<vuescroll :ops="$store.state.common.main.ops">
					<div class="contain">
						<router-view/>
					</div>
				</vuescroll>
			</div>
		</div>
	</div>
</template>
<script>
import HeaderLoginBefore from '@/components/header_login_before.vue';
import HeaderLoginAfter from '@/components/header_login_after.vue';
import Menu from '@/components/menu.vue';
export default {
	components:{
		HeaderLoginBefore,
		HeaderLoginAfter,
		Menu
	},
	data(){
		return {
			containerHeight: '',
			containerWidth:'',
			token:'',
			menuList: [],
			menuActiveIndex:'',
			currentLevelOneIndex:'',
		}
	},
	watch:{
		$route(to,from,next){
			this.token=this.$route.query.token;
			this.containerHeight=window.innerHeight - 56 + 'px';
			this.containerWidth=window.innerWidth - 170 + 'px';
		}
	},
	created(){
        this.$bus.$on('setMenuList',(data)=>{
            this.menuList= data.data; // menu data
			this.menuActiveIndex= data.index; //menu Highlight index
			this.currentLevelOneIndex= data.currentLevelOneIndex;//一级 Highlight index
        });
    },
	mounted(){
		this.init();
		//控制台打开时拖拽页面宽高 页面宽高自适应
		window.addEventListener('resize', this.computedHeight)
	},  
	methods:{
		init(){
			
		},
		computedHeight(){
			this.containerHeight=window.innerHeight - 56 + 'px';
			this.$nextTick(()=>{
				var titleHeight= document.getElementsByClassName('title')[0] ? document.getElementsByClassName('title')[0].offsetHeight : 0;
				var searchCard= document.getElementsByClassName('searchCard')[0] ? document.getElementsByClassName('searchCard')[0].offsetHeight : 0;
				//窗口-56(头部)-16-16(主体padding 上下)-titleHeight-searchCard-10(表格上间距)  == 表格+分页
				this.$store.commit('setContainCardHeight',window.innerHeight-56-16-16-titleHeight-searchCard-10);
			})
		}
	}
}
</script>

<style lang="less">

</style>
