import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import gAuth from 'vue3-google-oauth2';
import FontAwesomeIcon from './utilities/fontawesome.js';
import './styles/index.css';
import vue3StarRatings from 'vue3-star-ratings';

const app = createApp(App);

let gAuthClientId =
  '231543448601-uol3p2k1r1u5dc17l6uqnrkoqlsgoeiv.apps.googleusercontent.com';

const gAuthOptions = {
  clientId: gAuthClientId,
  scope: 'email',
  prompt: 'consent',
  fetch_basic_profile: true,
};

app.component('vue3-star-ratings', vue3StarRatings);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(store);
app.use(gAuth, gAuthOptions);
app.mount('#app');
