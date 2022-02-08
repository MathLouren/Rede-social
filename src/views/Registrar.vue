<template>
  <section class="container_resgister">
      <div class="resgister">
          <h2 class="title">Registrar</h2>
          <form>
              <input type="text" name="nome" placeholder="Nome" v-model="nome">
              <input type="text" name="email" placeholder="Email" v-model="email">
              <input type="password" name="senha" placeholder="Senha" v-model="senha">
              <button class="btn button">Criar conta</button>
              <router-link class="btn button" to="/">Já possui uma conta? Logar</router-link>
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
    background: darkslategray;
    display: flex;
    justify-content: center;
    align-items: center;
}

.resgister{
    background: #fff;
    padding: 20px 40px;
    border-radius: 5px;
}

input{
    display: block;
    width: 400px;
}

.button{
    display: block;
}

</style>