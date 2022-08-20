<!--  -->
<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script setup>
import { provide, watch, ref, inject } from 'vue'

const props = defineProps({
    selected: {
        type: String,
        required: true
    }
})

const fatherSelected = ref(props.selected)
watch(
    () => props.selected,
    () => {
        fatherSelected.value = props.selected
    },
    {immediate: false, deep: false}
)

const emits = defineEmits(['update:selected'])
const selectChange = (value) => {
    emits('update:selected', value)
}

provide('selected', fatherSelected);
provide('selectChange', selectChange)


</script>

<style lang='scss' scoped>
.tabs{
    width: 100%;
    border: 1px solid rgb(237, 237, 237);
    border-radius: 4px;
    padding: 16px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.12) 0 5px 10px;
    
}
</style>