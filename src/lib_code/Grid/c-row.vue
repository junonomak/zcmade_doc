<!--  -->
<template>
    <div class="row" :style="gutterStyle">
        <slot></slot>
    </div>
</template>

<script setup lang='ts'>
import { defineProps, provide, ref, computed} from 'vue';
const props = defineProps({ 
    gutter: {
        type: [String, Number],
        default: 0
    }
})

const init = (): void => {
}
init()

const gutterStyle = computed(() => {
    return  props.gutter ? `margin: 0px ${-props.gutter / 2}px` : '';
})

const fatherGutter = ref(props.gutter)
provide('gutter', fatherGutter);    


</script>

<style lang='scss' scoped>
.row{
    display: flex;
}
</style>