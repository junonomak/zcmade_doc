<!--  -->
<template>
    <div :class="{'switch-disable-outside': disable}">
        <div class="switch" :class="{'switchChose': switchValue, 'switch-disable': disable}" @click="switchClick">
            <span class="switch-span"></span>
        </div>
    </div>

</template>

<script setup lang='ts'>
import { ref, watch } from 'vue';

const porps = defineProps({
    switchValue: {
        type: Boolean,
        default: false
    },
    disable: {
        type: Boolean,
        defaule: true
    }
})

const switchChange = ref(!porps.switchValue)
watch(
    () => porps.switchValue,
    () => {
        switchChange.value = !porps.switchValue
    }
)

const emits = defineEmits(['update:switchValue'])
const switchClick = () => {
    emits('update:switchValue', switchChange.value)
}

</script>

<style lang='scss' scoped>
.switch{
    height: 22px;
    width: 44px;
    border: none;
    background: gray;
    position: relative;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.25s;

    & > .switch-span{
        position: absolute;
        top: 2px;
        left: 2px;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background: #fff;
        transition: all 0.25s;
    }
}
.switchChose{
    background: rgb(49, 138, 246);
    position: relative;
    & > .switch-span{
        top: 2px;
        left: 24px;
    }
}
.switch-disable{
    pointer-events: none;
}
.switch-disable-outside{
    width: 44px;
    cursor:not-allowed;
}
</style>