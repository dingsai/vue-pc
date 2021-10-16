<template>
	<div class="userList">
        <Title text="用户列表"></Title>
        <el-card ref="searchCard" class="searchCard">
            <el-form ref="form" :model="searchForm" label-width="120px" class="searchForm">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="用户名">
                            <el-input v-model="searchForm.userName" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="手机号">
                            <el-input v-model="searchForm.phone" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="状态">
                            <el-select v-model="searchForm.status" placeholder="请选择">
                                <el-option label="请选择" value=''></el-option>
                                <el-option v-for="item in $store.state.userManager.enumList.userEnableStatus" :key="item.code" :label="item.name" :value="item.code"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="-1" class="fr">
                        <el-button type="primary" plain @click="resetForm">重置</el-button>
                        <el-button type="primary" @click="doSearch(1)">查询</el-button>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
        <el-card class="mt10">
            <vuescroll :ops="$store.state.common.main.ops" :style="{'max-height':$store.state.common.main.scrollHeight + 'px'}">
                <el-table :data="userList" border header-cell-class-name="table-cell header-cell" :height="$store.state.common.main.TableBodyHeight">
                    <el-table-column  type="index" label="序号" width="80"></el-table-column>
                    <el-table-column  prop="userName" label="用户" width="260"></el-table-column>
                    <el-table-column  prop="phone" label="手机号" width="260"></el-table-column>
                    <el-table-column  prop="userRole" label="角色" width="260"></el-table-column>
                    <el-table-column  prop="status" label="状态" width="260">
                        <template slot-scope="scope">
                            {{$store.getters.getPublicStatus(scope.row.status,'userEnableStatus')}}
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" @click="disponse('edit',scope)">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </vuescroll>
            <el-row v-if="total > 0" class="mt20">
                <Page class="fr" :total="total" :currentPage="currentPage" @changePageSize="doSearch"></Page>
            </el-row>
        </el-card>
	</div>
</template>

<script>
import INTERFACE from '@/assets/js/interface/userManager.js';
import {STATUSCODE} from '@/assets/js/defined.js';
import Page from '@/components/commonModule/page';
export default {
    components:{
        Page
    },
	data(){
        return {
            searchForm:{
                userName:'',
                phone:'',
                status:'',
            },
            userList:[],
            total: 0,
            currentPage: 1,
            pageRow: 0,
        }
    },
    watch:{
        '$route.query':function(newVal,oldVal){
            this.getUserList();
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            this.getUserList();
        },
        resetForm(){
            Object.assign(this.searchForm,this.$options.data().searchForm);
            this.doSearch();
        },
        doSearch(pageData){
            this.$router.push({
                path:'/userList?token=true',
                query:{
                    userName: this.searchForm.userName || '',
                    phone: this.searchForm.phone || '',
                    status: this.searchForm.status || '',
                    page: (pageData && pageData.pageCurrent) || 1,
                    pageRow: (pageData && pageData.pageSize) || this.$store.state.common.main.pageRow,
                }
            })
        },
        getUserList(){
            let queryParams=this.$route.query;
            this.pageRow=queryParams.pageRow
            this.updateParams(queryParams);
            Object.assign(queryParams,{
                page:Number(queryParams.page),
                pageRow:Number(queryParams.pageRow)
            })
            this.$axios.get(INTERFACE.userList,{
                params:queryParams
            }).then(res=>{
                if(res.data.status == STATUSCODE.code01){
                    this.userList= res.data.data;
                    this.total = res.data.total || 0;
                }
            }).catch(error=>{
                console.log(error);
            })
        },
        updateParams(params){
            Object.keys(this.searchForm).forEach((item,index)=>{
                this.searchForm[item]= params[item];
            })
        }
    }
}
</script>
