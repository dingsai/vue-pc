<template>
	<div class="header_after">
		<el-row>
			<el-col :span="4">
				<img class="logo" src="@/assets/images/logo.png" alt="企业logo" width="182" height="42">
			</el-col>
			<el-col :span="14">
				<el-menu :default-active="activeIndex" class="el-menu-demo menu" mode="horizontal" @select="handleSelect">
					<el-menu-item index="1">处理中心</el-menu-item>
					<el-menu-item index="2">我的工作台</el-menu-item>
					<el-menu-item index="3">消息中心</el-menu-item>
					<el-menu-item index="4">订单管理</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="6" class="userInfoCol">
				<i class="el-icon-switch-button icon"></i>
				<span>哆啦A梦</span>
				<img src="@/assets/images/avatar.jpg" alt="" width="30" height="30">
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
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
		}
	}
}
</script>
