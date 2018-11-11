import Vue from 'vue'
import Vueresource from 'vue-resource'
import App from './App'
Vue.use(Vueresource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
