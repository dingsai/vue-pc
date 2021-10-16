<template>
	<div class="login_before_index">
		<el-row class="index_top w1024 mauto pr">
			<div class="banner">
				<!-- <el-carousel height="150px">
					<el-carousel-item v-for="item in 2" :key="item">
						<img src="https://www.yljr.com/zqyl-file/file/previewFile?fileNo=WeWeOrteKQOmFM7%2F04NUO98BeWniansz02J7TDAwYtI%3D" alt="">
					</el-carousel-item>
				</el-carousel> -->
			</div>
			<div class="loginContainer ps">
				<el-form ref="form" :model="loginForm" label-width="80px" class="loginForm" label-position="right">
					<el-tabs v-model="activeName" @tab-click="handleClick" class="loginTabs">
						<el-tab-pane label="密码登录" name="0">
							<el-form-item label="手机号码">
								<el-input class="mobilePhone" v-model="loginForm.phone" placeholder="请输入手机号码" maxlength="11" @blur="checkPhone(loginForm.phone)"></el-input>
							</el-form-item>
							<el-form-item label="登录密码">
								<el-input v-model="loginForm.password" placeholder="请输入登录密码" type="password"></el-input>
							</el-form-item>
						</el-tab-pane>
						<el-tab-pane label="验证码登录" name="1">
							<el-form-item label="手机号码">
								<el-input class="mobilePhone" v-model="loginForm.phone" placeholder="请输入手机号码" maxlength="11" @blur="checkPhone(loginForm.phone)"></el-input>
							</el-form-item>
							<el-form-item label="手机验证">
								<el-input v-model="loginForm.verifyCode" placeholder="请输入手机验证码" @blur="checkVerifyCode(loginForm.verifyCode)">
									<el-button v-if="getVeryCodeShow" slot="append" @click="getVeryCode">获取验证码</el-button>
									<span v-if="!getVeryCodeShow" slot="append">{{second}}S</span>
								</el-input>
							</el-form-item>
						</el-tab-pane>
					</el-tabs>
					<el-button type="primary" class="w100" @click="behaviorLogin">登录</el-button>
					<div class="forgetPassword el-row">
						<ul>
							<li class="fl ft14">
								<a href="#">忘记密码</a>
							</li>
							<li class="fl ft14">
								<a href="/register">立即注册</a>
							</li>
						</ul>
					</div>
				</el-form>
			</div>
		</el-row>
		<div id="captcha"></div>
	</div>
</template>

<script>
import MD5 from 'js-md5';
import EDUN from '@/assets/js/eDun.js';
import INTERFACE from '@/assets/js/interface/base.js';
import {STATUSCODE} from '@/assets/js/defined.js';
export default {
	components: {
	
	},
	data(){
		return {
			loginForm: {},
			activeName: '0',
			getVeryCodeShow: true,
			second: null,
			timer: null,
			element:'#captcha'
		}
	},
	mounted(){
		window['behaviorCallback']=(data)=>{
			// console.log(this.activeName)
			this.login();
		}
		EDUN.init("#captcha");
	},
	methods:{
		handleClick(tab){
			// console.log(tab);
		},
		checkPhone(val){
			let phoneExp= /^1[3456789]\d{9}$/;
			if(!phoneExp.test(val)){
				this.$message.warning("手机号码有误，请重新输入")
			}
		},
		//获取验证码
		getVeryCode(){
			//倒计时
			let that=this;
			let count= 60;
			this.getVeryCodeShow=false;
			if(!this.timer){
				that.getVeryCodeShow=false;
				that.second= count;
			}
			this.timer= setInterval(function(){
				if(that.second > 0 && that.second <= count){
					that.second--;
				}
				else{
					that.getVeryCodeShow=true;
					clearInterval(that.timer);
					that.timer=null;
				}
			},1000)
		},
		checkVerifyCode(val){
			this.$axiosJson.post(INTERFACE.checkVerifyCode,{
				verifyCode:this.loginForm.verifyCode
			})
			.then(res=>{
				if(res.data.status != STATUSCODE.code01){
					this.$message.warning("验证码输入不正确");
					this.loginForm.verifyCode= '';
				}
			}).catch(error=>{
				console.log(error);
			})
		},
		behaviorLogin(){
			EDUN.captchaIns.refresh();
			EDUN.captchaIns.popUp();
		},
		login(){
			let obj={};
			if(this.activeName == '0'){
				Object.assign(obj,{
					phone: this.loginForm.phone,
					password: MD5(this.loginForm.password)
				})
			}else{
				Object.assign(obj,{
					phone: this.loginForm.phone,
					verifyCode: this.loginForm.verifyCode
				})
			}
			this.$axiosJson.post(INTERFACE.login,obj)
			.then(res=>{
				if(res.data.status == STATUSCODE.code01){
					this.$router.push({
						path:'/index',
						query:{
							token: true
						}
					})
				}
			}).catch(error=>{
				console.log(error);
			})
		}
	}
}
</script>
