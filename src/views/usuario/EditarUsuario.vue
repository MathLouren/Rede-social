<template>
  <transition name="modal">
    <section class="container_infos">
      <Registrar>
        <slot>
          <div class="password">
            <input type="password" v-model="password">
            <span @click="mudarSenha = true">EDITAR</span>
            <div class="passwordModal" v-if="mudarSenha">
              <div class="container_password_change">
                  <h2>Mudar senha</h2>
                <div class="passwordChange">
                  <input type="password" placeholder="Senha atual">
                  <img src="./imgs/eye-off.svg" alt="" @click="passwordView">
                </div>
                <div class="passwordChange">
                  <input type="password" placeholder="Senha atual">
                  <img src="./imgs/eye-off.svg" alt="" @click="passwordView">
                </div>
                <div class="passwordChange">
                  <input type="password" placeholder="Senha atual">
                  <img src="./imgs/eye-off.svg" alt="" @click="passwordView">
                </div>
                <button class="btn">Mudar senha</button>
              </div>
            </div>
            
          </div>
          <button class="btn button" @click.prevent="atualizarUsuario">Editar conta</button>
        </slot>
      </Registrar>
    </section>
  </transition>
</template>

<script>
import { api } from "@/services.js"
import { mapFields } from "@/helpers.js"
import Registrar from "@/views/registrar/Registrar.vue"

export default {
  name:"UsuarioEditar",
  components:{
    Registrar
  },
  data(){
    return{
      senhaAtual:"",
      mudarNome:false,
      mudarEmail:false,
      mudarSenha:false
    }
  },
   computed:{
        ...mapFields({
            fields:["id","name","email","password","user_id"],
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
        this.mudarEmail = false,
        this.mudarSenha = true
      }
    },
  },
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

  .password{
    display: flex;
    align-items: center;
  }
  .password span{
    cursor: pointer;
    margin-left: -65px;
  }

  .passwordModal{
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.9);
  }

  .container_password_change{
    padding: 20px;
    background: #fff;
    width: 500px;
    max-width: 450px;
  }

  .passwordChange{
    display: flex;
    align-items: center;
  }

  .passwordChange img{
    margin-left: -50px;
    cursor: pointer;
  }

</style>