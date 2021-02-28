import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';
import VueRouter from 'vue-router';
import router from './router';
import './assets/styles/styles.scss';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
