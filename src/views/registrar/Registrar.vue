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
              <input type="password" name="senha" placeholder="Repita a senha" v-model="confirmation_password">
                <div class="error_input" v-if="$v.confirmation_password.$error">
                      <ul>
                          <li>As senhas não coincidem</li>
                      </ul>
                </div>      
                <span>Sua data de nascimento</span>
                <input type="date" v-model="date">
                <div class="error_input" v-if="$v.date.$error">
                      <ul>
                          <li>Por favor preencha esse campo</li>
                      </ul>
                </div>
                  <input type="text" placeholder="Insira seu @" class="user_id" v-model="user_id" @change="lowerCase" maxlength="10">
                  <div class="error_input" v-if="$v.user_id.$error">
                      <ul>
                          <li>Campo Obrigatório</li>
                          <li>Máximo de 10 caracteres</li>
                      </ul>
                </div>
                <button class="btn button" @click.prevent="validarUsuario">Criar conta</button>
                <router-link class="btn button" to="/">Já possui uma conta? Logar</router-link>
                </form>
      </div>
  </section>
</template>

<script>
import { required , email , minLength , maxLength , sameAs} from 'vuelidate/lib/validators'
import { mapFields } from "@/helpers.js"

export default {
  data(){
    return{
      confirmation_password:""
    }
  },
  computed:{
        ...mapFields({
            fields:["id","name","email","password","date","user_id"],
            base:"user",
            mutation:"UPDATE_USER"
        })
    },
     validations:{
      name: { required },
      email: { required , email },
      password: { required , minLength:minLength(6)},
      date:{ required }, 
      confirmation_password:{
      sameAs: sameAs('password')
      },
      user_id: { required , maxLength: maxLength(10) }
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
        },
        lowerCase(){
          
        }
    }
}
</script>

<style scoped>

@media(max-width:400px){
  .form{
    padding: 15px;
    margin: 5px;
  }
}

</style>