<template>
	<div class="userInfo">
		<Title text="用户信息"></Title>
        <el-card>
            <el-form ref="searchCard" class="searchCard" :style="{height:$store.state.common.main.containHeight + 'px'}">
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
                    
            </el-form>
        </el-card>
	</div>
</template>

<script>
export default {
	data(){
        return {
            searchForm:{}
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            
        }
    }
}
</script>
