import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import core from './states/core';
// import { core } from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  // modules: {
  //   core: { state: core, mutations, actions },
  // },
  state: {
    core
  },
  mutations,
  actions
});
