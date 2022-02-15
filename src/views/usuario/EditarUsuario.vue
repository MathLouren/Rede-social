<template>
  <transition name="modal">
    <section class="container_infos">
      <div class="form">
            <nav>
              <h2>Editar Usuário</h2>
                <form>
                  <label for="name">Nome</label>
                  <div class="input_editar">
                    <input type="text" v-model="name" name="name">
                    <span>EDITAR</span>
                  </div>
                  <label for="name">Email</label>
                  <div class="input_editar">
                    <input type="email" v-model="email" name="email" class="input_editar">
                    <span>EDITAR</span>
                  </div>
                  <label>Senha</label>
                 <div class="input_editar">
                    <input type="password" v-model="password" class="input_editar">
                    <span>EDITAR</span>
                 </div>
                </form>
                  <div>
                    <button class="btn editar" @click.prevent="atualizarUsuario">Atualizar Dados</button>
                  </div>
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
        this.$store.dispatch("getUser")
        this.$router.push({name: "usuario"})
      }).catch(erro =>{
        console.log(erro)
      })
    },
    senhaCheck(){
      if(this.senhaAtual === this.$store.state.user.password){
        this.atualizarUsuario();
      }else{
        console.log('senha errada')
      }
    },
  },
  watch:{
    senhaAtual(){
      this.senhaCheck()
    }
  }
}
</script>

<style scoped>

  .container_infos{
    width: 100%;
    max-width: 750px;
    display: flex;
    justify-content: center;
  }

  form{
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 100%;
    max-width: 700px;
  }

  label{
    font-size: 1.2rem;
    margin: 5px 0;
  }

  .input_editar{
    display: flex;
    align-items: center;
  }

  .input_editar span{
    cursor: pointer;
    margin-left: -70px;
    padding: 15px 5px;
    color: rgb(88, 88, 88);
  }

  .input_editar input{
    padding-right: 90px;
  }

</style>