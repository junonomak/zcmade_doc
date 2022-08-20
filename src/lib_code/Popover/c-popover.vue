<!--  -->
<template>
    <div class="popover">
        <div class="content-box" v-show="visible">
            <slot name="content"></slot>
        </div>
        <div class="popover-trigger"
        @click="triggerClick"
        @mouseenter="enterTrigger" 
        @mouseleave="leaveTrigger">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue'

const props = defineProps({
    trigger: {
        type: String,
        default: 'click'
    }
})

const visible = ref(false)

const closetrigger = () => {
    visible.value = false
}
const triggerClick = () => {
    if(props.trigger === 'click'){
        visible.value = !visible.value
        setTimeout(() => {
            closetrigger()
        }, 1500);
        
    }
}
const enterTrigger = () => {
    if(props.trigger === 'hover'){
        visible.value = true
    }
}
const leaveTrigger = () => {
    if(props.trigger === 'hover'){
        setTimeout(() => {
            closetrigger()
        }, 1500);
    }
}

</script>

<style lang='scss' scoped>
.popover{
    position: relative;
    display: inline-block;
    transition: all 0.3s;

    & > .content-box{
        position: absolute;
        top: 0;
        left: 0;
        min-width: 180px;
        max-width: 20em;
        padding: 12px;
        border: 1px solid rgb(206, 206, 206);
        border-radius: 5px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.12) 0 5px 10px;
        z-index: 98;

        &::after,
        &::before {
            content: '';
            display: block;
            border: 10px solid;
            border-color: transparent;
            position: absolute;
            width: 0;
            height: 0;
        }

        & {
            margin-top: -10px;
            transform: translateY(-100%);
            &::after,
            &::before {
                border-bottom: none;
            }
            &::after {
                left: 10px;
                top: calc(100% - 1px);
                border-top-color: #fff;
            }
            &::before {
                left: 10px;
                top: 100%;
                border-top-color: rgb(206, 206, 206);
            }
        }
    }
}
</style>