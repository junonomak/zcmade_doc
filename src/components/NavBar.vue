<!--  -->
<template>
    <div class="navBar">
        <div v-for="item in showList">
            <h2>{{item.title}}</h2>
            <ul class="navbar_ui">
                <li v-for="items in item.detailList"
                class="navbar_il">
                    <router-link :to="`/doc/${items.url}`">
                        <span class="text">{{items.title}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="viewsContent">
        <router-view/>
    </div>
</template>

<script setup lang="ts">
// @ts-nocheck 
import { reactive, ref } from 'vue'; 
const showList = reactive([
    {
        title: '文档',
        detailList: [
            {
                title: '介绍',
                url: 'introduce'
            }
            ,{
                title: '安装',
                url: 'install'
            },{
                title: '开始',
                url: 'start'    
            }
        ]
    },
    {
        title: '组件列表',
        detailList: [
            {
                title: 'Icon组件',
                url: 'icon'
            },{
                title: 'Button组件',
                url: 'button'
            },{
                title: 'Card组件',
                url: 'card'
            },{
                title: 'Dialog组件',
                url: 'dialog'
            },{
                title: 'Gird组件',
                url: 'gird'
            },{
                title: 'Input组件',
                url: 'input'
            },{
                title: 'Layout组件',
                url: 'layout'
            },{
                title: 'Popover组件',
                url: 'popover'
            },{
                title: 'Switch组件',
                url: 'switch'
            },{
                title: 'Tabs组件',
                url: 'tabs'
            },{
                title: 'Toast组件',
                url: 'toast'
            }
        ]
    }
])
</script>

<style lang='scss' scoped>
.navBar{
    position: fixed;
    top: 0;
    left: 0;
    width: 150px;
    height: 100%;
    margin-top: 75px;
    padding: 16px;
    background-color: white;
    z-index: 8;

}
.navbar_ui{
    & > .navbar_il{
        width: 100%;
        margin-top: 20px;
        cursor:pointer;
        transition: all 0.2s;
        &:hover{
            color: black;
        }

    }
}
.viewsContent{
    width: 70%;
    height: 100%;
    margin:185px 0px 80px 240px;
}

.text{
    transition: all 0.3s;
    color: rgb(152, 152, 152);
    &:hover{
        color: black;
        border-bottom: 1px solid black;
    }
}
</style>