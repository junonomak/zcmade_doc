<!--  -->
<template>
    <div class="dialog-background" v-show="visible"  @click="backgroundClose"></div>
    <div class="dialog" v-show="visible">
        <div class="dialog-head">
            <span>{{title}}</span>
            <c-icon name="delete" @click="onclose" style="cursor:pointer;"></c-icon>
        </div>
        <div class="content">
            <slot></slot>
        </div>
        <div class="footer">
            <c-button @click="onconfirm">确定</c-button>
            <c-button @click="oncancel">取消</c-button>
        </div>
    </div>

</template>

<script setup lang='ts'>
import cIcon from '../Icon/c-icon.vue'
import cButton from '../Button/c-button.vue'
import { ref, defineEmits  } from 'vue'

const props = defineProps({
    visible: {
        type: Boolean,
        defalut: false
    },
    title: {
        type: String,
        default: '提示'
    },
    backgroundCloseAble: {
        type: Boolean,
        default: false
    },
    confirm: {
        type: Function
    },
    cancel: {
        type: Function
    }
})

const emits = defineEmits(['update:visible']);
const onclose = () => {
  emits('update:visible', false);
}

const backgroundClose = () => {
    if(!props.backgroundCloseAble){
        onclose()
    }
}

const onconfirm = () => {
    // 判断的时候会执行一遍
    if(props.confirm?.() !== false){
        onclose()
        
    }
}

const oncancel = () => {
    props.cancel?.()
    onclose()
}
</script>

<style lang='scss' scoped>
.dialog-background{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 99;
}
.dialog{
    display: flex;
    flex-direction: column;
    position: fixed;
    top:45%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 300px;
    min-height: 200px;
    border: 1px solid rgb(69, 69, 69);
    border-radius: 4px;
    background-color: white;
    z-index: 100;

    & > .dialog-head{
        padding: 12px 16px;
        border-bottom: 1px solid rgb(147, 147, 147);
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
    }
    & > .content{
        flex: 1;
        width: 100%;
        padding: 12px 16px;
    }
    & > .footer {
        border-top: 1px solid rgb(147, 147, 147);
        padding: 12px 16px;
        text-align: right;
    }
}
</style>