<!--  -->
<template>
    <h1>Switch组件</h1>
    <show-box title="常规使用:可为标签绑定事件并调用cToast方法,Toast弹出窗口后会在3秒后消失" :text="textA">
        <c-button @click="onlickA">绑定了toast的button</c-button>
    </show-box>
    <show-box title="可在cToast方法中传入showClose属性,让toast可手动关闭" :text="textD">
        <c-button @click="onlickD">我是传入showClose属性的toast</c-button>
    </show-box>
    <show-box title="可在cToast方法中传入center属性,让文字居中" :text="textB">
        <c-button @click="onlickB">我是传入center属性的toast</c-button>
    </show-box>
    <show-box title="可在cToast方法中传入delay属性,设置toast几秒后关闭" :text="textC">
        <c-button @click="onlickC">我是传入delay属性的toast</c-button>
    </show-box>

</template>

<script setup lang="ts">
// @ts-nocheck 
import showBox from '../../components/ShowBox.vue'
import { cToast, cButton } from 'zcmade_ui'
import { ref } from 'vue'

const a = '```'
const textA = ref(
`
template中:
${a}
<c-button @click="onlickA">我是绑定了toast的button</c-button>
${a}
script中:
${a}
import { cToast, cButton } from 'zcmade_ui'
import { ref } from 'vue'
// visible必传,text为toast显示的文字
const onlick = () => {
    cToast({visible: true, text: '我是一个toast点击事件'})
}
${a}`
)
const textB = ref(
`
template中:
${a}
<c-button @click="onlickB">我是传入center属性的toast</c-button>
${a}
script中:
${a}
import { cToast, cButton } from 'zcmade_ui'
import { ref } from 'vue'
// visible必传,text为toast显示的文字
const onlickB = () => {
    cToast({visible: true, text: '我是一个toast点击事件', showClose: true})
}
${a}`
)
const textC = ref(
`
template中:
${a}
<c-button @click="onlickC">我是传入delay属性的toast</c-button>
${a}
script中:
${a}
import { cToast, cButton } from 'zcmade_ui'
import { ref } from 'vue'
// visible必传,text为toast显示的文字
const onlickB = () => {
    cToast({visible: true, text: '我是一个有delay属性的点击事件', center: true, delay: 0.5, showClose: true})
}
${a}`
)
const textD = ref(
`
template中:
${a}
<c-button @click="onlickD">我是传入delay属性的toast</c-button>
${a}
script中:
${a}
import { cToast, cButton } from 'zcmade_ui'
import { ref } from 'vue'
// visible必传,text为toast显示的文字
const onlickD = () => {
    cToast({visible: true, text: '我是一个有showClose属性的点击事件', center: true, showClose: true})
}
${a}`
)


const onlickA = () => {
    cToast({visible: true, text: '我是一个toast点击事件', showClose: true})
}
const onlickB = () => {
    cToast({visible: true, text: '我是一个有center属性的点击事件', center: true, showClose: true})
}
const onlickC = () => {
    cToast({visible: true, text: '我是一个有delay属性的点击事件', center: true, delay: 0.5, showClose: true})
}
const onlickD = () => {
    cToast({visible: true, text: '我是一个有showClose属性的点击事件', center: true, showClose: true})
}



</script>

<style lang='scss' scoped>

</style>