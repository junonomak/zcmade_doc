<!--  -->
<template>
    <div class="group-button">
        <slot></slot>
    </div>
</template>

<script setup lang='ts'>
</script>

<style scpoed>
.group-button{
    display: inline-flex;
    justify-content: center;
    vertical-align: middle;
}
.group-button > .c-button {
    border-radius: 0;
    margin-right: -1px;
}
.group-button > .c-button:first-child{
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
}
.group-button > .c-button:last-child{
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
}
.group-button > .c-button:hover{
    position: relative;
    z-index: 1;
}
</style>