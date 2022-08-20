<!--  -->
<template>
    <div class="showBox">
        <c-card :title="title" shadow>
            <slot></slot>
            <div class="showCode">
                <c-button @click="showCodeClick">查看代码</c-button>
                <hr v-show="isShow" style="border-top:1px dashed rgb(199, 229, 251);">
                <show-markdown v-show="isShow" :text="text"></show-markdown>
            </div>
        </c-card>
    </div>
</template>

<script setup lang="ts">
// @ts-nocheck 
import { cCard, cButton } from 'zcmade_ui'
import ShowMarkdown from './ShowMarkdown.vue'
import { ref } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    }
})
const isShow = ref(false)
const showCodeClick = () => {
    isShow.value = !isShow.value
}

</script>

<style lang='scss' scoped>
.showCode{
    margin-top: 20px;
}
.showBox{
    margin-top: 30px;
}
</style>