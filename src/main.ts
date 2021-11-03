import { createApp } from 'vue';
import App from './App.vue';
import * as volar from '@volar/experimental/client';
import store from './store';
import router from './router';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(volar.vuePlugin);

app.mount('#app');
