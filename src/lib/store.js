'use strict'

// import Vuex from 'vuex'
//
// export default {
//   init (Vue) {
//     Vue.use(Vuex)
//   },
//   createStore (state, mutations) {
//     return new Vuex.Store({
//       state,
//       mutations
//     })
//   }
// }
import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  INCREMENT (state) {
    state.count++
  }
}

export default new Vuex.Store({
  state,
  mutations
})
