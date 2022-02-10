<template>
  <section class="container_login">
      <div class="login">
            <h2 class="title">Login</h2>
            <form>
                <input type="text" placeholder="Email" v-model="login.email">
                <input type="password" placeholder="Senha" v-model="login.password">
                <button class="btn" @click.prevent="entrar">Entrar</button>
                <p class="esqueceu">Esqueceu a senha?</p>
                <router-link class="btn" to="/registrar">Novo? Criar Conta</router-link>  
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
            this.$router.push({ name:"usuario" })
        }
    }
}
</script>

<style scoped>


    .container_login{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: darkslategray;
    }

    .esqueceu{
        text-align: center;
        cursor: pointer;
    }

    .login{
        padding: 40px;
        box-shadow: 4px 4px 8px rgba(30, 60, 90, 0.4);
        border-radius: 5px;
    }

</style>