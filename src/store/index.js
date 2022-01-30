import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navSwitch: true
  },
  mutations: {
    _toggleFrame(state,){
      state.navSwitch = !state.navSwitch;
  },
  },
  actions: {
    toggleFrame(context){
      context.commit("_toggleFrame");
  },
  },
  getters: {
    getNavSwitchStatus: (state) =>  {
      return state.navSwitch
   },
  }
})
