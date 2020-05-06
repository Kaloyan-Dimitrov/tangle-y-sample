import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue';
import './plugins/bootstrap-vue'
import App from './App.vue';
import Vuex from 'vuex'
import {
  rtdbPlugin
} from 'vuefire'

Vue.use(rtdbPlugin)

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    currentRules: ''
  },
  mutations: {
    async updateRules( /** state */ ) {
      // state.currentRules = (await functions.httpsCallable('getRules')()).data;
    },
  }
})
Vue.config.productionTip = false
if (store.state.currentRules == '') store.commit('updateRules')
new Vue({
  render: h => h(App),
  store
}).$mount('#app')