import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import './css/normalize.css';
import './css/reset.css';
import './css/main.css'

Vue.config.productionTip = false;

Vue.use(Vuex)

const moduleA = {
  namespaced:true,
  state: {
    data: 'this is a'
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data
    }
  },
  actions: {
    setData({
      commit
    }, data) {
      commit("SET_DATA", data)
    }
  }
}

const moduleB = {
  namespaced:true,
  state: {
    data: 'this is b'
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data
    }
  },
  actions: {
    setData({
      commit
    }, data) {
      commit("SET_DATA", data)
    } 
  }
}

const store = new Vuex.Store({
  modules:{
    a : moduleA,
    b : moduleB
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");