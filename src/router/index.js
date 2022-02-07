import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Registrar from '../views/Registrar.vue'


Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/registrar",
      component: Registrar
    },
  ]
})

export default router
