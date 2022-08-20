<template>
    <button class="c-button" :class="{[`icon-${iconPosition}`]: true}" @click="loadingCheck">
        <!-- <i :class="{[`cmade-icon ${iconname}`]: true, 'button-loading': loading}"></i> -->
        <c-icon :class="{'button-loading': iconname === 'loading'}" :name="iconname"></c-icon>
        <slot></slot>
    </button>
</template>

<script setup>
import cIcon from '../Icon/c-icon.vue'
import {defineProps, ref} from 'vue'
const props = defineProps({
    icon: String,
    iconPosition: String,
    loading: Boolean
})
const iconname = ref(props.icon)

// 判断传入参数并作出改变
const init = () => {
}
init()

const loadingCheck = () => {
    if(props.loading === true){
        iconname.value = 'loading'
    }
}



</script>

<style scpoed>
    @keyframes spin{
        0%{ transform: rotate(0deg); }
        100%{ transform: rotate(360deg); }
    }
    :root{
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: rgb(202, 202, 202);
        --boder-color-hover: #666;
    }
    .c-button{
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;
        font: inherit;
        border: 1px solid var(--color);
        border-radius: var(--border-radius); 
        background-color: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        transition: all 0.3s;
        cursor:pointer;
    }
    .c-button:hover{
        border-color: var(--boder-color-hover);
    }
    .c-button:active{
        background-color: var(--button-active-bg);
    }
    .c-button:focus{
        outline: none;
    }
    .cmade-icon{
        margin-right: .1em;
    }

    .icon-right > .cmade-icon{
        order: 2;
        margin-left: .1em;
        margin-right: 0 ! important;
    }
    .button-loading{
        animation: spin 2s infinite linear;
    }


</style>
