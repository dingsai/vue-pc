<template>
	<div class="header_after">
		<el-row>
			<el-col :span="8" class="companyInfo">
				<img class="logo" :src="companyInfo.logo" alt="企业logo" width="182" height="42" @click="loginOut">
				<span>{{companyInfo.company}}</span>
			</el-col>
			<el-col :span="12">
				<el-menu :default-active="activeIndex" class="el-menu-demo menu" mode="horizontal">
					<el-menu-item v-for="(item,index) in menuList" :index="index.toString()" :key="index" @click="tabsClick(item,index)">{{item.sourceName}}</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="4" class="userInfoCol">
				<i class="el-icon-switch-button icon" @click="loginOut"></i>
				<span>{{userInfo.userName}}</span>
				<img v-if="userInfo.headImg" src="@/assets/images/avatar.jpg" alt="" width="30" height="30">
				<svg v-else t="1631255342198" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16802" width="30" height="30"><path d="M1017.9653723 512.86274275c0 279.0628955-226.47983787 505.32966741-505.87339321 505.32966742-279.36794055 0-505.76744221-226.26793586-505.7674422-505.32966742 0-214.20351033 133.32691968-397.2074075 321.62137202-470.75243235 56.89211335-22.95058432 119.04684032-35.62509995 184.15887701-35.62509995 65.19237291 0 127.2935424 12.6617088 184.23921323 35.62509995C884.62680974 115.65533525 1017.9653723 298.66039637 1017.9653723 512.86274275L1017.9653723 512.86274275M317.68381326 406.29132402c0 85.15886877 43.63312128 158.88901689 107.06158706 194.9786715 26.30491819 14.96817664 55.92341959 23.60026112 87.34657877 23.60026112 30.32057173 0 58.90634411-8.07438563 84.5219988-22.02264121 64.92691342-35.40039111 109.96650325-110.03170361 109.96650325-196.5423195 0-120.45330887-87.22665699-218.49859527-194.4873381-218.49859527C404.89766229 187.79389269 317.68381326 285.84034304 317.68381326 406.29132402L317.68381326 406.29132402M514.1469605 985.44544768c147.77814926 0 279.60545735-67.96223033 366.0101211-174.32058425-10.20737422-83.89910187-91.96068067-155.32161707-207.66483001-190.94788096-43.69948672 39.3112576-99.53092722 62.96507619-160.41424327 62.9650762-62.23506318 0-119.20518485-24.92639232-163.3296384-65.94800072-112.55123854 32.12406443-194.99147833 97.64826226-214.32110421 176.16366251C220.16828075 909.83263346 358.36078877 985.44544768 514.1469605 985.44544768L514.1469605 985.44544768M514.1469605 985.44544768L514.1469605 985.44544768z" p-id="16803" fill="#bfbfbf"></path></svg>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import INTERFACE from '@/assets/js/interface/base.js';
import {STATUSCODE} from '@/assets/js/defined.js';
export default {
	data(){
		return {
			activeIndex: '0',
			companyInfo: {},
			userInfo: {},
			// menuList: [],
			menuList:[
				{
					"sourceName": "首页",
					"sourceCode": "1--001",
					"id": "440000198602228335",
					"pid": "0",
					"sourceUrl": "/index",
					"sourceEntry": "http://localhost:8081",
					"children":[]				
				},
				{
					"sourceName": "管理",
					"sourceCode": "1--002",
					"id": "340000198602228335",
					"pid": "0",
					"sourceUrl": "/userList",
					"sourceEntry": "http://localhost:8081",
					"children":[{
						"sourceName": "用户管理",
						"sourceCode": "2--001-001",
						"id": "44000019860222880",
						"pid": "340000198602228335",
						"sourceUrl": "/userList",
						"sourceEntry": "http://localhost:8081",
						"children":[{
							"sourceName": "用户列表",
							"sourceCode": "3--001-001",
							"id": "4400001986022288054",
							"pid": "44000019860222880",
							"sourceUrl": "/userList",
							"sourceEntry": "http://localhost:8081",
							"children":[]			
						},{
							"sourceName": "用户信息",
							"sourceCode": "3--001-002",
							"id": "4400001986022288065",
							"pid": "44000019860222880",
							"sourceUrl": "/userInfo",
							"sourceEntry": "http://localhost:8081",
							"children":[]			
						}]			
					},{
						"sourceName": "认证信息",
						"sourceCode": "2--001-002",
						"id": "440000198602228631",
						"pid": "340000198602228335",
						"sourceUrl": "/bb",
						"sourceEntry": "http://localhost:8081",
						"children":[]			
					}]				
				},
				{
					"sourceName": "账户",
					"sourceCode": "1--003",
					"id": "440000198602228336",
					"pid": "0",
					"sourceUrl": "/cc",
					"sourceEntry": "http://localhost:8081",
					"children":[{
						"sourceName": "账户管理",
						"sourceCode": "2--001-001",
						"id": "440000198602228390",
						"pid": "440000198602228336",
						"sourceUrl": "/cc",
						"sourceEntry": "http://localhost:8081",
						"children":[{
							"sourceName": "账户列表",
							"sourceCode": "3--002",
							"id": "4400001986022286345",
							"pid": "440000198602228390",
							"sourceUrl": "/cc",
							"sourceEntry": "http://localhost:8081",
							"children":[]			
						}]			
					},{
						"sourceName": "积分管理",
						"sourceCode": "2--001-002",
						"id": "4400001986022283800",
						"pid": "440000198602228336",
						"sourceUrl": "/dd",
						"sourceEntry": "http://localhost:8081",
						"children":[{
							"sourceName": "积分列表",
							"sourceCode": "3--001",
							"id": "44000019860222863156",
							"pid": "4400001986022283800",
							"sourceUrl": "/dd",
							"sourceEntry": "http://localhost:8081",
							"children":[]			
						},{
							"sourceName": "兑换列表",
							"sourceCode": "3--002",
							"id": "440000198602228634567",
							"pid": "4400001986022283800",
							"sourceUrl": "/ee",
							"sourceEntry": "http://localhost:8081",
							"children":[]			
						}]			
					}]				
				},
			]
		}
	},
	watch:{
		$route(to,from,next){
			//监听地理栏地址(路由)变化-匹配当前激活的菜单和页面展示
			this.getActiveTab();
		}
	},
	mounted(){
		this.init();
	},
	methods:{
		init(){
			//获取企业用户信息
			this.getUserCompanyInfo();
			//获取资源列表
			// this.getResourceList();
			this.$store.state.base.main.menuList= this.menuList;
			//刷新页面-匹配当前激活的菜单和页面展示
			this.getActiveTab();
		},
		getActiveTab(){
			let list={};
			this.menuList.map((item,index)=>{
				//匹配一级 展示对应的左侧菜单
				if(this.$route.path.indexOf(item.sourceUrl) > -1){
					this.activeIndex=index.toString();
					Object.assign(list,{
						data: item.children,
						currentLevelOneIndex:this.activeIndex
					})
				}
				// //匹配二级
				item.children.map((item1,index1)=>{
					if(this.$route.path.indexOf(item1.sourceUrl) > -1){
						this.activeIndex=index.toString();
						Object.assign(list,{
							data: item.children,
							currentLevelOneIndex:this.activeIndex,
							index:this.activeIndex +'-'+ index1
						})
					}
					//匹配三级
					item1.children.map((item2,index2)=>{
						if(this.$route.path.indexOf(item2.sourceUrl) > -1){
							this.activeIndex=index.toString();
							Object.assign(list,{
								data: item.children,
								currentLevelOneIndex:this.activeIndex,
								index:this.activeIndex +'-'+ index1 +'-'+ index2
							})
						}
					})
				})
				this.$bus.$emit('setMenuList',list);
			})
		},
		getUserCompanyInfo(){
			this.$axios.get(INTERFACE.userCompanyInfo)
			.then(res=>{
				if(res.data.status == STATUSCODE.code01){
					this.companyInfo= res.data.data.companyInfo;
					this.userInfo= res.data.data.userInfo;
				}
			}).catch(error=>{
				console.log(error);
			})
		},
		getResourceList(){
			this.$axios.get(INTERFACE.resourceList)
			.then(res=>{
				if(res.data.status == STATUSCODE.code01){
					this.menuList= res.data.data;
				}
			}).catch(error=>{
				console.log(error);
			})
		},
		tabsClick(data,index){
			this.activeIndex= index.toString();
			let list={};
			//有左侧菜单
			Object.assign(list,{
				data:data.children
			})
			//判断层级 传递需要高亮的index   
			var breakMap=false,matchUrl=false;//匹配到页面了 不再执行后续的判断-不在匹配第一个 退出一级 二级循环
			data.children.map((item,index1)=>{//遍历一级
				if(item.children.length == 0){//二级
					if(data.sourceUrl.indexOf(item.sourceUrl) > -1){//需要匹配对应的二级
						Object.assign(list,{currentLevelOneIndex:this.activeIndex,index:this.activeIndex +'-'+ index1})
						matchUrl= true;
						breakMap= true;
					}
					matchUrl= true;
					breakMap= true;
				}
				else{//三级
					item.children.map((item2,index2)=>{
						if(data.sourceUrl.indexOf(item2.sourceUrl) > -1){//需要匹配对应的三级
							Object.assign(list,{currentLevelOneIndex:this.activeIndex,index:this.activeIndex +'-'+ index1 +'-'+ index2})
							matchUrl= true;
							breakMap= true;
						}
					})
				}
			})
			if(!matchUrl && !breakMap){
				//需要匹配三级第一个
				Object.assign(list,{currentLevelOneIndex:'0',index:'0-0-0'})
			}
			
			this.$bus.$emit('setMenuList',list);
			this.$router.push({
				path: data.sourceUrl,
				query:{
					token:true
				}
			})
		},
		loginOut(){
			this.$router.push({
				path:'/'
			})
		}
	}
}
</script>
