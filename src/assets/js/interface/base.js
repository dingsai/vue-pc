const USER_CENTER = '/app/mock/290365/userCenter';
export default {
    register: USER_CENTER + '/register',//用户注册
    login: USER_CENTER + '/login',//用户登录
    verifyCaptchaId: USER_CENTER + '/verifyCaptchaId',//行为验证码校验
    checkVerifyCode: USER_CENTER + '/checkVerifyCode',//校验手机验证码
    userCompanyInfo: USER_CENTER + '/userCompanyInfo',//获取用户及企业信息
    resourceList: USER_CENTER + '/resourceList',//获取资源菜单
}