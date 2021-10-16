<template>
	<div class="register">
        <el-row>
			<el-col :span="12">
				<el-form ref="registerForm" :model="registerForm" :rules="rules"  label-width="80px" class="registerForm" label-position="right">
					<el-form-item label="用户姓名" prop="userName">
						<el-input v-model="registerForm.userName" placeholder="请输入用户姓名"></el-input>
					</el-form-item>
					<el-form-item label="手机号码" prop="phone">
						<el-input v-model="registerForm.phone" placeholder="请输入手机号码" maxlength="11"></el-input>
					</el-form-item>
					<el-form-item label="设置密码" prop="password">
						<el-input v-model="registerForm.password" placeholder="请输入登录密码" type="password"></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="repeatPassword">
						<el-input v-model="registerForm.repeatPassword" placeholder="请再次确认密码" type="password"></el-input>
					</el-form-item>
					<el-form-item label="手机验证" prop="verifyCode">
						<el-input v-model="registerForm.verifyCode" placeholder="请输入手机验证码" @blur="checkVerifyCode(registerForm.verifyCode)">
							<el-button v-if="getVeryCodeShow" slot="append" @click="getVeryCode">获取验证码</el-button>
							<span v-if="!getVeryCodeShow" slot="append">{{second}}S</span>
						</el-input>
					</el-form-item>
					<el-form-item label="">
						<el-checkbox v-model="isRead">我已阅读 <a href="#">《用户注册协议》</a>和<a href="#">《隐私政策》</a></el-checkbox>
					</el-form-item>
					<el-form-item label="">
						<el-button type="primary" class="w100" @click="toRegister">注册</el-button>
					</el-form-item>
				</el-form>
			</el-col>
        </el-row>
	</div>
</template>

<script>
import MD5 from 'js-md5';
import INTERFACE from '@/assets/js/interface/base.js';
import {STATUSCODE} from '@/assets/js/defined.js';
import {
	userName,
	phone,
	password,
	verifyCode
} from '@/assets/js/rules/common.js';
export default {
	data(){
		const checkPassword = (rule,value,callback)=>{
			if(value === ''){
				callback(new Error('请重复密码'))
			}
			if(value != this.registerForm.password){
				callback(new Error('两次密码输入不一致'))
			}else{
				callback()
			}
		}
		return {
			registerForm:{
                userName:''
            },
            getVeryCodeShow: true,
			second: null,
			timer: null,
			isRead: false,
			rules:{
				userName,
				phone,
				password,
				repeatPassword:[
					{required: true, message: '请重复密码',trigger: 'blur'},
					{validator: checkPassword, message: '两次密码输入不一致',trigger: 'blur'}
				],
				verifyCode
			}
		}
	},
	mounted(){
		this.init();
	},
	methods:{
		init(){
			
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
				verifyCode:this.registerForm.verifyCode
			})
			.then(res=>{
				if(res.data.status != STATUSCODE.code01){
					this.$message.warning("验证码输入不正确");
					this.registerForm.verifyCode= '';
				}
			}).catch(error=>{
				console.log(error);
			})
		},
		toRegister(){
			this.$refs['registerForm'].validate(valid=>{
				if(valid){
					if(!this.isRead){
						this.$message.warning("请勾选阅读协议");
						return false;
					}
					Object.assign(this.registerForm, {
						password: MD5(this.registerForm.password),
						repeatPassword: MD5(this.registerForm.repeatPassword)
					})
					this.$axiosJson.post(INTERFACE.register,this.registerForm)
					.then(res=>{
						if(res.data.status == STATUSCODE.code01){
							this.isLogin(res.data.data.message);
						}
					}).catch(error=>{
						console.log(error);
					})
				}
			})
		},
		isLogin(msg){
			this.$confirm(msg + ',是否登录?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'success'
			}).then(() => {
				this.$axiosJson.post(INTERFACE.login,{
					phone: this.registerForm.phone,
					password: MD5(this.registerForm.password)
				})
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
			}).catch(() => {
				this.$message.info("已取消登录，请回首页手动登录");   
			});
		}
	}
}
</script>
