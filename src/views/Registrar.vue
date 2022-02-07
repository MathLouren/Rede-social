<template>
  <section class="container_resgister">
      <div class="resgister">
          <h2>Registrar</h2>
          <form>
              <input type="text" name="nome" placeholder="Nome" v-model="nome">
              <input type="text" name="email" placeholder="Email" v-model="email">
              <input type="password" name="senha" placeholder="Senha" v-model="senha">
              <button class="btn button">Criar conta</button>
              <router-link class="btn button" to="/login">Já possui uma conta? Logar</router-link>
          </form>
      </div>
  </section>
</template>

<script>
export default {
    name:"Resgistrar",
    data(){
        return{
            nome:"",
            email:"",
            senha:"",
        }
    }
}
</script>

<style scoped>

.container_resgister{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
}

.resgister{
    background: #fff;
    padding: 20px 40px;
    border-radius: 5px;
}

h2{
    text-align: center;
    font-size: 2.2rem;
    margin: 10px 0 30px 0;
    letter-spacing: 0.1rem;
}

form{
    margin: 20px 0;
}

label{
    font-size: 1.2rem;
}

input{
    padding: 12px 10px;
    margin: 10px 0;
    outline: none;
    width: 450px;
    border: 1px solid darkslategray;
    border-radius: 5px;
    font-size: 1rem;
}

.button{
    display: block;
    margin: 30px auto;
    text-align: center;
}

</style>