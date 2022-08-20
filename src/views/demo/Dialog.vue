<!--  -->
<template>
    <h1>Dialog组件</h1>
    <show-box title="常规使用" :text="textA">
        <c-button @click="dialogClick">触发dialog的按钮</c-button>
        <c-dialog v-model:visible="dialogVisible">
            <h2>我是内容</h2>
        </c-dialog>
    </show-box>
    <show-box title="可设置点击背景是否可关闭" :text="textB">
        <c-button @click="dialogClick2">包含backgroundCloseAble的按钮2</c-button>   
        <c-dialog v-model:visible="dialogVisible2" backgroundCloseAble>
            <h2>我包含backgroundCloseAble</h2>
        </c-dialog>
    </show-box>
    <show-box title="可传入一个回调函数来监听取消和确定事件" :text="textC">
        <c-button @click="dialogClick3">包含确定和取消函数的按钮</c-button>
        <c-dialog v-model:visible="dialogVisible3" :confirm="onConfirm" :cancel="onCancel">
            <h2>包含确定和取消函数</h2>
        </c-dialog>
    </show-box>
</template>

<script setup lang="ts">
// @ts-nocheck 
import showBox from '../../components/ShowBox.vue'
import { cDialog, cButton } from 'zcmade_ui'
import { ref } from 'vue'

const a = '```'
const textA = ref(
`
template中:
${a}
<c-button @click="dialogClick">触发dialog的按钮</c-button>
<c-dialog v-model:visible="dialogVisible">
    <h2>我是内容</h2>
</c-dialog>
${a}
script中:
${a}
import { cDialog, cButton } from 'zcmade_ui'
import { ref } from 'vue'
const dialogVisible2 = ref(false)
const dialogClick2 = () => {
    dialogVisible2.value = !dialogVisible2.value
}
${a}
`
)
const textB = ref(
`
template中:
${a}
<c-button @click="dialogClick2">包含backgroundCloseAble的按钮2</c-button><br>
<c-dialog v-model:visible="dialogVisible2" backgroundCloseAble>
    <h2>我包含backgroundCloseAble</h2>
</c-dialog>
${a}
script中:
${a}
import { cDialog, cButton } from 'zcmade_ui'
import { ref } from 'vue'
const dialogVisible2 = ref(false)
const dialogClick2 = () => {
    dialogVisible2.value = !dialogVisible2.value
}
${a}
`
)
const textC = ref(
`
template中:
${a}
<c-button @click="dialogClick3">包含确定和取消函数的按钮</c-button>
<c-dialog v-model:visible="dialogVisible3" :confirm="onConfirm" :cancel="onCancel">
    <h2>包含确定和取消函数</h2>
</c-dialog>
${a}
script中:
${a}
const dialogVisible3 = ref(false)
const dialogClick3 = () => {
    dialogVisible3.value = !dialogVisible3.value
}
// onConfirm返回结果是false时点击确定不会关闭dialog
const onConfirm = () => {
    console.log('我是确定我被触发了');
    return false
}
const onCancel = () => {
    console.log('我是取消我被触发了');
}
${a}
`
)
const dialogVisible = ref(false)
const dialogClick = () => {
    dialogVisible.value = !dialogVisible.value
}
const dialogVisible2 = ref(false)
const dialogClick2 = () => {
    dialogVisible2.value = !dialogVisible2.value
}
const dialogVisible3 = ref(false)
const dialogClick3 = () => {
    dialogVisible3.value = !dialogVisible3.value
}
const onConfirm = () => {
    console.log('我是确定我被触发了');
    return false
}
const onCancel = () => {
    console.log('我是取消我被触发了');
}
</script>

<style lang='scss' scoped>

</style>