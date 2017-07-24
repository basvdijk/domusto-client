// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex'
import VueSocketIO from 'vue-socket.io';

import axios from 'axios';

import App from '@/components/App';
import router from './router';
import store from './vuex/store';
import api from '@/api';

import CONFIG from '@/config';

Vue.use(Vuex);
Vue.use(VueSocketIO, CONFIG.server.address);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  created: function () {

    api.get('output').then()
      .then(response => {
        this.$store.commit('SET_OUTPUTS', { outputs: response.data });
      })
      .catch(e => {
        console.log(e);
      });

  },
});
