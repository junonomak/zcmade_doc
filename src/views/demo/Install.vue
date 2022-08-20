<!--  -->
<template>
    <show-markdown :text="text"></show-markdown>
</template>

<script setup lang="ts">
// @ts-nocheck 
import ShowMarkdown from '../../components/ShowMarkdown.vue'
import { ref } from 'vue'
const a = '```'
const text = ref(
`# 安装
打开终端运行下列命令：
${a}
// 建议使用cnpm
cnpm install coast-ui-vue3
${a}
或
${a}
yarn add coast-ui-vue3
${a}`
)
</script>

<style lang='scss' scoped>

</style>