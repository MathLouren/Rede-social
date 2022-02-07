<template>
  <section class="container_login">
      <div class="login">
        <h2>Login</h2>
            <form>
                <input type="text" placeholder="Email" v-model="email">
                <input type="password" placeholder="Password" v-model="password">
                <button class="btn">Entrar</button>
                <p class="esqueceu">Esqueceu a senha?</p>
                <router-link class="btn criar" to="/registrar">Novo? Criar Conta</router-link>
                
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
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h2{
        text-align: center;
        margin-bottom: 30px;
        font-size: 2rem;
    }

    .login{
        background: #fff;
        padding: 30px 25px;
        border-radius: 5px;
        box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.9);
    }

    input{
        padding: 10px 15px;
        outline: none;
        padding: 10px;
        border-radius: 5px;
        width: 400px;
        margin: 15px 0;
        border: 1px solid darkslategray;
        font-size: 0.9rem;
    }
    input::placeholder{
        font-size: 1rem;
    } 

    .esqueceu{
        text-align: center;
        margin: 20px 0 0 0;
        cursor: pointer;
    }

    .criar{
        margin: 20px 0 0 0;
        width: 100%;
        text-align: center;
    }
</style>