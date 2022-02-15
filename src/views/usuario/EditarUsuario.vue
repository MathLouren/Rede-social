<template>
  <transition name="modal">
    <section class="container_infos">
      <div class="form">
            <nav>
              <h2>Editar Usuário</h2>
                <form>
                  <label for="name">Nome</label>
                  <div>
                    <div class="input_editar">
                      <input type="text" v-model="name" name="name">
                      <span @click="mudarNome = true">EDITAR</span>
                    </div>
                    <transition name="modal">
                      <div class="mudar_container" v-if="mudarNome" @click="fecharModal">
                      <div class="modal_change">
                        <label for="mudarNome">Editar Nome</label>
                        <input type="text" v-model="name" name="mudarNome" placeholder="Novo Nome">
                        <button class="btn" @click.prevent="atualizarUsuario" @click="fecharModal">Mudar Nome</button>
                      </div>
                    </div>
                    </transition>
                  </div>
                  <label for="name">Email</label>
                  <div class="input_editar">
                    <input type="email" v-model="email" name="email" class="input_editar">
                    <span @click="mudarEmail = true">EDITAR</span>
                  </div>
                     <transition name="modal">
                        <div class="mudar_container" v-if="mudarEmail" @click="fecharModal">
                          <div class="modal_change">
                            <label for="mudarEmail">Editar email</label>
                            <input type="text" v-model="email" name="mudarEmail" placeholder="Novo Email">
                            <button class="btn" @click.prevent="atualizarUsuario" @click="fecharModal">Mudar Nome</button>
                          </div>
                        </div>
                    </transition>
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
  components:{
  },
  data(){
    return{
      senhaAtual:"",
      mudarNome:false,
      mudarEmail:false
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
    fecharModal({target, currentTarget}){
      if(target === currentTarget){
        this.mudarNome = false,
        this.mudarEmail = false
      }
    }
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
    max-width: 950px;
    display: flex;
    justify-content: center;
  }

  form{
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 100%;
    height: 100%;
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

  .mudar_container{
    color: #000;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.9);
  }

  .modal_change{
    width: 100%;
    max-width: 500px;
    padding: 10px 20px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
  }
  .modal_change input{
    max-height: 50px;
    margin: 10px 20px;
  }
  .modal_change label{
    font-size: 1.5rem;
  }

</style>