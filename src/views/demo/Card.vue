<!--  -->
<template>
    <h2>Card组件</h2>
    <show-box title="常规使用" :text="textA">
        <c-card class="card" title="我是title">我是内容</c-card>
    </show-box>
    <show-box title="支持hover和shadow属性" :text="textB">
        <c-card class="card" title="我是带有hoverable属性的card" hoverable>我是hover</c-card>
        <c-card class="card" title="我是带有shadow属性的card" shadow>我是shadow</c-card>
    </show-box>
</template>

<script setup lang="ts">
// @ts-nocheck 
import showBox from '../../components/ShowBox.vue'
import { ref } from 'vue'
import { cCard } from 'zcmade_ui'
const a = '```'
const textA = ref(
`
template中:
可传入title作为card的标题
${a}
<c-card title="我是title">我是内容</c-card>
${a}
script中:
${a}    
import { cCard } from 'zcmade_ui'
${a}`
)
const textB = ref(
`
template中:
可传入hoverable以及shadow
${a}
<c-card title="我是带有hoverable属性的card" hoverable>我是hover</c-card>
<c-card title="我是带有shadow属性的card" shadow>我是shadow</c-card>
${a}
script中:
${a}
import { cCard } from 'zcmade_ui'
${a}`
)
</script>
<style lang='scss' scoped>
.card{
    width: 97%;
}
</style>