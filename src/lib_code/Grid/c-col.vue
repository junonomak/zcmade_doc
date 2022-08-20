<!--  -->
<template>
    <div class="col" 
    :class="colClass"
    :style="gutterStyle">
        <slot></slot>
    </div>
</template>

<script setup lang='ts'>
import { defineProps, inject, ref, computed} from 'vue';

const props = defineProps({
    span: {
        type: [Number, String] 
    },
    offset: {
        type: [Number, String] 
    },
    phone: {
        type: [Object],
        validator(value: Object) {
            let key: string[] = Object.keys(value)
            let valid = true 
            key.forEach((e) => {
                if ('span, offset'.includes(e) === false){
                    valid = false
                }
            })
            return valid
        }
    },
    iPad:{
        type: [Object],
        validator(value: Object) {
            let key: string[] = Object.keys(value)
            let valid = true 
            key.forEach((e) => {
                if ('span, offset'.includes(e) === false){
                    valid = false
                }
            })
            return valid
        }
    },
    narrowPc: {
        type: [Object],
        validator(value: Object) {
            let key: string[] = Object.keys(value)
            let valid = true 
            key.forEach((e) => {
                if ('span, offset'.includes(e) === false){
                    valid = false
                }
            })
            return valid
        }
    },
    pc: {
        type: [Object],
        validator(value: Object) {
            let key: string[] = Object.keys(value)
            let valid = true 
            key.forEach((e) => {
                if ('span, offset'.includes(e) === false){
                    valid = false
                }
            })
            return valid
        }
    },
    widePc: {
    type: [Object],
        validator(value: Object) {
            let key: string[] = Object.keys(value)
            let valid = true 
            key.forEach((e) => {
                if ('span, offset'.includes(e) === false){
                    valid = false
                }
            })
            return valid
        }
    }
})

const gutter:any = inject('gutter')
const gutterStyle = computed(() => {
    return gutter.value ? 'padding: 0px ' + gutter.value/2 + 'px' : ''
})

const colClass = computed(() => {
    let arr = [
        props.offset && `offset-${props.offset}`,
        props.span && `col-${props.span}`,
        props.phone && `offset-phone-${props.phone.offset}` , props.phone && `span-phone-${props.phone.span}`,
        props.iPad && `offset-iPad-${props.iPad.offset}` , props.iPad && `span-iPad-${props.iPad.span}`,
        props.narrowPc && `offset-narrowPc-${props.narrowPc.offset}` , props.narrowPc && `span-narrowPc-${props.narrowPc.span}`,
        props.pc && `offset-pc-${props.pc.offset}` , props.pc && `span-pc-${props.pc.span}`,
        props.widePc && `offset-widePc-${props.widePc.offset}` , props.widePc && `span-widePc-${props.widePc.span}`,
    ]
    return arr
})

</script>

<style lang='scss' scoped>
.col{
    width: 50%;
    $class: col-;
    @for $n from 1 through 24 {
        &.#{$class}#{$n} {
            width: ($n/24) * 100%;
        }
    }
    $class: offset-;
    @for $n from 1 through 24 {
        &.#{$class}#{$n} {
            margin-left: ($n/24) * 100%;
        }
    }
    @media (max-width: 576px) {
        $class: span-phone-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n/24) * 100%;
            }
        }
        $class: offset-phone-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left: ($n/24) * 100%;
            }
        }
    }
    @media (min-width: 577px) and (max-width: 768px){
        $class: span-iPad-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n/24) * 100%;
            }
        }
        $class: offset-iPad-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left: ($n/24) * 100%;
            }
        }
    }
    @media (min-width: 769px) and (max-width: 992px){
        $class: span-narrowPc-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n/24) * 100%;
            }
        }
        $class: offset-narrowPc-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left: ($n/24) * 100%;
            }
        }
    }
    @media (min-width: 993px) and (max-width: 1200px){
        $class: span-pc-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n/24) * 100%;
            }
        }
        $class: offset-pc-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left: ($n/24) * 100%;
            }
        }
    }
    @media (min-width: 1201px){
        $class: span-widePc-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n/24) * 100%;
            }
        }
        $class: offset-widePc-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left: ($n/24) * 100%;
            }
        }
    }
}
</style>