<!--  -->
<template>
    <div class="card" :class="{'card-hover': hoverable, 'card-shadow': shadow}">
        <div class="card-head">
            <h2>{{title}}</h2>
        </div>
        <div class="card-footer">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue'
const props = defineProps({
    title: {
        type: String,
        default: '' 
    },
    hoverable: {
        type: Boolean,
        defalut: false
    },
    shadow: {
        type: Boolean,
        defalut: false
    }
})
</script>

<style lang='scss' scoped>
.card{
    width: 100%;
    padding: 16px;
    border: 1px solid rgb(237, 237, 237);
    border-radius: 4px;
    & > .card-head{
        width: 100%;
        border-bottom: 2px solid rgb(237, 237, 237);
        padding-bottom: 16px;
    }
    & > .card-footer{
        width: 100%;
        padding-top: 16px;
    }
}
.card-hover{
    transition: all 0.3s;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.12) 0 8px 30px;
    }
}
.card-shadow{
    transition: all 0.3s;
    box-shadow: rgba(0, 0, 0, 0.12) 0 5px 10px;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.12) 0 8px 30px;
    }
}
</style>