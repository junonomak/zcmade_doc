<!--  -->
<template>
    <div>
        <h1>Gird组件</h1>
        <show-box title="常规使用" :text="textA">
            <c-row class="row">
                <c-col span="2"><div class="col1"></div></c-col>
                <c-col span="14"><div class="col2"></div></c-col>
                <c-col span="8"><div class="col1"></div></c-col>
            </c-row> 
            <c-row class="row">
                <c-col span="8"><div class="col1" ></div></c-col>
                <c-col span="8"><div class="col2"></div></c-col>
                <c-col span="8"><div class="col1" ></div></c-col>
            </c-row> 
            <c-row class="row">
                <c-col span="4"><div class="col1" ></div></c-col>
                <c-col span="10"><div class="col2"></div></c-col>
                <c-col span="10"><div class="col1" ></div></c-col>
            </c-row> 
        </show-box>
        <show-box title="Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0" :text="textB">
            <c-row gutter="20" class="row">
                <c-col span="8"><div class="col1" ></div></c-col>
                <c-col span="8"><div class="col2"></div></c-col>
                <c-col span="8"><div class="col1" ></div></c-col>
            </c-row> 
        </show-box>
        <show-box title="支持偏移指定的栏数，通过制定 Col 组件的 offset 属性可以指定分栏偏移的栏数" :text="textC">
            <c-row gutter="20" class="row">
                <c-col span="8"><div class="col1" ></div></c-col>
                <c-col span="6" offset="2"><div class="col2"></div></c-col>
                <c-col span="4" offset="4"><div class="col1" ></div></c-col>
            </c-row>
            <c-row gutter="20" class="row">
                <c-col span="5" offset="3"><div class="col1" ></div></c-col>
                <c-col span="5" offset="3"><div class="col2"></div></c-col>
                <c-col span="7" offset="1"><div class="col1" ></div></c-col>
            </c-row> 
        </show-box>
        <show-box title="参照 Bootstrap 的 响应式设计，预设五个响应尺寸phone,iPad,narrowPc,pc,widePc" :text="textD">
            <c-row>
                <c-col class="col1" :phone="{span:4, offset:0}" :iPad="{span:10}" :narrowPc="{span:4}" :pc="{span:10}" :widePc="{span:4}"></c-col>
                <c-col class="col2" :phone="{span:16, offset:0}" :iPad="{span:4}" :narrowPc="{span:16}" :pc="{span:4}" :widePc="{span:16}"></c-col>
                <c-col class="col1" :phone="{span:4, offset:0}" :iPad="{span:10}" :narrowPc="{span:4}" :pc="{span:10}" :widePc="{span:4}"></c-col>
            </c-row>
        </show-box>
    </div>
</template>

<script setup lang="ts">
// @ts-nocheck 
import showBox from '../../components/ShowBox.vue'
import { cRow, cCol } from 'zcmade_ui'
import { ref } from 'vue'

const a = '```'
const textA = ref(
`
template中:
${a}
// 通过基础的 24 分栏，迅速简便地创建布局。
<c-row class="row">
    <c-col span="2"><div class="col1"></div></c-col>
    <c-col span="14"><div class="col2"></div></c-col>
    <c-col span="8"><div class="col1"></div></c-col>
</c-row> 
<c-row class="row">
    <c-col span="8"><div class="col1" ></div></c-col>
    <c-col span="8"><div class="col2"></div></c-col>
    <c-col span="8"><div class="col1" ></div></c-col>
</c-row> 
<c-row class="row">
    <c-col span="4"><div class="col1" ></div></c-col>
    <c-col span="10"><div class="col2"></div></c-col>
    <c-col span="10"><div class="col1" ></div></c-col>
</c-row>  
${a}
script中:
${a}
import { cRow, cCol } from 'zcmade_ui'
${a}
style中:
${a}
.col1{
    height: 30px;
    background-color: rgb(247, 247, 247);
    border-radius: 4px;
}
.col2{
    height: 30px;
    background-color: rgb(199, 229, 251);
    border-radius: 4px;
}
${a}
`
)
const textB = ref(
`
template中:
${a}
// 传入的值单位为px
<c-row gutter="20" class="row">
    <c-col span="8"><div class="col1" ></div></c-col>
    <c-col span="8"><div class="col2"></div></c-col>
    <c-col span="8"><div class="col1" ></div></c-col>
</c-row> 
${a}
script中:
${a}
import { cRow, cCol } from 'zcmade_ui'
${a}
style中:
${a}
.col1{
    height: 30px;
    background-color: rgb(247, 247, 247);
    border-radius: 4px;
}
.col2{
    height: 30px;
    background-color: rgb(199, 229, 251);
    border-radius: 4px;
}
${a}
`
)
const textC = ref(
`
template中:
${a}
// 通过基础的 24 分栏，迅速简便地创建布局。
<c-row gutter="20" class="row">
    <c-col span="8"><div class="col1" ></div></c-col>
    <c-col span="6" offset="2"><div class="col2"></div></c-col>
    <c-col span="4" offset="4"><div class="col1" ></div></c-col>
</c-row> 
<c-row gutter="20" class="row">
    <c-col span="5" offset="3"><div class="col1" ></div></c-col>
    <c-col span="5" offset="3"><div class="col2"></div></c-col>
    <c-col span="7" offset="1"><div class="col1" ></div></c-col>
</c-row> 
${a}
script中:
${a}
import { cRow, cCol } from 'zcmade_ui'
${a}
style中:
${a}
.col1{
    height: 30px;
    background-color: rgb(247, 247, 247);
    border-radius: 4px;
}
.col2{
    height: 30px;
    background-color: rgb(199, 229, 251);
    border-radius: 4px;
}
${a}
`
)
const textD = ref(
`
template中:
${a}
// 同样支持offset属性
<c-row>
    <c-col class="col1" :phone="{span:4, offset:0}" :iPad="{span:10}" :narrowPc="{span:4}" :pc="{span:10}" :widePc="{span:4}"></c-col>
    <c-col class="col2" :phone="{span:16, offset:0}" :iPad="{span:4}" :narrowPc="{span:16}" :pc="{span:4}" :widePc="{span:16}"></c-col>
    <c-col class="col1" :phone="{span:4, offset:0}" :iPad="{span:10}" :narrowPc="{span:4}" :pc="{span:10}" :widePc="{span:4}"></c-col>
</c-row>
${a}
script中:
${a}
import { cRow, cCol } from 'zcmade_ui'
${a}
style中:
${a}
.col1{
    height: 30px;
    background-color: rgb(247, 247, 247);
    border-radius: 4px;
}
.col2{
    height: 30px;
    background-color: rgb(199, 229, 251);
    border-radius: 4px;
}
${a}
`
)
</script>

<style lang='scss' scoped>
.col1{
    height: 30px;
    background-color: rgb(247, 247, 247);
    border-radius: 4px;
}
.col2{
    height: 30px;
    background-color: rgb(199, 229, 251);
    border-radius: 4px;
}

</style>