<template>
    <show-markdown :text="text"></show-markdown>
</template>

<script setup lang="ts">
// @ts-nocheck 
import ShowMarkdown from '../../components/ShowMarkdown.vue'
import { ref } from 'vue'

const a = '```' 
const text = ref(
`# 开始使用
请先[安装](/doc/install)本组件库。
然后在你的main.js文件中写入下面的代码

${a}
import { cButton, cTabs, cSwitch, cDialog } from "zcmade_ui";
import "zcmade_ui/style.css";
import "zcmade_ui/icon-font/iconfont.css";
${a}

就可以使用我提供的组件了。
## Vue 单文件组件

代码示例：
${a}
<div>
    <c-button>按钮</c-button>
</div>
${a}
以及:
${a}
import { cButton, cTabs, cSwitch, cDialog } from "zcmade_ui"
${a}`
)
</script>

<style lang='scss' scoped>
</style>