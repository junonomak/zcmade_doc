<!--  -->
<template>
    <div>
        <h1>Icon组件</h1>
        <show-box title="常规使用" :text="text">
            <h3>可提供各式图标</h3>
            <c-icon class="cIcon" name="converse"></c-icon>
            <c-icon class="cIcon" name="dovument"></c-icon>
            <c-icon class="cIcon" name="webpack"></c-icon>
            <c-icon class="cIcon" name="vite"></c-icon>
            <c-icon class="cIcon" name="typescript"></c-icon>
            <c-icon class="cIcon" name="delete"></c-icon>
            <c-icon class="cIcon" name="error"></c-icon>
            <c-icon class="cIcon" name="warning"></c-icon>
            <c-icon class="cIcon" name="download"></c-icon>
            <c-icon class="cIcon" name="setting"></c-icon>
            <c-icon class="cIcon" name="down"></c-icon>
            <c-icon class="cIcon" name="left"></c-icon>
            <c-icon class="cIcon" name="right"></c-icon>
            <c-icon class="cIcon" name="like"></c-icon>
            <c-icon class="cIcon" name="shopping"></c-icon>
        </show-box>
    </div>

</template>

<script setup lang="ts">
// @ts-nocheck 
import ShowMarkdown from '../../components/ShowMarkdown.vue'
import showBox from '../../components/ShowBox.vue'
import { cIcon } from 'zcmade_ui'
import { ref } from 'vue'
const a = '```'
const text = ref(
`在template中:

    <c-icon class="cIcon" name="converse"></c-icon>
    <c-icon class="cIcon" name="dovument"></c-icon>
    <c-icon class="cIcon" name="webpack"></c-icon>
    <c-icon class="cIcon" name="vite"></c-icon>
    <c-icon class="cIcon" name="typescript"></c-icon>
    <c-icon class="cIcon" name="delete"></c-icon>
    <c-icon class="cIcon" name="error"></c-icon>
    <c-icon class="cIcon" name="warning"></c-icon>
    <c-icon class="cIcon" name="download"></c-icon>
    <c-icon class="cIcon" name="setting"></c-icon>
    <c-icon class="cIcon" name="down"></c-icon>
    <c-icon class="cIcon" name="left"></c-icon>
    <c-icon class="cIcon" name="right"></c-icon>
    <c-icon class="cIcon" name="like"></c-icon>
    <c-icon class="cIcon" name="shopping"></c-icon>
    
script中:
${a}
import { cIcon } from 'zcmade_ui'
${a}
在style中:
可根据调整font-size的大小调整图标大小
${a}
.cIcon{
    font-size: 50px;
}
${a}`
)
</script>

<style lang='scss' scoped>

.cIcon{
    font-size: 50px;
}
</style>