import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

var firebase = require("firebase/app");
require("firebase/auth");
// require("firebase/database");
// require("firebase/firestore");
// require("firebase/messaging");
// require("firebase/functions");

var firebaseConfig = {
  apiKey: "AIzaSyCPDbehQPooK4HvRqDm-PL1hjuRbNBrXPM",
  authDomain: "autentificacion-473e2.firebaseapp.com",
  databaseURL: "https://autentificacion-473e2.firebaseio.com",
  projectId: "autentificacion-473e2",
  storageBucket: "autentificacion-473e2.appspot.com",
  messagingSenderId: "476573345056",
  appId: "1:476573345056:web:782c7e2f0b28a5e2732345"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
