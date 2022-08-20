<!--  -->
<template>
    <h1>Popover组件</h1>
    <show-box title="支持hover触发和click触发两种形式" :text="textA">
        <c-popover trigger="hover">
            <template v-slot:content>
                <div>很高兴给你看到这一段话,我是zcmade_ui组件库里的popover!!!!我将会被hover触发</div>
            </template>
            <c-button icon="setting">hover触发</c-button>
        </c-popover>
        <c-popover trigger="click">
            <template v-slot:content>
                <div>很高兴给你看到这一段话,我是zcmade_ui组件库里的popover!!!!我将会被click触发</div>
            </template>
            <c-button icon="setting">click触发</c-button>
        </c-popover>
    </show-box>


</template>

<script setup lang="ts">
// @ts-nocheck 
import showBox from '../../components/ShowBox.vue'
import { cPopover, cButton } from 'zcmade_ui'
import { ref } from 'vue'

const a = '```'
const textA = ref(
`
template中:
${a}
// 触发一点五秒后将关闭
<c-popover trigger="hover">
    <template v-slot:content>
        <div>很高兴给你看到这一段话,我是zcmade_ui组件库里的popover!!!!我将会被hover触发</div>
    </template>
    <c-button icon="setting">hover触发</c-button>
</c-popover>
<c-popover trigger="click">
    <template v-slot:content>
        <div>很高兴给你看到这一段话,我是zcmade_ui组件库里的popover!!!!我将会被click触发</div>
    </template>
    <c-button icon="setting">click触发</c-button>
</c-popover>
${a}
script中:
${a}
import { cPopover, cButton } from 'zcmade_ui'
${a}
`
)
</script>

<style lang='scss' scoped>

</style>