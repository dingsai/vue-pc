import Vue from 'vue';
import Axios from 'axios';
import INTERFACE from './interface/base.js'
import {STATUSCODE} from './defined.js'
export default {
    captchaIns : null,
    // 若使用降级方案引用初始化js
    // initNECaptcha替换成initNECaptchaWithFallback
    init:function(ele){
        let _this=this;
        window.initNECaptcha({
            captchaId: 'db476fb5a69f47c49e1cddaceea30368',
            element: ele,
            mode: 'popup',
            width: '320px',
            onVerify: function (err, data) {
                /**
                 * 第一个参数是err（Error的实例），验证失败才有err对象
                 * 第二个参数是data对象，验证成功后的相关信息，data数据结构为key-value，如下：
                 * {
                 *   validate: 'xxxxx' // 二次验证信息
                 * }
                **/
                if (err) return  // 当验证失败时，内部会自动refresh方法，无需手动再调用一次

                // 点击登录按钮后可调用服务端接口，以下为伪代码，仅作示例用
                Axios.get(INTERFACE.verifyCaptchaId, {
                    params:{
                        validate: data.validate
                    }
                }).then(res=>{
                    if(res.data.status == STATUSCODE.code01){
                        console.log("验证成功啦")
                        //触发页面登录操作
                        console.log(data)
                        window.behaviorCallback(data);
                    }else{
                        _this.captchaIns.refresh()
                    }
                })
            }
        }, function  onload (instance) {
            _this.captchaIns = instance
        }, function  onerror (err) {
            // 初始化失败后触发该函数，err对象描述当前错误信息
            console.log(err,'行为验证码初始化失败')
        })   
    }
}
