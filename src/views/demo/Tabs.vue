<!--  -->
<template>
    <h1>Switch组件</h1>
    <show-box title="需绑定初始选定的tabs-items以及tabs高度,以及可选择disable属性" :text="textA">
        <c-tabs v-model:selected="selectedValue">
            <c-tabs-head>
                <c-tabs-items name="onestar" :height="350">
                    <h2>我是一条信息</h2>
                    <h2>我是一条信息</h2>
                    <h2>我是一条信息</h2>
                    <h2>我是一条信息</h2>
                    <h2>我是一条信息</h2>
                    <h2>我是一条信息</h2>
                </c-tabs-items>
                <c-tabs-items name="1970s" :height="70">
                    <div>我也是一条信息</div>
                    <div>我也是一条信息</div>
                    <div>我也是一条信息</div>
                </c-tabs-items>
                <c-tabs-items name="jackstar" disable>
                    tabs3不可点击
                </c-tabs-items>
            </c-tabs-head>
        </c-tabs>
    </show-box>
</template>

<script setup lang="ts">
// @ts-nocheck 
import showBox from '../../components/ShowBox.vue'
import { cTabs, cTabsItems, cTabsHead } from 'zcmade_ui'
import { ref } from 'vue'

const a = '```'
const textA = ref(
`
template中:
${a}
<c-tabs v-model:selected="selectedValue">
    <c-tabs-head>
        <c-tabs-items name="onestar" :height="350">
            <h2>我是一条信息</h2>
            <h2>我是一条信息</h2>
            <h2>我是一条信息</h2>
            <h2>我是一条信息</h2>
            <h2>我是一条信息</h2>
            <h2>我是一条信息</h2>
        </c-tabs-items>
        <c-tabs-items name="1970s" :height="50">
            <h3>我也是一条信息</h3>
        </c-tabs-items>
        <c-tabs-items name="jackstar" disable>
            tabs3不可点击
        </c-tabs-items>
    </c-tabs-head>
</c-tabs>
${a}
script中:
${a}
import { cTabs, cTabsItems, cTabsHead } from 'zcmade_ui'
import { ref } from 'vue'
const selectedValue = ref('onestar')
${a}
`
)
const selectedValue = ref('onestar')
</script>

<style lang='scss' scoped>

</style>