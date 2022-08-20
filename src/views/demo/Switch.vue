<!--  -->
<template>
    <h1>Switch组件</h1>
    <show-box title="常规使用" :text="textA">
        <c-switch v-model:switchValue="switchValue" ></c-switch>
        <c-switch v-model:switchValue="switchValue1" disable style="margin-top: 15px"></c-switch>
    </show-box>

</template>

<script setup lang="ts">
// @ts-nocheck 
import showBox from '../../components/ShowBox.vue'
import { cSwitch } from 'zcmade_ui'
import { ref } from 'vue'

const a = '```'
const textA = ref(
`
template中:
${a}
<c-switch v-model:switchValue="switchValue" ></c-switch>
<c-switch v-model:switchValue="switchValue1" disable></c-switch>
${a}
script中:
${a}
import { cSwitch } from 'zcmade_ui'
import { ref } from 'vue'
const switchValue = ref(false)
const switchValue1 = ref(false)
${a}
`
)

const switchValue = ref(false)
const switchValue1 = ref(false)
</script>

<style lang='scss' scoped>

</style>