<template>
	<div id="app">
		<!-- 登录前的 -->
		<div v-if="!token" class="box">
			<HeaderLoginBefore v-if="!token"></HeaderLoginBefore>
			<router-view />
		</div>
		<!-- 登录后 -->
		<div v-else class="main">
			<HeaderLoginAfter v-if="token"></HeaderLoginAfter>
			<Menu class="fl" :style="{height:containerHeight}"></Menu>
			<div class="container" :style="{height:containerHeight}">
				<router-view/>
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
			token:''
		}
	},
	watch:{
		$route(to,from,next){
			this.token=this.$route.query.token;
			console.log(window.innerHeight)
			this.containerHeight=window.innerHeight - 56 + 'px';
		}
	},
	mounted(){
		this.init();
	},
	methods:{
		init(){
		}
	}
}
</script>

<style lang="less">

</style>
