import { authOptions } from './auth/options';
import { createApp } from 'vue';
import App from './App.vue';
import * as volar from '@volar/experimental/client';
import store from './store';
import router from './router';
import { registerAxiosInterceptors } from '@gravitano/vue-auth';
import axios from 'axios';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(volar.vuePlugin);

registerAxiosInterceptors(axios, authOptions, store, router);

app.mount('#app');
