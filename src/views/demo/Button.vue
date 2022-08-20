<!--  -->
<template>
    <div>
        <h1>Button组件</h1>
        <show-box title="常规使用" :text="textA">
            <c-button>我是普通button</c-button>
        </show-box>
        <show-box title="支持传入icon以及icon位置" :text="textB">
            <c-button icon="like">带有icon的按钮</c-button>
            <c-button icon="like" iconPosition="right">带有icon的按钮</c-button>
        </show-box>
        <show-box title="支持loading" :text="textC">
            <c-button loading>点我触发</c-button>
        </show-box>
        <show-box title="支持GroupButton" :text="textD">
            <c-group-button>
                <c-button icon="left">上一页</c-button>
                <c-button icon="setting">设置</c-button>
                <c-button icon="right" iconPosition="right">下一页</c-button>
            </c-group-button>
        </show-box>
    </div>
</template>

<script setup lang="ts">
// @ts-nocheck 
import showBox from '../../components/ShowBox.vue'
import { cButton, cGroupButton } from 'zcmade_ui'
import { ref } from 'vue'

const a = '```'
const textA = ref(
`
template中:
${a}
<c-button>我是普通button</c-button>
${a}
script中:
${a}
import { cButton } from 'zcmade_ui'
${a}
`
)
const textB = ref(
`
template中:
${a}
<c-button icon="like">带有icon的按钮</c-button>
<c-button icon="like" iconPosition="right">带有icon的按钮</c-button>
${a}
script中:
${a}
import { cButton } from 'zcmade_ui'
${a}
`
)
const textC = ref(
`
template中:
${a}
<c-button loading>点我触发</c-button>
${a}
script中:
${a}
import { cButton } from 'zcmade_ui'
${a}
`
)
const textD = ref(
`
template中:
${a}
<c-group-button>
    <c-button icon="left">上一页</c-button>
    <c-button icon="setting">设置</c-button>
    <c-button icon="right" iconPosition="right">下一页</c-button>
</c-group-button>
${a}
script中:
${a}
import { cButton, cGroupButton } from 'zcmade_ui'
${a}
`
)
</script>

<style lang='scss' scoped>

</style>