import Vue from 'vue'
import Vuex from 'vuex'
import { api } from "@/services.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login:false,
    user:{
      id:"",
      nome:"",
      email:"",
      password:""
    }
  },
  mutations: {
    UPDATE_LOGIN(state, payload){
      state.login = payload;
    },
    UPDATE_USER(state, payload){
      state.user = payload;
    }
  },
  actions: {
    getUser(context,payload){
      api.get(`/users/${payload}`).then((r)=>{
        context.commit("UPDATE_USER", r.data)
        context.commit("UPDATE_LOGIN", true)
      })
    }
  },
  modules: {
  }
})
