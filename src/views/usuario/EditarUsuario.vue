<template>
  <transition name="modal">
    <section class="usuario">
            <nav class="user_info">
              <h2>Editar Usuário</h2>
              <UsuarioForm />
              <div>
                <button class="btn editar" @click.prevent="atualizarUsuario">Editar Usuario</button>
              </div>
            </nav>
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

  .usuario{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: darkslategray;
    color: darkslategray;
  }

  .user_info{
    display: block;
    margin-top: 20px;
    background-color: #fff;
    padding: 20px 50px;
    border-radius: 5px;
  }

  ul{
    display: flex;
    flex-direction: column;
  }

  li{
    display: inline-block;
    margin: 10px 0;
    background: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
  }

  span{
    font-size: 1.2rem;
  }
  
  .editar{
    background-color: darkslategray;
    color: #fff;
  }

  .user_info h2{
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
  }

</style>