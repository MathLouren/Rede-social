import Vue from 'vue'
import Vuex from 'vuex'
import { api } from "@/services.js"

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
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
      state.user = Object.assign(state.user, payload);
    }
  },
  actions: {
    getUser(context,payload){
      return api.get(`/users/${payload}`).then((r)=>{
        context.commit("UPDATE_USER", r.data)
        context.commit("UPDATE_LOGIN", true)
      })
    },
    criarUsuario(context, payload){
      context.commit("UPDATE_USER",{id:payload.email})
      api.post('/users',payload)
    }
  },
  modules: {
  }
})
