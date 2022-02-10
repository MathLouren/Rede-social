import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Registrar from '../views/Registrar.vue'
import Usuario from '../views/usuario/Usuario.vue'
import UsuarioPerfil from '../views/usuario/UsuarioPerfil.vue'
import EditarUsuario from '../views/usuario/EditarUsuario.vue'
import Notifications from '../views/usuario/Notifications.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "",
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
      component: Usuario,
      children:[
        {
          path:"profile",
          name:"perfil",
          component:UsuarioPerfil
        },
        {
          path:"edit_user",
          name:"usuario",
          component:EditarUsuario
        },
        {
          path:"notifications",
          name:"notifications",
          component:Notifications
        }
      ]
    },
  ]
})

export default router
