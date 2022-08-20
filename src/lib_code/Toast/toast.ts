import {  createApp, createVNode, render, VNode  } from "vue";
import toast from "./c-toast.vue";

const toastQueue: Array<VNode> = [];
const app = createApp(toast);
const dom = document.createElement("div");
const instant:any = app.mount(dom); 
document.body.appendChild(dom)
let currentIndex = 1

const cToast = (options: object) => {
    const _options = {
        ...options,
        id: `options-id-${currentIndex++}`
    }
    createToast(_options)
}

const createToast = (options: any) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const vm = createVNode(toast, {
        ...options,
        top: 10 + toastQueue.length * 60,
        // 通过createVNode传入的props中的函数可以通过emits的方式进行调用，调用函数名字要加on
        onDestroy: () => {
            onDestroy(options.id, div);
        },
    })
    toastQueue.push(vm)
    render(vm, div);
}

const onDestroy = (id: string, wrapper: HTMLDivElement) => {  
    // 在dom中移除节点 
    render(null, wrapper);
    wrapper.remove();
    // findindex返回第一个id相同的索引
    const currentIndex = toastQueue.findIndex(item => {
        const _id = item.component?.props.id
        return _id === id
    })
    // 删除在数组中id的toast
    if (currentIndex === -1) return;
    const h = toastQueue[currentIndex].el?.offsetHeight;
    toastQueue.splice(currentIndex, 1);
    if (toastQueue.length < 1) return;
    for (let i = currentIndex; i < toastQueue.length; i++) {
    // 让组件的上升对应的高度
    // @ts-ignore
    toastQueue[i].component.props.top = parseInt(toastQueue[i].el?.style.top) - h - 60;
    // @ts-ignore
    // console.log(toastQueue[i]);
    }
}

// 总结一下什么意思：先搞好组件和样式
// 在新建的ts文件中导出一个方法，这个方法用来向toast传入props，并且创建实例并挂载到dom上
export { cToast }