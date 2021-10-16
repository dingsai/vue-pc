import Vue from 'vue';
import axios from 'axios';  
import Qs from 'qs';  
import {loading,Message} from 'element-ui';

let responseArr = [function (data) {
    let jsonData= JSON.parse(data)
    let thisStatus= jsonData.state || jsonData.status;
    return jsonData;
}]

//请求拦截器操作
let interceptorRequest= (config)=>{
    return config;
}
//响应拦截器操作
let interceptorReponse= (response)=>{
    return response;
}

let errorRes= (error)=>{
    return error;
}

//axios实例
let axiosForm = axios.create({
    baseURL:'/',
    headers:{
        'Content-type':'application/x-www-form-urlencoded',//application/json;charset=UTF-8
    },
    transformRequest:[function(data){
        return Qs.stringify(data);
    }],
    transformResponse:responseArr
})
let axiosJson = axios.create({
    baseURL:'/',
    headers:{
        'Content-type':'application/json;charset=UTF-8',
    },
    transformResponse:responseArr
})
let axiosFormData = axios.create({
    baseURL:'/',
    headers:{
        'Content-type':'multipart/form-data',
    },
    transformResponse:responseArr
})

//请求拦截器
axiosForm.interceptors.request.use(interceptorRequest,errorRes)
axiosJson.interceptors.request.use(interceptorRequest,errorRes)
axiosFormData.interceptors.request.use(interceptorRequest,errorRes)

//响应拦截器
axiosForm.interceptors.response.use(interceptorReponse,errorRes)
axiosJson.interceptors.response.use(interceptorReponse,errorRes)
axiosFormData.interceptors.response.use(interceptorReponse,errorRes)


Vue.prototype.axios=axios;
Vue.prototype.$axios=axiosForm;
Vue.prototype.axiosJson=axiosJson;
Vue.prototype.axiosFormData=axiosFormData;

export default axiosJson;