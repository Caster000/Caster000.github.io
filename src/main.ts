import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.scss';
import App from './App.vue';
import PrimeVue from 'primevue/config';

import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-blue/theme.css';
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(PrimeVue);
app.use(router)

app.mount('#app')