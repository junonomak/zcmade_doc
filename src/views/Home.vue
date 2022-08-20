<!--  -->
<template>
    <tar-bar></tar-bar>
    <div class="topConetent">
        <div class="imgBox">
            <img class="BgImg" src="https://hcmdpic.oss-cn-shenzhen.aliyuncs.com/zcmade_ui/homepage.jpg">
        </div>
        <h1>ZCmade_ui For Vue3</h1>
        <h3>一款基于vue3制作的UI框架</h3>
        <div class="buttonPosition">
            
            <c-button style="margin-right: 10px"><router-link to="/doc">查看文档</router-link></c-button>
            <c-button style="margin-left: 10px"><a href="https://github.com/junonomak/zcmade_doc">goGitHub</a></c-button>
        </div>
    </div>
    <div class="bottomContent">
        <div v-for="item in showList" class="bottomContentItems">
            <c-icon class="icon" :name="item.iconName"></c-icon>
            <div class="textContent">
                <h2>{{item.title}}</h2>
                <h4>{{item.content}}</h4>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-nocheck 
import TarBar from '../components/TarBar.vue'
import { cButton, cIcon, cCard } from 'zcmade_ui'
import { reactive, ref } from 'vue'; 

const showList = reactive([
    {
        iconName: 'vue',
        title: 'Vue 3',
        content: '使用了最新的Vue 3 Composition API'
    },
    {
        iconName: 'typescript',
        title: 'Typescript',
        content: '源码部分代码采用了Typescript编写'
    },
    {
        iconName: 'vite',
        title: 'Vite',
        content: '官网构建与打包都基于最新的vite2.x'
    },
    {
        iconName: 'document',
        title: '中文文档',
        content: '所有组件都拥有完整的文档使用说明以及示例'
    }
])
</script>

<style lang='scss' scoped>
.topConetent{
    margin-top: 75px;
    display: flex;
    height: 300px;
    width: 100%;
    position: relative;
    text-align: center;
    flex-direction: column;
    justify-content: center;

    & > h1{
        margin-top: -25px;
    }

    & > h1, h3, .buttonPosition{
        color: white;
        z-index: 9;
    }
    & > .buttonPosition{
        margin-top: 20px;
    }

    & > .imgBox{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 300px;
        clip-path: ellipse(80% 60% at 50% 40%);
        overflow: hidden;

        & > .BgImg{
            height: 300px;
            background-repeat: no-repeat;
            background-size: cover;
            filter: blur(5px);
            transform: scale(1.5);
            background-position: 50%;

            ::after{
                content: " ";   
                display: block;
                width: 100%;
                height: 400rpx;
                background: rgba(17,17,17,.2);
                // z-index: 1;
            }
        }
    }
}
.bottomContent{
    display: flex;
    justify-content: center;
    margin-top: 50px;
    flex-wrap: wrap;


    & > .bottomContentItems{
        margin-right: 50px;

        & > .icon{
            font-size: 34px;
        }

        & > .textContent{
            max-width: 250px;
        }
    }
}
</style>