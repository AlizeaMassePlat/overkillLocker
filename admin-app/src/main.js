// src/main.js
import { createApp } from 'vue';
import App from './views/App.vue';
import router from './router';
import "./style/variables.css";
const app = createApp(App);

app.use(router);
app.mount('#app');
