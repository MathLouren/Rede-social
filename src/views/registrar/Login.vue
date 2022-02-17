<template>
  <section class="container_form">
      <div class="form">
            <h2 class="title">Login</h2>
            <form>
                <input type="text" placeholder="Email" v-model="login.email">
                <input type="password" placeholder="Senha" v-model="login.password">
                <button class="btn" @click.prevent="entrar">Entrar</button>
                <p class="esqueceu">Esqueceu a senha?</p>
                <router-link class="btn" to="/registrar/userinfo">Novo? Criar Conta</router-link>  
            </form>
      </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            login:{
                email:"",
                password:""
            }
        }
    },
    methods:{
        entrar(){
            this.$store.dispatch("getUser", this.login.email)
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

</style>