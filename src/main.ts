import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'zcmade_ui/style.css'
import 'zcmade_ui/icon-font/iconfont.css'

// @ts-ignore
import router from './router/index.js'
// markdown样式
// @ts-ignore
import VMdPreview from '@kangc/v-md-editor/lib/preview';
// @ts-ignore
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
VMdPreview.use(vuepressTheme);

const app = createApp(App)
app.use(router).use(VMdPreview).mount('#app')

