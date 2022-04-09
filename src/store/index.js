import Vue from "vue";
import Vuex from "vuex";
import CartModule from './cart.module.js';
import UserModule from './user.module.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: { },
  mutations: { },
  actions: { },
  modules: {
    UserModule,
    CartModule

  },
});
