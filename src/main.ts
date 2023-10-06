import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index';
import '@/assets/css/global.scss';
import Antd from 'ant-design-vue';
//tailwind
import './index.css'

const app = createApp(App);
app.use(router).use(Antd);
app.mount('#app');
