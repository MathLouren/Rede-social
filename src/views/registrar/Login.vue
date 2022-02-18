<template>
  <section class="container_form">
      <div class="form">
            <h2 class="title">Login</h2>
            <form>
                <input type="text" placeholder="Email" v-model="email" @change="$v.email.$touch()">
                <transition name="modal">
                    <div class="error_input" v-if="$v.email.$error">
                        <ul>
                            <li>Este campo é requerido</li>
                            <li>Email inválido</li>
                        </ul>
                    </div>
                </transition>
                <input type="password" placeholder="Senha" v-model="password" @change="$v.password.$touch()">
                <transition name="modal">
                    <div class="error_input" v-if="$v.password.$error">
                        <ul>
                            <li>Este campo é requerido</li>
                            <li>Contém no minimo 6 caracteres</li>
                        </ul>
                    </div>
                </transition>
                <button class="btn"  @click.prevent="$v.$touch()">Entrar</button>
                <p class="esqueceu">Esqueceu a senha?</p>
                <router-link class="btn" to="/registrar">Novo? Criar Conta</router-link>  
            </form>
      </div>
  </section>
</template>

<script>
import { required, email , minLength } from 'vuelidate/lib/validators'

export default {
    data(){
        return{
           
                email:"",
                password:""
            
        }
    },
    validations:{
        email: { required , email , length },
        password: { required , minLength: minLength(5) }
    },
    methods:{
        entrar(){
            this.$store.dispatch("getUser", this.email)
            this.$router.push({ name:"perfil" })
        }
    }
}
</script>

<style scoped>

    .esqueceu{
        text-align: center;
        cursor: pointer;
        margin: 5px 0;
    }

    .error_input {
        background: darkslategray;
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        z-index: 20000;
        position: relative;
    }

    .error_input::before{
        content: '';
        display: block;
        position: absolute;
        top: -10px;
        width: 0px;
        height: 0px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid darkslategray;
    }

    .error_input li{
        font-family: 'Arial';
        padding: 3px 0;
    }

</style>