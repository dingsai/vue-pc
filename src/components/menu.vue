<template>
    <div class="sidebar-container" :class="{'collapse-width': isCollapse}">
        <div class="menuBar">
            <el-menu default-active="2" class="el-menu-vertical-demo" text-color="#fff" :collapse="isCollapse">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项1</el-menu-item>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </template>
                    <el-menu-item index="4-1">选项1</el-menu-item>
                    <el-menu-item index="4-2">选项1</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <img src="../assets/images/iscollapse.png" alt="" class="isCollapsBtn cursor" @click="showMenu">
    </div>
</template>
<script>
export default {
    data(){
        return {
            isCollapse:false,
        }
    },
    methods:{
        init(){
            this.isCollapse=false;
        },
        showMenu(){
            this.isCollapse=!this.isCollapse;
        }

    }

}
</script>
<style lang="less">
.collapse-width {
    width: 64px !important;
    
}
.sidebar-container {
    width: 170px;
    transition: width 0.28s;
    overflow: hidden;
    background:#00254a;
    
    .el-menu-vertical:not(.el-menu--collapse) {
        width: 170px;
        background:#00254a;
    }
    .isCollapsBtn{
        position: fixed;
        bottom:20px;
        left:20px;
        width:24px;
        height: 24px;
    }
}

    .menuBar,.el-menu--vertical{
        width:170px;
        overflow: hidden;
        background:#00254a;
        .el-menu{
            border:none;
            background:#00254a;
            li{
                &.is-active{
                    background:rgb(203, 227, 250);
                    color:#409EFF!important;
                }
            }
            .el-menu-item:hover{
                background:rgb(203, 227, 250);
                color:#409EFF!important;
            }
            .el-submenu.is-active .el-submenu__title{
                background:rgb(203, 227, 250);
                color:#409EFF!important;
            }
            //设置鼠标悬停时el-submenu的样式
            .el-submenu .el-submenu__title:hover{
                background-color: rgb(203, 227, 250) !important;
                color: #409EFF !important;
                i {
                    color: #409EFF;
                }
            }
        }
    }

</style>