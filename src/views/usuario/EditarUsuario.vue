<template>
  <transition name="modal">
    <section class="container_infos">
      <div class="form">
            <nav>
              <h2>Editar Usuário</h2>
                <form>
                  <div>
                    <label for="name">Nome</label>
                    <input type="text" v-model="name" name="name">
                    <div>
                      <button class="btn editar" @click.prevent="atualizarUsuario">Mudar Nome</button>
                    </div>
                  </div>
                  <div>
                    <label for="name">Email</label>
                    <input type="email" v-model="email" name="email">
                    <div>
                      <button class="btn editar" @click.prevent="atualizarUsuario">Mudar email</button>
                    </div>
                  </div>
                 <div>
                    <label for="password">Senha Atual</label>
                    <input type="password" name="password" v-model="senhaAtual">
                 </div>
                  <div>
                    <label for="password">Nova Senha</label>
                    <input type="password" name="password">
                    <div>
                      <button class="btn editar" @click.prevent="senhaCheck">Mudar senha</button>
                    </div>
                  </div>
                </form>
            </nav>
        </div>
    </section>
  </transition>
</template>

<script>
import { api } from "@/services.js"
import { mapFields } from "@/helpers.js"

export default {
  name:"UsuarioEditar",
  data(){
    return{
      senhaAtual:"",
    }
  },
   computed:{
        ...mapFields({
            fields:["id","name","email","password"],
            base:"user",
            mutation:"UPDATE_USER"
        })
  },
  methods:{
    atualizarUsuario(){
      api.put(`/users/${this.$store.state.user.id}`, this.$store.state.user).then(()=>{
        this.$store.dispatch("getUsuario")
        this.$router.push({name: "usuario"})
      }).catch(erro =>{
        console.log(erro)
      })
    },
    senhaCheck(){
      if(this.senhaAtual === this.$store.state.user.password ){
        this.atualizarUsuario();
      }else{
        console.log('senha errada')
      }
    },
  }
}
</script>

<style scoped>

  .container_infos{
  width: 450px;
  }

  form{
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }

  label{
    font-size: 1.2rem;
    margin: 5px 0;
  }

</style>