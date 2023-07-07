import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { createPopper } from '@popperjs/core';

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$serverUrl = '//localhost:8080/api';
app.use({ createPopper });
app.use(router).mount('#app');