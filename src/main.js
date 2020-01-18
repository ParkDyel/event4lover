import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'reset-css';

import PlugInTool from '@/plugins/tools';

import baseModal from '@/components/modal';

Vue.config.productionTip = false;

Vue.use(PlugInTool, {
  debug: process.env.VUE_APP_DEBUG,
});

Vue.component('base-modal', baseModal);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
