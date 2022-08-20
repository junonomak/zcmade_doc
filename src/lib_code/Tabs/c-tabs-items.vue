<!--  -->
<template>
    <div class="tabshead">
        <div :class="{'tabs-disable-outside': disable}">
            <div class="tabsItem" :class="{'selectedClass': selected == name, 'tabs-disable-inside': disable}"  @click="itemsClick">{{name}}</div>
        </div>
        <div :style="boxHeight" v-show="selected == name">
            <div class="content" v-show="selected == name">
                <slot></slot>
            </div>
        </div>

    </div>
</template>

<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    disable: {
        type: Boolean,
        default: false
    },
    height: {
        tyle: Number,
        default: 40
    }
})


const selected = inject('selected')
const selectChange = inject('selectChange')

const boxHeight = computed(() => {
    return `height: ${props.height}px`
})

const itemsClick = () => {
    selectChange(props.name)
}
</script>

<style lang='scss' scoped>

.tabsItem{
    margin-right: 20px;
    padding: 8px 0;
    margin: 0 16px;
    cursor: pointer;
    color: #8d8d8d;
    transition: all 0.4s;
}
.selectedClass{
    color: black;
    font-weight: 500;
    border-bottom: 1px solid black;
}
.content{
    position: absolute;
    left: 30px;
    margin-top: 10px;
}
.tabs-disable{
    pointer-events: none;
    color: rgb(172, 172, 172);
}
.tabs-disable-outside{
    cursor: not-allowed !important;
}
.tabs-disable-inside{
    pointer-events: none;
}
</style> 