<template>
	<div class="login_after_index">
		<!-- 自动加载组件 -->
		<A />
		<el-button type="primary" @click="show = !show">异步加载组件</el-button>
		<B v-if="show"/>
	</div>
</template>

<script>
import A from './components/a'
export default {
	components: {
		A,
		B: ()=>import('./components/b')
	},
	data(){
		return {
			show:false
		}
	}
}
</script>
