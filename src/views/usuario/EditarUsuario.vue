<template>
  <transition name="modal">
    <section class="container_infos">
      <div class="form">
            <nav>
              <h2>Editar Usuário</h2>
              <UsuarioForm />
              <div>
                <button class="btn editar" @click.prevent="atualizarUsuario">Editar Usuario</button>
              </div>
            </nav>
        </div>
    </section>
  </transition>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue"
import { api } from "@/services.js"

export default {
  name:"UsuarioEditar",
  components:{
    UsuarioForm
  },
  methods:{
    atualizarUsuario(){
      api.put(`/users/${this.$store.state.user.id}`, this.$store.state.user).then(()=>{
        this.$store.dispatch("getUsuario")
        this.$router.push({name: "usuario"})
      }).catch(erro =>{
        console.log(erro)
      })
    }
  }
}
</script>

<style scoped>

  .container_infos{
    margin-top: 20px;
  }

  h2{
    text-align: center;
  }
</style>