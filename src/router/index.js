import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Registrar from '../views/Registrar.vue'
import Usuario from '../views/usuario/Usuario.vue'


Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name:"Login",
      component: Login
    },
    {
      path: "/registrar",
      name:"registrar",
      component: Registrar
    },
    {
      path: "/usuario",
      name:"usuario",
      component: Usuario
    },
  ]
})

export default router
