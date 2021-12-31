import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages';

import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import { store } from './store';
import router from './router';
import '@/style/index.less';
import './permission';

import App from './App.vue';

const app = createApp(App);

const i18n = createI18n({
  locale: 'zh-CN',
  globalInjection: true,
  messages,
});
app.use(i18n);
app.use(TDesign);
app.use(store);
app.use(router);

app.mount('#app');
