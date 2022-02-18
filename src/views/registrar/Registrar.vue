<template>
  <section class="container_form">
      <div class="form">
            <h2 class="title">Registrar</h2>
            <form>
            <input type="text" name="nome" placeholder="Nome" v-model="name">
              <div class="error_input" v-if="$v.email.$error">
                  <ul>
                      <li>Este é um campo obrigatório</li>
                  </ul>
              </div>
        <input type="text" name="email" placeholder="Email" v-model="email" >
              <div class="error_input" v-if="$v.email.$error">
                  <ul>
                      <li>Email inválido</li>
                  </ul>
              </div>
        <input type="password" name="senha" placeholder="Senha" v-model="password">
              <div class="error_input" v-if="$v.email.$error">
                    <ul>
                        <li>Senha precisa ter no minimo 7 caracteres</li>
                    </ul>
              </div>
        <input type="password" name="senha" placeholder="Senha" v-model="confirmation_password">
              <div class="error_input" v-if="$v.confirmation_password.$error">
                    <ul>
                        <li>As senhas não coincidem</li>
                    </ul>
              </div>      
            <span>Sua data de nascimento</span>
            <input type="date">
            <button class="btn button" @click.prevent="validarUsuario">Criar conta</button>
            <router-link class="btn button" to="/">Já  uma conta? Logar</router-link>
            </form>
      </div>
  </section>
</template>

<script>
import { required , email , minLength , sameAs} from 'vuelidate/lib/validators'
import { mapFields } from "@/helpers.js"

export default {
  data(){
    return{
      confirmation_password:""
    }
  },
  computed:{
        ...mapFields({
            fields:["id","name","email","password"],
            base:"user",
            mutation:"UPDATE_USER"
        })
    },
     validations:{
      name: { required },
      email: { required , email },
      password: { required , minLength:minLength(6)}, 
      confirmation_password:{
      sameAs: sameAs('password')
      }
  },
    methods:{
      validarUsuario(){
        if (!this.$v.$invalid){
               this.criarUsuario();
            }else{
                this.$v.$touch();
            }
      },
        async criarUsuario(){
           try{
            await this.$store.commit("UPDATE_DADOS_USER", true)
            await this.$store.dispatch("criarUsuario", this.$store.state.user);
            await this.$store.dispatch("getUsuario", this.$store.state.user.email);
            this.$router.push({ name: "perfil" });
           } catch(error){
               console.log(error)
           }
        }
    }
}
</script>

<style>

</style>