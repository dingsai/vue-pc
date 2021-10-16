<template>
    <div class="sidebar-container" :class="{'collapse-width': isCollapse}">
        <div class="menuBar">
            <el-menu :default-active="menuActiveIndex" class="el-menu-vertical-demo" text-color="#fff" :collapse="isCollapse">
                <div v-for="(item,index) in menuList" :key="item.id" >
                    <el-menu-item v-if="item.children.length == 0" :index="currentLevelOneIndex + '-' + index.toString()" @click="menuClick(item)">
                        <i class="el-icon-document"></i>
                        <span slot="title">{{item.sourceName}}</span>
                    </el-menu-item>
                    <el-submenu v-else-if="item.children && item.children.length > 0" :index="index.toString()">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span slot="title">{{item.sourceName}}</span>
                        </template>
                        <el-menu-item v-for="(item1,index1) in item.children" :index="currentLevelOneIndex +'-'+ index.toString()+'-'+index1.toString()" :key="item1.id"  @click="menuClick(item1)">{{item1.sourceName}}</el-menu-item>
                    </el-submenu>
                    </div>
            </el-menu>
        </div>
        <img src="../assets/images/iscollapse.png" alt="" class="isCollapsBtn cursor" @click="showMenu">
    </div>
</template>
<script>
export default {
    props:{
		menuList:{
			type: Array,
      		default: null
		},
        menuActiveIndex:{
			type: String,
      		default: null
		},
        currentLevelOneIndex:{
            type: String,
      		default: null
        }
	},
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
        },
        menuClick(data){
            this.$router.push({
                path: data.sourceUrl,
                query:{
                    token: true
                }
            })
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
            .el-submenu.is-active{
                background:rgb(203, 227, 250);
                color:#409EFF!important;
            }
            .el-submenu__title{
                background:rgb(0, 37, 74);
                color:rgb(191, 203, 217)!important;
            }
            //设置鼠标悬停时el-submenu的样式
            .el-submenu .el-submenu__title:hover{
                background:rgb(0, 37, 74)!important;
                 color:#409EFF!important;
                i {
                    color: #409EFF;
                }
            }
        }
    }

</style>