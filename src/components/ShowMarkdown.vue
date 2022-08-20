<!-- 测试markdown转html -->
<template>
    <v-md-preview :text="text"></v-md-preview>
</template>

<script setup lang="ts">
// @ts-nocheck 
const props = defineProps({
    text: {
        type: String,
        default: ''
    }
})
</script>