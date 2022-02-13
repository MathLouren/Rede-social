<template>
  <transition name="modal">
    <div class="container_configs">
      <h3>Configurações gerais da conta</h3>  
      <div class="container_infos">
        <span>NOME:</span><p>Matheus Lourenço</p>
      </div>
      <div class="container_infos">
        <span>NOME:</span><p>Matheus Lourenço</p>
      </div>
      <div class="container_infos">
        <span>NOME:</span><p>Matheus Lourenço</p>
      </div>
      <div class="container_infos">
        <span>NOME:</span><p>Matheus Lourenço</p>
      </div>
    </div>    
  </transition>
</template>

<script>
import { api } from "@/services.js"

export default {
  name:"UsuarioEditar",
  components:{

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
  h3{
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    color: darkslategray;
    padding: 20px 0;
  }

  .container_configs{
    width: 100%;
    margin-left: 40px;
  }

  .container_infos{
    display: flex;
    align-items: center;
    gap: 20px;
    border-top: 1px solid rgb(170, 170, 170);
    padding: 10px;
    cursor: pointer;
  }
  .container_infos:hover{
    background-color: aliceblue;
  }
  .container_infos:last-child{
    border-bottom: 1px solid rgb(170, 170, 170);
  }

  .container_infos span{
    font-size: 1.2rem;
  }

  .container_infos p{
    color: rgb(78, 78, 78);
    font-size: 1.2rem;
  }
</style>