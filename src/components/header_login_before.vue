<template>
	<div class="header_before">
		<el-row v-if="!title">
			<el-col :span="8">
				<img class="logo" src="@/assets/images/logo.png" alt="企业logo" width="182" height="42" @click="goHome">
			</el-col>
			<el-col :span="16">
				<el-menu :default-active="activeIndex" class="el-menu-demo menu" mode="horizontal" @select="handleSelect">
					<el-menu-item index="1">首页</el-menu-item>
					<el-menu-item index="2">科技</el-menu-item>
					<el-menu-item index="3">生态</el-menu-item>
					<el-menu-item index="4">帮助</el-menu-item>
					<el-menu-item index="5">注册</el-menu-item>
					<el-menu-item index="6" @click="login">登录</el-menu-item>
				</el-menu>
			</el-col>
		</el-row>
		<el-row v-else>
			<el-col class="header_title">
				<img class="logo fl" src="@/assets/images/logo.png" alt="企业logo" width="182" height="42" @click="goHome">
				<span class="fl">{{title}}</span>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	props:{
		title:{
			type: String,
      		default: null
		}
	},
	data(){
		return {
			activeIndex: '1',
		}
	},
	mounted(){
		this.init();
		
	},
	methods:{
		init(){
			
		},
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		goHome(){
			this.$router.push({
				path:'/'
			})
		},
		login(){

			// this.$router.push({
			// 	path:'/index',
			// 	query:{
			// 		token:true
			// 	}
			// })
		}
	}
}
</script>
