import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import Introduce from '../views/demo/Introduce.vue'
import Install from '../views/demo/Install.vue'
import Start from '../views/demo/Start.vue'
import Icon from '../views/demo/Icon.vue'
import Button from '../views/demo/Button.vue'
import Card from '../views/demo/Card.vue'
import Dialog from '../views/demo/Dialog.vue'
import Gird from '../views/demo/Gird.vue'
import Input from '../views/demo/Input.vue'
import Layout from '../views/demo/Layout.vue'
import Popover from '../views/demo/Popover.vue'
import Switch from '../views/demo/Switch.vue'
import Tabs from '../views/demo/Tabs.vue'
import Toast from '../views/demo/Toast.vue'

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/doc',
        name: 'Doc',
        component: Doc,
        meta: {
            title: '文档详情'
        },
        children: [
            { path: '', redirect: '/doc/introduce' },
            {
                path: 'introduce',
                component: Introduce
            },{
                path: 'install',
                component: Install
            },{
                path: 'start',
                component: Start
            },{
                path: 'icon',
                component: Icon
            },{
                path: 'button',
                component: Button
            },{
                path: 'card',
                component: Card
            },{
                path: 'dialog',
                component: Dialog
            },{
                path: 'gird',
                component: Gird
            },{
                path: 'input',
                component: Input
            },{
                path: 'layout',
                component: Layout
            },{
                path: 'popover',
                component: Popover
            },{
                path: 'switch',
                component: Switch
            },{
                path: 'tabs',
                component: Tabs
            },{
                path: 'toast',
                component: Toast
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router