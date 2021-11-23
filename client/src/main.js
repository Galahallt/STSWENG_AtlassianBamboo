import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  
import './styles/index.css';

const app = createApp(App);
app.mount("#app");
app.use(router);
