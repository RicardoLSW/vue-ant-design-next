import 'ant-design-vue/dist/antd.less'
import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './permission'
import 'vite-plugin-svg-icons/register'

const app = createApp(App)

app.use(router).use(store).use(Antd).use(ProLayout).use(PageContainer).mount('#app')
