<!--  -->
<template>
    <div class="layout" :class="{'is-have-sider': isHasAside}">
        <slot></slot>
    </div>
</template>

<script setup lang='ts'>
import { VNode, useSlots, computed} from 'vue';
import cSide from './c-sider.vue'

// 使用slots.default获取子节点
// 并用child.type === cSide的方式判断是否含有此节点
const slots = useSlots()
const isHasAside = computed(() => {
    if (slots?.default) {
        const children: Array<VNode> = slots.default();
        const isHave = children.some(child => {
            return child.type === cSide
        })
        return isHave
    } else {
        return false;  
    }
})
</script>

<style lang='scss' scoped>
.layout{
    width: 100%;
    display: flex;
    flex-direction: column;
    &.is-have-sider{
        flex-direction: row;
    }
}

</style>