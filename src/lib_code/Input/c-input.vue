<!--  -->
<template>
    <div class="wrapper" :class="{'inputError': error}">
        <input :value="modelValue" @input="emit('update:modelValue', $event.target.value)" :disabled="disabled" :readonly="readonly">
        <div class="errorMes">
            <c-icon name="error" v-if="error"></c-icon>
            {{error}}
        </div>
    </div>
</template>

<script setup>
import cIcon from '../Icon/c-icon.vue'
import { defineProps, defineEmits } from 'vue';

const changeValue = (e) => {
    console.log(e);
}
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    readonly: {
        type: Boolean,
        default: false
    },
    error: {
        type: String,
        default: ''
    }
})

const emit = defineEmits()

const init = () => {
}
init()

</script>

<style lang='scss' scoped>
$height: 32px; 
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$height: 32px;
$border-shadow-color: rgba(0, 0 , 0, 0.5);
.wrapper{
    margin-bottom: 25px;
    position: relative;
    font-size: $font-size;
    display: inline-block;
    transition: all 0.3s;
    > input {
        height: $height;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: 0 8px;
        &:hover{
            border-color: $border-color-hover;
        }
        &:focus{
            box-shadow: inset 0 1px 3px $border-shadow-color;
            border: 1px solid ;
            outline: none;
        }
        &[disabled], &[readonly]{
            border-color: #ccc;
            color: #ccc;
            cursor: not-allowed;
        }

    }
    height: 30px;
}
.inputError{
    > input{
        border-color: #b81f00;
        &:focus{
        border-color: #961900;
        box-shadow: inset 0 1px 3px #961900;
        }
        &:hover{
        border-color: #961900;
        }
    } 
}
.errorMes{
    position: absolute;
    top: $height + 2px;
    left: 2px;
    color: #b81f00; 
}
</style>