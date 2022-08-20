<!--  -->
<template>
    <h1>Input组件</h1>
    <show-box title="常规使用" :text="textA">
        <c-input modelValue="我是input"></c-input>
    </show-box>
    <show-box title="支持v-model" :text="textB">
        <c-input v-model="inputValue"></c-input>
        <span style="margin-left:20px">inputValue:{{inputValue}}</span>
    </show-box>
    <show-box title="支持disabled,readonly,error三种状态" :text="textC">
        <c-input modelValue="disabled" disabled></c-input>
        <c-input modelValue="readonly" readonly></c-input>
        <c-input error="出现错误"></c-input>
    </show-box>
</template>

<script setup lang="ts">
// @ts-nocheck 
import showBox from '../../components/ShowBox.vue'
import { cInput } from 'zcmade_ui'
import { ref } from 'vue'
const a = '```'
const textA = ref(
`
template中:
${a}
<c-input modelValue="我是input"></c-input>
${a}
script中:
${a}
import { cInput } from 'zcmade_ui'
${a}
`
)
const textB = ref(
`
template中:
${a}
<c-input v-model="inputValue"></c-input>
<span style="margin-left:20px">inputValue:{{inputValue}}</span>
${a}
script中:
${a}
import { cInput } from 'zcmade_ui'
import { ref } from 'vue'
const inputValue = ref('我绑定了v-model')
${a}
`
)
const textC = ref(
`
template中:
${a}
<c-input modelValue="disable" disable></c-input>
<c-input modelValue="readonly" readonly></c-input>
<c-input error="出现错误"></c-input>
${a}
script中:
${a}
import { cInput } from 'zcmade_ui'
${a}
`
)
const inputValue = ref('我绑定了v-model')
</script>

<style lang='scss' scoped>

</style>