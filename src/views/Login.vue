<template>
  <section class="container_login">
      <div class="login">
        <h2 class="title">Login</h2>
            <form>
                <input type="text" placeholder="Email" v-model="email">
                <input type="password" placeholder="Password" v-model="password">
                <button class="btn">Entrar</button>
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
            email:"",
            password:""
        }
    }
}
</script>

<style scoped>
    .container_login{
        width: 100vw;
        height: 100vh;
        background: darkslategray;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login{
        background: #fff;
        padding: 30px 40px;
        border-radius: 5px;
    }

    .esqueceu{
        text-align: center;
        cursor: pointer;
    }

</style>