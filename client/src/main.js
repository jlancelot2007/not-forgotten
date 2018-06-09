// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import {sync} from 'vuex-router-sync'
import createPersistedState from 'vuex-persistedstate'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'
import * as VueGoogleMaps from "vue2-google-maps";
import VueYouTube from 'vue-youtube'

import lodash from 'lodash';    

Vue.use(VueGoogleMaps, {
   load: {
    key: "AIzaSyBYL8cUz642HwLtdzdamXdwLFjGFAa4sP0",
    libraries: "places" // necessary for places input
  }
});
Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueYouTube)
sync(store, router)
Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
