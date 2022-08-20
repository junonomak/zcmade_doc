
<template>
    <h1>Layout组件</h1>
    <show-box title="常规使用:可根据调整c-sider的位置快速构造布局" :text="textA">
        <c-layout>
            <c-header class="header">heard</c-header>
            <c-content class="content">content</c-content>
            <c-footer class="footer">footer</c-footer>
        </c-layout>

        <c-layout style="margin-top: 20px">
            <c-header class="header">header</c-header>
            <c-layout style="height: 100px">
                <c-sider class="side">sider</c-sider>
                <c-content class="content" style="height: 100px">content</c-content>
            </c-layout>
            <c-footer class="footer"></c-footer>
        </c-layout>

        <c-layout style="margin-top: 20px">
            <c-header class="header">header</c-header>
            <c-layout style="height: 100px">
                <c-content class="content">content</c-content>
                <c-sider class="side">sider</c-sider>
            </c-layout>
            <c-footer class="footer">footer</c-footer>
        </c-layout>

        <c-layout style="margin-top: 20px">
            <c-sider class="side" style="height: 300px">sider</c-sider>
            <c-layout>
                <c-header class="header">header</c-header>
                <c-content class="content">content</c-content>
                <c-footer class="footer">footer</c-footer>
            </c-layout>
        </c-layout>
    </show-box>
</template>

<script setup lang="ts">
// @ts-nocheck 
import showBox from '../../components/ShowBox.vue'
import { cLayout, cHeader, cContent, cFooter, cSider } from 'zcmade_ui'
import { ref } from 'vue'

const a = '```'
const textA = ref(
`
template中:
${a}
<c-layout>
    <c-header class="header">heard</c-header>
    <c-content class="content">content</c-content>
    <c-footer class="footer">footer</c-footer>
</c-layout>

<c-layout style="margin-top: 20px">
    <c-header class="header">header</c-header>
    <c-layout style="height: 100px">
        <c-sider class="side">sider</c-sider>
        <c-content class="content" style="height: 100px">content</c-content>
    </c-layout>
    <c-footer class="footer"></c-footer>
</c-layout>

<c-layout style="margin-top: 20px">
    <c-header class="header">header</c-header>
    <c-layout style="height: 100px">
        <c-content class="content">content</c-content>
        <c-sider class="side">sider</c-sider>
    </c-layout>
    <c-footer class="footer">footer</c-footer>
</c-layout>

<c-layout style="margin-top: 20px">
    <c-sider class="side" style="height: 300px">sider</c-sider>
    <c-layout>
        <c-header class="header">header</c-header>
        <c-content class="content">content</c-content>
        <c-footer class="footer">footer</c-footer>
    </c-layout>
</c-layout>
${a}
script中:
${a}
import { cLayout, cHeader, cContent, cFooter, cSider } from 'zcmade_ui'
${a}
style中:
${a}
.header{
    text-align: center;
    height: 100px;
    line-height: 100px;
    background-color: rgb(147, 205, 255);
}
.side{
    height: 100px;
    text-align: center;
    line-height: 100px;
    background-color: rgb(64, 166, 255);
}
.footer{
    height: 100px;
    text-align: center;
    line-height: 100px;
    background-color: rgb(192, 225, 253);
}
.content{
    height: 100px;
    text-align: center;
    line-height: 100px;
    background-color: rgb(169, 216, 255);
}
${a}
`
)
</script>

<style lang='scss' scoped>
.header{
    text-align: center;
    height: 100px;
    line-height: 100px;
    background-color: rgb(147, 205, 255);
}
.side{
    height: 100px;
    text-align: center;
    line-height: 100px;
    background-color: rgb(64, 166, 255);
}
.footer{
    height: 100px;
    text-align: center;
    line-height: 100px;
    background-color: rgb(192, 225, 253);
}
.content{
    height: 100px;
    text-align: center;
    line-height: 100px;
    background-color: rgb(169, 216, 255);
}
</style>