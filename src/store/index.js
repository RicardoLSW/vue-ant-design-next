import { createStore } from 'vuex'
import getters from './getters'
import permission from './modules/permission'

export default createStore({
  modules: {
    permission
  },
  state: {},
  mutations: {},
  actions: {},
  getters
})
