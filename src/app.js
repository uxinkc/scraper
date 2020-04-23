

import Vue from 'vue';
import router from './_router/routes';
import { store } from './_store/store';
import App from './views/App';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});