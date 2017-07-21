// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

// export const SocketInstance = socketio('http://192.168.178.72:3000');
Vue.use(VueSocketIO, 'http://192.168.178.72:3000');

import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

