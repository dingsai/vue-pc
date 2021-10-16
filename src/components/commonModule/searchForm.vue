<template>
	<div class="searchForm">
		<el-form ref="form" :model="form" label-width="120px">
            <el-form-item :label="form.label">
                <el-input v-model="form.propName"></el-input>
            </el-form-item>
        </el-form>    
	</div>
</template>

<script>
import INTERFACE from '@/assets/js/interface/userManager.js';
import {STATUSCODE} from '@/assets/js/defined.js';
export default {
	data(){
        return {
            form: {},
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            this.getUserList();
        },
        getUserList(){
            this.$axios.get(INTERFACE.userList).then(res=>{
                if(res.data.status == STATUSCODE.code01){
                    this.userList= res.data.data;
                    console.log( this.userList)
                }
            }).catch(error=>{
                console.log(error);
            })
        }
    }
}
</script>
