<!--  -->
<template>
    <div class="introduce">
    <show-markdown :text="text"></show-markdown>
    </div>
</template>

<script setup lang="ts">
// @ts-nocheck 
import ShowMarkdown from '../../components/ShowMarkdown.vue'
import { ref } from 'vue'
const a = '`'
const text = ref(
`# 介绍

Coast UI for Vue3 是一款基于 ${a}Vue3${a} 和 ${a}TypeScript${a} 的 UI 组件库，因此拥有良好的代码提示，使用非常方便。组件样式采用了简洁的设计风格。

这款组件库使用了最新的技术栈，全程手写，组件库源码不采用任何第三方库。源码拥有良好的编码风格，每个组件的代码都足够简洁，十分易读。

文档完整，拥有完整的组件使用示例代码。

官网基于 ${a}vite2.x${a} 搭建。并发布到了作者自己的阿里云服务器中。

源代码放在了 [GitHub](https://github.com/junonomak/zcmade_doc)上, 您也可以直接在文档中查看每个组件的示例。`
)
</script>

<style lang='scss' scoped>
.introduce{
    width: 100%;
    height: 100%;
    // margin:85px 0px 0px 160px; 
    // background-color: black;
}
</style>