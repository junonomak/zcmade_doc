<!--  -->
<template>
    <i :class="`cmade-icon ${name}`"></i>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue';
const props = defineProps({
    name: String
})
</script>

<style lang='scss' scoped>
</style>