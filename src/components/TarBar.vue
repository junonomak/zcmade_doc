<!--  -->
<template>
    <div class="tabbar">
        <div class="homeIcon">
            <router-link to="/home"><c-icon class="icon" name="converse"></c-icon></router-link>
        </div>
            <span class="docText">
                <router-link to="/doc">文档</router-link>
            </span>
    </div>
</template>

<script setup lang="ts">
// @ts-nocheck 
import { cIcon } from 'zcmade_ui'
</script>

<style lang='scss' scoped>
.tabbar{
    position: fixed;
    top: 0;
    left: 0;
    box-sizing:border-box;  
    display: flex;
    justify-content: space-between;
    height: 75px;
    width: 100%;
    padding: 16px;
    background-color: white;
    z-index: 8;
    transition: all 0.3s;
    line-height: 43px;
    box-shadow: rgba(0, 0, 0, 0.12) 0 8px 30px;



    & > .docText{
        transition: all 0.3s;
        cursor: pointer;
        & > :hover{
            color: rgb(104, 59, 0);
        }
    }

    & > .homeIcon{
        margin-bottom: 10px;
        transition: all 0.3s;
        margin: 0px 0px 0px 5px;
        &:hover{
            border-bottom: 1px solid rgb(104, 59, 0);
        }
    }
}
.icon{
    cursor: pointer;
    font-size: 34px;
}
</style>