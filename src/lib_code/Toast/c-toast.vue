<!--  -->
<template>
    <div class="toast" v-show="_visible" :style="`top: ${top}px;`" @mouseenter="clearTimer" @mouseleave="startTimer">
        <div class="inside-toast">
            <span :style="center && 'text-align: center;'">{{text}}</span>
            <c-icon v-if="showClose" class="toast-icon" name="delete" @click="handleClose"></c-icon>
        </div>

    </div>
    
</template>

<script setup>   
import cIcon from '../Icon/c-icon.vue'
import { defineProps, onMounted, ref } from 'vue'

const props = defineProps({
    visible: {
        type: Boolean,
        default: false,
    },
    text: {
        type: String,
        required: false,
        default: '',
    },
    showClose: {
        type: Boolean,
        required: false,
        default: false,
    },
    id: {
        type: String,
        required: false,
        default: '',
    },
    top: {
        type: Number,
        default: 10,
        required: false,
    },
    center: {
        type: Boolean,
        default: false,
    },
    delay: {
        type: Number,
        default: 3,
    }
})

// 直接修改props中visible的值会被报警告
const _visible = ref(false)
onMounted(() => {
    if (props.visible) {
        _visible.value = true
        startTimer()
    }
}) 

const emits = defineEmits(['destroy']);
const handleClose = () => {
    _visible.value = false;
    emits('destroy');
}

const startTimer = () => {
    if (props.delay > 0) {
        timer.value = setTimeout(() => {
            handleClose();
        }, props.delay * 1000);
    }
};

const timer = ref(null)
const clearTimer = () => {
    clearTimeout(timer.value);
    timer.value = null;
};
</script>

<style lang='scss' scoped>
.toast{
    position: fixed;
    left: 50%;
    transform: translate(-50%);
    min-width: 380px;
    border-radius: 5px;
    background: #fff;
    color: black;
    z-index: 9;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
    padding: 15px;
    transition: top 0.3s;
}
.inside-toast{
    display: flex;
    justify-content: space-between;
    & > .toast-icon{
        position: relative;
        top: 5px;
        &:hover {
            color: rgb(129, 0, 0);
            cursor:pointer;
        }
    }
    &> span{
        flex: 1;
    }
}

</style>