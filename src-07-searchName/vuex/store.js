import Vue from 'vue'
import Vuex from 'vuex'
import stata from './stata'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
export default new Vuex.Store({
  state:stata,
  mutations,
  actions,
  getters
})
